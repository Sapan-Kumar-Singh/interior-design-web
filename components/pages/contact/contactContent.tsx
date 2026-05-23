"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../../ui/card"
import { fadeUpReveal,staggerContainer } from "@/lib/animation"
import InputForm from "../../inputForm"


import { contactConfig} from "@/config/contactConfig"


const ContactContent = () => {
 
  const {hero,contactOptions,contactImage,formConfig,map}=contactConfig;
  return (
    <main className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="
          max-w-6xl
          py-12
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16 xl:px-0
        "
      >
        {/* TOP TEXT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="
            flex flex-col
            items-center text-center
            gap-3 sm:gap-4 md:gap-5
          "
        >
          <motion.h1
            variants={fadeUpReveal}
            className="
              text-gold
              text-xs sm:text-sm md:text-base
              font-semibold
              tracking-wide
            "
          >
            {hero.badge}
          </motion.h1>

          <motion.h2
            variants={fadeUpReveal}
            className="
              text-xl sm:text-2xl md:text-3xl
              lg:text-4xl xl:text-5xl
              font-semibold
              leading-tight
              tracking-[-0.02em]
              max-w-3xl
            "
          >
            {hero.title}
          </motion.h2>

          <motion.p
            variants={fadeUpReveal}
            className="
              text-sm md:text-base
              text-gray-600
              leading-relaxed
              max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
            "
          >
          {hero.description}
          </motion.p>
        </motion.div>

        {/* CONTACT CARDS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            mt-10
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
          "
        >
          {contactOptions.map((contactOption) => (
            <motion.div
              key={contactOption.label}
              variants={fadeUpReveal}
            >
              <Card
                className="
                  h-full
                  py-4
                  bg-cream/80
                  border-none
                  shadow-md
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <CardHeader
                  className="
                    flex flex-col
                    items-center text-center
                    space-y-4 pb-4
                  "
                >
                  <div
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-gold text-cream
                    "
                  >
                    {contactOption.icon}
                  </div>

                  <CardDescription
                    className="
                      text-sm md:text-base
                      font-bold
                    "
                  >
                    {contactOption.label}
                  </CardDescription>
                </CardHeader>

                <CardContent
                  className="
                    text-center
                    text-sm
                  "
                >
                  {contactOption.value}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* IMAGE + FORM */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="
            flex flex-col lg:flex-row
            items-stretch
            gap-8
            w-full
            py-12
          "
        >
          {/* IMAGE */}
          <motion.div
            variants={fadeUpReveal}
            className="
              relative
              w-full lg:w-1/2
              h-[350px]
              md:h-[500px]
              lg:h-auto
              min-h-[500px]
            "
          >
            <Image
              src={contactImage.src}
              alt={contactImage.alt}
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>

          {/* FORM */}
          <motion.div
            variants={fadeUpReveal}
            className="
              w-full lg:w-1/2
              rounded-2xl
            "
          >
            <InputForm
              title={formConfig.title}
              description={formConfig.description}
              inputFields={formConfig.inputFields}
              submitButtonText={formConfig.submitButtonText}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* MAP SECTION */}
      <motion.section
        variants={fadeUpReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="
          max-w-6xl
          pb-12
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16 xl:px-0
        "
      >
        <div
          className="
            relative
            w-full
            h-[220px]
            sm:h-[280px]
            lg:h-[380px]
            overflow-hidden
            rounded-2xl
            shadow-[0_4px_30px_rgba(0,0,0,0.08)]
          "
        >
          <iframe
            title="Google Map"
            src={map.mapUrl}
            className="
              absolute inset-0
              w-full h-full
              border-0
            "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </motion.section>
    </main>
  )
}

export default ContactContent;