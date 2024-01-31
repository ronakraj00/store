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
        <header className="mx-auto w-full p-2">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link to="/docs">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link to="/docs">Cart <sup className="p-1">{cartLength}</sup></Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Categories
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                        <a
                            className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                        >
                            <div className="text-sm font-medium leading-none">
                                {category.toUpperCase()}
                            </div>
                        </a>
                    </NavigationMenuLink>
                </li>
            ))}
        </>
    );
}

export default Header;
