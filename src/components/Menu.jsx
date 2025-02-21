import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <nav className="w-[60%]">
      <ul className="flex justify-between border-2 border-white rounded-xl py-2 px-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/contato">Contato</Link></li>
        <li><Link href="/quem-somos">Quem Somos</Link></li>
        <li>item 4</li>
      </ul>
    </nav>
  )
}

export default Menu