import Image from "next/image";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "./icons/customIcons";
import { motion } from "framer-motion";
import { TeamMember, TeamMemberAnimationDirection } from "@/config/teamMembersConfig";

const directionVariants = {
  left: { x: -80, y: 0, opacity: 0 },
  right: { x: 80, y: 0, opacity: 0 },
  bottom: { x: 0, y: 80, opacity: 0 },
};

const cardVariants = {
  hidden: (
    direction: TeamMemberAnimationDirection
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

const TeamMemberCard = ({
  id,
  name,
  role,
  image,
  social,
  animationDirection,
  index,
}: TeamMember & { index: number }) => {
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

export default TeamMemberCard;