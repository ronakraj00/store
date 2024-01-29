import { useEffect, useState } from "react";

function useCategories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((json) => {
                console.log(json, "json");
                setCategories(json);
            });
    },[]);
    return categories;
}

export default useCategories;
