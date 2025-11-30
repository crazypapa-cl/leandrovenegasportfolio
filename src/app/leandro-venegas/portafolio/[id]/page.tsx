import Link from 'next/dist/client/link';
import { getProcessedData } from '../../../lib/loader/data-loader';

interface TipoVideo {
    id: string;
    proyectoId: string;
    titulo: string;
    url: string;
    duracionSegundos: number;
    tipo: string;
}

interface PageProps {
    params: Promise<{ id: string }>;
}
// 2. Convierte tu componente principal en una función asíncrona de SERVIDOR
// (Next.js automáticamente sabe que debe ejecutar esto antes de renderizar)

 export default async function Page({params }:PageProps) { // ⬅️ ¡Aquí está el cambio!
 const { id: proyectoId } = await params;
 const { proyectos } = getProcessedData();
    const proyecto = proyectos.find((p) => p.id === proyectoId);
    if (!proyecto) {

        return (<div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <h1 className="text-white text-3xl font-bold">Proyecto no encontrado</h1>
            </div>
       )
    }


    return (
        <div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <h1>{proyecto.nombre}</h1>
            {proyecto.video.map((video: TipoVideo) => (
                <div key={video.id}>
                    <h2>{video.titulo}</h2>
                    <p>Duración: {video.duracionSegundos} segundos</p>
                    <p>Tipo: {video.tipo}</p>
                    <iframe
                        width="560"
                        height="315"
                        src={video.url}
                        title={video.titulo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))  }
            
        </div>)
        
}

