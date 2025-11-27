// ./src/app/leandro-venegas/portafolio/page.tsx
import Lista from '../../components/proyectos'
 import type { Proyecto } from '../../components/proyectos';
// 1. Importa la función de procesamiento de datos
import { getProcessedData } from '../../lib/loader/data-loader';

// 2. Convierte tu componente principal en una función asíncrona de SERVIDOR
// (Next.js automáticamente sabe que debe ejecutar esto antes de renderizar)
export default async function Portafolio() { // ⬅️ ¡Aquí está el cambio!

    // 3. Llama a tu función de datos directamente (y hazla síncrona si es necesario)
    // Ya que getProcessedData no usa promesas, no necesitas 'await'
    const { proyectos } = getProcessedData(); 


    return (
        <div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <h1 className="text-white text-3xl font-bold">Portafolio</h1>
            
            {/* Le pasas los datos al componente Lista */}
            <Lista proyectos={proyectos} /> 
        </div>
    );
}

// Nota: Ahora los datos se cargan directamente en este componente, 
// no hay función getStaticProps separada.