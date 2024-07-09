import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  image: string;
  skills: string[];
  background: string;
}

const ProjectCard: React.FC<Project> = ({
  id,
  name,
  slug,
  logo,
  description,
  image,
  skills,
  background,
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Link
      href={`/works/${slug}`}
      className="border rounded transition-all duration-700 my-4 md:pt-6 md:pr-6 hover:p-0 flex flex-col-reverse items-center cursor-pointer md:flex-row"
    //   data-aos="fade-up"
    >
      <div className="w-full md:w-1/2 lg:w-2/5 px-3 md:px-3 py-4">
        <div className={`flex gap-4 items-center p-1 py-4`}>
          <div
            className={`w-8 h-8 rounded flex justify-center items-center gap-4 p-1`}
            style={{ background: background }}
          >
            <img src={logo} alt={name} className="w-full" />
          </div>
          <h3 className="capitalize text-white">{name}</h3>
        </div>
        <br />
        <p className="">{description}</p>
        <br />
        {skills.map((skill) => {
          return (
            <span className="text-xs uppercase mr-2 text-white bg-[#454545] p-[4px] mb-1">
              {skill}
            </span>
          );
        })}
      </div>
      <div
        className={`md:pl-3 w-full bg-[#${background}] md:w-1/2 lg:w-3/5`}
        style={{ background: background }}
      >
        <img src={image} alt={name} className="rounded-lg w-full" />
      </div>
    </Link>
  );
};

export default ProjectCard;
