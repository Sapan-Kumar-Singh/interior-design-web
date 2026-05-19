"use client";

import CoverBackground from "../coverBackground/coverBackground";
import CoverText from "../coverBackground/coverText";
import {
  AlarmClock,
  CircleCheck,
  House,
  MapPin,
  ShieldUser,
  Sprout,
} from "lucide-react";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import BeforeAfterSlider from "../beforeAfterSlider";
import RemodelingBanner from "../servicesPage/remodelingBanner";

const ProjectDetails = () => {
  const projectMeta = [
    {
      icon: <Sprout size={18}/>,
      title: "Kitchen Remodeling",
    },
    {
      icon: <ShieldUser size={18} />,
      title: "Private Homeowner",
    },
    {
      icon: <MapPin size={18} />,
      title: "New York, USA",
    },
    {
      icon: <AlarmClock size={18} />,
      title: "6 Weeks",
    },
  ];

  const designDetails = {
    title: "Design Concept",
    description:
      "The design concept centered around minimalism and luxury. A neutral color palette combined with warm textures creates a welcoming yet refined atmosphere.",
    content: [
      {
        icon: <CircleCheck size={18} />,
        label: "Clean lines and open space",
      },
      {
        icon: <CircleCheck size={18} />,
        label: "Custom cabinetry with soft-close features",
      },
      {
        icon: <CircleCheck size={18} />,
        label: "Marble countertops for a premium finish",
      },
    ],
  };

  const keyFeatures = {
    title: "Key Features & Highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    content: [
      {
        icon: <CircleCheck size={18} />,
        label: "Custom-built modern cabinetry",
      },
      {
        icon: <CircleCheck size={18} />,
        label: "High-end marble countertops",
      },
      {
        icon: <CircleCheck size={18} />,
        label: "Smart storage solutions",
      },
      {
        icon: <CircleCheck size={18} />,
        label: "Energy-efficient lighting system",
      },
      {
        icon: <CircleCheck size={18} />,
        label: "Premium appliances integration",
      },
    ],
  };

  const finishingDetails = {
    title: "Materials & Finishes",
    description:
      "We selected high-quality materials to ensure durability and a luxurious look:",
    materialsAndFinishes: [
      {
        label: "Cabinetry",
        value: "Matte finish custom wood cabinets",
      },
      {
        label: "Countertops",
        value: "Natural marble stone",
      },
      {
        label: "Flooring",
        value: "Large-format porcelain tiles",
      },
      {
        label: "Backsplash",
        value: "Minimalist stone tile design",
      },
    ],
  };

  return (
    <>
      <CoverBackground imgSrc="/images/services/service_cover_bg.jpg">
        <CoverText
          title="Project Details"
          breadcrumbelement={
            <>
              <House size={14} className="text-primary" />
              <span>Home</span>
              <span>|</span>
              <span>Project Details</span>
            </>
          }
        />
      </CoverBackground>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-20 space-y-12 lg:space-y-16">

        {/* HERO IMAGE */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative h-[220px] sm:h-[300px] lg:h-[350px] overflow-hidden rounded-3xl"
        >
          <Image
            src="/images/serviceDetails/kitchen_remodeling.jpg"
            alt="Kitchen remodeling"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* OVERVIEW + META */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-12">

          {/* OVERVIEW */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-obsidian">
              Project Overview
            </h1>

            <p className="text-body leading-8">
              This project involved a complete transformation of an outdated
              kitchen into a sophisticated, modern space. The goal was to
              create an open-concept layout with improved functionality, sleek
              aesthetics, and high-end finishes.
            </p>

            <p className="text-body leading-8">
              Our team focused on maximizing space, enhancing lighting, and
              integrating smart storage solutions to ensure both beauty and
              practicality.
            </p>
          </motion.div>

          {/* META CARD */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="border-0 bg-gold rounded-xl h-full">
              <CardHeader>
                <CardTitle className=" text-cream text-xl">
                  Project Meta
                </CardTitle>
              </CardHeader>

              <CardContent className="mt-6">
                <ul className="space-y-6">
                  {projectMeta.map((meta, index) => (
                    <motion.li
                      key={meta.title}
                      variants={slideUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center gap-4"
                    >
                      <div className="text-cream shrink-0">
                        {meta.icon}
                      </div>

                      <span className="text-cream">
                        {meta.title}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* BEFORE AFTER */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BeforeAfterSlider />
        </motion.div>

        {/* DETAILS CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* DESIGN */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full border-0 bg-muted/40 rounded-2xl">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl">
                  {designDetails.title}
                </CardTitle>

                <CardDescription className="text-body leading-7">
                  {designDetails.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {designDetails.content.map((detail, index) => (
                    <motion.li
                      key={detail.label}
                      variants={slideUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-primary mt-1 shrink-0">
                        {detail.icon}
                      </span>

                      <span className="text-body">
                        {detail.label}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full border-0 bg-muted/40 rounded-2xl">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl">
                  {keyFeatures.title}
                </CardTitle>

                <CardDescription className="text-body leading-7">
                  {keyFeatures.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {keyFeatures.content.map((keyFeature, index) => (
                    <motion.li
                      key={keyFeature.label}
                      variants={slideUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-primary mt-1 shrink-0">
                        {keyFeature.icon}
                      </span>

                      <span className="text-body">
                        {keyFeature.label}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* MATERIALS */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {finishingDetails.title}
            </h2>

            <p className="text-body leading-7">
              {finishingDetails.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {finishingDetails.materialsAndFinishes.map((detail, index) => (
              <motion.div
                key={detail.label}
                variants={slideUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="border-0 bg-muted/40 rounded-sm">
                  <CardContent className="px-4  py-2">
                    <div className="text-obsidian text-sm">
                        <span >{detail.label}</span> : <span>{detail.value}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CHALLENGES */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">
            Challenges & Solutions
          </h2>

          <p className="text-body leading-8">
            The original kitchen had limited space and poor lighting. Our team
            redesigned the layout to create an open flow and installed layered
            lighting to brighten the entire space.
          </p>

          <p className="text-body leading-8">
            We also introduced custom storage solutions to maximize usability
            without compromising aesthetics.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <RemodelingBanner />
        </motion.div>
      </section>
    </>
  );
};

export default ProjectDetails;