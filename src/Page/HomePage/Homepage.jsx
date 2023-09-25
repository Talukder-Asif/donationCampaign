import { useLoaderData } from "react-router-dom";
import NgoDonar from "./NgoDonar";

const Homepage = () => {
    const ngoDonates = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                ngoDonates.map((donateCard)=><NgoDonar key={donateCard.id} donateCard={donateCard}></NgoDonar>)
            }
        </div>
    );
};

export default Homepage;