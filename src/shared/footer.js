"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/images/footer/app-logo-light.svg";
import facebookIcon from "@/assets/images/footer/facebookIcon.svg";
import twitterIcon from "@/assets/images/footer/twitterIcon.svg";
import linkedinIcon from "@/assets/images/footer/linkedinIcon.svg";
import instagramIcon from "@/assets/images/footer/instagramIcon.svg";
import NavItems from "@/assets/json/footerMenu.json";

export default function Footer() {
  return (
    <footer>
      <div className="w-full bg-brand-dark-blue text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <Image src={logo} alt="Decrypt Talent" priority />
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="p-2 ">
                  <Image src={facebookIcon} alt="facebook"  className="w-5 h-5 md:w-7 md:h-7" priority  />
                </a>
                <a href="#" aria-label="Instagram" className="p-2 ">
                  <Image src={instagramIcon} alt="instagram"  className="w-5 h-5 md:w-7 md:h-7" priority />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2 ">
                  <Image src={linkedinIcon} alt="linkedin"  className="w-5 h-5 md:w-7 md:h-7" priority />
                </a>
                <a href="#" aria-label="X / Twitter" className="p-2 ">
                  <Image src={twitterIcon} alt="twitter" className="w-5 h-5 md:w-7 md:h-7" priority  />
                </a>
              </div>
            </div>

            {/* Column 1 */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-3 gap-x-8 gap-y-3">
                <div>
                <ul className="space-y-4">
                  {NavItems.col1.map((data) => (
                    <li key={data.href}>
                      <a href={data.href} className="text-sm md:text-lg font-normaltext-white/80 hover:text-white transition">
                        {data.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-4">
                {NavItems.col2.map((data) => (
                  <li key={data.href}>
                    <a href={data.href} className="text-sm md:text-lg font-normal text-white/80 hover:text-white transition">
                      {data.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-4">
                {NavItems.col3.map((data) => (
                  <li key={data.href}>
                    <a href={data.href} className="text-sm md:text-lg font-normal text-white/80 hover:text-white transition">
                      {data.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="w-full bg-footer-bottom-bar-gradient border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-sm md:text-lg font-medium text-[#0f172a]">Copyright 2025 Decrypt Talent - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
