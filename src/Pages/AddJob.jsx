import { useState } from "react";
import useAuth from "../Hooks/useAuth";

import useAxios from "../Hooks/useAxios";

const AddJob = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [category, setCategory] = useState();
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const jobtitle = form.jobtitle.value;
    const miniprice = form.miniprice.value;
    const maxprice = form.maxprice.value;
    const description = form.description.value;
    const dateandtime = form.dateandtime.value;
    const categoris = category;
    const jobinfo = {
      email,
      jobtitle,
      miniprice,
      maxprice,
      description,
      dateandtime,
      categoris,
    };
    axios
      .post("/api/v1/jobs", jobinfo)
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(jobinfo);
  };
  return (
    <div className="max-w-7xl mx-auto px-0 md:px-5 lg:px-0">
      <h1 className="text-4xl font-playfair font-bold text-center mt-20 capitalize ">
        Add your job here...!
      </h1>
      <form
        onSubmit={handleJob}
        className="md:border border-black rounded-md  my-10 pt-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-5 py-4 ">
          <div className="flex-1 w-full">
            <input
              className="w-full p-3 outline-none border border-black bg-transparent"
              type="email"
              name="email"
              readOnly
              defaultValue={user?.email}
            />
          </div>
          <div className="flex-1 w-full border border-black">
            <select
              onChange={handleCategory}
              className="select w-full outline-none "
            >
              <option disabled selected>
                Pick your category job
              </option>
              <option value={"web development"}>web development</option>
              <option value={"digital marketing"}>digital marketing</option>
              <option value={"graphics design"}> graphics design</option>
              <option value={"Video & Animation"}> Video & Animation</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-5 py-4">
          <input
            className="w-full p-3 outline-none border border-black bg-transparent"
            type="text"
            name="jobtitle"
            placeholder="Job title"
            required
          />
          <input
            className="w-full p-3 outline-none border border-black bg-transparent"
            type="datetime-local"
            name="dateandtime"
            placeholder="Deadline"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row  items-center justify-between gap-10 px-5 py-4">
          <input
            className="w-full p-3 outline-none border border-black bg-transparent"
            type="number"
            name="miniprice"
            placeholder="Minimum price
            "
            required
          />
          <input
            className="w-full p-3 outline-none border border-black bg-transparent"
            type="number"
            name="maxprice"
            placeholder="Maximum price"
            required
          />
        </div>
        <div className="px-5 ">
          <textarea
            name="description"
            placeholder="Description"
            required
            className="textarea textarea-border border-black textarea-sm w-full "
          ></textarea>
        </div>
        <div className="flex justify-center md:justify-end p-5 gap-5">
          <h1 className="border border-black btn px-4 py-1 rounded-md cursor-pointer">
            reset
          </h1>
          <input
            className="border border-black px-4 py-2 rounded-md cursor-pointer btn"
            type="submit"
            value="Add job"
          />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
