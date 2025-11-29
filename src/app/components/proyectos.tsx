import Link from "next/link";
export interface Proyecto {
    id:string;
    nombre:string;
    anio:number;
}

interface ListaProps {
  proyectos: Proyecto[]; 
}

function Lista({proyectos} : ListaProps){ // ⬅️ Debes aceptar los props aquí
    console.log(proyectos)
    return(
        <div>
            <ul>
                {proyectos.map(el=>{
                    return <Link href={`/leandro-venegas/portafolio/${el.id}`} key={el.id}>
                    <li key={el.id} className="text-xs">
                        <span >{el.nombre} - {el.anio}   </span>
                    </li>
                    </Link>
                })}
            </ul>
        </div>
    )
}
export default Lista