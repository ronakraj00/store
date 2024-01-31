import { useState } from "react";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Header from "./components/header";
import { Button } from "./components/ui/button";

function App() {

    const [cart,setCart]=useState([]);
    const [category,setCategory]=useState("jewelery");

    let cartLength=cart.length;

    return (
        <>
            <Header cartLength={cartLength}/>
            <Shop category={category} setCart={setCart}/>
        </>
    );
}

export default App;
