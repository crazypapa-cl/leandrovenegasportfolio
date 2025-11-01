import { Russo_One } from 'next/font/google'

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

export default function FullStack() {
  return (
    <div className="fixed top-0 -right-3 w-30 backdrop-blur py-2 z-50  rounded-lg  shadow-lg -rotate-11 hover:rotate-none transition-transform px-4 ">
      <span className={`${russoOne.className} text-gray-100 text-2xl ml-4 leading-none`}>
        FULL STACK
      </span>
      
    </div>
  );
}
