"use client";
import ProjectCard from "@/components/works/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { LuMoveRight } from "react-icons/lu";

interface Project {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  image: string;
  skills: string[];
  bg: string;
}

const Page: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/projects");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Response received:", response);
      const data: Project[] = await response.json();
      console.log(data);
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className="contain">
      <div className="flex gap-4 flex-col lg:flex-row">
        <div data-aos="slide-right" className="w-full lg:w-1/3">
          <h2 className="text-white">My Works</h2>
          <br />
          <p className="text-sm">
            I channel my passion to deliver functional designs, and create
            products that empower people.
          </p>
          <br />
          <a
            href="mailto:Emmanuelotitoola@gmail.com"
            target="_blank"
            className=""
          >
            <button className="w-full bg-[var(--orange)] p-4 rounded-[2rem] text-[#454545] flex items-center justify-between gap-4">
              Get your designs now <LuMoveRight />
            </button>
          </a>
        </div>
        <div className="hidden lg:block w-1/2"></div>
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        projects.map((project, index: number) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            slug={project.slug}
            logo={project.logo}
            description={project.description}
            image={project.image}
            skills={project.skills}
            background={project.bg}
          />
        ))
      )}
    </main>
  );
};

export default Page;
