"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Premium Wedding Invitation", href: "/premium-wedding-invitation" },
  { label: "Diwali Boxes & Gifting", href: "/diwali-boxes-gifting" },
  { label: "Collections", href: "/#catalog" },

];

const COMPANY = [
  { label: "Contact", href: "https://wa.me/919990171703?text=Hi%20BoxAura!" },
  { label: "Privacy Policy", href: "/privacy" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/boxaura.boxaura?igsh=MTZpNGZqaWR5Mmw3eA==",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative w-full bg-[#EFECE5] border-t border-stone-300 flex justify-center">
      <div className="w-full max-w-[1400px] px-6 sm:px-12 lg:px-24 pt-8 sm:pt-24 pb-6 sm:pb-8 flex flex-col relative z-10">

        {/* Brand row — mobile only: logo + socials side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex md:hidden items-center justify-between mb-6"
        >
          <Link href="/">
            <Image
              src="https://pub-37c7085b3a964a70aee9d7586ef459c4.r2.dev/WhatsApp_Image_2026-06-17_at_09.42.19__1_-removebg-preview_1_cupphn.png"
              alt="BoxAura"
              width={160}
              height={64}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={social.label}
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:bg-stone-800 hover:text-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 md:gap-12 lg:gap-8 pb-6 sm:pb-16 border-b border-stone-300">

          {/* Brand column — desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hidden md:flex col-span-1 md:col-span-2 flex-col items-center md:items-start text-center md:text-left"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://pub-37c7085b3a964a70aee9d7586ef459c4.r2.dev/WhatsApp_Image_2026-06-17_at_09.42.19__1_-removebg-preview_1_cupphn.png"
                alt="BoxAura"
                width={160}
                height={64}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-light max-w-sm mb-8">
              Handcrafted premium invitation boxes & festive gifting where elegance meets artistry.
            </p>
            <div className="flex items-center gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:bg-stone-800 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-start text-left"
          >
            <h4 className="font-heading text-[10px] uppercase tracking-[0.25em] text-stone-900 mb-4 md:mb-6 flex items-center gap-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 md:space-y-3.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-stone-500 hover:text-stone-900 transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start text-left"
          >
            <h4 className="font-heading text-[10px] uppercase tracking-[0.25em] text-stone-900 mb-4 md:mb-6 flex items-center gap-3">
              Company
            </h4>
            <ul className="space-y-2.5 md:space-y-3.5">
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-xs text-stone-500 hover:text-stone-900 transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-start text-left"
          >
            <h4 className="font-heading text-[10px] uppercase tracking-[0.25em] text-stone-900 mb-4 md:mb-6 flex items-center gap-3">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Visit Us
            </h4>
            <address className="not-italic text-xs text-stone-500 leading-relaxed font-light mb-3">
              BOXAURA<br />2408 Chawri Bazar<br />1st and 2nd floor.<br />Delhi 110006
            </address>
            <a
              href="https://www.google.com/maps/place/BOXAURA/@28.6506123,77.2310479,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfda0e2479f1b:0xe694466b49dac992!8m2!3d28.6506123!4d77.2310479!16s%2Fg%2F11zcnxj_c6!18m1!1e1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-stone-500 underline underline-offset-2 hover:text-stone-900 transition-colors duration-300 font-light"
            >
              Get Directions
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400 font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} BoxAura. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400 font-light text-center md:text-right">
            Crafted with passion in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
