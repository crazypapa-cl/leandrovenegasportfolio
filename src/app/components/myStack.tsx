"use client";

import { useState } from "react";
import Link from "next/link";

export default function MyStack() {
  const [openLayer, setOpenLayer] = useState<number | null>(null);

  const toggleLayer = (id: number) => {
    setOpenLayer(openLayer === id ? null : id);
  };

  const projects = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Responsive and user-friendly web interfaces using React, Next.js, and TailwindCSS.",
      link: "/projects/frontend",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Server-side logic, APIs, and database management with Node.js and Express.",
      link: "/projects/backend",
    },
    {
      id: 3,
      title: "Video Marketing",
      description: "Production of audiovisual content for digital campaigns with measurable results.",
      link: "/projects/video",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 text-gray-100">
      {projects.map((project) => (
        <div key={project.id} className="border-b border-gray-700 py-3">
          <button
            onClick={() => toggleLayer(project.id)}
            className="w-full text-left font-semibold text-lg focus:outline-none hover:text-gray-300"
          >
            {project.title}
          </button>

          {openLayer === project.id && (
            <div className="mt-2 pl-2 text-gray-400">
              <p className="text-sm">{project.description}</p>
              <Link
                href={project.link}
                className="text-blue-400 hover:underline text-sm block mt-1"
              >
                Ver proyecto →
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
