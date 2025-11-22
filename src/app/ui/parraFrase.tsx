import {ReactNode} from "react";
interface ParraProps {
    children:ReactNode;
    className?:string;
}
function ParraOne({children,className}:ParraProps){
    return(
       
        <p className= {`text-xs sm:text-base mt-2  text-gray-200 ${className || ''}`}>
            {children}
        </p>
    )
}

function ParraTwo({children,className}:ParraProps){
    return(
       
        <p className= {` text-center text-2xl sm:text-base mt-2 text-gray-200 ${className || ''}`}>
            {children}
        </p>
    )
}

export {ParraOne, ParraTwo}