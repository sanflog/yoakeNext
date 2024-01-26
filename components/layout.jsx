import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

import LoadPage from "./load_page";
import HeaderNavigationMenu from "./header_navigation_menu";
import BottomFloatMenu from "./bottom_float_menu";
import FooterMenu from "./footer_menu";

export const siteTitle = "Yoake";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="yoake" />
      </Head>

      {/*      <HeaderNavigationMenu /> */}

      <div className={` ${utilStyles.fadeIn} `}>
        <main>{children}</main>
      </div>

      {/* <FooterMenu /> */}
    </>
  );
}
