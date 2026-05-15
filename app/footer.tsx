"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "@/components/customIcon/customIocn";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/animation";


const socialIcons = {
    facebook: <FacebookIcon />,
    twitter: <TwitterIcon />,
    youtube: <YoutubeIcon />,
    instagram: <InstagramIcon />
}



const Footer = () => {
    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Our Projects", href: "/projects" },
        { label: "Our Services", href: "/services" },
        { label: "Contact Us", href: "/contact", badge: "New" },
    ];

    const services = [
        { label: "Kitchen Remodeling", href: "/services/kitchen" },
        { label: "Bathroom Renovation", href: "/services/bathroom" },
        { label: "Custom Cabinetry", href: "/services/cabinetry" },
        { label: "Tile & Flooring", href: "/services/flooring" },
        { label: "Lighting & Fixtures", href: "/services/lighting", badge: "New" },
    ];

    const contactInfo=[{
        icon:<MapPin  size={14} className="text-primary"/>,
        label:"123 Modern Lane, Design City, USA"
    },{
        icon:<Phone size={14} className="text-primary"/>,
        label:"+91-333344455"
    },{
        icon:<Mail size={14} className="text-primary"/>,
        label:"info@bathora.com"
    },{
        icon:<Clock size={14} className="text-primary"/>,
        label:"Mon – Fri: 9 AM – 6 PM"
    }]

    return (
        <footer className="bg-obsidian text-white">

            {/* NEWSLETTER STRIP */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* HEADING */}
                    <motion.h2
                        variants={slideUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className=" text-cream font-semibold text-xl sm:text-2xl lg:text-3xl leading-tight tracking-tight">
                        Transform Your Home,<br />
                        One Email At A Time
                    </motion.h2>

                    {/* DESCRIPTION */}
                    <motion.p
                        variants={slideUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-cream/80 text-sm sm:text-base leading-relaxed"
                    >
                        Subscribe to our newsletter and get exclusive kitchen & bathroom
                        design tips, remodeling inspiration.
                    </motion.p>

                    {/* INPUT + BUTTON */}
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex flex-col gap-3"
                    >
                        <Input
                            type="email"
                            placeholder="Email Address"
                            className="bg-cream text-obsidian placeholder:text-gray-400  border-0 rounded-sm  px-4  py-4  text-sm  focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-0 outline-none w-full"
                        />
                        <Button>
                            Subscribe
                        </Button>
                    </motion.div>
                </div>
            </div>


            {/* MAIN FOOTER */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* COL 1 — BRAND */}
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-5"
                    >
                        {/* LOGO */}
                        <div className="text-2xl font-bold tracking-tight">
                            <span className="text-gold">B</span>athora
                        </div>

                        <p className="text-white/50 text-sm leading-relaxed">
                            Bathora is your partner in transforming kitchens & bathrooms into
                            luxurious, functional spaces. We combine modern design with expert
                            craftsmanship to deliver results that inspire.
                        </p>

                        {/* SOCIAL ICONS */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex gap-3"
                        >
                            {Object.entries(socialIcons).map(([key, icon]) => (
                                <motion.a
                                    key={key}
                                    href="#"
                                    variants={slideUp}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className=" w-9 h-9 rounded-full border border-white/20 flex items-center justify-center  text-white/60 hover:text-white  hover:border-white/50 transition-colors duration-200 ">
                                    {icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* COL 2 — QUICK LINKS */}
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h3 className="text-white font-semibold text-base mb-5">
                            Quick Links
                        </h3>
                        <motion.ul
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            {quickLinks.map(({ label, href, badge }) => (
                                <motion.li key={label} variants={slideUp}>
                                    <Link
                                        href={href}
                                        className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200  group">
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {label}
                                        </span>
                                        {badge && (
                                            <span className="text-[10px] px-2 py-0.5  bg-gold/20 text-gold rounded-full font-medium">
                                                {badge}
                                            </span>
                                        )}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* COL 3 — SERVICES */}
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h3 className="text-white font-semibold text-base mb-5">
                            Our Services
                        </h3>
                        <motion.ul
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            {services.map(({ label, href, badge }) => (
                                <motion.li key={label} variants={slideUp}>
                                    <Link
                                        href={href}
                                        className="flex items-center gap-2  text-white/50 hover:text-white  text-sm transition-colors duration-200  group">
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {label}
                                        </span>
                                        {badge && (
                                            <span className="text-[10px] px-2 py-0.5  bg-gold/20 text-gold rounded-full font-medium">
                                                {badge}
                                            </span>
                                        )}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* COL 4 — CONTACT */}
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h3 className="text-white font-semibold text-base mb-5">
                            Contact Info
                        </h3>
                        <motion.ul
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {contactInfo.map(({ icon, label }) => (
                                <motion.li
                                    key={label}
                                    variants={slideUp}
                                    className="flex items-start gap-3 text-sm text-white/50"
                                >
                                    <span className="mt-0.5 shrink-0">{icon}</span>
                                    <span>{label}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                </div>
            </div>

            {/* BOTTOM BAR */}
            <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className=" max-w-7xl mx-auto px-4 sm:px-8 lg:px-16  py-5 flex flex-col sm:flex-row items-center justify-between  gap-3 text-white/40 text-xs ">
                    <span>© TemplateOrbit.Com</span>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <span>|</span>
                        <Link href="/terms" className="hover:text-white transition-colors duration-200">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </motion.div>

        </footer>
    );
};

export default Footer;