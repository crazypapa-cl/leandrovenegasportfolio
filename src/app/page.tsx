import Link from "next/link";
import ButtonUno from "./ui/Buttons";
import {TitleOne,TitleTwo} from "./ui/titles";
import Starts from "./ui/starts";
import ParraOne from "./ui/parraFrase";

export default function home(){
  return (
  <>
  <div className=" flex flex-col justify-center items-center  bg-gray-900/10  prose prose-neutral dark:prose-invert">
<div className=" max-w-xl max-auto p-4 m-4">    

     <TitleOne>¿Dónde aparece realmente tu tienda cuando te buscan en Google?</TitleOne>
     <Starts>★★★★★</Starts>
    <ParraOne>En OK Media ayudamos a los negocios de la Quinta Región a dominar Google Maps y atraer más clientes todos los días.</ParraOne>
   <ParraOne>Google Business + Fotos Profesionales + Video Storytelling = Más visibilidad. Más llamadas. Más ventas. </ParraOne>
   <ButtonUno  url='/leandro'>Quiero aparecer en Google</ButtonUno>
 <section className="mt-6">
  <TitleTwo>Mientras todos hablan de Inteligencia Artificial… tus clientes siguen buscando en Google Maps.</TitleTwo>
  <ParraOne>Las marcas grandes invierten millones, los algoritmos cambian, 
  y las redes sociales suben y bajan.Pero hay una verdad que no cambia</ParraOne>
 <ParraOne>📍 La decisión de compra local ocurre en Google Maps.</ParraOne>
 <ParraOne>Cuando alguien busca “tienda en Valparaíso”, Google elige qué mostrar.
Si tu negocio no está en el Top 3, simplemente queda fuera del mapa. Y no es tu culpa.
Google nunca explicó cómo funciona. Nosotros sí.</ParraOne>
 </section>
 <section className="mt-6">
  <TitleTwo>Tus clientes te buscan… pero encuentran a tu competencia primero.</TitleTwo>
  <ParraOne>Si tu ficha:
aparece abajo
tiene fotos antiguas
tiene reseñas malas
no tiene publicaciones
o simplemente está incompleta
Google la considera “irrelevante”.
No importa si tu tienda es la mejor.
Google no premia al mejor negocio.
Premia a la ficha más optimizada, activa y completa.</ParraOne>
  </section>
  <section className="mt-6">
    <TitleTwo className="text-2xl font-bold">Aquí está la oportunidad que casi nadie está aprovechando.</TitleTwo>
    <ParraOne>Durante los últimos meses descubrimos algo que cambió todo para negocios locales:

👉 Una ficha optimizada + contenido profesional
…puede llevar un negocio desde la posición 20 al Top 3 del mapa.

Sin anuncios.
Sin complicaciones.
Solo estrategia + contenido real.

Y en la Quinta Región, muy pocos lo están haciendo bien.
Ese es tu momento de ventaja.</ParraOne>
  </section>
    <section className="mt-6">
    <TitleTwo>Transformamos tu Perfil de Google en una máquina de atraer clientes.</TitleTwo>
    <ParraOne>Nuestro sistema incluye:
1. Auditoría completa

Revisamos tu ranking actual y detectamos por qué Google no te muestra.

2. Optimización profesional de Google Business

Descripción, categorías, atributos, servicios, fotos, enlaces, todo.

3. Fotos profesionales

Google prioriza contenido original y reciente. Subimos 10–20 imágenes optimizadas.

4. Video-storytelling

Un micro-video que muestra tu negocio, tu historia y tu propuesta de valor.

5. Publicaciones semanales

Mantienen tu ficha activa y aumentan la relevancia.

6. Gestión de reseñas

Plantillas, respuestas, reputación y estrategia para obtener nuevas reseñas positivas.

Resultado:
✔ Más visibilidad
✔ Más clics
✔ Más llamadas
✔ Más visitas presenciales</ParraOne>
  </section>
  <section className="mt-6">
    <TitleTwo className="text-2xl font-bold">¿Quieres saber en qué posición aparece tu negocio?</TitleTwo>
    <ParraOne>Te hacemos una auditoría gratis en menos de 5 minutos.</ParraOne>
  <ButtonUno url='/'>Solicitar Auditoría Gratis</ButtonUno>


  </section>
  <section className="mt-6">
    <TitleTwo>Somos un equipo local especializado en Google Business para negocios de Valparaíso y Viña del Mar.</TitleTwo>
    <ParraOne>Creemos en el comercio local.
Creemos en negocios reales.
Creemos en visibilidad sin humo.

Nuestros servicios están diseñados para entregar resultados medibles, no promesas vacías.


</ParraOne>
  </section>
</div>
  </div>
 
  </>)
}