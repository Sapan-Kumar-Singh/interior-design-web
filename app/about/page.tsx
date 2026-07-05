import AboutSection from '@/components/pages/about/aboutSection'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Apex Interiors & Engineering",
  alternates: { canonical: "/about" },
  description:
    "Learn more about Apex Interiors & Engineering.",
};
const About = () => {
  return (
    <>
       <AboutSection/>
    </>
  )
}

export default About
