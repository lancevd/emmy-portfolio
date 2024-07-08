import React from "react";

const Projects = () => {
  return (
    <section className="contain">
      <div className="flex flex-col items-center lg:flex-row justify-center lg:justify-between gap-4">
        <h2 className="lg:hidden w-1/2 text-center text-white">
          I Push the limit of
          <span className="text-span"> digital products</span>
        </h2>
        <h2 className="hidden text-white lg:block">
          I Push the limit of <br />
          <span className="text-span"> digital products</span>
        </h2>
        <p className="lg:w-[40%] text-center lg:text-left">
          Building clean, delightful products and experiences. I focus on
          designing easy-to-use interfaces that promote user interaction and add
          value to people's lives. I am always seeking new opportunities to
          cooperate on ideas. Let's create something extraordinary together.
        </p>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:grid-rows-4">
        <div className="rounded-lg lg:col-[1/2] lg:row-[1/3] overflow-hidden">
          <img
            src="/images/project-1.png"
            alt="project"
            className="w-full h-full"
          />
        </div>
        <div className="rounded-lg lg:col-[2/3] lg:row-[1/4] overflow-hidden">
          <img
            src="/images/project-2.png"
            alt="project"
            className="w-full h-full"
          />
        </div>
        <div className="rounded-lg lg:col-span-1 lg:row-span-2 overflow-hidden">
          <img
            src="/images/project-3.png"
            alt="project"
            className="w-full h-full"
          />
        </div>
        <div className="rounded-lg lg:col-[1/2] lg:row-[3/4] overflow-hidden">
          <img
            src="/images/project-4.png"
            alt="project"
            className="w-full h-full"
          />
        </div>
        <div className="rounded-lg lg:col-[3/4] lg:row-[3/5] overflow-hidden">
          <img
            src="/images/project-6.png"
            alt="project"
            className="w-full h-full"
          />
        </div>
        <div className="rounded-lg lg:col-[1/3] lg:row-[4/5] overflow-hidden">
          <img
            src="/images/project-5.png"
            alt="project"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
