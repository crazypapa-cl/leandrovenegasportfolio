
import Link from "next/link";
import PortaFolioIndex from "../components/portaFolioIndex"

export const metadata= {
  title:"Proyectos",
  description: "Lista de proyectos realizados por Leandro Venegas"
}

export default function Portafolio() {
  return (
    <div className="font-sans items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-white text-3xl font-bold">Portafolio</h1>
   <PortaFolioIndex/>

    
      
    </div>
  );
}
