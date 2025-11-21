import Link from "next/link"
import { ReactNode } from "react";
interface ButtonProps {
    url : string;
    children: ReactNode;
}

export default function ButtonUno({url, children}:ButtonProps){
    
    console.log()
    return(
       
     <Link href={url} className="bg-blue-600 rounded-xl p-2 hover:bg-green-400 hover:text-black mt-4">
      
        {children}
     </Link>
     
    )
}