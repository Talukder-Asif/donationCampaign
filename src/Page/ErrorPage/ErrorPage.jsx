import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="text-center">
            <img className=" mt:5 md:mt-10 m-auto" src="https://i.ibb.co/hgq32pZ/istockphoto-1319148638-170667a.jpg"></img>
            <h2 className="text-[#2fbbec] italic text-6xl md:text-8xl font-bold">{error.status} Error</h2>
            <p className="mt-5 text-xl md:text-3xl italic underline">{error.error.message}</p>
            <Link className="btn btn-info mt-5 text-lg" to={"/"}>Home</Link>
        </div>
    );
};

export default ErrorPage;