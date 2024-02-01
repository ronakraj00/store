import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link, useOutletContext } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import ShoppingImage from "../assets/images/shoppingImage.jpg";

function Cart() {
    const [cart, setCart] = useOutletContext();
    console.log("cart fro dfsajfal", cart);

    return cart.length ? (
        <main className="flex flex-col gap-3 justify-center items-center mb-64">
            <div className="text-xl font-mono">Your cart</div>
            {cart.map((item) => {
                return (
                    <Card
                        key={item.id}
                        className="w-max flex flex-wrap"
                    >
                        <div className="p-2">
                            <CardContent>
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-12 p-1"
                                />
                            </CardContent>
                            <CardTitle className="w-[20ch] my-2 line-clamp-1">
                                {item.title}
                            </CardTitle>
                            <CardDescription>
                                <p className="font-medium">
                                    ${item.price} X {item.quantity} =
                                    <span className="font-bold">
                                        {" "}
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </span>
                                </p>
                            </CardDescription>
                        </div>
                        <CardFooter className="flex flex-col justify-end gap-2 pb-2">
                            <Input
                                min="1"
                                max="5"
                                type="number"
                                className="w-20 p-1 font-mono text-lg text-center"
                                value={item.quantity}
                                onChange={(e) => {
                                    setCart((cart) => {
                                        let found = cart.find(
                                            (ele) => ele.id == item.id
                                        );
                                        found.quantity = e.target.value;
                                        return [...cart];
                                    });
                                }}
                            />
                            <Button>Remove</Button>
                        </CardFooter>
                    </Card>
                );
            })}
            {cart.length ? <CheckOut cart={cart} /> : null}
        </main>
    ) : (
        <EmptyCart />
    );
}

function CheckOut({ cart }) {
    return (
        <div className="fixed bg-white bottom-0 p-8 border-2 w-full shadow-lg font-mono text-2xl flex justify-between">
            <p>
                Total Price{" "}
                <span className="border-b-4 border-yellow-400">
                    {cart
                        .reduce(
                            (total, item) => item.quantity * item.price + total,
                            0
                        )
                        .toFixed(2)}
                </span>
            </p>
            <Button>Checkout</Button>
        </div>
    );
}

function EmptyCart() {
    return (
        <div className="pt-24 p-4 flex flex-col gap-4 justify-center items-center">
            <p className="text-3xl font-mono font-bold">Your Cart is Empty</p>
            <Link to={"/shop/all"}>
                <Button>Go Shopping</Button>
            </Link>
            <div>
                <img src={ShoppingImage} alt="" className="w-full" />
            </div>
        </div>
    );
}

export default Cart;
