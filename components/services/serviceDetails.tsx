"use client";

import PageHero from "../pageHero";
import PageHeroContent from "../pageHeroContent";
import {
  ArrowRight,
  ArrowUpRight,
  CircleCheck,
  CircleCheckBig,
  House,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animation";

const ServiceDetails = () => {
  const serviceOptions = [
    {
      title: "Kitchen remodeling",
      link: "",
    },
    {
      title: "Custom cabinetry",
      link: "",
    },
    {
      title: "Bathroom renovation",
      link: "",
    },
    {
      title: "Tile & flooring",
      link: "",
    },
    {
      title: "Full home remodeling",
      link: "",
    },
  ];

  const kitchenRemodelingFeatures = [
    {
      title: "Custom Kitchen Design",
      description:
        "Tailored kitchen layouts designed to match your lifestyle and preferences.",
    },
    {
      title: "Cabinet Installation",
      description:
        "Premium cabinet solutions with modern finishes and optimized storage.",
    },
    {
      title: "Countertops & Surfaces",
      description:
        "Durable and elegant countertop installations for a refined look.",
    },
    {
      title: "Appliances Integration",
      description:
        "Seamless integration of modern appliances into your kitchen space.",
    },
    {
      title: "Lighting Solutions",
      description:
        "Functional and aesthetic lighting setups to enhance the atmosphere.",
    },
    {
      title: "Flooring & Backsplash",
      description:
        "Stylish flooring and backsplash options to complete your kitchen.",
    },
  ];

  const benefits = [
    {
      title: "Improved functionality and workflow",
    },
    {
      title: "Increased home value",
    },
    {
      title: "Modern and stylish appearance",
    },
    {
      title: "Better storage and organization",
    },
    {
      title: "Enhanced lighting and comfort",
    },
  ];

  return (
    <>
      <PageHero imgSrc="/images/services/service_cover_bg.jpg">
        <PageHeroContent
          title="Services"
          breadcrumb={
            <>
              <House size={14} className="text-primary" />
              <span>Home</span>
              <span>|</span>
              <span>Services Details</span>
            </>
          }
        />
      </PageHero>

      {/* MAIN SECTION */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16">
          
          {/* LEFT SIDEBAR */}
          <div className="space-y-8">

            {/* SERVICES CARD */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="bg-cream border-0 rounded-xl py-4 px-2">
                <CardHeader className="pb-4">
                  <CardTitle className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-obsidian">
                    Others Services
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  {serviceOptions.map((serviceOption, index) => (
                    <motion.div
                      key={serviceOption.title}
                      variants={slideUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Button
                        variant="secondary"
                        className="justify-between text-obsidian bg-obsidian/10 hover:bg-gold hover:text-cream w-full"
                      >
                        {serviceOption.title}
                        <ArrowRight size={18} />
                      </Button>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* HELP CARD */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden rounded-2xl min-h-[180px]"
            >
              <Image
                src="/images/serviceDetails/contact_card_cover.jpg"
                alt="contact card background image"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-obsidian/40" />

              <div className="relative z-10 flex h-full flex-col items-center justify-start text-center px-6 py-10">
                <motion.h3
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-2xl font-semibold text-cream"
                >
                  Need Help?
                </motion.h3>

                <motion.p
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-sm leading-6 text-cream/95"
                >
                  Contact our team for expert advice and a free consultation.
                </motion.p>

                <motion.div
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button className="mt-6">
                    Contact us
                    <ArrowUpRight size={16} />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10">

            {/* HERO IMAGE */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden rounded-3xl"
            >
              <Image
                src="/images/serviceDetails/kitchen_remodeling.jpg"
                alt="Kitchen remodeling"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* CONTENT */}
            <div className="space-y-6">

              <div className="space-y-4">
                <motion.h2
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-xl lg:text-3xl font-bold leading-tight"
                >
                  Expert Kitchen Remodeling Solutions
                </motion.h2>

                <motion.p
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1 }}
                  className="text-body"
                >
                  At Bathora, we specialize in creating beautiful, functional
                  kitchens tailored to your lifestyle. Whether you’re looking
                  for a modern upgrade or a complete transformation, our team
                  delivers high-quality craftsmanship and innovative design
                  solutions.
                </motion.p>

                <motion.p
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.2 }}
                  className="text-body"
                >
                  From layout planning to final finishes, we ensure every detail
                  is carefully executed to create a kitchen that is both stylish
                  and practical.
                </motion.p>
              </div>

              {/* FEATURES */}
              <div className="pt-6">
                <motion.h3
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-2xl font-semibold mb-6"
                >
                  What’s Included in Our Kitchen Remodeling
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {kitchenRemodelingFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      variants={slideUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Card className="h-full border-0 bg-muted/40 rounded-xl">
                        <CardHeader className="space-y-4">
                          <CardTitle className="text-lg leading-7 flex items-start gap-4 text-obsidian">
                            <CircleCheckBig
                              size={20}
                              className="text-gold mt-1 shrink-0"
                            />

                            <span>{feature.title}</span>
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="pl-12">
                          <p className="text-sm leading-7 text-muted-foreground">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* BENEFITS */}
              <div className="mt-4">
                <motion.h3
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-2xl font-semibold mb-4"
                >
                  Benefits of Kitchen Remodeling
                </motion.h3>

                <div className="grid grid-cols-1 gap-2">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      variants={slideUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CircleCheck
                        size={16}
                        className="text-gold-dark mt-1 shrink-0"
                      />

                      <p className="text-body leading-7">
                        {benefit.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;