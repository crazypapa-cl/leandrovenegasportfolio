import Image from "next/image";
import Link from "next/link";
export default function Proyectos() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-white text-3xl font-bold">Proyectos</h1>
         <Link href='/'><li>Home</li></Link>
    </div>
  );
}
