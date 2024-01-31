import { useAllProducts, useProductsByCategory } from "@/hooks/useAllProducts"
import ProductCard from "./ProductCard";

function Shop({category="",setCart}) {

    const products=useProductsByCategory(category);

  return (
    <main className="flex border-black">
        {/* filters */}
        <div className="max-sm:hidden">
            filters
        </div>
        {/* products listing */}
        <div className="flex-grow-[5]">
            {/* category name */}
            <div className="text-center text-2xl font-bold">{category||"All"}</div>
            {/* products */}
            <div className="p-8 my-4 flex flex-wrap justify-center items-start  gap-4 max-sm:justify-center">
                {products.map(product=>{
                    return <ProductCard setCart={setCart} key={product.id} {...product}/>
                })}
            </div>
        </div>
    </main>
  )
}

export default Shop