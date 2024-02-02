import { useEffect, useState } from "react";

function useAllProducts(limit = null) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${limit || ""}`)
            .then((res) => res.json())
            .then((json) => setProducts(json));
    },[limit]);
    return products;
}

function useProductsByCategory(category = null, limit = null) {
    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
    ];
    if (!categories.includes(category)) {
        category = null;
    }
    const [products, setProducts] = useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(
            `https://fakestoreapi.com/products/${
                category ? "category/" + category : ""
            }?limit=${limit || ""}`
        )
            .then((res) => {setLoading(false)
                return res.json()})
            .then((json) => setProducts(json));
    },[category,limit]);
    return [loading,products];
}

export { useAllProducts, useProductsByCategory };
