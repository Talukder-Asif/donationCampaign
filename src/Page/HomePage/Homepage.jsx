import NgoDonar from "./NgoDonar";
import {useEffect, useState } from "react";
const Homepage = () => {
    const [searchingArray, setsearchingArray] = useState('');
    const [ngoDonates, setngoDonates] = useState([]);
    useEffect(()=>{
        fetch('NGO.json')
        .then( ref => ref.json())
        .then(data => setngoDonates(data))
    },[])
    const [btnclicked, setbtnclicked] = useState(false);
    console.log(btnclicked)
    const newNgoDonates = ngoDonates.filter(data => data.category.toLowerCase() === searchingArray.toLowerCase())
    
    console.log(newNgoDonates)

    return (
        <>
            <div className="bg-[url('https://i.ibb.co/Z6v8rLY/fc1f79e18cdc1a12320b9b10ec3e253d-min.jpg')] bg-cover mt-5 bg-center min-h-96">
            <div className="w-full p-5 md:p-36 text-center h-full bg-[#ffffffea]">
            <h2 className="text-2xl md:text-4xl mv-3 md:mb-5 font-bold">I Grow By Helping People In Need</h2>
            <form className="md:join py-3" onSubmit={e => e.preventDefault()}>
                <div>
                    <div>
                    <input id="searchFrom" className="h-10 rounded md:input mb-2 md:mb-0   md:input-bordered join-item" placeholder="Search here...."  />
                    </div>
                </div>
                <div className="indicator">
                    <button onClick={() => {setbtnclicked(true) 
                    setsearchingArray(document.getElementById("searchFrom").value)}} className=" py-1 rounded-md px-5 hover:text-black  md:join-item text-white bg-[#ff373e]">Search</button>
                </div>
            </form>

            </div>
            </div>

            <div className="grid mt-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                (btnclicked && searchingArray.length!==0) ?
                    newNgoDonates?.map((donateCard)=>(<NgoDonar key={donateCard?.id} donateCard={donateCard}></NgoDonar>
                    ))
                :
                  ngoDonates?.map((donateCard)=><NgoDonar key={donateCard?.id} donateCard={donateCard}></NgoDonar>)

            }
        </div>
        </>
    );
};

export default Homepage;