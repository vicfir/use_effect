// Exo 7 
// - Créer un component ProductList qui va afficher des produits venant d'un .JSON. Utiliser useState pour l'affichage des produits et useEffect pour charger les produits au moment du montage. Les données sont charger qu'une fois.

import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./data/pList.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p>{product.name}</p>
            <p>{product.price} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
