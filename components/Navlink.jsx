'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navlink({ href, children }) {
    const path = usePathname()
    return (
        <>
            <Link href={href} className={path.startsWith(href) ? 'text-red-500 text-xl' : 'text-[#f1f1f1] bg-transparent text-xl outline-none p-2 hover:shadow-[0px_20px_207px_10px_rgba(187,_163,_163,_0.54)]'}>{children}</Link>
        </>
    )
}