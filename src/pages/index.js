import { Inter } from 'next/font/google'
import Layout from '@/components/layout';
import Mission from '@/components/mission';
import WhyHelpEm from '@/components/whyhelpem';
import GetInvolved from '@/components/getInvolved';
import Header from '@/components/header';
import { connect } from "react-redux";
import buildArtifacts from '@/components/content/generator';


function Home({theme}) {
  const page = theme?.pages?.find(page => page.id === "homepage");
  console.log("page",page)
  return (
    <Layout>
      {page && buildArtifacts(page?.artifacts)}
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps)(Home);
