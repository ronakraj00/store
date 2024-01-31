import { useEffect, useState } from "react";

function useAllProducts(limit=null) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${limit||""}`)
            .then((res) => res.json())
            .then((json) => setProducts(json));
    });
    return products;
}

function useProductsByCategory(category=null,limit=null){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${("category/"+category)||""}?limit=${limit||""}`)
            .then(res=>res.json())
            .then(json=>setProducts(json));
    })
    return products;
}

export {useAllProducts,useProductsByCategory};

