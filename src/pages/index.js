import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
    </main>
  )
}
