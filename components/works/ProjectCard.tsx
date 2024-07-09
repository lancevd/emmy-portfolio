import Link from "next/link";
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
  background
}) => {
  return (
    <Link
      href={`/works/${slug}`}
      className="border rounded transition-all duration-700 my-4 md:pt-6 md:pr-6 hover:p-0 flex flex-col-reverse cursor-pointer md:flex-row"
    >
      <div className="w-full md:w-1/2 lg:w-2/5 px-2 md:px-3">
        <div className={`flex gap-4 p-1 py-4`}>
          <div
            className={`w-8 h-8 rounded border flex justify-center items-center gap-4 p-1 bg-[#454545] bg-[${background}]`}
          >
            <img src={logo} alt={name} className="w-full" />
          </div>
          <h3 className="capitalize">{name}</h3>
        </div>
        <br />
        <p className="text-sm">{description}</p>
        <br />
        {skills.map((skill) => {
          return (
            <span className="text-xs uppercase mr-2 text-white bg-[#454545] p-1">
              {skill}
            </span>
          );
        })}
      </div>
      <div className="px-2 md:px-3">
        <img src={image} alt={name} className="rounded-lg w-full md:w-1/2" />
      </div>
    </Link>
  );
};

export default ProjectCard;
