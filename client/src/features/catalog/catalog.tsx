
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";




export default function Catalog(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() =>{
      fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then( data => setProducts(data))
    }, []);
    //using an empty array as our second argument means that this useEffect will only be called once, other wise it will run everytime the component rerenders
  

    
return(
    <>
        <ProductList products={products} />
       
    </>
)

};