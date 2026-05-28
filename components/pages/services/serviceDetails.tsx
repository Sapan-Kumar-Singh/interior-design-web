"use client";

import PageHero from "../../pageHero";
import PageHeroContent from "../../pageHeroContent";
import {
  ArrowRight,
  ArrowUpRight,
  CircleCheck,
  CircleCheckBig,
  House,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animation";
import { otherServiceConfig, serviceDetailsConfig, serviceHelpCard } from "@/config/serviceDetailConfig";
import notFound from "@/app/not-found";
import { Suspense } from "react";
import PageHeroSkeleton from "@/components/skeleton/pageHeroSkeleton";

interface ServiceDetailsProps {
  slug: string;
}
const ServiceDetails = ({ slug }: ServiceDetailsProps) => {

  const service = serviceDetailsConfig[slug];

  if (!service) {
    notFound();
  }


  return (
    <>
      <Suspense fallback={<PageHeroSkeleton />}>
        <PageHero imgSrc={service.pageHero.imgSrc}>
          <PageHeroContent
            title={service.pageHero.title}
            breadcrumb={service.pageHero.breadcrumb}
          />
        </PageHero>
      </Suspense>



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
                    {otherServiceConfig.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  {otherServiceConfig.serviceOptions.map((serviceOption, index) => (
                    <motion.div
                      key={serviceOption.slug}
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
                src={serviceHelpCard.background.src}
                alt={serviceHelpCard.background.alt}
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
                  {serviceHelpCard.title}
                </motion.h3>

                <motion.p
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-sm leading-6 text-cream/95"
                >
                  {serviceHelpCard.description}
                </motion.p>

                <motion.div
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button className="mt-6">
                    {serviceHelpCard.button.label}
                    {serviceHelpCard.button.icon}
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
                src={service.content.heroImage}
                alt={service.content.heroImageAlt}
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
                  {service.content.heading}
                </motion.h2>

                <motion.p
                  variants={slideUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1 }}
                  className="text-body"
                >
                  {service.content.description}
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
                  {service.featuresSection.title}
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {service.featuresSection.items.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      variants={slideUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Card className="h-full border-0 bg-muted/40 rounded-xl p-4">
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
                  {service.benefitsSection.title}
                </motion.h3>

                <div className="grid grid-cols-1 gap-2">
                  {service.benefitsSection.items.map((benefit, index) => (
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