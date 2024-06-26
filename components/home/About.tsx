'use client'
import React from "react";
import Process from "./Process";
import RecentWorks from "./RecentWorks";
import SelectedProjects from "./SelectedProjects";

const About = () => {
  return (
    <section className="contain bg-white rounded-3xl p-4 md:p-8 relative -top-10 lg:-top-24 z-50">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/emmanuel.png"
            alt="Otitoola Emmanuel"
            className="w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 px-4 py-8">
          <h2>
            I can help you <br /> <span className="text-span">Succeed</span>
          </h2>
          <br />
          <p className="leading-[1.5]">
            Your Product should be effortless in use and delightful for users.
            Finding the right talent for your product shouldn’t exhaust your
            time and resources. You need designs that can translate into smooth
            and impactful experiences that promote user interactions. That’s
            where i come in.
          </p>
          <p className="leading-[1.5] mt-3">
            I specialize in building web apps and landing pages, designing
            digital experiences and developing visual design systems. I enjoy
            learning about how design can Influence and empower people. I am
            constantly seeking out new technologies and improving myself.
          </p>
        </div>
      </div>
      <br /> <br />
      <Process />
      <br />
      <br />
      <RecentWorks />
      <br /><br />
      <SelectedProjects />
    </section>
  );
};

export default About;
