import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

function ProductCard({ id, title, price, image, description, cart, setCart }) {
    const [descriptionLine, setDescriptionLine] = useState(false);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        setCart((cart) => {
            let found = cart.find((item) => item.id === id);
            if (found) {
                found.quantity++;
                return cart;
            } else {
                return [
                    ...cart,
                    {
                        id,
                        title,
                        price,
                        image,
                        quantity: 1,
                        addedOn: Date.now(),
                    },
                ];
            }
        });
    };

    const isPresentInCart = cart.some((item) => item.id == id)

    return (
        <Card
            onClick={() => setDescriptionLine((value) => !value)}
            className="bg-gray-100 max-sm:w-[90%] w-[min(35ch,80%)] p-4 transition-shadow duration-1000"
        >
            <CardContent className="flex justify-center w-full bg-white rounded-md p-2">
                <img src={image} alt={title} className="max-w-32" />
            </CardContent>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardDescription
                className={`cursor-pointer ${
                    descriptionLine ? "line-clamp-none" : "line-clamp-2"
                }`}
            >
                {description}
            </CardDescription>
            <CardFooter className="p-4 flex justify-between">
                <p>${price}</p>
                
                <Button
                    onClick={(e) => handleAddToCart(e)}
                    variant={isPresentInCart?"default":"outline"}
                >{isPresentInCart?"Added To Cart":"Add To Cart"}</Button>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;
