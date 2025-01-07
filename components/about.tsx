"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After completing my degree in{" "}
        <span className="font-medium">Computer Systems Engineering</span> and
        gaining hands-on experience, I decided to dive deeper into the world of
        <span className="font-medium"> Artificial Intelligence</span> and{" "}
        <span className="font-medium">Machine Learning</span>. This passion led
        me to work on several exciting projects, including{" "}
        <span className="underline">emotion detection</span> and{" "}
        <span className="underline">LLMs</span>, which helped me refine my
        skills. I am also a{" "}
        <span className="font-medium">full-stack developer</span> with{" "}
        <span className="font-medium">1 year</span> of experience, building{" "}
        <span className="font-medium">dynamic websites</span>. My core tech
        stack includes{" "}
        <span className="font-medium">
          React (Next.js), Node.js, and MongoDB
        </span>
        , and I am always eager to learn new technologies. Right now, I am
        seeking a <span className="font-medium">full-time position</span> that
        allows me to grow and apply my knowledge in
        <span className="font-medium">AI and web development</span>.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, you&apos;ll
        likely find me exploring the latest in AI or unwinding with some video
        games and movies. Constantly looking for new ways to challenge myself.
      </p>
    </motion.section>
  );
}
