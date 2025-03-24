import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";

type HeaderLinkProps = (typeof links)[number];

export default function HeaderLink({ name, hash }: HeaderLinkProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <Link
      className={clsx(
        "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
        {
          "text-gray-950 dark:text-gray-200": activeSection === name,
        }
      )}
      href={hash}
      onClick={() => {
        setActiveSection(name);
        setTimeOfLastClick(Date.now());
      }}
    >
      {name}

      {name === activeSection && (
        <motion.span
          className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
          layoutId="activeSection"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
        ></motion.span>
      )}
    </Link>
  );
} 