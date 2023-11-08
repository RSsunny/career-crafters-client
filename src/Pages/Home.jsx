import Banner from "../Components/Banner";
import Category from "../Components/Category";
import SectionOne from "../Components/SectionOne";
import SectionThree from "../Components/SectionThree";
import SectionTwo from "../Components/SectionTwo";

const Home = () => {
  return (
    <>
      <div className=" -mt-24 -z-10  relative ">
        <Banner></Banner>
      </div>

      <Category></Category>
      <SectionTwo></SectionTwo>
      <SectionOne></SectionOne>
      <SectionThree></SectionThree>
    </>
  );
};

export default Home;
