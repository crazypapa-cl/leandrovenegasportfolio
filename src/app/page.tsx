import Link from "next/link";
import ButtonUno from "./ui/Buttons";
import {TitleOne,TitleTwo} from "./ui/titles";
import Starts from "./ui/starts";
import {ParraOne , ParraTwo} from "./ui/parraFrase";
import ListOne from "./ui/lists";
import CarListOne from "./ui/cardLists";
import SectionOne from "./ui/sections";
import MapIcon from "./ui/icons/mapIcon";
import Avatar from "./components/avatart";
import Image from "next/image";

export default function home(){
  return (
  <>
  <div className=" flex flex-col justify-center items-center  bg-gray-900/80  prose prose-neutral dark:prose-invert"> 
  <div className=" max-w-xl max-auto ">    
  <img src="https://css-tianguis.com/wp-content/uploads/2020/03/google-maps-links-1024x546.png" alt="" className="  absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />
  <SectionOne className='h-screen flex flex-col  justify-evenly  '>
 <div className="flex flex-col gap-4 items-center"> 
  <TitleOne className='text-6xl text-center text-shadow-lg/30 mb-8'>¿Tu negocio está en el mapa ?</TitleOne>
  <MapIcon></MapIcon>
  <Starts>★★★★★</Starts>
  <h2 className="text-3xl font-bold">y puede estar aún mejor</h2>
  </div>

<div className="mb-20">
    <ParraTwo >El E-book que todo negocio debería leer: 
para lograr más visibilidad, en Google Maps.
</ParraTwo>

  <ButtonUno  url='/leandro'>GRATIS</ButtonUno>
  <p className="text-lg">Más visibilidad, más llamadas, más ventas
  </p>
</div>

  </SectionOne>
 <SectionOne >
  <Link href={'/leandro-venegas'}>
  <Avatar url="./profile.png"  className={' shadow-2xl col-span-3 sm:col-span-1 '}/>
  </Link>
  <ParraTwo >Soy <Link href={'/leandro-venegas'}>Leandro Venegas</Link> consultor de marketing en la quinta región, quiero mostrarte lo que descubrí sobre visibilidad real en Google usando google Maps.</ParraTwo>
  <ParraTwo className="mt-8">imagina que somos una persona llegando a valparaiso y que quiere tomar  un buen cafe, lo primero que hace busacr en su celular la palabra cafe </ParraTwo>
  <div><Image className="mt-8" src='/google-business-profile/barra-de-busqueda-google-cafe-local-pack-valparaiso.jpg' width={500} height={350} alt='Captura de pantalla de los resultados del Local Pack de Google Maps para la búsqueda de cafeterías en Valparaíso.'></Image></div>
  <ParraTwo>este resultado se llama Local pack y es increible solo imagina tu negocio apreciendo entre los primeros 3</ParraTwo>
  <div><Image className="mt-8" src='/google-business-profile/yhhhresultados-local-pack-cafe-valparaiso.png' width={500} height={350} alt='Captura de pantalla de los resultados del Local Pack de Google Maps para la búsqueda de cafeterías en Valparaíso.'></Image></div>
  <ParraTwo>y luego Magia ya estoy en tu google bussines que crees, solo falta un poco para convercer a esta persona de tomar las indiciones para ir a tu local</ParraTwo>
  <div><Image className="mt-8" src='/google-business-profile/resultado-google-my-bussines-local-pack-valparaiso-cafe.jpg' width={350} height={350} alt='Captura de pantalla de los resultados del Local Pack de Google Maps para la búsqueda de cafeterías en Valparaíso.'></Image></div>
    <ParraTwo>Lo que tienes aqui es un led calificado, si tienes otro tipo de negocio puedes agendar una cita por una llamada telefononica</ParraTwo>
    <div className="content-center"><Image className="mt-8" src='/google-business-profile/resultado-google-my-bussines-local-pack-valparaiso-icono-como-llegar.jpg' width={180} height={180} alt='Captura de pantalla de los resultados del Local Pack de Google Maps para la búsqueda de cafeterías en Valparaíso.'></Image></div>
      <ParraTwo>y de aqui para delante es una cantidad de cosas que puedes hacer para conseguir este cliente y es alli donde estas tu</ParraTwo>
    <Starts>★★★★★</Starts>
    <ParraTwo>Te invito a decargar Mi libro electronico completamente gratis, es un Check List de todos lo  necesitas para poder ranquier en las primeras busquedas en con tu negocio local</ParraTwo>
 <div className="content-center"><Image className="mt-8" src='/google-business-profile/Gemini_Generated_Image_intvqtintvqtintv.png' width={250} height={250} alt='Captura de pantalla de los resultados del Local Pack de Google Maps para la búsqueda de cafeterías en Valparaíso.'></Image></div>

  <ButtonUno  url='/leandro'>GRATIS</ButtonUno>
  <ParraTwo>No ignores esto: una parte importante de las llamadas y visitas que reciben las tiendas hoy viene directamente desde Google Maps. Déjame contarte —sin vueltas— cómo puedes aprovecharlo tú también y dejar de perder los clientes que estan en la calle buscando negocios en sus celulares.</ParraTwo>
  <TitleTwo>Mientras todos hablan de Inteligencia Artificial… tus clientes siguen buscando en Google Maps.</TitleTwo>

  <ParraOne>Las marcas grandes invierten millones, los algoritmos cambian, y las redes sociales suben y bajan.Pero hay una verdad que no cambia</ParraOne>
  <ParraOne>📍 La decisión de compra local ocurre en Google Maps.</ParraOne>
  <ParraOne>Cuando alguien busca “tienda en Valparaíso”, Google elige qué mostrar. Si tu negocio no está en el Top 3, simplemente queda fuera del mapa. Y no es tu culpa.Google nunca explicó cómo funciona. Nosotros sí.</ParraOne>
  </SectionOne>
 <SectionOne>
  <TitleTwo>Tus clientes te buscan… pero encuentran a tu competencia primero.</TitleTwo>
  <ParraOne>Si tu ficha: aparece abajo tiene fotos antiguas tiene reseñas malas no tiene publicaciones o simplemente está incompleta Google la considera “irrelevante”. No importa si tu tienda es la mejor. Google no premia al mejor negocio. Premia a la ficha más optimizada, activa y completa.</ParraOne>
  </SectionOne>
 <SectionOne>
    <TitleTwo >Aquí está la oportunidad que casi nadie está aprovechando.</TitleTwo>
    <ParraOne>Durante los últimos meses descubrimos algo que cambió todo para negocios locales: 
      👉 Una ficha optimizada + contenido profesional …puede llevar un negocio desde la posición 20 al Top 3 del mapa. 
      Sin anuncios. Sin complicaciones. Solo estrategia + contenido real. 
      Y en la Quinta Región, muy pocos lo están haciendo bien. Ese es tu momento de ventaja.</ParraOne>
  </SectionOne>
  <SectionOne>
    <CarListOne>
    <TitleTwo>Transformamos tu Perfil de Google en una máquina de atraer clientes.</TitleTwo>
    <ParraOne>Nuestro sistema incluye:</ParraOne>
   <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
    <ListOne check>1. Auditoría completa Revisamos tu ranking actual y detectamos por qué Google no te muestra.</ListOne>
    <ListOne check>2. Optimización profesional de Google Business Descripción, categorías, atributos, servicios, fotos, enlaces, todo.</ListOne>
    <ListOne check>3. Fotos profesionales Google prioriza contenido original y reciente. Subimos 10 - 20 imágenes optimizadas.</ListOne>
    <ListOne check>4. Video-storytelling Un micro-video que muestra tu negocio, tu historia y tu propuesta de valor.</ListOne>
    <ListOne check>5. Publicaciones semanales Mantienen tu ficha activa y aumentan la relevancia.</ListOne> 
    <ListOne check>6. Gestión de reseñas Plantillas, respuestas, reputación y estrategia para obtener nuevas reseñas positivas.</ListOne>
   </ul> 
   <ButtonUno url='/'>Mostrar Planes</ButtonUno>
   </CarListOne>

 <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
  <ListOne>Resultado:</ListOne>
✔ Más visibilidad
✔ Más clics
✔ Más llamadas
✔ Más visitas presenciales
 </ul>
  </SectionOne>
 <SectionOne>
    <TitleTwo>¿Quieres saber en qué posición aparece tu negocio?</TitleTwo>
    <ParraOne>Te hacemos una auditoría gratis en menos de 5 minutos.</ParraOne>
    <ButtonUno url='/'>Solicitar Auditoría Gratis</ButtonUno>
</SectionOne>
<SectionOne>
    <TitleTwo>Somos un equipo local especializado en Google Business para negocios de Valparaíso y Viña del Mar.</TitleTwo>
    <ParraOne>Creemos en el comercio local. Creemos en negocios reales.Creemos en visibilidad sin humo.

Nuestros servicios están diseñados para entregar resultados medibles, no promesas vacías.


</ParraOne>
</SectionOne>
</div>
</div>
  </>)
}