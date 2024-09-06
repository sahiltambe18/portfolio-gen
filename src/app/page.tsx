import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Navbar/>
      <main className="text-center py-20">
        <h1 className="text-5xl font-bold text-white mb-6">Portfolio generator for everyone</h1>
        <p className="text-xl text-white mb-8">
          Creating a stunning portfolio shouldn't require complicated design software.<br/>
          If you can imagine it, you can build it with PortfolioGen.
        </p>

        <Link href="/dashboard" className="bg-white text-[#4a0e8f] px-6 py-3 rounded-md font-bold text-lg">
          Create Your Portfolio Free
        </Link>

        <div className="mt-16 bg-white bg-opacity-10 rounded-lg p-6">
          <img src="/placeholder-image.jpg" alt="PortfolioGen Interface Preview" className="rounded-md" />
        </div>
      </main>
    </div>
  )
}