import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsSearch } from "react-icons/bs";
// import required modules
import AOS from "aos";
import "aos/dist/aos.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    debounceDelay: 50,
    throttleDelay: 99,
    delay: 500,
    duration: 400,
    easing: "ease",
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-center bg-cover object-center h-[600px] md:h-[800px]"
            style={{
              backgroundImage: `url("https://i.ibb.co/1JSN1YD/young-people-working-together-startup-company.jpg")`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-center bg-cover object-center h-[600px] md:h-[800px]"
            style={{
              backgroundImage: `url("https://i.ibb.co/pLHP1YX/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg")`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-center bg-cover object-center h-[600px] md:h-[800px]"
            style={{
              backgroundImage: `url("https://i.ibb.co/1Tmwmp8/researchers-looking-alternative-energy-souces.jpg")`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-center bg-cover object-center h-[600px] md:h-[800px]"
            style={{
              backgroundImage: `url("https://i.ibb.co/PYmr6V5/team-working-together-project.jpg")`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute flex items-center justify-center inset-0 px-5 md:px-0 z-50">
        <div className="text-white flex flex-col space-y-3 md:space-y-5 text-center">
          <h1
            className="text-xl md:text-4xl font-playfair font-bold"
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-delay="500"
          >
            Find Your <span className="text-green-500">Dream Job</span> Fits
            Your Life
          </h1>
          <p
            className="md:w-[800px] text-xs md:text-base mx-auto"
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-delay="800"
          >
            Explore job opportunities that match your skills and interests.It
            provides a clear indication of an employee's responsibilities,
            expertise, and hierarchy in the company. Examples of job titles
            include <br /> <br />{" "}
            <span className="text-md md:text-xl ">
              "Software Engineer, Marketing Manager, Registered Nurse or
              Financial Analyst"
            </span>
          </p>
          <br />
          <div className="relative border md:w-[700px] mx-auto ">
            <BsSearch className="absolute top-3 left-5 text-xl "></BsSearch>
            <input
              className="w-full px-10 py-2 bg-transparent outline-none"
              type="search"
              name="search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
