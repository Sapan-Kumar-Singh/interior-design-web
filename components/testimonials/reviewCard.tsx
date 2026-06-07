import React from 'react'
import { Quote, Star } from "lucide-react"
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card"

interface ReviewCardProps{
imgSrc?:string;
name:string;
rating:number;
review:string;
role:string;
}
const ReviewCard = ({imgSrc,name,rating,review,role}:ReviewCardProps) => {
  return (
    <Card
      className="
        w-full
        bg-cream
        border border-white/10
        rounded-2xl
        px-3 sm:px-4
        py-4
        shadow-lg
        h-full
        flex flex-col
        justify-between
      "
    >
      <CardHeader className="space-y-4 p-0">

        {/* TOP */}
        <CardTitle className="flex items-center justify-between gap-4">
          {imgSrc ? 
          <Image
            src={imgSrc}
             alt={name}
             fill
             className="object-cover"
              sizes="
               (max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw
             "
            /> :
           <div
            className="
              h-10 w-10
              bg-obsidian/80
              rounded-full
              text-cream
              text-base
              font-semibold
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            {name.slice(0,1).toUpperCase()}
          </div>
          }
         <Quote size={30} className="text-gold-dark opacity-80 shrink-0"/>
        </CardTitle>

        <CardDescription className="space-y-4">

          {/* Rating Row */}
           <div className="flex items-center gap-1">
              {Array.from({ length:rating }).map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  className="text-gold-dark fill-gold-dark"
                />
              ))}
            </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0 mt-4 flex-1">
        <p className="text-obsidian text-sm sm:text-base leading-relaxed">
         {review}
        </p>
      </CardContent>

      <CardFooter
        className="border-none bg-inherit flex flex-col items-start gap-1 px-0">
        <div className="font-bold text-sm text-obsidian">
          {name}
        </div>

        <div className="font-semibold text-xs text-dark-gold">
          {role}
        </div>
      </CardFooter>
    </Card>
  )
}

export default ReviewCard