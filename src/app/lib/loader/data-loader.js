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

const videosByProyectoMap = rawVideos.reduce((mapaAcumulador, videoActual) => {
        const proyectoId = videoActual.proyectoId;
        // Inicializa el array si es la primera vez que vemos este proyectoId
        if (!mapaAcumulador[proyectoId]) {
            mapaAcumulador[proyectoId] = [];
        }
        // Agrega el video al array de su proyecto
        mapaAcumulador[proyectoId].push(videoActual); 
        return mapaAcumulador;
    }, {});

    const imagenMap = rawImagenes.reduce((map, item) => { // Diccionario de Imágenes
        map[item.id] = item;
        return map;
    }, {});


const proyectosCompletos = rawProyectos.map(proyectoCrudo=>{

        const empresa = empresaMap[proyectoCrudo.empresaId];
        const videosDelProyecto = videosByProyectoMap[proyectoCrudo.id] || [];
        const imagen = imagenMap[proyectoCrudo.imagenId];

    return {
        ...proyectoCrudo,
            empresa: empresa,   // Conexión de Empresa
            video: videosDelProyecto,       // Conexión de Video
            imagen: imagen      // Conexión de Imagen
    };
})


    return {
        proyectos:proyectosCompletos,
        empresasMap: empresaMap,
    }
}

