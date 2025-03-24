"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data"; // Make sure this imports correctly from your data file
import Project from "./project";
import Modal from "./modal";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useModal } from "@/context/modal-context";

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
  const { isModalOpen, setIsModalOpen } = useModal();

  const handleOpenModal = (project: (typeof projectsData)[number]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
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
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{selectedProject.description}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Case Study</h4>
              {selectedProject.caseStudy.map((paragraph, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-semibold">Technologies Used</h4>
              <ul className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {selectedProject.caseStudyImages && selectedProject.caseStudyImages.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">Project Screenshots</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.caseStudyImages.map((image, i) => (
                    <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`Project screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                        quality={95}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
