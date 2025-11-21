import {ReactNode} from "react";
interface ParraProps {
    children:ReactNode;
}
export default function ParraOne({children}:ParraProps){
    return(
        <p className="text-xs sm:text-base mt-2  text-gray-200">
            {children}
        </p>
    )
}