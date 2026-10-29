import { useEffect, useState } from "react";
import { motion } from "motion/react";

const TEXT = "Hello, nice to see You!";
const START_DELAY = 100; // ms do pierwszego znaku
const HOLD = 300; // ms przytrzymania gotowego tekstu
const FADE = 0.4; // s zanikania

// Raz na pełne załadowanie strony: flaga modułu przeżywa re-rendery i nawigację po sekcjach.
let played = false;
const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Pełnoekranowe powitanie. Strona jest już zamontowana pod spodem, więc po zaniku od razu jest gotowa. */
export function Intro() {
  const [phase, setPhase] = useState<"typing" | "out" | "done">(() =>
    played || prefersReduced() ? "done" : "typing",
  );
  const [n, setN] = useState(0);

  // blokada przewijania tylko na czas intra
  useEffect(() => {
    if (phase === "done") return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
    };
  }, [phase === "done"]); // eslint-disable-line react-hooks/exhaustive-deps

  // pisanie (35–45 ms/znak) → przerwa → zanik
  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      i += 1;
      setN(i);
      t = setTimeout(
        i < TEXT.length ? step : () => setPhase("out"),
        i < TEXT.length ? 35 + Math.random() * 10 : HOLD,
      );
    };
    t = setTimeout(step, START_DELAY);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <motion.div
      className="intro"
      role="status"
      aria-label={TEXT}
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "out" ? 0 : 1 }}
      transition={{ duration: FADE, ease: "easeOut" }}
      onAnimationComplete={() => {
        if (phase === "out") {
          played = true;
          setPhase("done");
        }
      }}
    >
      <span className="intro-text" aria-hidden="true">
        {TEXT.slice(0, n)}
        {phase === "typing" && <span className="intro-cursor" />}
        <span style={{ visibility: "hidden" }}>{TEXT.slice(n)}</span>
      </span>
    </motion.div>
  );
}
