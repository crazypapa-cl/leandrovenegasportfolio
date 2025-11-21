import { ReactNode } from "react"

export default function Starts({children}:{children:ReactNode})
{
    return(
      <span className="text-center text-4xl text-yellow-300">{children} </span>
    )
}