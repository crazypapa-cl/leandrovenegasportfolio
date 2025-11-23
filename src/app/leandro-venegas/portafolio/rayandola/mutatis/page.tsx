import Image from "next/image";
import Link from "next/link";
export default function Proyectos() {
  console.log("hola");
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-white text-3xl font-bold">Mutatis music Festival</h1>
         <h2>Dos dias de puro talento local en valparaiso</h2>
         <p className="text-sm italic">7 y 8 de abril 2023</p>
          <Image src='/portafolio/mutatis/img/mutatis-logo.png' alt='Mutatis Logo' width={500} height={500} priority></Image>
         <div className="sm:grid-cols-2  grid grid-cols-3 gap-4 items-center content-center rounded-xl">
       

        <Image className='rounded-xl'src='/portafolio/mutatis/img/mutatis-festival-valparaiso-afiche-calle-prat.jpg' alt='Mutatis Logo' width={500} height={500}></Image>
         <Link href={'/portafolio/mutatis/img/poster-mutatis-festival-todos-los-artistas-valparaiso.png'}><Image className='rounded-xl'src='/portafolio/mutatis/img/poster-mutatis-festival-todos-los-artistas-valparaiso.png' alt='Mutatis Logo' width={500} height={500}></Image></Link> 
        <Image className='rounded-xl'src='/portafolio/mutatis/img/mutatis-mutandi-poster-calle-valparaiso-pedro-mont.jpg' alt='Mutatis Logo' width={500} height={500}></Image>
        <Image className='rounded-xl'src='/portafolio/mutatis/img/mutatis-mutandi-festiva-valparaiso-proceso-de-creacion-afiche-serigrafia.jpg' alt='Mutatis Logo' width={500} height={500}></Image>
        <Link href={'mutatis-mutandi-expo-festival-poster-calle-polanco-valparaiso.jpg'}><Image className='rounded-xl'src='/portafolio/mutatis/img/mutatis-mutandi-expo-festival-poster-calle-polanco-valparaiso.jpg' alt='Mutatis Logo' width={500} height={500}></Image></Link> 
        <Link href={'/portafolio/mutatis/img/babuch-diseño-logo-mutatis.jpg'}><Image className='rounded-xl'src='/portafolio/mutatis/img/babuch-diseño-logo-mutatis.jpg' alt='Mutatis Logo' width={500} height={500}></Image></Link> 
       </div>
          <div className="grid sm:grid-cols-2 gap-8 mt-8">
            <video className='rounded-xl' controls src="/portafolio/mutatis/video/video-promocion-mutatis-mutandi-festival-valparaiso.mp4">
            </video>
            <video className='rounded-xl' controls src="/portafolio/mutatis/video/video-promocion-mutatis-mutandi-festival.mp4">
            </video>
            <video className='rounded-xl' controls src="/portafolio/mutatis/video/Mutatis-mutandi-expofest-valpaaiso-reel-promo-flow-mila.mp4">
            </video>
            <video className='rounded-xl' controls src="/portafolio/mutatis/video/mutatis-expo-fest-reel-promo-nigth-nitty.mp4">
            </video>
          
          </div>
    </div>
  );
}
