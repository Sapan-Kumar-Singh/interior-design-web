import { useRef,  } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { slideRight } from "../lib/animation";
import { ServiceItem } from "@/config/serviceConfig";
import Link from "next/link";


const ContentCard = ({slug,title,description,image}:ServiceItem) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
 
  return (
    <div ref={ref} className="overflow-hidden rounded-lg ">
      <motion.div
        variants={slideRight}
        animate={isInView ? "show" : "hidden"}
        initial="hidden"
        transition={{ delay:0.8 }}
         className="relative bg-cream-dark flex flex-col h-full w-full  w-full  min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]"
      >
        <div className="px-7 pt-7 pb-5 flex-none">
          <h2 className="text-obsidian text-3xl font-semibold leading-tight mb-3">
            {title}
          </h2>
          <p className="text-obsidian/80  text-sm leading-relaxed mb-4 font-normal">
            {description}
          </p>
          <Link href={`/services/${slug}`}
            className="inline-flex items-center gap-1.5 text-gold hover:text-gold-dark text-sm font-medium underline underline-offset-4"
          >
            View Details <ArrowUpRight size={14} />
          </Link>
        </div>
 
        <div className="relative flex-1 mx-3.5 mb-3.5 rounded-xl overflow-hidden min-h-[160px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ContentCard;