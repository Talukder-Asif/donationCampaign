import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import { getStoreDonationData } from "../../utility/localstore";
import DonationElement from "./elements/DonationElement";

const DonationPage = () => {
    const [doneted, setdoneted] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        const localData = getStoreDonationData();
        if(data.length > 0){
            const donation = data.filter(data => localData.includes(data.id));
            setdoneted(donation);
        }
    },[])
    console.log(doneted)
    return (
        <div className="grid md:grid-cols-2 gap-5 pt-5 md:pt-24">
            {
                doneted?.map(donatetedCard =>(
                    <DonationElement key={donatetedCard.id} donatetedCard={donatetedCard} ></DonationElement>
                ))
            }
        </div>
    );
};

export default DonationPage;