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
  bg: string;
  content: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Mojec App",
    slug: "mojec-app",
    logo: "/images/mojec-logo.png",
    description:
      "Resolve all electricity problems in one app, from buying meter, paying for electricity and getting a qualified technician for your light issues.",
    image: "/images/mojec.png",
    skills: ["mobile design", "ux", "style guides", "interaction"],
    bg: "#1D457C",
    content: ""
  },
  {
    id: 2,
    name: "Leadsbuffet",
    slug: "leadsbuffet",
    logo: "/images/LB.png",
    description:
      "LeadsBuffet is a Lead Distribution System designed to manage and distribute leads acquired from various sources including LeadsHook.",
    image: "/images/Dashboard.png",
    skills: ["ui/ux", "design systems", "invoice"],
    bg: "",
    content: ""
  },
  {
    id: 3,
    name: "Lead Redesign",
    slug: "leads-app-redesign",
    logo: "/images/leads-hook.png",
    description:
      "A user-firendly design to show how decision tree are performing and get insight into leads impression.",
    image: "/images/leads-hooks.png",
    skills: ["ui/ux", "redesign", "interaction", "marketing"],
    bg: "",
    content: ""
  },
  {
    id: 4,
    name: "Bare Mind",
    slug: "bare-mind",
    logo: "/images/bm.png",
    description:
      "Helping people overcome their limiting minds by offering personalized self-development programs for optimal mental well-being.",
    image: "/images/baremind.png",
    skills: ["landing page design", "ui/ux", "mental health", "interaction"],
    bg: "#09CF82",
    content: ""
  },
  {
    id: 5,
    name: "Custom Project Portal",
    slug: "custom-project",
    logo: "/images/leads-hook.png",
    description:
      "Simplifying the  management for custom projects that better serves the needs of the customer and the company.",
    image: "/images/custom-project.png",
    skills: ["ui/ux", "project management", "interaction", "style guides"],
    bg: "",
    content: ""
  },
];

export async function GET() {
  // const projectAll = JSON.stringify(projects);
  return NextResponse.json(projects);
}
