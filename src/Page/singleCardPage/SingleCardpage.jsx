import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetailsPageElement from "./card details/CardDetailsPageElement";

const SingleCardpage = () => {
    const ide = useParams().cardId;
    // console.log(ide);
    const [strings, setstrings] = useState([]);
    useEffect(()=>{
        fetch('/NGO.json')
        .then( ref => ref.json())
        .then(data => setstrings(data))
    },[])
    const special = strings.find( p => p.id === parseInt(ide));
    // console.log(strings);
    return (
        <div className=" pt-3 h-screen md:pt-20">
            <CardDetailsPageElement special={special}></CardDetailsPageElement>
        </div>
    )
};

export default SingleCardpage;