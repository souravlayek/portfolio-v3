"use client";
import React from "react";
import {
  IconHome,
  IconBriefcase2,
  IconUser,
  IconPackageExport,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import MagneticButton from "@/components/ui/magnetic-button";
import Logo from "@/components/ui/logo";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About Me",
    link: "/about-me",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Works",
    link: "/works",
    icon: (
      <IconBriefcase2 className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Services",
    link: "/services",
    icon: (
      <IconPackageExport className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export default function Navbar() {
  return (
    <FloatingNav
      logo={<Logo className="max-sm:hidden max-lg:text-[24px]" />}
      navItems={navItems}
      navClassName="max-sm:justify-between max-sm:w-full"
      rightSection={<ContactMeButton />}
      className="max-w-full h-[60px] px-[20px] w-4/5 justify-between items-center max-sm:justify-center"
    />
  );
}

const ContactMeButton = () => {
  return (
    <MagneticButton>
      <button className="h-[40px] px-[5px] rounded-md relative bg-brightOrange text-white hidden max-sm:flex justify-center items-center ">
        🤝
      </button>
      <button className="sm:flex h-[40px] px-[10px] ml-[40px] rounded-md relative bg-brightOrange text-white hidden justify-center items-center group/modal-btn overflow-hidden">
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Contact Me
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          🤝
        </div>
      </button>
    </MagneticButton>
  );
};