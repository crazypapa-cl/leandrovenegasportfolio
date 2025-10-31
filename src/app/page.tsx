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
<div className="p-4 bg-gray-900 items-center justify-between grid grid-cols-3  rounded-lg "> 
     <Avatar url="./profile.png"  className={' col-span-3 sm:col-span-1 '}/>

<div className=" col-span-3 sm:col-span-2   border  prose prose-neutral dark:prose-invert">
    <h2 className={`${russoOne.className} text-xl `}>FULL STACK</h2>
    <h2 className={`${russoOne.className} text-2xl sm:text-3xl  `}>CONTENT MANAGER</h2>
  <h1 className="col-span-1text-3xl italic  ">Leandro Venegas</h1>
</div>
</div>

</div>
  );
}

