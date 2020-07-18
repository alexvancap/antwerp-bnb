import Head from "next/head";

import Header from "./header/Header";
import Footer from "./Footer/Footer";

import "./../styles/components/Layout.scss";
import "./../styles/components/index.scss";

import navButtons from "../../config/NavButtons.config";

const Layout = props => {
  const appTitle = `Antwerp bed and breakfast`;

  return (
    <div className="Layout">
      <Head>
        <title>{appTitle}</title>
      </Head>

      <Header appTitle={appTitle} />
      <div className="Content">{props.children}</div>
      <Footer navButtons={navButtons} />
    </div>
  );
};

export default Layout;