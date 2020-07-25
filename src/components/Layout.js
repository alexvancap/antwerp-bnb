import Head from "next/head";

import Header from "./header/Header";

import "./../styles/components/Layout.scss";
import "./../styles/components/index.scss";

const Layout = props => {
  const appTitle = `Antwerp bed and breakfast`;

  return (
    <div className="Layout">
      <Head>
        <title>{appTitle}</title>
      </Head>

      <Header appTitle={appTitle} />
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Layout;