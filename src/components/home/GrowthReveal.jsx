import { useEffect, useState } from "react";

export default function GrowthReveal() {
  const [struck, setStruck] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStruck(true), 700);
    const t2 = setTimeout(() => setRevealed(true), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <span className="growth-reveal">
      <span className={`growth-reveal-strike ${struck ? "is-struck" : ""}`}>
        Não sei
      </span>
      <span className={`growth-reveal-word ${revealed ? "is-visible" : ""}`}>
        ainda não sei
      </span>
    </span>
  );
}
