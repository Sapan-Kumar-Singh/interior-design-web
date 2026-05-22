"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {AnimatePresence,motion,useInView} from "framer-motion"

import { Plus,Share2, X,ZoomIn,ZoomOut} from "lucide-react"

import { Button } from "@/components/ui/button"

type Direction = "left" | "right" | "top" | "bottom"

interface ProjectCardProps {
    title: string
    imgSrc: string
    animationDirection: Direction
}

const ProjectCard = ({
    title,
    imgSrc,
    animationDirection,
}: ProjectCardProps) => {
    const [open, setOpen] = useState(false)
    const [scale, setScale] = useState(1)
  // Viewport animation
    const ref = useRef(null)

    const isInView = useInView(ref, {
        once: true,
        amount: 0.2,
    })


    // Zoom handlers
    const zoomIn = () => {
        setScale((prev) => Math.min(prev + 0.2, 3))
    }

    const zoomOut = () => {
        setScale((prev) => Math.max(prev - 0.2, 1))
    }

    const handleClose = () => {
        setOpen(false)
        setScale(1)
    }

    // Share
    const handleShare = async () => {
        try {
            await navigator.share({
                title,
                text: "Check out this project",
                url: window.location.href,
            })
        } catch (error) {
            console.log(error)
        }
    }

  
    // Direction offsets
    const slideOffset = {
        left: {x: "-100%",y: 0},
        right: {x: "100%",y: 0,},
        top: { x: 0,y: "-100%",},
        bottom: { x: 0,y: "100%",},
    }

    const { x, y } = slideOffset[animationDirection]
 // Prevent body scroll when modal opens
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : ""

        return () => {
            document.body.style.overflow = ""
        }
    }, [open])

    return (
        <>
            {/* CARD */}
            <motion.div
                ref={ref}
                initial="rest"
                whileHover="hover"
                className="relative  h-[400px] 
               rounded-2xl  overflow-hidden cursor-pointer group w-full" >
                {/* IMAGE ANIMATION */}
                <motion.div
                    initial={{
                        x,
                        y,
                        opacity: 0,
                        scale: 1.08,
                    }}
                    animate={
                        isInView
                            ? {
                                x: 0,
                                y: 0,
                                opacity: 1,
                                scale: 1,
                            }
                            : {}
                    }
                    transition={{
                        duration: 2.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                        position: "absolute",
                        inset: 0,
                    }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={imgSrc}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* OVERLAY */}
                <motion.div
                    variants={{
                        rest: {
                            y: "100%",
                            opacity: 0,
                        },

                        hover: {
                            y: "0%",
                            opacity: 1,
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    className=" absolute  inset-x-0 bottom-0  z-10">
                    <div
                        className="w-full bg-gradient-to-t from-black/95 via-black/40 to-transparent 
                        pb-4 pt-12 flex  flex-col items-center text-center">
                        <Button
                            className="rounded-full mb-4"
                            onClick={() => setOpen(true)}
                        >
                            <Plus size={20} />
                        </Button>

                        <h3 className="text-cream text-xl font-semibold mb-4">
                            {title}
                        </h3>

                        <Button>
                            Project details
                        </Button>
                    </div>
                </motion.div>
            </motion.div>

            {/* FULLSCREEN MODAL */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className=" fixed  inset-0  z-50 bg-black/80    flex items-center justify-center"
                        onClick={handleClose}
                    >
                        <div
                            className="relative w-full  h-full  flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* TOP CONTROLS */}
                            <div
                                className="absolute top-6 right-6 flex items-center gap-3 z-50">
                                <button
                                    onClick={zoomIn}
                                    className="p-3 bg-transparent cursor-pointer"
                                >
                                    <ZoomIn
                                        className="text-cream"
                                        size={20}
                                    />
                                </button>

                                <button
                                    onClick={zoomOut}
                                    className="p-3 bg-transparent cursor-pointer"
                                >
                                    <ZoomOut
                                        className="text-cream"
                                        size={20}
                                    />
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="p-3 bg-transparent cursor-pointer"
                                >
                                    <Share2
                                        className="text-cream"
                                        size={20}
                                    />
                                </button>

                                <button
                                    onClick={handleClose}
                                    className="p-3 bg-transparent cursor-pointer"
                                >
                                    <X
                                        className="text-cream"
                                        size={20}
                                    />
                                </button>
                            </div>

                            {/* MODAL IMAGE */}
                            <motion.div
                                animate={{ scale }}
                                transition={{ duration: 0.3 }}
                                className=" relative  w-[90vw] md:w-[75vw]  lg:w-[65vw]  h-[75vh]">
                                <Image
                                    src={imgSrc}
                                    alt={title}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ProjectCard;