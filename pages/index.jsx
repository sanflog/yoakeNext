import Head from "next/head";
import Link from "next/link";

import utilStyles from "/styles/utils.module.css";
import styles from "./index.module.css";

export default function HomePage({}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YOAKE</title>
      </Head>

      <section className={` ${utilStyles.padding10px} ${styles.indexPage}`}>
        <p className={styles.siteName}>YOAKE</p>
        <p class={` ${styles.myName} `}>YUDAI SAIKAWA</p>
        <div className={styles.explain}>
          <p>
            I'M YUDAI SAIKAWA, A WEB DESIGNER AND VIDEO CREATOR.&nbsp;
            <br />
            YOU CAN FIND <Link href="http://yoake.lsv.jp">MY WORKS HERE.</Link>
            <br />
            IF YOU HAVE ANY QUESTIONS,{" "}
            <Link href="https://www.instagram.com/yoakeed/">
              PLEASE FEEL FREE TO ASK.
            </Link>
          </p>
        </div>
        <p className={styles.copyright}>© 2023 all rights reserved.</p>
      </section>
    </>
  );
}
