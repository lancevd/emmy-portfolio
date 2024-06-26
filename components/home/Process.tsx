import React from "react";

const Process = () => {
  return (
    <div>
      <h2>
        Insight into My <span className="text-span">Process</span>
      </h2>
      <br />
      <div className="flex flex-col md:flex-row md:justify-between lg:justify-start md:gap-12 lg:gap-28 items-center">
        <div className="w-full md:1/2 lg:w-1/3 bg-[url(/images/01.png)] bg-auto bg-no-repeat p-4">
          <p className="font-medium text-[#454545]">
            Discovery and Data gathering
          </p>
          <p className="text-sm">
            I define the project scope and requirement with extensive research
          </p>
        </div>
        <div className="w-full md:1/2 lg:w-1/3 bg-[url(/images/02.png)] bg-auto bg-no-repeat p-4">
          <p className="font-medium text-[#454545]">Planning and Milestones</p>
          <p className="text-sm">
            I organize every part of the project from start to execution
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="spacer"></div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between lg:justify-end md:gap-12 items-center">
        <div className="w-full md:1/2 lg:w-1/3 bg-[url(/images/03.png)] bg-auto bg-no-repeat p-4">
          <p className="font-medium text-[#454545]">
            Prototyping, development and testing
          </p>
          <p className="text-sm">
            I put together all the designs and other requirements with multiple
            checks to ensure quality is provided
          </p>
        </div>
        <div className="w-full md:1/2 lg:w-1/3 bg-[url(/images/04.png)] bg-auto bg-no-repeat p-4">
          <p className="font-medium text-[#454545]">Delivery and Support</p>
          <p className="text-sm">
            I hand over all deliverables smoothly followed by an reviewing
            period to ensure initial goal set are achieved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
