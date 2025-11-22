import { ReactNode } from "react";

interface TitlesProps {
    children:ReactNode;
    className?:string

}

function TitleOne({children,className}:TitlesProps){
    return(
       
         <h1 className= {`text-3xl font-bold ${className || ''}`}>
            {children}
         </h1>
    )
}

function TitleTwo({children}:TitlesProps){
    return(
         <h2 className="text-2xl font-bold">
            {children}
         </h2>
    )
}

export  {TitleOne,TitleTwo};