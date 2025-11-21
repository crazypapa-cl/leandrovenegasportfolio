import { Children, ReactNode } from "react";

interface TitlesProps {
    children:ReactNode;
}

function TitleOne({children}:TitlesProps){
    return(
         <h1 className="text-3xl font-bold ">
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