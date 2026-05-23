import React, { ReactNode } from "react";
import Image from "next/image";

interface PageHeroProps {
  children: ReactNode;
  imgSrc?: string;
  alt?:string;
  className?: string;
  overlayClassName?: string;
  priority?: boolean;
}

const PageHero = ({
  children,
  imgSrc = "/images/cover-bg.jpg",
  alt="Page hero background",
  className,
  overlayClassName,
  priority = true,
}: PageHeroProps) => {
  return (
    <section
      className={`
        relative
        min-h-[60vh]
        md:min-h-[70vh]
        lg:min-h-[80vh]
        overflow-hidden
        flex flex-col
        ${className ?? ""}
      `}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imgSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />

        <div
          className={`
            absolute inset-0 bg-obsidian/40
            ${overlayClassName ?? ""}
          `}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        {children}
      </div>
    </section>
  );
};

export default PageHero;