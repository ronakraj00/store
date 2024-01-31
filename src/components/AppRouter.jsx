import App from "@/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import ErrorPage from "./ErrorPage";

const Router = createBrowserRouter([
    { path: "/",
     element: <App />,
    errorElement:<ErrorPage/>}
]);

function AppRouter() {
    return <RouterProvider router={Router} />;
}

export default AppRouter;
