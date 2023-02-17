// Exo 3
// - Créer un component ProgressBar qui contient une bar de progressuib se remplit en fonction du temps. La barre doit commencer vide et se remplir jusqu'à 100% en 10 secondes. Utilisez le Hook useEffect pour mettre à jour la barre de progression toutes les secondes et useState pour stocker la valeur actuelle de remplissage
import React from 'react';
import { useState , useEffect } from 'react';


export const ProgressBar = () => {
    const [sec, setsec] = useState(0);


    useEffect(()=>{
        //update  
        let incrementer = setInterval(()=>{
          setsec(sec+1);
        },1000)

        //unmount
        return ()=>{clearInterval(incrementer);}
    },[sec])

    return (
        <div>
            <progress max="10" value={sec}></progress>
        </div>
    )
}
