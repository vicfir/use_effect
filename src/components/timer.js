//  Exo 4

// - Crér un component Timer qui va afficher un compte à rebours. Utiliser le useEffect pour gèrer les secondes à retirer et useState pour gèrer l'affichage du compte à rebours.

import React from 'react'
import { useState, useEffect } from 'react';

export const Timer = () => {
    const [sec, setsec] = useState(20);

    useEffect(()=>{
        //update  
       
        let incrementer = setInterval(()=>{
            if (sec > 0) {
                setsec(sec-1);
            }
        },1000)
       

        //unmount
        return ()=>{clearInterval(incrementer);}
    },[sec])

    return (
        <div>
            <p>{sec}</p>
        </div>
    )
}
