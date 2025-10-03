
import Link from "next/link";

export const metadata= {
  title:"Proyectos",
  description: "Lista de proyectos realizados por Leandro Venegas"
}

export default function Portafolio() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-white text-3xl font-bold">Portafolio</h1>
   <hr/>
   <ul>
    <Link href='portafolio/mutatis'><li className="hover:color-sky-500">CrazyRoom - - - 2025</li></Link>
     <Link href='portafolio/mutatis'><li className="hover:color-sky-500">Radio Playa Ancha - - - 2024</li></Link>
        <Link href='portafolio/mutatis'><li>Mutatis Festival - - -2023</li></Link>
            <Link href='portafolio/mutatis'><li>Rayandola - - - 2021</li></Link>
             <Link href='portafolio/mutatis'><li>CrazyPapa FastFood - - - 2020 - -  - 2025</li></Link>
             <Link href='portafolio/mutatis'><li>Dando La hora- - - 2019</li></Link>
             <Link href='portafolio/mutatis'><li>Crazypapa Studio - - - 2019</li></Link>
                <Link href='portafolio/mutatis'><li>Incoludido - - - 2015</li></Link>
                    <Link href='portafolio/mutatis'><li>Dragon Lab - - -  2013 - - -2015</li></Link> 
                    <Link href='portafolio/uniacc'><li>UNIACC - - - 2010 - 2015</li></Link>

   </ul>
         <Link href='/'><li>Back</li></Link>
      
    </div>
  );
}
