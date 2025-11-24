import rawEmpresas from '../../data/empresas.json';
import rawProyectos from '../../data/proyectos.json'
import rawVideos from '../../data/videos.json';
import rawImagenes from '../../data/imagenes.json';

// 💡 Agrega estos logs para ver si la carga cruda funciona:

export function getProcessedData (){

const empresaMap = rawEmpresas.reduce((mapaAcumulador, empresaActual)=>{
    mapaAcumulador[empresaActual.id]=empresaActual;
    return mapaAcumulador;
},{})

const videoMap = rawVideos.reduce((map, item) => { // Diccionario de Videos
        map[item.id] = item;
        return map;
    }, {});

    const imagenMap = rawImagenes.reduce((map, item) => { // Diccionario de Imágenes
        map[item.id] = item;
        return map;
    }, {});

const proyectosCompletos = rawProyectos.map(proyectoCrudo=>{

        const empresa = empresaMap[proyectoCrudo.empresaId];
        const video = videoMap[proyectoCrudo.videoId];
        const imagen = imagenMap[proyectoCrudo.imagenId];

    return {
        ...proyectoCrudo,
            empresa: empresa,   // Conexión de Empresa
            video: video,       // Conexión de Video
            imagen: imagen      // Conexión de Imagen
    };
})


    return {
        proyectos:proyectosCompletos,
        empresasMap: empresaMap,
    }
}

