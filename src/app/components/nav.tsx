import Link from "next/link"

const menu = [
    {
        name:"Home",
        path:"/",
        id : "1"
    },
    {
         name:"Perfil profesional ",
        path:"perfil_profesional",
        id : "2"
    },
    {
        name:"Portafolio",
        path:"portafolio",
        id : "3"
    },
    {
        name:"Curriculum Vitae",
        path:"curriculum",
        id:"4"
    },
    {
        name:"Contacto",
        path:"contacto",
        id:"5"
    }
]

    export default function Navbar(){
        return (
    <ul className="flex gap-4 justify-center m-5 p-3 text-md italic font-bold bg-gray-900">
    { menu.map(el=><Link href={el.path}  key={el.id}><li>{el.name}</li></Link>)}
    </ul>
            
        )
    }