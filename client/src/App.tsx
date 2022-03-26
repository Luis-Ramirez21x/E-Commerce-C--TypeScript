import React, { useState, useEffect } from 'react';
import { Product } from './product';



function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() =>{
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then( data => setProducts(data))
  }, []);
  //using an empty array as our second argument means that this useEffect will only be called once, other wise it will run everytime the component rerenders

  function addProduct(){
    setProducts([...products, {
    id: products.length+101,
    name: "white keyboard",
    description: "great keyboard", 
    price: 25.99,
    pictureUrl: "http://picsum.photos/200",
    brand: "logitech",
    type: "electronic",
    quantityInStock: 10
    }])
  }

  return (
      <div>
        <ul>
          {products.map((product) =>(
            <li key={product.id}>{product.name} + {product.price}</li>
          ))}
        </ul>
        <button onClick={addProduct}>add item</button>
      </div>
  );
}

export default App;
