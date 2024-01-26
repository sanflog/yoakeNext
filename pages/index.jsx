import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import BottomFloatMenu from "../components/bottom_float_menu";
import LoadPage from "../components/load_page";

import utilStyles from "/styles/utils.module.css";
import styles from "./index.module.css";

import { getSortedPostsData } from "/lib/posts";
import { dropText } from "/lib/dropText";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function HomePage({ allPostsData }) {
  return (
    <>
      {/*      <LoadPage /> */}
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{siteTitle}</title>
        </Head>

        <section className={` ${utilStyles.padding10px}`}>
          <div
            className={` ${utilStyles.headingX1} ${utilStyles.padding1px} ${utilStyles.headerFont}`}
          >
            <h1>
              YUDAI SAIKAWA IS A WEB DESIGNER AND VIDEO CREATOR.
              <Link href="http://yoake.lsv.jp"> MY WORKS ARE HERE.</Link>
            </h1>
            <h1>
              IF YOU HAVE ANY QUESTIONS,{" "}
              <Link href="https://www.instagram.com/yoakeed/">
                PLEASE LET ME KNOW.
              </Link>
            </h1>
          </div>
        </section>
      </Layout>
    </>
  );
}
