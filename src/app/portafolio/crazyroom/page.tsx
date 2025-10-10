import Image from "next/image";
import Link from "next/link";
export default function Proyectos() {
  return (
    <div className="flex flex-col h-min-screen content-center ">
     <h1 className="text-white text-3xl font-bold">CRAZYROOM</h1>
       <Link href={'/portafolio/crazyroom/img/LOGO-CRAZY-ROOM-REC-LIVE-SESSIONS-valparaiso.png'}>
    <Image className='rounded-xl'src='/portafolio/crazyroom/img/LOGO-CRAZY-ROOM-REC-LIVE-SESSIONS-valparaiso.png' 
    alt='Mutatis Logo' width={500} height={500}></Image></Link>


     <div  className=" grid grid-cols-1 sm:grid-cols-2 justify-center gap-4">
    <Link href={'/portafolio/crazyroom/img/Flayer-Crazyroom-Rec-Live-Session-valparaiso-jose-Manojo.png'}>
    <Image className='rounded-xl'src='/portafolio/crazyroom/img/Flayer-Crazyroom-Rec-Live-Session-valparaiso-jose-Manojo.png' 
    alt='Mutatis Logo' width={500} height={500}></Image></Link> 
    <Link href={'/portafolio/crazyroom/img/LOGO-CRAZY-ROOM-REC-LIVE-SESSIONS-valparaiso.png'}>
    <Image className='rounded-xl'src='/portafolio/crazyroom/img/HELLO-KETA-FLAYER-MAKETA-V2.png' 
    alt='Mutatis Logo' width={500} height={500}></Image></Link> 
    <Link href={'/portafolio/crazyroom/img/LOGO-CRAZY-ROOM-REC-LIVE-SESSIONS-valparaiso.png'}>
    <Image className='rounded-xl'src='/portafolio/crazyroom/img/Flayer-Crazy-Room-Master-Gonazalo-Barrera.png' 
    alt='Mutatis Logo' width={500} height={500}></Image></Link> 
    <Link href={'/portafolio/crazyroom/img/LOGO-CRAZY-ROOM-REC-LIVE-SESSIONS-valparaiso.png'}>
    <Image className='rounded-xl'src='/portafolio/crazyroom/img/FlayerCrazyRoom-Gonzalo-barrera-Valparaiso.png' 
    alt='Mutatis Logo' width={500} height={500}></Image></Link> 
     </div>
<div className="grid grid-cols-2 gap-4 content-center justify-center items-center mt-8 ">
  <video src="/portafolio/crazyroom/video/HELLO-KETTA-VERSION-REEL-01.mp4" controls width="350" height="350">

  </video>
  <video src="/portafolio/crazyroom/video/Master-Historia-CrazyRoom-Valpo.mp4" controls width="350" height="350">

  </video>
  <video src="/portafolio/crazyroom/video/Reel-Promo-REEL.mp4" controls width="350" height="350">

  </video>
</div>
    </div>
  );
}
