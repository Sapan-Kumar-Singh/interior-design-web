"use client";

import Image from "next/image";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "./icons/customIcons";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

import {
  slideLeft,
  staggerContainerSlow,
} from "../lib/animation";

interface Props {
  name: string;
  role: string;
  image: string;
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  animationDirection: "left" | "right" | "bottom";
}

const directionVariants = {
  left: { x: -80, y: 0, opacity: 0 },
  right: { x: 80, y: 0, opacity: 0 },
  bottom: { x: 0, y: 80, opacity: 0 },
};

const cardVariants = {
  hidden: (
    direction: "left" | "right" | "bottom"
  ) => directionVariants[direction],

  show: (custom: {
    index: number;
  }) => ({
    x: 0,
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.9,
      delay: custom.index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }as const),
}



const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alder Carter",
      role: "Lead Interior Designer",
      image: "/images/team/member-1.jpg",
      animationDirection: "left" as const,
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      name: "Sophia Miller",
      role: "Project Manager",
      image: "/images/team/member-2.jpg",
      animationDirection: "bottom" as const,
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Michael Anderson",
      role: "Kitchen Remodeling Expert",
      image: "/images/team/member-3.jpg",
      animationDirection: "bottom" as const,
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4,
      name: "Emily Roberts",
      role: "Bathroom Design Specialist",
      image: "/images/team/member-4.jpg",
      animationDirection: "right" as const,
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  return (
    <section className="bg-cream-dark py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">

        {/* HEADER ROW */}
        <div className="flex flex-col gap-6 mb-10 sm:mb-12 md:mb-16 lg:flex-row lg:items-end lg:justify-between">

          {/* LEFT */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:max-w-[55%]"
          >
            <motion.h1
              variants={slideLeft}
              className="text-lg text-primary font-semibold capitalize mb-3"
            >
              Our Team
            </motion.h1>

            <motion.h2
              variants={slideLeft}
              className="
                text-obsidian
                font-semibold
                capitalize
                leading-[1.1]
                tracking-[-0.02em]
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-[40px]
              "
            >
              The People Who Bring Your Vision to Life
            </motion.h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-start gap-5 lg:max-w-[40%] lg:items-start lg:pb-1"
          >
            <motion.p
              variants={slideLeft}
              className="text-gray-600 text-sm sm:text-base leading-relaxed"
            >
              Behind every successful project is a dedicated team committed
              to quality craftsmanship and thoughtful design.
            </motion.p>

            <motion.div
              variants={slideLeft}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button>
                Meet our team
                <ArrowUpRight size={14} />
              </Button>
            </motion.div>
          </motion.div>

        </div>

        {/* TEAM GRID */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((teamMember, index) => (
            <TeamMemberCard
              key={teamMember.id}
              name={teamMember.name}
              image={teamMember.image}
              role={teamMember.role}
              social={teamMember.social}
              animationDirection={teamMember.animationDirection}
              index={index}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const TeamMemberCard = ({
  name,
  role,
  image,
  social,
  animationDirection,
  index,
}: Props & { index: number }) => {
  return (
    <motion.div
      custom={animationDirection} // ✅ FIXED
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative group overflow-hidden rounded-xl will-change-transform"
    >

      {/* IMAGE */}
      <Image
        src={image}
        alt={name}
        width={500}
        height={600}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* BORDER */}
      <div className="absolute inset-0 rounded-xl border-2 border-white/30 pointer-events-none" />

      {/* TEXT AREA */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-xl">

        <motion.h3
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 1.5,
    delay: 0.25 + index * 0.12,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="text-cream font-semibold text-sm sm:text-base lg:text-lg leading-snug"
>
  {name}
</motion.h3>

        <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 1.5,
    delay: 0.35 + index * 0.12,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="text-cream/70 text-xs sm:text-sm mt-0.5"
>
  {role}
</motion.p>
      </div>

      {/* SOCIAL ICONS */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          delay: 0.45 + index * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute top-1/2 -translate-y-1/2 right-3 flex flex-col gap-2 z-20"
      >
        {social?.instagram && (
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-obsidian/20 backdrop-blur-sm flex items-center justify-center hover:bg-obsidian/40 transition-colors duration-200"
          >
            <InstagramIcon size={14} className="text-cream" />
          </a>
        )}

        {social?.facebook && (
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-obsidian/20 backdrop-blur-sm flex items-center justify-center hover:bg-obsidian/40 transition-colors duration-200"
          >
            <FacebookIcon size={14} className="text-cream" />
          </a>
        )}

        {social?.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-obsidian/20 backdrop-blur-sm flex items-center justify-center hover:bg-obsidian/40 transition-colors duration-200"
          >
            <LinkedinIcon size={14} className="text-cream" />
          </a>
        )}
      </motion.div>

    </motion.div>
  );
};

export default TeamMembers;