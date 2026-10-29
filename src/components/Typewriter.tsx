import { useEffect, useState } from 'react'

const START_DELAY = 250 // ms przed pierwszym znakiem
const CURSOR_LINGER = 600 // ms, jak długo kursor zostaje po zakończeniu pisania

type Props = { text: string; className?: string; onDone?: () => void; instant?: boolean }

/** Pisze tekst znak po znaku (45–65 ms/znak) z migającym kursorem. Odpala się raz, przy zamontowaniu. */
export function Typewriter({ text, className, onDone, instant = false }: Props) {
  const [n, setN] = useState(instant ? text.length : 0)
  const [cursor, setCursor] = useState(!instant)

  useEffect(() => {
    if (instant) {
      onDone?.()
      return
    }
    let i = 0
    let t: ReturnType<typeof setTimeout>
    const step = () => {
      i += 1
      setN(i)
      if (i < text.length) t = setTimeout(step, 45 + Math.random() * 20)
      else {
        onDone?.()
        t = setTimeout(() => setCursor(false), CURSOR_LINGER)
      }
    }
    t = setTimeout(step, START_DELAY)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, instant])

  // Niewidoczna reszta tekstu rezerwuje miejsce, więc układ nie skacze podczas pisania.
  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">
        {text.slice(0, n)}
        {cursor && <span className="tw-cursor" />}
        <span style={{ visibility: 'hidden' }}>{text.slice(n)}</span>
      </span>
    </span>
  )
}
