"use client";



import { motion } from "framer-motion";
import { Button } from "./ui/button";

import {
  slideLeft,
  staggerContainerSlow,
} from "../lib/animation";
import { teamSectionConfig } from "@/config/teamMembersConfig";
import TeamMemberCard from "./teamMemberCard";


const TeamMembers = () => {


  return (
    <section className="bg-cream-dark py-8 sm:py-12 md:py-16 overflow-hidden">
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
              {teamSectionConfig.content.badge}
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
              {teamSectionConfig.content.title}
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
              {teamSectionConfig.content.description}
            </motion.p>

            <motion.div
              variants={slideLeft}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button>
               {teamSectionConfig.content.button.label}
               {teamSectionConfig.content.button.icon}
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
          {teamSectionConfig.members.map((teamMember, index) => (
            <div key={teamMember.id}>
               <TeamMemberCard
              id={teamMember.id}
              name={teamMember.name}
              image={teamMember.image}
              role={teamMember.role}
              social={teamMember.social}
              animationDirection={teamMember.animationDirection}
              index={index}
            />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};


export default TeamMembers;