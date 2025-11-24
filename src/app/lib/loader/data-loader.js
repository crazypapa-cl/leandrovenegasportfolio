// 1. IMPORTAR CLASES Y DATOS CRUDOS
// Suponemos que tienes las clases definidas y los archivos JSON en /data/
// Nota: En Next.js, require() debe funcionar bien para archivos estáticos.

// Importar clases (las que definimos)
const { Proyecto } = require('../models/Proyecto'); 
const { Empresa } = require('../models/Empresa');
const { Video } = require('../models/Video');
const { Imagen } = require('../models/Imagen');

// Cargar los datos crudos (Asumimos rutas válidas a tus archivos JSON)
const rawEmpresas = require('../../data/empresas.json');
const rawProyectos = require('../../data/proyectos.json');
const rawVideos = require('../../data/videos.json');
const rawImagenes = require('../../data/imagenes.json');

// Función Principal
export function getNormalizedData() {
    // --- FASE 1 & 2: MODELAR Y CREAR MAPAS ---
    // Creamos mapas (objetos clave-valor) para acceso rápido por ID.
    // Esto evita buscar en arrays grandes y mejora la eficiencia (O(1) vs O(N)).

    // 1a. Modelar y mapear Empresas
    const empresaMap = rawEmpresas.reduce((map, data) => {
        const empresa = new Empresa(data.id, data.nombre, data.logoUrl, data.periodo, data.descripcion);
        map[data.id] = empresa;
        return map;
    }, {});
    
    // 1b. Modelar y mapear Videos
    const videoMap = rawVideos.reduce((map, data) => {
        const video = new Video(data.id, data.proyectoId, data.titulo, data.url, data.duracionSegundos, data.tipo);
        map[data.id] = video;
        return map;
    }, {});

    // 1c. Modelar y mapear Imágenes
    const imagenMap = rawImagenes.reduce((map, data) => {
        const imagen = new Imagen(data.id, data.proyectoId, data.titulo, data.path, data.resolucion, data.formato);
        map[data.id] = imagen;
        return map;
    }, {});


    // --- FASE 3: CONECTAR Y NORMALIZAR LOS PROYECTOS ---

    const proyectosNormalizados = rawProyectos.map(data => {
        // 2a. Crear la instancia del Proyecto
        const proyecto = new Proyecto(
            data.id,
            data.nombre,
            data.descripcion,
            data.empresaId,
            data.anio,
            data.tags,
            data.videoIds,
            data.imagenIds
        );
        
        // 2b. CONEXIÓN 1: Añadir el objeto Empresa
        proyecto.empresa = empresaMap[data.empresaId];
        
        // 2c. CONEXIÓN 2: Añadir los objetos Video
        proyecto.videos = data.videoIds
            .map(videoId => videoMap[videoId])
            .filter(video => video !== undefined); // Asegura que el ID existe
        
        // 2d. CONEXIÓN 3: Añadir los objetos Imagen
        proyecto.imagenes = data.imagenIds
            .map(imagenId => imagenMap[imagenId])
            .filter(imagen => imagen !== undefined); // Asegura que el ID existe

        return proyecto;
    });

    // 3. Devolvemos el array principal de Proyectos interconectados
    return proyectosNormalizados;
}



// const miPortafolio = getNormalizedData();
// console.log(miPortafolio[0].obtenerEtiqueta());
// console.log(miPortafolio[0].empresa.nombre); // Acceso directo a la Empresa
// console.log(miPortafolio[0].videos[0].duracionFormateada); // Acceso al método del Video