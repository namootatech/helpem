import { Inter } from 'next/font/google'
import Layout from '@/components/layout';
import Mission from '@/components/mission';
import WhyHelpEm from '@/components/whyhelpem';
import GetInvolved from '@/components/getInvolved';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <h1 className='text-4xl font-bold text-center'>THis website is coming soon</h1>
    </Layout>
  )
}
