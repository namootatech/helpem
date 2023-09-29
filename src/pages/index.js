import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout';
import Mission from '@/components/mission';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <p>Hello homepage</p>
      <Mission />
    </Layout>
  )
}
