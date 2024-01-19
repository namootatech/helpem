import Layout from "@/components/layout";
import { connect } from "react-redux";
import buildArtifacts from '@/components/content/generator';

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    const { id } = context.query;
    return { props: { id } };
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

