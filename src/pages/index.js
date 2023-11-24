import { Inter } from 'next/font/google'
import Layout from '@/components/layout';
import Mission from '@/components/mission';
import WhyHelpEm from '@/components/whyhelpem';
import GetInvolved from '@/components/getInvolved';
import Header from '@/components/header';



export default function Home() {
  return (
    <Layout>
      <Header />
      <Mission />
      <WhyHelpEm />
      <GetInvolved />
    </Layout>
  )
}
