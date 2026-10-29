# Portfolio – Mateusz Gruntkowski

Vite + React + TypeScript. Zwykły CSS (`src/index.css`), bez dodatkowych bibliotek UI.

```
npm install
npm run dev        # podgląd
npm run build      # typecheck + build
npm run lint
```

## Struktura

```
src/
  data/         dane: profile, projects.tsx, content, techs, icons
  components/   wielokrotnego użytku: Icon, TechList, Section, SocialLinks,
                ProjectCard, ProjectWindow (karuzela + lightbox)
  sections/     części strony: Header (nav + hero), Projects, Experience (+ Skills),
                Background (Education, Achievements), Footer
```

## Dodawanie zdjęć projektu

Wrzuć pliki do `src/assets/projects/<slug>/` (png, jpg, webp, avif, gif). Kolejność
w karuzeli = kolejność nazw plików (`01-home.png`, `02-profile.png`, …). Nic więcej
nie trzeba zmieniać. Slug projektu jest w `src/data/projects.tsx`.
Bez zdjęć projekt pokazuje placeholder; z jednym – bez strzałek i licznika.

## Dodawanie projektu / technologii

- Projekt: nowy obiekt w `PROJECTS` (`src/data/projects.tsx`) + folder na zdjęcia.
- Technologia: wpis w `TECHS` (`src/data/techs.ts`): etykieta, kolor, opcjonalna ikona
  (ścieżki ikon w `src/data/icons.ts`, simple-icons, CC0).
- LinkedIn / e-mail: uzupełnij `LINKS` w `src/data/profile.ts` – pola
  zamienią się z nieaktywnych w działające linki.


## Logotypy

Wszystkie logotypy to pliki – wrzucasz plik i gotowe, kod się nie zmienia (`src/data/logos.ts`).

- Uczelnia: `src/assets/logos/university.svg` (lub .png / .webp) – pokazuje się w kartach Education
- Pracodawca: `src/assets/logos/employer.svg` – pokazuje się w sekcji Experience
- Technologie (sekcja Skills): `src/assets/logos/tech/<klucz>.svg`, klucz = nazwa z `src/data/techs.ts`.
  Logo z biblioteki Devicon (MIT) są już dodane. **Brakuje:** `sql`, `al`, `d365`, `nav` – do czasu dodania pliku
  w tych miejscach jest puste pole z napisem „logo”.

Tło hero (ścieżki wychodzące z „układu”) to statyczny SVG `src/assets/hero-circuit.svg`; obudowa z wyprowadzeniami jest w CSS (`.chip`).

Wyróżnienia w tekście: w danych wystarczy otoczyć frazę `**tak**` (patrz `src/components/Rich.tsx`).
