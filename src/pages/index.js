import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout';
import Mission from '@/components/mission';
import WhyHelpEm from '@/components/whyhelpem';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Mission />
      <WhyHelpEm />
    </Layout>
  )
}
