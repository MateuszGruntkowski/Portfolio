// Logotypy ładowane z plików – wystarczy wrzucić plik, nic więcej nie trzeba zmieniać.
//
//  • technologie:  src/assets/logos/tech/<klucz>.svg|png|webp   (klucz = nazwa w src/data/techs.ts, np. sql, al, d365, nav)
//  • uczelnia:     src/assets/logos/university.svg|png|webp
//  • pracodawca:   src/assets/logos/employer.svg|png|webp
//
// Brak pliku = w tym miejscu pokazuje się puste, opisane pole na logo.
const files = import.meta.glob<string>('/src/assets/logos/**/*.{svg,png,webp,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const byName: Record<string, string> = {}
for (const [path, url] of Object.entries(files)) {
  byName[path.replace('/src/assets/logos/', '').replace(/\.[a-z]+$/, '')] = url
}

export const techLogo = (key: string) => byName[`tech/${key}`]
export const brandLogo = (name: 'university' | 'employer') => byName[name]
