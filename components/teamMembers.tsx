"use client";

import Image from "next/image";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./customIcon/customIocn";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowBigRight, ArrowRightIcon, ArrowUpRight } from "lucide-react";

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

// ✅ direction → initial x/y values
const directionVariants = {
  left: { x: -80, y: 0, opacity: 0 },
  right: { x: 80, y: 0, opacity: 0 },
  bottom: { x: 0, y: 80, opacity: 0 },
};

const cardVariants = {
  hidden: (direction: "left" | "right" | "bottom") =>
    directionVariants[direction],
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
} as const;

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
  }) as const,
} ;

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};



const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;


const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alder Carter",
      role: "Lead Interior Designer",
      image: "/images/team/member-1.jpg",
      animationDirection: "left" as const,   // ✅ from left
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
      animationDirection: "bottom" as const, // ✅ from bottom
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
      animationDirection: "bottom" as const, // ✅ from bottom
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
      animationDirection: "right" as const,  // ✅ from right
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
        <div className="flex flex-col gap-6  mb-10  sm:mb-12 md:mb-16 lg:flex-row  lg:items-end lg:justify-between">

          {/* LEFT — h1 & h2 */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:max-w-[55%]"
          >
            <motion.h1
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg text-primary font-semibold capitalize mb-3"
            >
              Our Team
            </motion.h1>

            <motion.h2
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
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

          {/* RIGHT — p & button */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-start   gap-5 lg:max-w-[40%] lg:items-end lg:pb-1">
            <motion.p
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Behind every successful project is a dedicated team committed
              to quality craftsmanship and thoughtful design.
            </motion.p>

            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                className="text-[12px] py-4  px-5 rounded-sm bg-gold hover:bg-gold/80 text-cream  flex items-center gap-1">
                Meet our team
                <ArrowUpRight size={14} />
              </Button>
            </motion.div>
          </motion.div>

        </div>

        {/* TEAM GRID */}
        <motion.div
          variants={container}
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
      custom={animationDirection}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      // ✅ stagger each card slightly based on its index
      transition={{ delay: index * 0.15 }}
      className="relative group overflow-hidden rounded-xl"
    >

      {/* IMAGE */}
      <Image
        src={image}
        alt={name}
        width={500}
        height={600}
        className=" w-full object-cover transition-transform duration-500   group-hover:scale-105 "/>

      {/* BORDER OVERLAY */}
      <div className="absolute inset-0 rounded-xl border-2 border-white/30 pointer-events-none"/>

      {/* BOTTOM GRADIENT + NAME & ROLE */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent  rounded-b-xl">
        {/* ✅ name slides up with delay after card appears */}
        <motion.h3
          custom={0.3 + index * 0.15}
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white font-semibold text-sm sm:text-base lg:text-lg leading-snug">
          {name}
        </motion.h3>

        {/* ✅ role slides up slightly after name */}
        <motion.p
          custom={0.45 + index * 0.15}
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white/70 text-xs sm:text-sm mt-0.5"
        >
          {role}
        </motion.p>
      </div>

      {/* SOCIAL ICONS */}
      <div className=" absolute top-1/2 -translate-y-1/2 right-3  flex flex-col gap-2">
        {social?.instagram && (
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className=" w-8 h-8 rounded-full  bg-obsidian/20 backdrop-blur-sm  flex items-center justify-center hover:bg-obsidian/40 transition-colors duration-200 ">
            <InstagramIcon size={14} className="text-white" />
          </a>
        )}

        {social?.facebook && (
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className=" w-8 h-8 rounded-full  bg-obsidian/20 backdrop-blur-sm  flex items-center justify-center hover:bg-obsidian/40 transition-colors duration-200" >
            <FacebookIcon size={14} className="text-white" />
          </a>
        )}

        {social?.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full  bg-obsidian/20 backdrop-blur-sm  flex items-center justify-center  hover:bg-obsidian/40 transition-colors duration-200" >
            <LinkedinIcon size={14} className="text-white" />
          </a>
        )}
      </div>

    </motion.div>
  );
};

export default TeamMembers;