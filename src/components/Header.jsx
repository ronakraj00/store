import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import useCategories from "@/hooks/useCategories";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

function Header({cartLength}) {
    const categories = useCategories();

    return (
        <header className="mx-auto w-full p-2 scroll-pt-4 relative">
            <NavigationMenu className=" fixed mt-2 top-0 left-1/2 transform -translate-x-1/2">
                <NavigationMenuList>
                    <NavigationMenuItem className="shadow-lg">
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link to="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="shadow-lg">
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link to="/cart">Cart <sup className="p-1">{cartLength}</sup></Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="shadow-lg"> 
                        <NavigationMenuTrigger>
                            Categories
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4">
                                <ListCategories
                                    categories={categories}
                                ></ListCategories>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}

export function ListCategories({ categories }) {
    return (
        <>
            {categories.map((category) => (
                <li key={category}>
                    <NavigationMenuLink asChild>
                        <Link to={"/shop/"+category} preventScrollReset={true}
                            className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                        >
                            <div className="text-sm font-medium leading-none capitalize">
                                {category}
                            </div>
                        </Link>
                    </NavigationMenuLink>
                </li>
            ))}
        </>
    );
}

export default Header;
