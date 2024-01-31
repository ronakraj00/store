import { useAllProducts, useProductsByCategory } from "@/hooks/useAllProducts";
import ProductCard from "./ProductCard";
import { useOutletContext, useParams } from "react-router-dom";

function Shop({ category = ""}) {
    let params = useParams();
    category = params.category;
    console.log(category);
    const products = useProductsByCategory(category);
    const [cart,setCart]=useOutletContext();
    console.log("set cart",setCart)
    console.log(products);
    return (
        <main className="flex border-black">
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
                {products.length==0?<div>
                    loading...
                </div>:
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
                    }
            </div>
        </main>
    );
}

export default Shop;
