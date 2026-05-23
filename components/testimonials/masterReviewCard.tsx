import { Star } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "../ui/card"

interface MasterReviewCardProps {
  title: string;
  rating: {
    value: string;
    totalReviewsText: string;
    stars: number;
  };
  description: string;
}
const MasterReviewCard = ({ title, rating, description }: MasterReviewCardProps) => {
  const {stars,totalReviewsText,value}=rating;
  return (
    <Card
      className="w-full bg-obsidian border border-white/10 rounded-2xl
        px-4 sm:px-5  py-4 sm:py-5 shadow-lg
        h-full flex flex-col  justify-between">
      <CardHeader className="space-y-4 p-0">

        <CardTitle className="text-cream text-lg sm:text-xl md:text-2xl font-bold leading-snug">
          {title}
        </CardTitle>

        <CardDescription className="space-y-4">

          {/* Rating Row */}
          <div
            className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1">
              {Array.from({ length:stars }).map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  className="text-gold-dark fill-gold-dark"
                />
              ))}
            </div>
            <span className=" text-cream text-sm font-semibold leading-none">
              {value}
            </span>
          </div>

          {/* Review Text */}
          <p className="text-sm sm:text-base  text-cream/80 leading-relaxed">
           {totalReviewsText}
          </p>

          {/* Divider */}
          <div className="h-px bg-white/10 w-full" />
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0 mt-4">
        <p className="text-cream text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

export default MasterReviewCard