import HeroSection from "@/components/pages/home/heroSection/heroSection";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Home | Apex Interiors & Engineering",
  description:
    "Interior Design and Structural Engineering services in Ghaziabad.",
};


export default function Home() {
    return (
        <>
            <main>
                <HeroSection/>
            </main>
        </>
    )
}