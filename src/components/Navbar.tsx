'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

const menu = [
    { name: "Home", path: "/", id: "1" },
    { name: "Perfil", path: "/perfil_profesional", id: "2" },
    { name: "Portafolio", path: "/portafolio", id: "3" },
    { name: "Contacto", path: "/contacto", id: "5" }
]

export function Navbar() {
    const pathName = usePathname()
    const isHome = pathName === '/';

    return (
        <nav className="bg-gray-900 p-4">
            <ul className="flex flex-wrap gap-6 justify-center items-center text-md italic font-bold">
                {menu.map(el => (
                    <li key={el.id}>
                        <Link
                            href={el.path}
                            className={`flex items-center gap-2 transition-colors ${pathName === el.path
                                    ? 'text-yellow-500 text-xl'
                                    : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {!isHome && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            )}
                            {el.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
