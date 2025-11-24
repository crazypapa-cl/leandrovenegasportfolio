class Video {
    constructor(id, proyectoId, titulo, url, duracionSegundos, tipo) {
        this.id = id; // V201, V202, etc.
        this.proyectoId = proyectoId; // CLAVE: Referencia al Proyecto (ej: P001)
        this.titulo = titulo;
        this.url = url; // Enlace al video (YouTube, Vimeo, etc.)
        this.duracionSegundos = duracionSegundos;
        this.tipo = tipo; // Ejemplo: 'DEMO', 'TECNICO', 'ANIMACION'
    }

    // Método de ejemplo (Comportamiento)
    get duracionFormateada() {
        // Lógica para convertir 125 a "02:05"
        const minutos = Math.floor(this.duracionSegundos / 60);
        const segundos = this.duracionSegundos % 60;
        return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    }
}