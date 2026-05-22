"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  AlarmClock,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../../ui/card"
import { fadeUpReveal,staggerContainer } from "@/lib/animation"
import InputForm from "../../inputForm"

import { InputFormConfig } from "@/types/form"



const ContactContent = () => {
  const contactOptions = [
    {
      icon: <PhoneCall size={18} />,
      label: "Call Now",
      value: "(123) 456-7890",
    },
    {
      icon: <Mail size={18} />,
      label: "Email Us",
      value: "info@bathora.com",
    },
    {
      icon: <MapPin size={18} />,
      label: "Office Location",
      value: "123 Modern Lane, Design City",
    },
    {
      icon: <AlarmClock size={18} />,
      label: "Working Hours",
      value: "Mon – Fri: 9 AM – 6 PM",
    },
  ]

  const formConfig: InputFormConfig = {
    title: "Send Us a Message",

    description:
      "Fill out the form below and our team will get back to you as soon as possible.",

    inputFields: [
      {
        field: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Your Name",
      },
      {
        field: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "Your Email Address",
        flex: 0.5,
      },
      {
        field: "phoneNumber",
        label: "Phone Number",
        type: "text",
        required: true,
        placeholder: "Your Phone Number",
        flex: 0.5,
      },
      {
        field: "subject",
        label: "Subject",
        type: "text",
        required: true,
        placeholder: "Subject",
      },
      {
        field: "message",
        label: "Message",
        type: "textarea",
        rows: 5,
        required: true,
        placeholder: "Tell us about your project...",
      },
    ],
    submitButtonText:"Send Message"
  }

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
            Contact Us
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
            Let’s Start Your Dream Project
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
            Get in touch with Bathora to discuss your kitchen
            or bathroom remodeling needs. We’re here to help
            you every step of the way.
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
              src="/images/contact/contact_form_card.jpg"
              alt="contact form image"
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
            src="https://maps.google.com/maps?width=675&height=400&hl=en&q=Ghaziabad&t=&z=14&ie=UTF8&iwloc=B&output=embed"
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