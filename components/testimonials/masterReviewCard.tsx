import { Star } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

const MasterReviewCard = () => {
  return (
    <Card
      className="
        w-full
        bg-obsidian
        border border-white/10
        rounded-2xl
        px-4 sm:px-5
        py-4 sm:py-5
        shadow-lg
        h-full
        flex flex-col
        justify-between
      "
    >
      <CardHeader className="space-y-4 p-0">

        <CardTitle
          className="
            text-cream
            text-lg
            sm:text-xl
            md:text-2xl
            font-bold
            leading-snug
          "
        >
          Excellent Based on{" "}
          <br className="hidden sm:block" />
          Client Reviews
        </CardTitle>

        <CardDescription className="space-y-4">

          {/* Rating Row */}
          <div
            className="
              flex
              items-center
              gap-3
              flex-wrap
            "
          >
            <div className="flex items-center gap-1">
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

            <span
              className="
                text-cream
                text-sm
                font-semibold
                leading-none
              "
            >
              4.9 out of 5
            </span>
          </div>

          {/* Review Text */}
          <p
            className="
              text-sm
              sm:text-base
              text-cream/80
              leading-relaxed
            "
          >
            Based on 120+ Google Reviews
          </p>

          {/* Divider */}
          <div className="h-px bg-white/10 w-full" />
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0 mt-4">
        <p
          className="
            text-cream
            text-sm
            sm:text-base
            leading-relaxed
          "
        >
          Homeowners consistently choose Bathora for our quality
          craftsmanship, attention to detail, and reliable service.
        </p>
      </CardContent>
    </Card>
  )
}

export default MasterReviewCard