import Link from "next/link";
import { Metadata } from "next";
import { Russo_One } from 'next/font/google';
import { Avatar } from "@/components/ui/Avatar";
import { FullStackBadge } from "@/components/FullStackBadge";
import { StackSection } from "@/components/StackSection";
import { Navbar } from "@/components/Navbar"; // Adding Navbar if it was intended, or just keeping it available.

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leandro Venegas | Perfil Profesional",
  description: "Consultor de Marketing Local y Full Stack Content Manager. Estrategia, SEO y creación de contenidos.",
};

export default function LeandroVenegasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-500 to-black text-white">
      <div className="bg-[url(/malla.svg)] bg-repeat min-h-screen">
        <FullStackBadge />

        <div className="container mx-auto px-4 py-12 flex flex-col items-center">
          <div className="w-full max-w-4xl bg-gray-900/30 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <Avatar src="/profile.png" alt="Leandro Venegas" className="shadow-2xl w-40 h-40 md:w-48 md:h-48" size={200} />
              </div>

              <div className="md:col-span-2 bg-gray-800/80 rounded-xl p-6 shadow-xl">
                <h2 className={`${russoOne.className} text-gray-300 text-2xl sm:text-3xl mb-4`}>
                  Consultor de Marketing Local
                </h2>

                <div className="flex items-center bg-black/40 rounded-lg p-3">
                  <h1 className="text-gray-200 text-xl italic flex-grow">Leandro Venegas</h1>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500 w-6 h-6 -rotate-90">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/leandro-venegas/portafolio"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              Ver Mi Portafolio
            </Link>
          </div>

          <div className="w-full mt-12">
            <StackSection />
          </div>
        </div>
      </div>
    </main>
  );
}
