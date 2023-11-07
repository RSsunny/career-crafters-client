import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useJobs from "../Hooks/useJobs";
import { useState } from "react";
import CategorisCard from "./CategorisCard";

const Category = () => {
  const [categoriname, setCategoriname] = useState("web development");
  const { isLoading, isError, data, error, refetch, isFetching } = useJobs();
  if (isLoading) {
    return <h1>loding...</h1>;
  }

  const card = data?.filter(
    (categoryjob) => categoryjob.categoris == categoriname
  );

  return (
    <div className="max-w-7xl mx-auto mb-20">
      <h1 className="text-4xl font-playfair text-center my-10">
        Find Your Job
      </h1>
      <Tabs>
        <TabList
          className={
            "   items-center mx-auto text-center   flex justify-center cursor-pointer  border w-fit border-black text-xs md:text-base"
          }
        >
          <Tab
            onClick={() => setCategoriname("web development")}
            className={
              " inline-block px-2 md:px-4 py-2  rounded-none border-r -r-black"
            }
          >
            Web Devlopment
          </Tab>
          <Tab
            onClick={() => setCategoriname("digital marketing")}
            className={
              " inline-block px-2 md:px-4 py-2  rounded-none border-r border-black"
            }
          >
            digital marketing
          </Tab>
          <Tab
            onClick={() => setCategoriname("graphics design")}
            className={
              " inline-block px-2 md:px-4py-2  rounded-none border-r  border-black"
            }
          >
            graphics design
          </Tab>
          <Tab
            onClick={() => setCategoriname("Video & Animation")}
            className={
              " inline-block px-2 md:px-4 py-2  rounded-none  border-black"
            }
          >
            Video & Animation
          </Tab>
        </TabList>

        <TabPanel className={""}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-10 border mt-20 border-none px-2 md:px-5 lg:px-0 ">
            {card?.map((data) => (
              <CategorisCard key={data._id} data={data}></CategorisCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-10 border mt-20 border-none px-2 md:px-5 lg:px-0">
            {card?.map((data) => (
              <CategorisCard key={data._id} data={data}></CategorisCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-10 border mt-20 border-none px-2 md:px-5 lg:px-0">
            {card?.map((data) => (
              <CategorisCard key={data._id} data={data}></CategorisCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className={""}>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-around gap-10 mt-20 border-none px-2 md:px-5 lg:px-0  lg:mx-0">
            {card?.map((data) => (
              <CategorisCard key={data._id} data={data}></CategorisCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
