import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-6">
        <div className="text-2xl font-bold text-white">PortfolioGen</div>
        <nav className="flex gap-3 font-semibold items-center space-x-4">
          <Link href="#" className="text-white">Templates</Link>
          <Link href="#" className="text-white">Features</Link>
          <Link href="#" className="text-white">Pricing</Link>
          <Link href="#" className="bg-white text-[#4a0e8f] px-4 py-2 rounded-md font-bold">Log in</Link>
          <Link href="#" className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-md font-bold">Sign up </Link>
        </nav>
      </header>
  )
}
