
class Proyecto {
    constructor(id, nombre, descripcion, empresaId, anio, tags, videoIds, imagenIds) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.empresaId = empresaId; // Relaciona 1:N con Empresa
        this.anio = anio;
        this.tags = tags || []; // Etiquetas para filtrado (ej: ['React', 'Nodejs'])
        this.videoIds = videoIds || []; // Array de IDs de Videos
        this.imagenIds = imagenIds || []; // Array de IDs de Imágenes
        
        // Propiedades que se "hidratarán" después de la lectura del JSON:
        this.empresa = null; 
        this.videos = [];
        this.imagenes = [];
    }

    // Método que demuestra la Composición y el Encapsulamiento
    // Este método buscaría en el array 'videos' (una vez hidratado)
    obtenerPrimerVideo() {
        return this.videos.length > 0 ? this.videos[0] : null;
    }

}