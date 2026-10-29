import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  title: string
  images: string[]
}

// Poziomy gest przeciągnięcia: onSwipe(1) = następne, onSwipe(-1) = poprzednie.
function useSwipe(onSwipe: (dir: 1 | -1) => void) {
  const start = useRef<{ x: number; y: number } | null>(null)
  return {
    onTouchStart: (e: TouchEvent) => {
      start.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    },
    onTouchEnd: (e: TouchEvent) => {
      if (!start.current) return
      const dx = e.changedTouches[0].clientX - start.current.x
      const dy = e.changedTouches[0].clientY - start.current.y
      start.current = null
      if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5) onSwipe(dx < 0 ? 1 : -1)
    },
  }
}

function ArrowButton({ dir, onClick }: { dir: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button type="button" className={`arrow arrow-${dir}`} aria-label={`${dir === 'prev' ? 'Previous' : 'Next'} image`} onClick={onClick}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={dir === 'prev' ? 'm15 5-7 7 7 7' : 'm9 5 7 7-7 7'} />
      </svg>
    </button>
  )
}

/** Okno w stylu przeglądarki z karuzelą zdjęć i powiększeniem (lightbox). */
export function ProjectWindow({ title, images }: Props) {
  const count = images.length
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const body = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(false)

  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count)
  const swipe = useSwipe(step)

  // Po zamknięciu lightboxa fokus wraca na aktualny slajd karuzeli.
  useEffect(() => {
    if (wasOpen.current && !open) body.current?.querySelector<HTMLElement>('.slide:not([inert])')?.focus()
    wasOpen.current = open
  }, [open])

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') step(-1)
    if (e.key === 'ArrowRight') step(1)
  }

  return (
    <div className="win">
      <div className="wbar">
        <span className="wdots" aria-hidden="true">
          <i className="wd" />
          <i className="wd" />
          <i className="wd" />
        </span>
        <span className="wt">{title}</span>
        <span className="wcount" aria-live="polite">
          {count > 1 && `${index + 1} / ${count}`}
        </span>
      </div>

      {count === 0 ? (
        <div className="wb" aria-hidden="true">
          <span className="mono">screenshot · 16:10</span>
        </div>
      ) : (
        <div
          ref={body}
          className="wb"
          role="group"
          aria-roledescription="carousel"
          aria-label={`${title} screenshots`}
          onKeyDown={count > 1 ? onKeyDown : undefined}
          {...swipe}
        >
          <div className="track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className="slide"
                inert={i !== index}
                aria-label={`Enlarge screenshot ${i + 1} of ${count}`}
                onClick={() => setOpen(true)}
              >
                <img src={src} alt={`${title} – screenshot ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} draggable={false} />
              </button>
            ))}
          </div>
          {count > 1 && (
            <>
              <ArrowButton dir="prev" onClick={() => step(-1)} />
              <ArrowButton dir="next" onClick={() => step(1)} />
            </>
          )}
        </div>
      )}

      {open && <Lightbox title={title} images={images} index={index} onStep={step} onClose={() => setOpen(false)} />}
    </div>
  )
}

interface LightboxProps extends Props {
  index: number
  onStep: (dir: 1 | -1) => void
  onClose: () => void
}

function Lightbox({ title, images, index, onStep, onClose }: LightboxProps) {
  const root = useRef<HTMLDivElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const many = images.length > 1
  const swipe = useSwipe(onStep)

  // Blokada przewijania strony i fokus na przycisku zamknięcia.
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  // Klawiatura: Escape, strzałki i pułapka fokusa (Tab krąży po przyciskach okna).
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && many) onStep(-1)
      else if (e.key === 'ArrowRight' && many) onStep(1)
      else if (e.key === 'Tab') {
        const buttons = root.current!.querySelectorAll('button')
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  return createPortal(
    <div
      ref={root}
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} – image viewer`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      {...swipe}
    >
      <button ref={closeButton} type="button" className="arrow lb-close" aria-label="Close" onClick={onClose}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      {many && <ArrowButton dir="prev" onClick={() => onStep(-1)} />}
      <img key={images[index]} className="lb-img" src={images[index]} alt={`${title} – screenshot ${index + 1}`} draggable={false} />
      <div className="lb-bar mono" aria-live="polite">
        <span>{title}</span>
        {many && (
          <span>
            {index + 1} / {images.length}
          </span>
        )}
      </div>
      {many && <ArrowButton dir="next" onClick={() => onStep(1)} />}
    </div>,
    document.body,
  )
}
