
import { Agent } from "https";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from '../../app/api/agent'
import axios from "axios";
import LoadingComponent from "../../app/layout/loadingComponent";




export default function Catalog(){

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);;

    useEffect(() =>{
        agent.Catalog.list()
            .then(products => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        
    }, [])
    //using an empty array as our second argument means that this useEffect will only be called once, other wise it will run everytime the component rerenders
  
    if (loading) return <LoadingComponent message='Loading products...' />

    
return(
    <>
        <ProductList products={products} />
       
    </>
)

};