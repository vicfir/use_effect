// Exo 5
// - Crér un componment ToDoList qui contient une liste de taches qui auront chacunes un titre. Dans ce component se trouve également une bar de recherche qui va permettre de filtrer les taches. Utiliser useEffect pour mettre à jour la liste de taches en fonction de la recherche de l'utilisateur et useState pour stocker les taches et la valeur de recherche.

import React, { useState, useEffect } from 'react'

export const ToDoList = () => {
    const [listeTaches, setListeTaches] = useState([
        { id: 1, title: 'Preparer'},
        { id: 2, title: 'cuisiner'},
        { id: 3, title: 'manger'}
    ]);
    
    const [search, setSearch] = useState('');
    
    const [filtred, setFiltred] = useState(listeTaches);
    
    useEffect(()=> {
        const filter = listeTaches.filter((tache) => tache.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        setFiltred(filter);
    }, [listeTaches, search]);
    
    function searchChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div>
            <input 
                type="text" 
                value={search} 
                onChange={searchChange}
            />
            <ul>
                {filtred.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    )
}
