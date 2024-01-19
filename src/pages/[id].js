import Layout from "@/components/layout";
import { connect } from "react-redux";
import buildArtifacts from '@/components/content/generator';
import { getThemeConfig } from "@/themes";

export async function getStaticProps({ params }) {
    const id = params.id;
    return { props: { id } };
}

export async function getStaticPaths() {
   const theme = getThemeConfig();
   const paths = theme?.pages?.map(p => ({params: {id :p.id}}))
    return {
      paths,
      fallback: false,
    };
  }

function Page(props) {
    let pageId = props.id;
    if (pageId === "") {
        pageId = "homepage";
    }
    const page = props.theme?.pages?.find(page => page.id === pageId);
    return (
        <Layout>
            <div className="container mt-4 px-16">
                {page && buildArtifacts(page?.artifacts)}
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(Page);

