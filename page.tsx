import Image from "next/image";
import { socialLinks } from "./lib/config";
import { motion } from "framer-motion";
import Link from "next/link";
import VideoPlayer from "./components/videoplayer";
import Hola from "./components/hola";

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3  "> 
        <Hola></Hola>
   
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="flex col-span-2 sm:col-span-1 content-center 
          rounded-full bg-gray-100 block
         lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto  
         sm:ml-5 sm:mb-5 grayscale hover:grayscale-0
         "
          unoptimized
          width={160}
          height={160}
          priority
        />
           <VideoPlayer src="./proyects/mutatis/video/video-promocion-mutatis-expo-fest-festival-valparaiso.mp4" type="video/mp4" controls={true} />
      <h1 className=" col-span-2 text-center content-center text-3xl font-medium ">
      "Transformo tus ideas en proyectos de marketing digital."</h1>
<div className="flex justify-center p-5 col-span-3 ">
 <button className="justify-items-center text-center w-32
     bg-blue-500 
     hover:bg-blue-400 text-white font-bold py-2 px-4 
     border-b-4 border-blue-700 hover:border-blue-500 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>CV
</button>
</div>
    
      <h2  className="text-center col-span-3 mb-8 text-2xl font-medium 
      sm:col-span-3"> me encargo del ciclo de ventas y toda  
      la producción de piezas publicitarias 
      audiovisuales, gráficas y web del producto.
      </h2>

      </div>
      <div className="prose prose-neutral dark:prose-invert">
      <h2 className="text-2xl">Perfil Profesional</h2>
      <p>
         Productor Creativo en Marketing y Multimedia 
         con experiencia en campañas digitales, producción audiovisual, 
         diseño gráfico y gestión de eventos culturales. 
         Combino creatividad, estrategia y tecnología para desarrollar
          proyectos innovadores que conectan con audiencias y generan impacto.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="text-2xl">Habilidades clave</h2>
        <ul>
          <li>Marketing Digital</li>
          <li>Producción Audiovisual</li>
          <Link href="/blog/MutatisMutandi"><li>Diseño Gráfico & Callejero</li></Link>
          <li>Web & Digital</li>
          <li>Gestión de Proyectos</li>
          <li>Arte & Cultura</li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
<h2 className="text-2xl">Portafolio / Proyectos destacados</h2>
<ul>
  <ol className="text-xl">Campañas de Marketing</ol>
  <li>Mutattis {"(campaña urbana + digital)."}</li>
  <li>Estrategias de crowdfunding.</li>
</ul>
<ul>
  <ol className="text-xl">Producción Audiovisual</ol>
  <li>Videos comerciales para marcas.</li>
  <li>Reels / clips para redes sociales.</li>
</ul>
<ul>
  <ol className="text-xl">Diseño Gráfico & Callejero</ol>
  <li>Flyers y afiches.</li>
  <li>Gráfica urbana en calle.</li>
</ul>
<ul>
  <ol className="text-xl">Web & Digital</ol>
  <li>Sitio para productora audiovisual.</li>
  <li>Tienda online de comida rápida.</li>
</ul>
<ul>
  <ol className="text-xl">Arte & Cultura
  </ol>
  <li>Instalaciones artísticas en galerías.</li>
  <li>Proyecto experimental Lado B.
</li>
</ul>
</div>


<div className="prose prose-neutral dark:prose-invert">
<h2 className="text-2xl">Educación</h2>
<Link href="https://www.uniacc.cl/wp-content/uploads/2024/10/Comunicacion-Audiovisual-especialidad-Cine.pdf"><Image src="/logoUniaccNew.svg" alt="logo universidad uniacc" width={100} height={100}></Image></Link>
<p className="font-bold">UNIACC - Comunicación Audiovisual</p>
</div>
<div className="prose prose-neutral dark:prose-invert">
<h2 className="text-2xl">Habilidades</h2>
<ul>
  <li>Creativas: producción audiovisual, diseño gráfico, storytelling.</li>

<li>Digitales: marketing en redes sociales, SEO básico, desarrollo web.</li>

<li>Gestión: coordinación de campañas, proyectos y eventos.</li>

<li>Herramientas: Adobe Suite, Canva, WordPress/Next.js, Google Ads.</li>
</ul>

      </div>
      <div className="prose prose-neutral dark:prose-invert">
<h2 className="text-2xl">Idiomas</h2>
<p className="">Español nativo | Inglés intermedio</p>

      </div>
    </section>
  );
}
