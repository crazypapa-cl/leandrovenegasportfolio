
import Link from "next/link";

export const metadata= {
  title:"Proyectos",
  description: "Lista de proyectos realizados por Leandro Venegas"
}

export default function Portafolio() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-white text-3xl font-bold">Curriculum Vitae</h1>
         <Link href='/'><li>Back</li></Link>

    </div>
  );
}
