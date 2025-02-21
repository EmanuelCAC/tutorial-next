import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Menu />
    </header>
  )
}

export default Header