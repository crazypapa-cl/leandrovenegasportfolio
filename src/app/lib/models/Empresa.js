class Empresa {
    constructor(id, nombre, logoUrl, periodo, descripcion) {
        this.id = id; // E101, E102, etc.
        this.nombre = nombre;
        this.logoUrl = logoUrl; // Ruta o URL al logo de la empresa
        this.periodo = periodo; // Ejemplo: "2018 - 2022"
        this.descripcion = descripcion; // Rol o resumen de la empresa
    }

    // Método de ejemplo (Comportamiento)
    obtenerPeriodoEnAnios() {
        // Lógica para calcular la duración de tu empleo
        // Esto vive solo en el objeto, no en el JSON.
        // (Por simplicidad, omitimos el cálculo real aquí)
        return "4 años"; 
    }
}