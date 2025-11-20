import Link from "next/link";

export default function home(){
  return (
  <>
  <div className=" gird-cols-1 justify-center items-center p-4 m-4 bg-gray-900/10 backdrop-blur-sm rounded-lg shadow-lg prose prose-neutral dark:prose-invert">
     <h1 className="text-5xl font-bold ">Marketing en la Quinta Región</h1>
     <p className="text-3xl mt-2 font-bold text-gray-400">Valparaíso / Viña del Mar</p>
      Mejoramos tu prseencia el Google My Negocio
     <Link href="/google-business" className="hover:underline">
     <div className="bg-gray-800 rounded-xl px-4 py-2 mt-4">  <h2 className="text-xl font-bold">Google Bussines </h2>
     <p>descubrel el poder de google bussines </p>
     <span className="text-yellow-300">★★★★★</span></div>
   </Link>
      <div className="bg-gray-800 rounded-xl px-4 py-2 mt-4"> 
       <h2 className="text-xl font-bold mt-4">Contenidos Audivisueles </h2>
     <p>Creamos contenidos para tu marca</p>

  </div>
  </div>
 
  </>)
}