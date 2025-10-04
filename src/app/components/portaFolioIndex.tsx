import { usePathname } from "next/navigation";
import Link from "next/link";

const works = [
    {
        name:"UNIACC",
        year:"2010 / 2015",
        category:"Educativo",
        workstation:"Proyectos Audiovisuales",
        path:"uniacc",
    },
    {
        name:"Dragonlab",
        year:"2013 / 2015",
        category:"Marketing Digital",
        workstation:"Audiovisual and Marketing Digital",
        path:"dragonlab",
    },
        {
        name:"Valook ",
        year:"2013 / 2014",
        category:"Iluminacion profesional ",
        workstation:"Content Manager Audiovisual and SEO WEB",
        path:"valook",
    },
    
    {
        name:"Social Growing",
        year:"2014 / 2015",
        category:"Empresa social",
        workstation:"Audiovisual",
        path:"social_Growing",
    },
    {
        name:"Incoludido",
        year:"2015 / 2018",
        category:"Venta de Papel Higiénico",
        workstation:"Content Manager Audiovisual",
        path:"incoludido",
    }
    ,
    {
        name:"CrazyPapa Studio",
        year:"2018/2021",
        category:"Tienda de Diseños de Autor",
        workstation:"Proyect Manager, Content Manager, Audiovisual",
        path:"crazypapastudios",
    } ,
    {
        name:"Dando la Hora ",
        year:"2019 / 2022",
        category:"Tienda de Relojes",
        workstation:"Fotografias de Producto y Libro Dando la hora",
        path:"dandolahora",
    },
    {
        name:"CrazyPapa Fast Food",
        year:"2021/2025",
        category:"Restaurant de Comida rapida",
        workstation:"Publicista",
        path:"crazypapa",
    },

    {
        name:"Rayandola Studio Creativo",
        year:"2022/2023",
        category:"Espacio Cultural",
        workstation:"Gestor Cultural y Galerista",
        path:"rayandola",
    }
    
    ,
    {
        name:"CRAZY ROOM",
        year:"2025",
        category:"Rec Live Session Djs Valparaíso",
        workstation:"Product Manager, Publiciste Director Creativo",
        path:"crazyroom",
    }

]

const lasOrder = works.reverse();

const PortafolioIndex = ()=>{
   const pathpage = usePathname();

   return<ul className=" bg-gray-900 rounded-xl p-5 m-2 ">{
    lasOrder.map(el=>
   <Link key={el.name} 
   href={`${pathpage}/${el.path}`}>
    <li className="text-gray-400 m-2 p-2 bg-gray-700 rounded-md border-indigo-800 hover:border-gray hover:border-b-4 hover:bg-gray-900 ">
    <p className="text-gray-300 text-xl inline pr-4">{el.name}</p>
    <small className="block">{el.workstation}</small>
    <p className="text-xs">    {el.year}</p>
    
    </li>
    </Link>)}</ul>
}

export default PortafolioIndex;
