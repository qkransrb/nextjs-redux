import "../styles/globals.css";
import wrapper from "../redux/store";
import Layout from "../components/common/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
