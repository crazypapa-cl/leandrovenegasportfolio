import { url } from "inspector"
import Image from "next/image";

export default function Avatar({ url, className }: { url: string, className: string  }) {

    return(
        <Image
                  src={url}
                  alt="Foto de perfil de Leandro Venegas Parraguez"
                  className={`${className} rounded-full lg:mt-5  lg:mb-5 mb-5 mx-auto  
                 sm:ml-5 grayscale hover:grayscale-0`}
                  unoptimized
                  width={160}
                  height={160}
                  priority
                />
    )
}