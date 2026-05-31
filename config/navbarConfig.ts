
interface NavLink {
  href: string;
  label: string;
}

export const navLinks:NavLink[]= [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const brandName = {
  main: "Apex",
  sub: "Interiors & Engineering",
};