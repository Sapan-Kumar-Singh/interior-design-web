import React from 'react'
import { Quote, Star } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card"

const ReviewCard = () => {
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
            U
          </div>

          <Quote
            size={30}
            className="
              text-gold-dark
              opacity-80
              shrink-0
            "
          />
        </CardTitle>

        <CardDescription className="space-y-4">

          {/* Rating Row */}
          <div className="flex items-center gap-1 flex-wrap">
            <Star
              size={14}
              className="text-gold-dark fill-gold-dark"
            />
            <Star
              size={14}
              className="text-gold-dark fill-gold-dark"
            />
            <Star
              size={14}
              className="text-gold-dark fill-gold-dark"
            />
            <Star
              size={14}
              className="text-gold-dark fill-gold-dark"
            />
            <Star
              size={14}
              className="text-gold-dark fill-gold-dark"
            />
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0 mt-4 flex-1">
        <p className="text-obsidian text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque luctus consectetur blandit.
          In finibus justo at ante convallis vulputate.
        </p>
      </CardContent>

      <CardFooter
        className="
          border-none
          bg-inherit
          flex
          flex-col
          items-start
          gap-1
          px-0

        "
      >
        <div className="font-bold text-sm text-obsidian">
          David Wilson
        </div>

        <div className="font-semibold text-xs text-dark-gold">
          Homeowner
        </div>
      </CardFooter>
    </Card>
  )
}

export default ReviewCard