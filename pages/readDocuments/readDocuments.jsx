import Head from "next/head";
import Link from "next/link";

import Layout from "/components/layout";
import utilStyles from "/styles/utils.module.css";
import Date from "/components/date";

// using beutiful soup, alter text in url to my format.
function alterText() {
  const page = document.getElementById("pageUrl");
  console.log("page");
  const cont = document.getElementById("contents");
  cont.innerHTML = "test";
}

export default function ReadDocuments({ allPostsData }) {
  return (
    <Layout>
      <section>
        <Head>
          <title>Read Documents</title>
        </Head>
        <h1>Read Documents</h1>
        <p>Here is tool for reading documents.</p>
        <label>URL: </label>
        <input id="pageUrl" type="text" />
        <button onClick={alterText}>parse</button>
        <div id="contents"></div>
      </section>
    </Layout>
  );
}
