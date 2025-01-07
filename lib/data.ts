import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BiMapAlt } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import mock_main from "@/public/mock_main.jpg"
import mock_2 from "@/public/mock_2.jpg"
import mock_3 from "@/public/mock_3.jpg"
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { mock } from "node:test";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Mehran University of Engineering and Technology",
    location: "Pakistan",
    description:
      "I graduated with a degree in Computer Systems Engineering, achieving a CGPA of 3.58.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Freelancer - Full-Stack Developer & AI/ML Specialist",
    location: "Remote",
    description:
      "I have been working as a freelancer for 2 years, with 1.5 years focused on AI and Machine Learning, and recently branching into web services. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, MongoDB, and AI/ML solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "National Geographic Society & The Nature Conservancy Externship",
    location: "Remote",
    description:
      "I completed an externship with National Geographic (NGS) and The Nature Conservancy (TNC), contributing to freshwater and community conservation projects.",
    icon: React.createElement(BiMapAlt), // Using a database icon to represent data analytics
    date: "2023",
  },
];



export const projectsData = [
  {
    title: "AI-based Mock Interview Agent",
    description: "I worked as a backend developer on this AI-powered mock interview agent project during my final year.",
    caseStudy: [
      "The AI-based Mock Interview Agent was designed to help fresh graduates and job seekers prepare for interviews by simulating the actual interview process. This project aimed to create a realistic and interactive experience that could guide candidates to improve their interview skills. I focused primarily on developing and training the backend AI models used for facial expression recognition, speech-to-text conversion, and answer evaluation.",
      
      `For facial expression recognition, I trained a deep learning model to detect emotions such as happiness, sadness, surprise, and more, which would be evaluated during the interview simulation. This allowed the system to assess the candidate's emotional state, giving them insights into their non-verbal communication. For speech-to-text, I integrated a model that converted spoken responses into text, ensuring that candidates' answers were accurately captured for evaluation.`,
      
      `I also worked on the answer evaluation model, which analyzed candidates' responses to interview questions based on both content and structure. This model utilized natural language processing (NLP) techniques to score answers and provide constructive feedback. After each mock interview, the system generated personalized feedback, highlighting areas of strength and improvement, so candidates could refine their skills and build confidence.`,
      
      `The platform was developed using Django for the web interface, while the AI models were built and trained using Python libraries such as PyTorch, TensorFlow, scikit-learn, and others. Our team successfully integrated the backend AI models with the frontend, ensuring smooth interaction for the user.`,
      
      `The outcome of the project was overwhelmingly positive. The system not only helped candidates better prepare for interviews but also provided measurable insights into their performance. The project earned us 1st place in our final year project competition, and it remains a valuable tool for students looking to improve their interview skills.`
    ],

    tags: ["AI", "Machine Learning", "Django", "PyTorch", "TensorFlow", "scikit-learn", "Speech-to-Text", "Emotion Detection", "NLP", "Interview Preparation"],
    imageUrl: mock_main, 
    anything: "adas",
    caseStudyImages: [mock_main, mock_2, mock_3],
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   caseStudy: "sad",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  //   caseStudyImages: [mock_main, mock_2, mock_3],
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   caseStudy: "sad",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  //   caseStudyImages: [mock_main, mock_2, mock_3],
  // },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "TensorFlow",
  "PyTorch",
  "scikit-learn",
  "Keras",
  "OpenCV",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Hugging Face Transformers",
  "CNNs",
  "Feature Engineering",
  "Data Preprocessing",
  "Model Deployment",
  "Flask",
  "FastAPI",
] as const;

