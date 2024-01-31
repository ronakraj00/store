import { Link, useRouteError } from "react-router-dom";
import { Button } from "./ui/button";

function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="p-4 text-center mx-auto h-svh flex justify-center gap-4 flex-col items-center">
            <p className="font-mono text-5xl line font-bold">
                Something Went Wrong
            </p>
            <p className="font-mono">
                {error.status} {error.statusText}
            </p>
            <Link to={"/"}>
                <Button>Return Home</Button>
            </Link>
        </div>
    );
}

export default ErrorPage;
