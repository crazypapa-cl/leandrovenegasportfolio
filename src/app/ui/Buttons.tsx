import Link from "next/link"
import { ReactNode } from "react";
interface ButtonProps {
    url : string;
    children: ReactNode;
}

export default function ButtonUno({url, children}:ButtonProps){
    
    console.log()
    return(
     <Link href={url} className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 
     text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 
     focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">
        {children}
     </Link>
     
    )
}