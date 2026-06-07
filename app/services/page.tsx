import ServiceSection from "@/components/pages/services/serviceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services  | Apex Interiors & Engineering",
  description:
    "Contact Apex Interiors & Engineering for interior design and engineering services.",
};

const Services = () => {
  return (
    <>
       <ServiceSection/>
    </>
  )
}

export default Services;