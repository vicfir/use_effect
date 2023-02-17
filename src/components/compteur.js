import { useState } from "react";
import React from 'react'

// Exo 1
// - Créer un component Compteur. Ce component doit avoir un compteur qu'on peut incrémenter au click d'un bouton. À chaque fois que le component est mis à jour, afficher dans la console "Le component a été mis à jour" en utilisant useEffect

export const Compteur = () => {

    const [comp, setComp] = useState(0);

    const Increment = () => {
        setComp(comp+1);
    }

    return (
        <div>
            <p>{comp}</p>
            <button onClick={Increment}>increment</button>
        </div>
    )
}
