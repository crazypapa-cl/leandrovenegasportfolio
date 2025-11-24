class Imagen {
    constructor(id, proyectoId, titulo, path, resolucion, formato) {
        this.id = id; // I301, I302, etc.
        this.proyectoId = proyectoId; // CLAVE: Referencia al Proyecto (ej: P001)
        this.titulo = titulo;
        this.path = path; // La ruta relativa al archivo dentro de tu proyecto (ej: /images/mockup_dashboard.png)
        this.resolucion = resolucion; // Ejemplo: "1920x1080"
        this.formato = formato; // Ejemplo: "PNG", "JPEG"
    }

    // Método de ejemplo (Comportamiento)
    get obtenerAltText() {
        // Genera un texto alternativo para SEO y accesibilidad
        return `Captura de pantalla del proyecto ${this.proyectoId}: ${this.titulo}`;
    }
}