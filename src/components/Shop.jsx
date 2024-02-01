import { useAllProducts, useProductsByCategory } from "@/hooks/useAllProducts";
import ProductCard from "./ProductCard";
import { useOutletContext, useParams } from "react-router-dom";
import manyPeopleShopping from "../../public/images/many_people_shopping.jpg";

import { Skeleton } from "@/components/ui/skeleton";

function Shop({ category = "" }) {
    let params = useParams();
    category = params.category;
    console.log(category);
    const products = useProductsByCategory(category);
    const [cart, setCart] = useOutletContext();
    console.log("set cart", setCart);
    console.log(products);
    return (
        <>
            <main className="flex">
                {/* filters */}
                <div className="max-sm:hidden">filters</div>
                {/* products listing */}
                <div className="flex-grow-[5]">
                    {/* category name */}
                    <div className="flex justify-center text-center text-2xl font-bold">
                        <p className="text-center w-max rounded-lg border-2 p-3 my-2 shadow-lg capitalize">
                            {category || "All"}
                        </p>
                    </div>
                    {/* products */}
                    {products.length == 0 ? (
                        <div className=" p-4 my-4 flex flex-wrap gap-8 justify-center items-center">
                            {Array(5).fill(undefined).map((ele, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 flex flex-wrap justify-center items-start  gap-4 max-sm:justify-center">
                            {products.map((product) => {
                                return (
                                    <ProductCard
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
            <Skeleton className="h-[400px] w-[400px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    );
}

export default Shop;
