import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationElement = ({donatetedCard}) => {
    console.log(donatetedCard)
    return (
        <div style={{background:donatetedCard.colors[0]}} className="card md:card-side bg-base-100 shadow-xl">
        <figure><img className="w-auto md:h-full md:w-80" src={donatetedCard.image[0]} alt="Movie"/></figure>
        <div className="card-body">
        <div className="card-actions justify-start">
            <button style={{color:donatetedCard.colors[1], background:donatetedCard.colors[2]}} className=" text-base px-2 rounded-md font-medium">{donatetedCard.category}</button>
          </div>
          <h2 className={`card-title text-2xl `}>{donatetedCard.title}</h2>

          <p style={{color:donatetedCard.colors[1]} } className={` text-base font-semibold `}>${donatetedCard.price}.00</p>
            <div className="card-actions justify-start">
            <Link style={{background:donatetedCard.colors[1]}} className="py-2 px-4 rounded text-white font-semibold btn-primary" to={`/${donatetedCard.id}`}>View Details</Link>
            </div>
        </div>
        </div>
    );
};

export default DonationElement;