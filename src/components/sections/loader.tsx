import React, { useState, useEffect } from "react";
import { ReactSVG } from 'react-svg';
import '../hero.css';
import { gsap } from "gsap";

export default function Loading({
  language = "en",
}: {
  language?: string;
}) {
  const [showFilledSvg, setShowFilledSvg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFilledSvg(true);
    }, 2500); // Wait for 2 seconds

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="h-[100vh] md:rotate-0 rotate-90 flex justify-center items-center">
      {!showFilledSvg && <ReactSVG src={'/antoy.svg'} className="animated-svg" />}
      {showFilledSvg && <ReactSVG src={'/antoyFill.svg'} className="animated-svg-filled" />}
    </div>
  );
}
