// pages/api/projects.ts
import { NextResponse } from "next/server";

interface Project {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  image: string;
  skills: string[];
  bg: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "Mojec App",
    slug: "mojec-app",
    logo: "/images/mojec-logo.png",
    description:
      "Resolve all electricity problems in one app, from buying meter, paying for electricity and getting a qualified technician for your light issues.",
    image: "https://via.placeholder.com/150",
    skills: ["mobile design", "ux", "style guides", "interaction"],
    bg: "#7A97E6",
  },
  {
    id: 2,
    name: "Leadsbuffet",
    slug: "leadsbuffet",
    logo: "/images/mojec-logo.png",
    description:
      "LeadsBuffet is a Lead Distribution System designed to manage and distribute leads acquired from various sources including LeadsHook.",
    image: "https://via.placeholder.com/150",
    skills: ["ui/ux", "design systems", "invoice"],
    bg: "#7A97E6",
  },
];

export async function GET() {
  // const projectAll = JSON.stringify(projects);
  return NextResponse.json(projects);
}
