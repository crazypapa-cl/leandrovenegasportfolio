import Image from "next/image";
import Link from "next/link";
export default function Proyectos() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-white text-3xl font-bold">Dragon lab</h1>
         <h2>Dos dias de puro talento local en valparaiso</h2>
         <p className="text-sm italic">7 y 8 de abril 2023</p>
        
         <Link href='/'><li>Home</li></Link>
    </div>
  );
}
