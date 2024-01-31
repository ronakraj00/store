import { useState } from "react";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Header from "./components/header";
import { Button } from "./components/ui/button";
import { Outlet } from "react-router-dom";

function App() {
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState("jewelery");

    let cartLength = cart.length;

    return (
        <>
            <Header cartLength={cartLength} />
            {<Outlet context={[cart,setCart]}/>}
        </>
    );
}

export default App;
