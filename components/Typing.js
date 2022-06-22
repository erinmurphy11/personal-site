import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Typing() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Engineer.", "Student.", "ML Researcher.", "D1 Athlete at FSU."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 700,
      loop: true,
      loopCount: Infinity
      });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      {/* Element to display typing strings */}
      A <span ref={el}></span>
    </div>
  );
}
