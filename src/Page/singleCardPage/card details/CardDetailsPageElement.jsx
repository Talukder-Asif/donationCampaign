/* eslint-disable no-unused-vars */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { saveDonationData } from '../../../utility/localstore';

/* eslint-disable react/prop-types */
const CardDetailsPageElement = ({special}) => {
    // console.log(special)
    const handeldonate = () => {
        saveDonationData(special.id)
        toast(`You have donate $${special?.price}`);
    }
    return (
        <div>
        <div className="relative">
            <img className="w-full" src={`${special?.image[0]}`}></img>
            <div className="absolute bg-[#0000007e] w-full md:pl-7 pl-4 md:py-7 py-4 bottom-0">
                <button onClick={handeldonate} style={{background:special?.colors[1] }} className={`px-2 py-1 md:p-3 rounded-md text-white`}><Link>Donate ${special?.price}</Link></button>
            </div>
        </div>
            <h2 className="text-4xl font-bold my-4">{special?.title}</h2>
            <p className="mb-10">{special?.description}</p>
            <ToastContainer />
        </div>
    
    );
};

export default CardDetailsPageElement;