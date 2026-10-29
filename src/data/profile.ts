export const PROFILE = {
  name: "Mateusz Gruntkowski",
  role: "Software developer · Poznań, Poland",
  intro:
    "I'm a software developer drawn to both **software engineering** and **artificial intelligence**. I pick up new technologies quickly and enjoy turning ideas into well-built, reliable products, regardless of the stack.",
  facts: [
    {
      key: "studying",
      value:
        "MSc Computer Science and Econometrics, Poznań University of Economics and Business",
    },
    { key: "working", value: "ERP developer intern at **IT.integro**" },
    {
      key: "open_to",
      value: "Junior Software Engineer, AI / ML Engineer, Full Stack",
      marker: true,
    },
  ] as { key: string; value: string; marker?: boolean }[],
  // Wyróżniki pokazane w hero jako trzy liczby.
  highlights: [
    { value: "2nd", label: "national thesis prize" },
    { value: "Top 5%", label: "rector’s scholarship" },
    { value: "4.63", label: "BSc GPA" },
  ],
  // Zdjęcie profilowe: wpisz tylko nazwę pliku z src/assets/ (np. 'me.jpg') albo adres zaczynający się od '/' lub 'http'
  // (np. plik z folderu public: '/me.jpg'). Puste = pokazuje się miejsce na zdjęcie. Układ się nie zmienia (4:5, kadr 'cover').
  photo: "src/assets/profile.png",
  // CV do pobrania: wrzuć plik PDF do folderu public/ (np. public/Mateusz-Gruntkowski-CV.pdf) i wpisz tu '/Mateusz-Gruntkowski-CV.pdf'.
  cvUrl: "/Mateusz-Gruntkowski-CV.pdf",
  year: 2026,
};

// Tylko prawdziwe adresy. url: null = jeszcze nie dodano (strona pokazuje nieaktywne pole).
// Dla e-maila wpisz cały adres, np. 'mailto:ty@example.com'.
export const LINKS = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/MateuszGruntkowski",
    text: "MateuszGruntkowski",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mateusz-gruntkowski-26b1b4254/",
    text: "mateusz-gruntkowski",
  },
  {
    id: "email",
    label: "E-mail",
    url: "mailto:mat.gruntkowski@gmail.com" as string | null,
    text: "mat.gruntkowski@gmail.com",
  },
] as const;

export const NAV = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];
