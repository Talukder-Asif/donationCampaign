/* eslint-disable react/prop-types */
const NgoDonar = ({donateCard}) => {
    console.log(donateCard)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className="w-full h-64 " src={donateCard.image[0]} alt={donateCard.title} /></figure>
  <div className="card-body">
    <div className="card-actions justify-start">
      <button className="">Buy Now</button>
    </div>
    <h2 className="card-title">{donateCard.title}</h2>
  </div>
</div>
    );
};

export default NgoDonar;