import { useState } from "react";
import Header from "./components/Header";
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
