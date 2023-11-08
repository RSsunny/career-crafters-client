const SectionThree = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-0 my-20">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-playfair font-bold mb-5">
          Jobs by <span className="text-green-500">Location</span>
        </h1>
        <p>Find your favourite jobs and get the benefits of yourself</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5  gap-5">
        <div className="relative">
          <img
            className="h-full"
            src="https://i.ibb.co/pW3xkMZ/140630124917-12-canada-most-beautiful-places.jpg"
            alt=""
          />
          <div className="absolute bottom-5 left-3 text-white">
            <h1 className=" md:text-2xl font-playfair font-bold mb-2">
              Canada
            </h1>
            <p>Open Jobs (9)</p>
          </div>
        </div>
        <div className="md:row-span-2 md:col-span-2 relative">
          <img
            className="row-span-2 col-span-2"
            src="https://i.ibb.co/PZ6Psns/luke-stackpoole-ub-SUwrr04-Ks-unsplash.jpg"
            alt=""
          />
          <div className="absolute bottom-5 left-3 text-white">
            <h1 className=" md:text-2xl font-playfair font-bold mb-2">
              United States
            </h1>
            <p>Open Jobs (8)</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full"
            src="https://i.ibb.co/zs04yVP/pexels-pixabay-460672.jpg"
            alt=""
          />
          <div className="absolute bottom-5 left-3 text-white">
            <h1 className=" md:text-2xl font-playfair font-bold mb-2">
              United Kingdom
            </h1>
            <p>Open Jobs (5)</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full"
            src="https://i.ibb.co/bLKfQB4/istockphoto-146801879-612x612.jpg"
            alt=""
          />
          <div className="absolute bottom-5 left-3 text-white">
            <h1 className=" md:text-2xl font-playfair font-bold mb-2">India</h1>
            <p>Open Jobs (12)</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full"
            src="https://i.ibb.co/2K6LxC3/germany-in-pictures-beautiful-places-to-photograph-rothenburg-ob-der-tauber.jpg"
            alt=""
          />
          <div className="absolute bottom-5 left-3 text-white">
            <h1 className=" md:text-2xl font-playfair font-bold mb-2">
              Germany
            </h1>
            <p>Open Jobs (2)</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full"
            src="https://i.ibb.co/F0vv9PD/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            alt=""
          />
          <div className="absolute bottom-5 left-3 text-white">
            <h1 className=" md:text-2xl font-playfair font-bold mb-2">
              France
            </h1>
            <p>Open Jobs (8)</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full"
            src="https://i.ibb.co/rtpjFg1/anh-minh-hoa-bao-my-viet-nam-dang-vuot-xa-cac-nuoc-o-chau-a-ve-toc-do-tang-truong-166781540489677209.jpg"
            alt=""
          />
          <div className="absolute bottom-5 left-3 text-white col-span-3 ">
            <h1 className=" md:text-2xl font-playfair font-bold mb-2">
              Viet Nam
            </h1>
            <p>Open Jobs (5)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
