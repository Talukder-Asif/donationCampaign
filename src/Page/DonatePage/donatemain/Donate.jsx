import { useEffect, useState } from "react";
import { getStoreDonationData } from "../../../utility/localstore";
import Delement from "../donateelement/Delement";

const Donate = () => {

    const [data, setdata] = useState([]);
    useEffect(()=>{
        fetch('NGO.json')
        .then(ref => ref.json())
        .then(data => setdata(data))
    },[])

    const [doneted, setdoneted] = useState([]);
    useEffect(() => {
        const localData = getStoreDonationData();
        if(data?.length > 0){
            const donation = data?.filter(data => localData?.includes(data?.id));
            setdoneted(donation);
        }
    },[data])
    // console.log(doneted)

    const [showData ,setshowData] = useState([])
    useEffect(()=>{
        if(data.length >= 4)
        {
            setshowData(doneted.slice(0,4));
        }
    },[doneted])
    // console.log(showData)

    const [isclick, setisclick] = useState([false])
    return (
        <div>
        <div className="grid md:grid-cols-2 gap-5 pt-5 md:pt-24">
            {
                isclick? showData?.map(donatetedCard =>(
                    <Delement key={donatetedCard?.id} donatetedCard={donatetedCard} ></Delement>
                )):doneted?.map(donatetedCard =>(
                    <Delement key={donatetedCard?.id} donatetedCard={donatetedCard} ></Delement>
                ))
            }
        </div>
            <div className="text-center my-5">
                <button onClick={()=>setisclick(!isclick)} className={`py-3 text-white rounded-lg font-bold bg-[#009444] px-6 ${showData.length>=4?"inline-block":"hidden"} `}>{isclick?"See All":"Minimize"}</button>
            </div>
        </div>
    );
};

export default Donate;