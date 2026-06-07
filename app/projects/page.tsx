import ProjectSection from "@/components/pages/project/projectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects  | Apex Interiors & Engineering",
  description:
    "Contact Apex Interiors & Engineering for interior design and engineering services.",
};

const Projects = () => {
  return (
    <>
       <ProjectSection/>
    </>
  )
}

export default Projects;