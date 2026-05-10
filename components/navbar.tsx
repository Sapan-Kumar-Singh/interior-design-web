"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50  transition-all duration-500
        ${
          scrolled
            ? "bg-obsidian/85 backdrop-blur-lg border-b border-white/10 py-3"
            : "bg-transparent border-b border-transparent py-6"
        }
      `}
    >
      <div
        className=" max-w-7xl  mx-auto  flex items-center justify-between px-4  sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link  href="/" className=" flex items-center gap-3 group select-none no-underline">
          
          <span className=" font-serif  text-xl font-light  tracking-[0.14em] text-white uppercase">
            Lumière
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className=" hidden md:flex items-center  gap-10 list-none m-0 p-0 ">

           {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <li key={href}>
            <Link
              href={href}
              className={`
                relative
                pb-1
                text-[11px]
                font-serif
                font-light
                tracking-[0.2em]
                transition-colors
                duration-300
                after:absolute
                after:left-0
                after:bottom-0
                after:h-px
                after:bg-gold
                after:transition-all
                after:duration-300
                
                ${
                  isActive
                    ? "text-white after:w-full"
                    : "text-white/70 hover:text-white after:w-0 hover:after:w-full"
                }
              `}
            >
              {label}
            </Link>
          </li>
        );
      })}
        </ul>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-white">
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex  flex-col p-0 border-r border-white/10   bg-obsidian w-[min(320px,88vw)]" >
              {/* CLOSE */}
              <SheetClose
                className="
                  absolute
                  right-4
                  top-4
                  text-white/80
                  hover:text-white
                "
              >
                <X size={20} />
              </SheetClose>

              {/* HEADER */}
              <SheetHeader className="px-8 pt-4 pb-0">
                <SheetTitle asChild>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center  gap-3 no-underline">
                    <span
                      className="font-serif  text-lg font-light tracking-[0.14em] text-white  uppercase">
                      Lumière
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* MOBILE LINKS */}
              <nav
                className=" flex flex-col px-8  py-4 flex-1">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 py-4 border-b border-white/[0.06]">
                    <span
                      className="font-serif text-[16px] font-light tracking-[0.04em] text-white/60  hover:text-white transition-colors duration-300 ">
                      {label}
                    </span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}