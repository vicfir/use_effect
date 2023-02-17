import React, { useEffect, useState } from 'react'

// Exo 1
// - Créer un component Chronomètre qui, grace au useEffect, va afficher un chronomètre qui s'incrémtente automatiquement toute les secondes. Le chronomètre doit etre formaté correctement, c'est à dire que par exemple quand on arrive à 61 secondes, le chronomètre doit afficher 1:01.

export const Chronometre = () => {
    const [chrono, setChrono] = useState(0);
    useEffect(()=>{
        
    })

    return (
        <div>
            <h1>tets</h1>
        </div>
    )
}
