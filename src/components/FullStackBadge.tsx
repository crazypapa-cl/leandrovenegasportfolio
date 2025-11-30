import { Russo_One } from 'next/font/google'

const russoOne = Russo_One({
    weight: "400",
    subsets: ["latin"],
});

export function FullStackBadge() {
    return (
        <div className="fixed top-4 right-4 sm:top-0 sm:-right-3 w-auto backdrop-blur py-2 z-50 rounded-lg shadow-lg sm:-rotate-11 hover:rotate-none transition-transform px-4 bg-white/10">
            <span className={`${russoOne.className} text-gray-100 text-xl sm:text-2xl leading-none`}>
                FULL STACK
            </span>
        </div>
    );
}
