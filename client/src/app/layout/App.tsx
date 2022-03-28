import { Container, CssBaseline, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Catalog from '../../features/catalog/catalog';

import { Product } from '../models/product';
import Header from './header';




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
      <>
        <CssBaseline/>
        <Header/>
        <Container>
        <Catalog products = {products} addProduct={addProduct}/>
        </Container>
      </>
  );
}

export default App;
