import {ReactNode} from "react";
import Check from "../components/check";
interface ParraProps {
    check?:boolean;
    children:ReactNode;
}
export default function ListOne({children,check}:ParraProps){
    return(
       <li className=" flex  gap-3">
         {check?
            <Check/>:''}
         {children}
       </li>
           
        
    )
}