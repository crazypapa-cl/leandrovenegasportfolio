import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/nav";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="grid grid-cols-1 sm:grid-cols-3  "> 
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
<div className="prose prose-neutral dark:prose-invert">

<h1 className="text-3xl font-bold italic ">Leandro Veneas</h1>
<h2 className="text-2xl">content Manager</h2>
<h3>Creador de contenidos para los nuevos medios</h3>
<p className="text-2xl">Idiomas</p>
<p className="">Español nativo | Inglés intermedio</p>
</div>

     {/*<h1 className=" col-span-2 text-center content-center text-3xl font-medium "> "Transformo tus ideas en proyectos de marketing digital."</h1>*/}

{/*<h2  className="text-center col-span-3 mb-8 text-2xl font-medium 
      sm:col-span-3"> me encargo del ciclo de ventas y toda  
      la producción de piezas publicitarias 
      audiovisuales, gráficas y web del producto.
      </h2*/}
{/*   <div className="prose prose-neutral dark:prose-invert">
        <h2 className="text-2xl">Habilidades clave</h2>
        <ul>
          <li>Marketing Digital</li>
          <li>Producción Audiovisual</li>
          <Link href="/blog/MutatisMutandi"><li>Diseño Gráfico & Callejero</li></Link>
          <li>Web & Digital</li>
          <li>Gestión de Proyectos</li>
          <li>Arte & Cultura</li>
        </ul>
      </div>*/}
   

     

    </div>
    </div>
  );
}

