import React, { useState, useEffect } from 'react';



function App() {

  const [products, setProducts] = useState([
    {name:"mouse", price:14.99},
    {name:"laptop", price:749.99}
  ]);

  useEffect(() =>{
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then( data => setProducts(data))
  }, []);
  //using an empty array as our second argument means that this useEffect will only be called once, other wise it will run everytime the component rerenders

  function addProduct(){
    setProducts([...products, {name: 'Mouse Pad', price: 9.99}])
  }

  return (
      <div>
        <ul>
          {products.map((item) =>(
            <li key={item.name}>{item.name} + {item.price}</li>
          ))}
        </ul>
        <button onClick={addProduct}>add item</button>
      </div>
  );
}

export default App;
