import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/nav";
import { Russo_One } from 'next/font/google'
import Card from "../components/card";
import Avatar from "../components/avatart";
import FullStack from "../components/fullStack";
import ContentFullStack from "../components/myStack";

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
return (
  
<div className="bg-linear-to-b from-sky-500 to-black  ">
  <div className="bg-[url(/malla.svg)] bg-repeat">
  <FullStack/>
{ /* <span className='absolute right-5 sm:right-10 bg-white/20 h-full  rounded-lg  shadow-lg  c  '>L</span>
<div className="absolute right-5 font-bold text-xl -rotate-11 ">SEO MARKETING </div>
*/}
  <div className="mx-auto   p-6     justify-center  ">
<div className=" mx-full p-4 bg-gray-900/10 backdrop-blur-sm items-center justify-between grid grid-cols-3  rounded-lg shadow-lg    "> 
<Avatar url="./profile.png"  className={' shadow-2xl col-span-3 sm:col-span-1 '}/>
<div className="shadow-2xl bg-gray-800 sm:ml-4 col-span-3 sm:col-span-2 p-3 rounded-lg prose prose-neutral dark:prose-invert">
    <h2 className={`${russoOne.className} text-gray-300 text-2xl sm:text-3xl  `}>Consultor de Marketing Local</h2>
 <div className="flex items-center bg-black/20 rounded-lg p-2 mb-4 ">
   <h1 className="text-gray-300 col-span-1 text-xl italic ">Leandro Venegas</h1>
  <span className=" "><svg viewBox="0 0 24 24" fill="currentColor" className="pt-1 -rotate-90 size-5">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
</svg>
</span>
 </div>
</div>
</div>
<div className="w-full  mt-8 gap-4 ">
   <ContentFullStack></ContentFullStack>
</div >
</div>
</div>
 
</div>
  )
} 

