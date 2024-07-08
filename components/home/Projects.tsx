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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:grid-rows-4">
        <div className="rounded-lg lg:col-span-1 md:row-span-2 overflow-hidden">
          <img src="/images/project-1.png" alt="project" className="w-full" />
        </div>
        <div className="rounded-lg lg:col-span-1 md:row-span-3 overflow-hidden">
          <img src="/images/project-2.png" alt="project" className="w-full" />
        </div>
        <div className="rounded-lg lg:col-span-1 md:row-span-2 overflow-hidden">
          <img src="/images/project-3.png" alt="project" className="w-full" />
        </div>
        <div className="rounded-lg lg:col-span-1 md:row-span-2 overflow-hidden">
          <img src="/images/project-1.png" alt="project" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
