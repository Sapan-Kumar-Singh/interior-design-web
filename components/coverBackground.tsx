import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Image from "next/image";

interface CoverBackgroundProps {
  children: ReactNode;
}

const CoverBackground = ({ children }: CoverBackgroundProps) => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cover-bg.jpg"
          alt="Cover background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex-1">
        {children}
      </div>

    </section>
  );
};

export default CoverBackground;