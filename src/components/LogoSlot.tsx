import { brandLogo } from '../data/logos'

const HINT = {
  university: 'university.svg',
  employer: 'employer.svg',
}

/** Logo uczelni / pracodawcy. Bez pliku pokazuje opisane pole; z plikiem – sam obraz. */
export function LogoSlot({ name, alt }: { name: 'university' | 'employer'; alt: string }) {
  const url = brandLogo(name)
  if (url) return <img className="logo-img" src={url} alt={alt} />
  return (
    <div className="logo-slot" role="img" aria-label={`${alt} (logo to be added)`}>
      <span className="mono">
        logo
        <br />
        {HINT[name]}
      </span>
    </div>
  )
}
