"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/header/app-logo-dark.svg";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import NavItems from "@/assets/json/headerMenu.json";
import { HEADER_CTA_CONFIG } from "@/config";

export default function Header() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  const CTAS = HEADER_CTA_CONFIG[pathname] || [
    { label: "Get Assessed Now", href: "/", variant: "default" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-header ${scrolled ? "!bg-white transition-all ease-in-out duration-300" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between lg:px-0 px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Decrypt Talent" priority className="w-50" />
        </Link>
        <nav className="hidden lg:flex gap-6 text-sm">
          {NavItems.menu.map((item) => (
            <Link key={item.href} href={item.href} className={cn("text-black hover:text-black transition-colors text-lg font-semibold", isActive(item.href) && "underline font-bold text-lg")}> {item.label} </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {CTAS.map((cta, i) => (
            <Button
              key={i}
              asChild
              variant={cta.variant || "default"}
              className={`rounded-lg font-semibold px-3 py-2 h-auto text-base shadow-xs shadow-black/10 ${cta.variant === "default" ? "bg-brand-blue hover:bg-brand-blue-hover text-white" : ""}`}
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          ))}
        </div>

        {/* <div className="hidden md:block">
          <Button className="rounded-lg cursor-pointer bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold px-3 py-2 h-auto text-base shadow-xs shadow-black/10"> Get Assessed Now </Button>
        </div> */}

        {/* Mobile Toggle Button */}
        <button className="inline-flex items-center justify-center lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} >
          {open ? (
            <X className="size-6 text-brand-blue" />
          ) : (
            <Menu className="size-6 text-brand-blue" />
          )}
        </button>
      </div>

      <div className={cn("lg:hidden border-t border-white/20 bg-brand-dark-blue", "transition-all duration-300 ease-in-out overflow-hidden", open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
        <div className="mx-auto flex max-w-full flex-col gap-2 px-8 pb-4 pt-3">
          {NavItems.menu.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={cn("py-1 text-sm text-white hover:text-white", isActive(item.href) && "font-semibold underline")} > {item.label} </Link>
          ))}
          {/* <Button className="mt-3 w-full rounded-lg bg-brand-blue hover:brand-blue-hover text-white font-semibold py-2 h-auto text-xs shadow-xs shadow-black/10">Get Assessed Now</Button> */}
          <div className="flex items-center gap-3 mt-3">
            {CTAS.map((cta, i) => (
              <Button
                key={i}
                asChild
                variant={cta.variant || "default"}
                className={`rounded-lg font-semibold px-3 py-2 h-auto text-base shadow-xs shadow-black/10 ${cta.variant === "default" ? "bg-brand-blue hover:bg-brand-blue-hover text-white" : ""}`}
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}