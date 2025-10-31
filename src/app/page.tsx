import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/nav";
import { Russo_One } from 'next/font/google'
import Card from "./components/card";
import Avatar from "./components/avatart";

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
return (
  
  <div className="border font-sans items-center justify-items-center min-h-screen p-4 pb-10 gap-16 sm:p-20">
<div className="p-4 bg-gray-900 gap-4 items-center justify-between grid grid-cols-3  rounded-lg "> 
     <Avatar url="./profile.png"  className={' shadow-2xl col-span-3 sm:col-span-1 '}/>

<div className="shadow-2xl bg-gray-800 sm:ml-4 col-span-3 sm:col-span-2 p-3 rounded-lg prose prose-neutral dark:prose-invert">
    <h2 className={`${russoOne.className} text-gray-500 text-xl `}>FULL STACK</h2>
    <h2 className={`${russoOne.className} text-gray-400 text-2xl sm:text-3xl  `}>CONTENT MANAGER</h2>
  <h1 className="text-gray-300 col-span-1 text-xl italic  ">Leandro Venegas</h1>
</div>
</div>
<div className="w-full grid grid-cols-3 mt-8">
 <Card className="col-span-3"><p>“Content Manager con background en Producción Audiovisual y Diseño. Especializado en crear campañas digitales que gestionan el ciclo de ventas completo (del Reel al ROI), asegurando la eficiencia del presupuesto de Ads.”</p></Card>
</div >
</div>
  )
} 

