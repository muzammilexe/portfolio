"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data"; // Make sure this imports correctly from your data file
import Project from "./project";
import Modal from "./modal";
import { StaticImageData } from "next/image";
import Image from "next/image";

type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  caseStudyImages?: (string | StaticImageData)[];
  caseStudy: string[];
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[number] | null
  >(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project: (typeof projectsData)[number]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} onClick={() => handleOpenModal(project)} />
          </React.Fragment>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && (
          <div>
            <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
            {selectedProject.caseStudy.map((paragraph, index) => (
              <p key={index} className="mb-3">
                {paragraph}
              </p>
            ))}

            <ul className="m-2 ">
              {selectedProject.tags.map((tag, i) => (
                <li
                  key={i}
                  className="inline-block bg-gray-200 px-2 py-1 mr-2 mt-2 rounded"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div>
              {selectedProject.caseStudyImages.map((image, i) => (
                <Image
                  key={i}
                  className="mt-5"
                  src={image}
                  alt="Project I worked on"
                  quality={95}
                />
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
