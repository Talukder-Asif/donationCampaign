import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NgoDonar = ({donateCard}) => {
    return (
        <Link to={`/${donateCard.id}`}>
          <div style={{background:donateCard.colors[0] }} className={`card  card-compact shadow-xl`}>
          <figure><img  className="w-full " src={donateCard.image[0]} alt={donateCard.title} /></figure>
           <div className={`card-body`}>
          <div className="card-actions justify-start">
            <button style={{color:donateCard.colors[1], background:donateCard.colors[2]}} className=" text-base px-2 rounded-md font-medium">{donateCard.category}</button>
          </div>
          <h2 style={{color:donateCard.colors[1]} } className={`card-title text-xl `}>{donateCard.title}</h2>
        </div>
      </div>
        </Link>
    );
};

export default NgoDonar;