'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import Image from "next/image";
import path from "path";
const icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
className="inline size-5 m-1 mb-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

const menu = [
    {
        name:"Home",
        path:"/",
        id : "1"
    },
    {
         name:"Perfil",
        path:"/perfil_profesional",
        id : "2"
    },
    {
        name:"Portafolio",
        path:"/portafolio",
        id : "3"
    },
    {
        name:"Contacto",
        path:"/contacto",
        id:"5"
    }
]

    export default function Navbar(){
        const pathName = usePathname()
       let paths = true;
      paths = pathName.indexOf('/',1) ? true : false;
        console.log(paths)        
        return (
  <div>
      <ul className="flex flex-wrap gap-4 justify-center  p-3 text-md italic font-bold bg-gray-900">
    { menu.map(el=><Link href={`${el.path}`}  
    key={el.id}>
    {paths ? icon : ""}
    <li className={`inline text-xl ${pathName === el.path ? 'text-yellow-500 text-3xl' :' '}`}>{el.name}</li></Link>)}
    </ul>
    <p className="text-gray-600 text-xs">{pathName}</p>
  </div>
            
        )
    }