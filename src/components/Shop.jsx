import { useAllProducts, useProductsByCategory } from "@/hooks/useAllProducts";
import ProductCard from "./ProductCard";
import { useOutletContext, useParams } from "react-router-dom";
import manyPeopleShopping from "../assets/images/many_people_shopping.jpg";

import { Skeleton } from "@/components/ui/skeleton";
import { pattern } from "../lib/utils";
import Heading from "./Heading";
function Shop({ category = "" }) {
    let params = useParams();
    category = params.category;
    const [loading, products] = useProductsByCategory(category);
    console.log(loading, products);
    const [cart, setCart] = useOutletContext();

    return (
        <>
            <main className="flex" style={pattern}>
                {/* filters */}
                {/* <div className="max-sm:hidden">filters</div> */}
                {/* products listing */}
                <div className="flex-grow-[5]">
                    {/* category name */}
                    <Heading title={category} />
                    {/* products */}
                    {loading ? (
                        <div className=" p-4 my-4 flex flex-wrap gap-8 justify-center items-center">
                            {Array(5)
                                .fill(undefined)
                                .map((ele, index) => (
                                    <SkeletonCard key={index} />
                                ))}
                        </div>
                    ) : (
                        <div className="p-8 flex flex-wrap justify-center items-start  gap-4 max-sm:justify-center">
                            {products.map((product) => {
                                return (
                                    <ProductCard
                                        cart={cart}
                                        setCart={setCart}
                                        key={product.id}
                                        {...product}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </main>
            <div className="flex justify-center items-center object-cover">
                <img src={manyPeopleShopping} alt="" />
            </div>
        </>
    );
}

export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[300px] max-sm:w-[90%] w-[min(70ch,80%)] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    );
}

export default Shop;
