// 1. Importamos la función central
import { getNormalizedData } from '../lib/loader/data-loader';

// 2. Definimos el Componente de Presentación
// Este componente recibe los objetos 'proyectos' ya modelados.

function Proyect({ proyectos }) {
  return (
    <div>
      <h1>Portfolio de Proyectos</h1>
      {proyectos.map(proyecto => (
        <div key={proyecto.id} className="proyecto-tarjeta">
          {/* USANDO MÉTODOS Y RELACIONES DE OBJETOS */}
          
          <h2>{proyecto.obtenerEtiqueta()}</h2> {/* Método de Proyecto */}
          
          <p>
            Trabajo realizado en: 
            <strong>{proyecto.empresa.nombre}</strong> {/* Relación con objeto Empresa */}
          </p>
          
          {/* USANDO COMPOSICIÓN Y POLIMORFISMO */}
          {proyecto.videos.length > 0 && (
            <p>
              Demo: {proyecto.videos[0].duracionFormateada} {/* Método de Video */}
            </p>
          )}

          {/* Más lógica para mostrar imágenes, tags, etc. */}
        </div>
      ))}
    </div>
  );
}

// 3. Función de Obtención de Datos de Next.js (Se ejecuta en el servidor/build time)
export async function getStaticProps() {
  // Aquí llamamos a nuestra función para obtener los objetos interconectados
  const proyectosModelados = getNormalizedData();

  // Next.js SOLO permite pasar datos serializables (JSON planos) entre
  // el servidor (getStaticProps) y el cliente (el componente React).
  // Por lo tanto, debemos limpiar los objetos de sus métodos antes de pasarlos.
  // Sin embargo, para este ejemplo, simplificaremos asumiendo que el modelado 
  // se hace justo antes de renderizar si los datos son simples,
  // O que usaremos TypeScript para manejar esta serialización, 
  // pero para un ejemplo simple de JSON a Componente, solo pasaremos los datos.
  
  // En un proyecto real, se usa JSON.stringify/JSON.parse para serializar,
  // o se modela el comportamiento en el frontend si es necesario.
  
  // Por simplicidad del ejemplo: pasamos los objetos.
  return {
    props: {
      proyectos: proyectosModelados, // Array de objetos Proyecto interconectados
    },
  };
}

export default Proyect;