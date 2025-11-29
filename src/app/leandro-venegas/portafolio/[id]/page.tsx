import { getProcessedData } from '../../../lib/loader/data-loader';
interface TipoVodeo {
    id: string;
    proyectoId: string;
    titulo: string;
    url: string;
    duracionSegundos: number;
    tipo: string;
}
// 2. Convierte tu componente principal en una función asíncrona de SERVIDOR
// (Next.js automáticamente sabe que debe ejecutar esto antes de renderizar)
 function Page({params }:any) { // ⬅️ ¡Aquí está el cambio!

    // 3. Llama a tu función de datos directamente (y hazla síncrona si es necesario)
    // Ya que getProcessedData no usa promesas, no necesitas 'await'
 const { proyectos } = getProcessedData(); 

    return (
        <div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            {proyectos.filter((proyecto) => proyecto.id === params.id).map((proyecto) => (
                <div key={proyecto.id} className="bg-gray-800 rounded-lg p-6 w-full max-w-4xl">
                    <h1 className="text-2xl font-bold mb-4">{proyecto.nombre}</h1>   
                    {proyecto.video.map((video:TipoVodeo )=>(
     
                        <div key={video.id} className="bg-gray-700 rounded-md p-4 mb-4">
                            <h3 className="text-xl font-semibold mb-2">{video.titulo}</h3>
                            <p>URL: <a href={video.url} className="text-blue-400 underline">{video.url}</a></p>
                            <p>Duración: {video.duracionSegundos} segundos</p>
                            <p>Tipo: {video.tipo}</p>
                        </div>
                    ))}
        
        </div>
    ))}
        </div>
    )       ;
}

// Nota: Ahora los datos se cargan directamente en este componente, 
// no hay función getStaticProps separada.
export default Page;