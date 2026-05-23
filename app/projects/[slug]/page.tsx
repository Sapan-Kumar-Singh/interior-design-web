import ProjectDetails from "@/components/pages/project/projectDetails";

const ProjectDetailsWrapper = async ({ params }: { params: Promise<{ slug: string }>}) => {
     const { slug } = await params;
     console.log("slug--",slug);
  return (
    <>
      <ProjectDetails slug={slug}/>
    </>
  )
}

export default ProjectDetailsWrapper;