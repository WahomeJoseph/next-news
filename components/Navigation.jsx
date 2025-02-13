import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="flex items-center w-full justify-between p-6 bg-transparent shadow-lg">
      <div className="text-3xl font-bold text-white">
        <Link href='/' className=''>H-hotT</Link>
      </div>
      <nav>
        <ul className="flex space-x-10 bg-transarent p-2 rounded-sm">
          <li><Link href='/news' className="text-[#f1f1f1] bg-transparent text-xl outline-none p-2 hover:shadow-[0px_20px_207px_10px_rgba(187,_163,_163,_0.54)]">News</Link></li>
          <li><Link href='/news' className="text-[#f1f1f1] bg-transparent text-xl outline-none p-2 hover:shadow-[0px_20px_207px_10px_rgba(187,_163,_163,_0.54)]">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}
