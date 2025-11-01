import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/nav";
import { Russo_One } from 'next/font/google'
import Card from "./components/card";
import Avatar from "./components/avatart";
import FullStack from "./components/fullStack";

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
return (
  
<div className="bg-linear-to-t from-sky-500 to-indigo-500 ">
  <div className="bg-[url(/malla.svg)] bg-repeat">
  <FullStack/>
  <div className="mx-auto  max-w-sm p-6  h-screen  flex flex-col justify-center ">
<div className=" mx-full p-4 bg-gray-900/10 backdrop-blur-sm items-center justify-between grid grid-cols-3  rounded-lg   "> 
<Avatar url="./profile.png"  className={' shadow-2xl col-span-3 sm:col-span-1 '}/>
<div className="shadow-2xl bg-gray-800 sm:ml-4 col-span-3 sm:col-span-2 p-3 rounded-lg prose prose-neutral dark:prose-invert">
    <h2 className={`${russoOne.className} text-gray-300 text-2xl sm:text-3xl  `}>CONTENT MANAGER</h2>
 <div className="flex items-center bg-black/20 rounded-lg p-2 mb-4 ">
   <h1 className="text-gray-300 col-span-1 text-xl italic ">Leandro Venegas</h1>
  <span className=" "><svg viewBox="0 0 24 24" fill="currentColor" className="pt-1 -rotate-90 size-5">
  <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
</svg>
</span>
 </div>
</div>
</div>
<div className="w-full grid grid-cols-3 mt-8 gap-4 ">
 <Card className="col-span-3"><p>Content Manager con background en Producción Audiovisual y Diseño.</p></Card>
  <Card className="col-span-3"><p>Especializado en crear campañas digitales que gestionan el ciclo de ventas completo</p></Card>
  <Card className="col-span-3"><p>del Reel al ROI, asegurando la eficiencia del presupuesto de Ads.”</p></Card>
    <Card className="col-span-3"><h3 className="text-2xl
    ">Habilidades</h3></Card>
</div >
</div>
</div>
</div>
  )
} 

