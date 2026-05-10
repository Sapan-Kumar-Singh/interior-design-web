import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden">

      {/* Background overlay (luxury feel) */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian/90 to-obsidian/80" />

      {/* Soft glow effect */}
      <div className="absolute w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full top-[-200px] left-[-200px]" />

      <div className="relative z-10 text-center px-6 max-w-xl">

        {/* Big 404 */}
        <h1 className="font-serif text-[90px] sm:text-[120px] leading-none text-gold font-light">
          404
        </h1>

        {/* Title */}
        <h2 className="text-white font-serif text-2xl sm:text-3xl font-light mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-white/60 font-sans text-sm mt-4 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
          Let’s take you back to a beautiful place.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80
              text-cream font-sans text-[11px] tracking-[0.16em]
              px-6 py-2 rounded-sm transition-all duration-300"
          >
            Return Home <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </main>
  );
}