import { Link } from "react-router-dom";

const CategorisCard = ({ data }) => {
  const {
    _id,
    email,
    jobtitle,
    miniprice,
    maxprice,
    description,
    dateandtime,
    categoris,
  } = data;
  return (
    <div className="border-2 shadow-md  border-green-500  w-[300px] md:w-full mx-auto">
      <div className="flex justify-center items-center h-44 border-b border-black bg-gray-200 ">
        {" "}
        <h1 className="text-2xl font-playfair font-bold ">{jobtitle}</h1>
      </div>
      <div className="flex justify-between items-center p-2">
        {" "}
        <p>{dateandtime}</p>
        <h1>
          salary : ${miniprice}-${maxprice}
        </h1>
      </div>
      <p className="my-3 text-xs px-2">{description}</p>
      <Link to={`/jobdetails/${_id}`}>
        <button className="border w-full py-2 font-bold font-playfair hover:bg-green-500 duration-500 ease-linear">
          Bid now
        </button>
      </Link>
    </div>
  );
};

export default CategorisCard;
