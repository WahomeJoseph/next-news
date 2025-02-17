import Link from 'next/link'
import Navlink from './Navlink'

export default function Navigation() {
  return (
    <header className="flex items-center w-full justify-between p-6 bg-transparent shadow-lg">
      <div className="text-3xl font-bold text-white">
        <Link href='/' className=''>H-hotT</Link>
      </div>
      <nav>
        <ul className="flex space-x-10 bg-transarent p-2 rounded-sm">
          <li><Navlink href='/news'>News</Navlink></li>
          <li><Navlink href='/hot'>Hot T</Navlink></li>
        </ul>
      </nav>
    </header>
  )
}
