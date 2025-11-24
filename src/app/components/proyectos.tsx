


function Lista({proyectos}){ // ⬅️ Debes aceptar los props aquí
    console.log(proyectos)
    return(
        <div>
            <ul>
                {proyectos.map(el=>{
                    return <li key={el.id} className="text-xs">
                        <span >{el.nombre} - {el.anio}   </span>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default Lista