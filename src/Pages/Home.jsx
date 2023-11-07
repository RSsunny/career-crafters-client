import Banner from "../Components/Banner";
import Category from "../Components/Category";

const Home = () => {
  return (
    <>
      <div className=" -mt-24 -z-10  relative ">
        <Banner></Banner>
      </div>
      <div>
        <Category></Category>
      </div>
    </>
  );
};

export default Home;
