import App from "@/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import ErrorPage from "./ErrorPage";
import Hero from "./Hero";
import Shop from "./Shop";
import Cart from "./Cart";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Hero />,
            },
            {
                path:"/shop/:category",
                element:<Shop/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
    },
]);

function AppRouter() {
    return <RouterProvider router={Router} />;
}

export default AppRouter;
