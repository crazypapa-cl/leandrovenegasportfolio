
import {PropsWithChildren} from "react";

interface SectionProps {
   className?:string;
}
export default function SectionOne({children, className}:PropsWithChildren<SectionProps>){

    return(
        <section className={`mt-6 p-6 ${className || ''}`}> 
            {children}
        </section>
    )

    }