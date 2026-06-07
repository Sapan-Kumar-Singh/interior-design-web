"use client";

import PageHero from "../../pageHero";
import PageHeroContent from "../../pageHeroContent";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import BeforeAfterSlider from "../../transformationSlide";
import RemodelingBanner from "../../remodelingBanner";
import { projectDetailsConfig } from "@/config/projectDetailsConfig";
import NotFound from "@/app/not-found";

interface ProjectDetailsProps {
  slug: string;
}
const ProjectDetails = ({ slug }: ProjectDetailsProps) => {

  console.log("slug--",slug);
  const details = projectDetailsConfig[slug];
   if(!details){
    return <NotFound/>
   }

  return (
    <>
        <PageHero imgSrc={details.pageHero.imgSrc}>
          <PageHeroContent
            title={details.pageHero.title}
            breadcrumb={details.pageHero.breadcrumb}
          />
        </PageHero>

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
            src={details.heroImage.src}
            alt={details.heroImage.alt}
            fill
            className="object-cover"
             sizes="
               (max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw
             "
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
              {details.overview.title}
            </h1>

            <p className="text-body leading-8">
              {details.overview.descriptions}
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
                  {details.projectMeta.map((meta, index) => (
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
          <BeforeAfterSlider
            beforeTransformationImgSrc={details.transformation.beforeImage}
            afterTransformationImgSrc={details.transformation.afterImage}
            afterLabel={details.transformation.afterLabel}
            beforeLabel={details.transformation.beforeLabel}
          />
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
                  {details.designDetails.title}
                </CardTitle>

                <CardDescription className="text-body leading-7">
                  {details.designDetails.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {details.designDetails.content.map((detail, index) => (
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
                  {details.keyFeatures.title}
                </CardTitle>

                <CardDescription className="text-body leading-7">
                  {details.keyFeatures.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {details.keyFeatures.content.map((keyFeature, index) => (
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
              {details.finishingDetails.title}
            </h2>

            <p className="text-body leading-7">
              {details.finishingDetails.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {details.finishingDetails.materialsAndFinishes.map((detail, index) => (
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
            {details.challenges.title}
          </h2>

          <p className="text-body leading-8">
            {details.challenges.descriptions}
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