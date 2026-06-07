import ContactSection from "@/components/pages/contact/contactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us  | Apex Interiors & Engineering",
  description:
    "Contact Apex Interiors & Engineering for interior design and engineering services.",
};

const Contact = () => {
  return (
    <>
      <ContactSection/>
    </>
  )
}

export default Contact;