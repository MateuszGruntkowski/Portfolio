import { Fragment, type ReactNode } from 'react'

/** Tekst z **wyróżnieniami** → <strong class="em">. Wyróżniamy tylko kluczowe słowa i krótkie frazy. */
export function rich(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? (
      <strong key={i} className="em">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}
