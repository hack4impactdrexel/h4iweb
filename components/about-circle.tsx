import { useEffect, useRef } from "react"
import Image from "next/image"
export default function AboutCircle({ name, image, role, major}){
    return (
        <section>
            <div className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                    <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                    />
                </div>
            <h3 className="mt-4 font-bold">{name}</h3>
            <p className="text-[#27AE60]">{role}</p>
            <p className="mt-2 text-sm text-gray-600">{major}</p>
            </div>      
        </section> 
    )
}