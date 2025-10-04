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

const PortafolioIndex = ()=>{
   const pathpage = usePathname();

   return<ul className="bg-gray-900 rounded-xl p-5 m-2 ">{
    ...works.reverse().map(el=>
   <Link key={el.name} 
   href={`${pathpage}/${el.path}`}>
    <li className="text-center m-2 p-2 bg-gray-800 hover:bg-gray-900 hover:border-red-500 rounded-md ">
    <p className="inline pr-4">{el.name}</p>
    <small>**********</small>
    <span className="pl-4">
    {el.year}
    </span>
    <small className="block">{el.workstation}</small>
    </li>
    </Link>)}</ul>
}

export default PortafolioIndex;
