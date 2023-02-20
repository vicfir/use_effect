// Exo 6
// - Créer un component AnimatedButton qui contient un boutom. Lorsqu'on clique sur le bouton il va faire apparaitre un carré qui va clignoter toutes les secondes. Lorsqu'on rappuie dessus le carré disparait. Utiliser useState pour gèrer l'état d'affichage du carré et useEffect pour lancer/arreter l'animation
import React, { useState, useEffect } from "react";

const AnimatedButton = () => {
  const [showSquare, setShowSquare] = useState(false);

  useEffect(() => {
    let intervalId;

    if (showSquare) {
      // Lancer l'animation si showSquare est true
      intervalId = setInterval(() => {
        setSquareVisible((prevVisible) => !prevVisible);
      }, 1000);
    }

    // Nettoyer l'intervalle lorsqu'on quitte le composant
    return () => {
      clearInterval(intervalId);
    };
  }, [showSquare]);

  const [squareVisible, setSquareVisible] = useState(false);

  const handleClick = () => {
    setShowSquare((prevShowSquare) => !prevShowSquare);
    setSquareVisible(true);
  };

  return (
    <button onClick={handleClick}>
      Click me!
      {showSquare && (
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            visibility: squareVisible ? "visible" : "hidden",
            animation: squareVisible
              ? "blink 1s linear infinite"
              : "none",
          }}
        />
      )}
    </button>
  );
};

export default AnimatedButton;

