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
    const [showData ,setshowData] = useState([])
    useEffect(()=>{
        if(doneted.length >= 4)
        {
            setshowData(doneted.slice(0,4));
        }
    },[doneted])

    const [isclick, setisclick] = useState([false])
console.log(isclick)
    console.log(showData);

    return (
        <div>
        <div className="grid md:grid-cols-2 gap-5 pt-5 md:pt-24">
            {
                isclick?showData?.map(donatetedCard =>(
                    <DonationElement key={donatetedCard.id} donatetedCard={donatetedCard} ></DonationElement>
                )):doneted?.map(donatetedCard =>(
                    <DonationElement key={donatetedCard.id} donatetedCard={donatetedCard} ></DonationElement>
                ))
            }
        </div>
            <div className="text-center my-5">
                <button onClick={()=>setisclick(!isclick)} className={`py-3 text-white rounded-lg font-bold bg-[#009444] px-6 ${showData.length>=4?"inline-block":"hidden"} `}>{isclick?"See All":"Minimize"}</button>
            </div>
        </div>
    );
};

export default DonationPage;