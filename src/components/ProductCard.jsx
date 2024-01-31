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

function ProductCard({ title, price, image, description, setCart }) {
    const [descriptionLine, setDescriptionLine] = useState(false);

    return (
        <Card
            onClick={() => setDescriptionLine((value) => !value)}
            className="bg-gray-100 max-sm:w-[90%] w-[min(40ch,80%)]  p-4 hover:shadow-sm transition-shadow duration-1000"
        >
            <CardContent className="flex justify-center w-full bg-white rounded-md p-4">
                <img src={image} alt={title} className="max-w-32" />
            </CardContent>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardDescription
                className={`cursor-pointer px-6 line-clamp-${
                    descriptionLine ? 0 : 1
                }`}
            >
                {description}
            </CardDescription>
            <CardFooter className="p-4 flex justify-between">
                <p>${price}</p>
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        setCart((cart) => [
                            ...cart,
                            {
                                title,
                                price,
                                image,
                                description,
                                time: Date.now,
                            },
                        ]);
                    }}
                    variant="outline"
                >
                    Add To Cart
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;
