'use client'
import React from "react";

const SelectedProjects = () => {
  return (
    <div className="text-center contain">
      <h2 className="text-[#454545] text-center">Selected Projects</h2>
      <br />
      <p className="text-center mx-auto w-full lg:w-1/2">
        Design solves problems for people. Read some amazing stories on how i
        used design to solve business problems
      </p>
      <br />
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="rounded-3xl max-h-[50vh] col-span-1 lg:col-span-2 justify-items-end text-left bg-[#F1F1F1] pb-4 hover:bg-[#121E2B] hover:text-white cursor-pointer transition duration-500 ease-in-out">
          <div className="w-full max-h-[80%] xl:min-h-[75%]">
            <img
              src="/images/selected-1.png"
              alt="Selected"
              className="w-full h-full"
            />
          </div>
          <br />
          <p className="font-medium text-[#454545] px-4 md:px-6">
            Mojec Metering App
          </p>
          <p className="text-sm px-4 md:px-6">
            Solve all your electricity problem in one app
          </p>
        </div>
        <div className="rounded-3xl max-h-[50vh] col-span-1 lg:col-span-2 text-left bg-[#F1F1F1] pb-4 hover:bg-[#121E2B] hover:text-white cursor-pointer transition duration-500 ease-in-out">
          <div className="w-full lg:max-h-[80%]">
            <img
              src="/images/selected-2.png"
              alt="Selected"
              className="w-full h-full"
            />
          </div>
          <br />
          <p className="font-medium text-[#454545] px-4 md:px-6">
            Leadshook Leads Redesign
          </p>
          <p className="text-sm px-4 md:px-6">
            Making leads more accessible with design
          </p>
        </div>
        <div className="rounded-3xl max-h-[50vh] col-span-1 lg:col-span-2 text-left bg-[#F1F1F1] pb-4 hover:bg-[#121E2B] hover:text-white cursor-pointer transition duration-500 ease-in-out">
          <div className="w-full max-h-[80%]">
            <img
              src="/images/selected-3.png"
              alt="Selected"
              className="w-full h-full"
            />
          </div>
          <br /> 
          <p className="font-medium text-[#454545] px-4 md:px-6">
            LeadsHook custom project portal
          </p>
          <p className="text-sm px-4 md:px-6">
            Easier Management of custom projects
          </p>
        </div>
        <div className="rounded-3xl max-h-[50vh] col-span-1 lg:col-span-3 text-left bg-[#F1F1F1] pb-4 hover:bg-[#121E2B] hover:text-white cursor-pointer transition duration-500 ease-in-out">
          <div className="w-full h-[80%]">
            <img
              src="/images/selected-4.png"
              alt="Selected"
              className="w-full h-full"
            />
          </div>
          <br />
          <p className="font-medium text-[#454545] px-4 md:px-6">Leadsbuffet</p>
          <p className="text-sm px-4 md:px-6">
            Management and distribution of quality leads
          </p>
        </div>
        <div className="rounded-3xl max-h-[50vh] col-span-1 lg:col-span-3 text-left bg-[#F1F1F1] pb-4 hover:bg-[#121E2B] hover:text-white cursor-pointer transition duration-500 ease-in-out">
          <div className="w-full h-[80%]">
            <img
              src="/images/selected-5.png"
              alt="Selected"
              className="w-full h-full"
            />
          </div>
          <br />
          <p className="font-medium text-[#454545] px-4 md:px-6">Bare Mind</p>
          <p className="text-sm px-4 md:px-6">
            Personlaized mental wellness program
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjects;
