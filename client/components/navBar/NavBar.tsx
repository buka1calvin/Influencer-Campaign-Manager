"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TiThMenuOutline } from "react-icons/ti";
import OverlayModel from "../ui/OverlayModel";
import XsNavbar from "./XsNavbar";
import Button from "../Button";

const NavBar = () => {
  const pathname = usePathname();
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <nav
      className={cn(
        "max-h-20 fixed top-0 inset-x-0 max-w-full mx-auto z-[1000]"
      )}
    >
      <motion.div
        className="flex md:px-20 py-3 max-w-full mx-auto px-5 justify-between items-center bg-white/40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Link href="/">
        <h1 className="">Logo</h1>
        </Link>
        <div className="text-text_color w-[47%] font-light md:flex hidden relative">
          {navLinks.map((item, i) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={i}
                href={item.path}
                className={cn(
                  "text-sm flex items-center justify-center w-24 h-10 rounded-full relative"
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-neutral-600/20 rounded-full shadow-inner shadow-white/20"
                    layoutId="activeLink"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10",
                    isActive ? "font-semibold text-tertiary" : "text-text_color"
                  )}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="w-fit md:flex hidden items-center">
          <Button title="Get Started"/>
          <button className="py-2 shadow-lg text-sm text-secondary px-6 border border-secondary">Sign Up</button>
        </div>
        <button
          onClick={() => setIsModelOpen(true)}
          className="md:hidden flex justify-center items-center p-1 rounded border border-tertiary text-tertiary"
        >
          <TiThMenuOutline className="h-9 w-9" />
        </button>
      </motion.div>
      <OverlayModel isOpen={isModelOpen} onClose={() => setIsModelOpen(false)}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <XsNavbar onClose={() => setIsModelOpen(false)} />
        </motion.div>
      </OverlayModel>
    </nav>
  );
};

export default NavBar;
