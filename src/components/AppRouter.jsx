import App from "@/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([{ path: "/", element: <App /> }]);

export default <RouterProvider router={Router} />;
