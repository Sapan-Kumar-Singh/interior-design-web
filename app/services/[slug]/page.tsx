import ServiceDetails from "@/components/pages/services/serviceDetails";

const ServiceDetailsWrapper = async ({ params }: { params: Promise<{ slug: string }>}) => {
     const { slug } = await params;
     
  return (
    <>
       <ServiceDetails slug={slug}/>
    </>
  )
}

export default ServiceDetailsWrapper;