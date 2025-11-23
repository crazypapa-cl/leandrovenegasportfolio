import Image from "next/image";
import Link from "next/link";
export default function Proyectos() {
  return (
    <div className="flex flex-col items-center w-lg m-10" >
     <h3 className="text-6xl">Rayandola Studio de Arte </h3>
     <Link href='/portafolio/rayandola/mutatis'><li>Mutatis</li></Link>
      </div>
  );
}
