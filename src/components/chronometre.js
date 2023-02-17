import React, { useEffect, useState } from 'react'

// Exo 2
// - Créer un component Chronomètre qui, grace au useEffect, va afficher un chronomètre qui s'incrémtente automatiquement toute les secondes. Le chronomètre doit etre formaté correctement, c'est à dire que par exemple quand on arrive à 61 secondes, le chronomètre doit afficher 1:01.

export const Chronometre = () => {
    const [sec, setsec] = useState(0);
    const [min, setmin] = useState(0);

    useEffect(()=>{
        //update  
        let incrementer = setInterval(()=>{
          setsec(sec+1);
        },1000)

        if(sec==60){
            setsec(0);
            setmin(min+1);
        }
        //unmount
        return ()=>{clearInterval(incrementer);}
    },[sec])

    return (
        <div>
            <p>{min}:{sec}</p>

        </div>
    )
}
