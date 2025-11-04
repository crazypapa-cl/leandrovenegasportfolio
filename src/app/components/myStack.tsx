"use client";
import { useState } from "react";

export default function ContentFullStack() {
  const [language, setLanguage] = useState("es");
  const [openLayer, setOpenLayer] = useState(null);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const toggleLayer = (id: any) => {
    setOpenLayer(openLayer === id ? null : id);
  };

  const stack = [
    {
      id: "analytics",
      icon: "🧠",
      title: {
        es: "Estrategia y Analítica",
        en: "Strategy & Analytics",
      },
      desc: {
        es: "Defino objetivos, interpreto métricas y traduzco datos en decisiones.",
        en: "Define objectives, interpret metrics, and turn data into decisions.",
      },
      link: "#project-analytics",
    },
    {
      id: "seo",
      icon: "🔍",
      title: {
        es: "SEO y Performance",
        en: "SEO & Performance",
      },
      desc: {
        es: "Optimizo contenido para que sea visible, útil y rentable.",
        en: "Optimize content to be visible, useful, and profitable.",
      },
      link: "#project-seo",
    },
    {
      id: "content",
      icon: "🎯",
      title: {
        es: "Marketing de Contenidos",
        en: "Content Marketing",
      },
      desc: {
        es: "Diseño estrategias de contenido que conectan y convierten.",
        en: "Design content strategies that connect and convert.",
      },
      link: "#project-content",
    },
    {
      id: "creation",
      icon: "🎥",
      title: {
        es: "Creación Multiformato",
        en: "Multiformat Creation",
      },
      desc: {
        es: "Produzco y edito videos, piezas gráficas y storytelling visual.",
        en: "Produce and edit videos, graphics, and visual storytelling.",
      },
      link: "#project-creation",
    },
    {
      id: "growth",
      icon: "🚀",
      title: {
        es: "Distribución y Growth",
        en: "Distribution & Growth",
      },
      desc: {
        es: "Amplifico el alcance y optimizo resultados medibles.",
        en: "Amplify reach and optimize measurable results.",
      },
      link: "#project-growth",
    },
  ];

  return (
    <section className="flex flex-col items-center py-12 px-6 text-gray-100 bg-gradient-to-b from-gray-900 to-black">
      <div className="flex justify-between w-full max-w-4xl mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          {language === "es" ? "Mi Full Stack de Contenidos" : "My Content Full Stack"}
        </h2>
        <button
          onClick={toggleLanguage}
          className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl text-sm font-semibold"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>

      <div className="w-full max-w-4xl space-y-4">
        {stack.map((layer) => (
          <div key={layer.id} className="bg-gray-800 rounded-2xl border border-gray-700">
            <button
              onClick={() => toggleLayer(layer.id)}
              className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{layer.icon}</span>
                <h3 className="text-xl font-semibold">
                  {language === "es" ? layer.title.es : layer.title.en}
                </h3>
              </div>
              <span className="text-gray-400">{openLayer === layer.id ? '-' : '+'}</span>
            </button>

            {openLayer === layer.id && (
              <div className="px-4 pb-4 text-gray-300 text-sm">
                <p className="mb-2">
                  {language === "es" ? layer.desc.es : layer.desc.en}
                </p>
                <a
                  href={layer.link}
                  className="text-blue-400 hover:underline text-sm"
                >
                  {language === "es" ? "Ver proyecto" : "View project"}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}