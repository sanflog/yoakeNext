import Head from "next/head";
import Link from "next/link";

import cheerio from "cheerio";
import axios from "axios";

import Layout from "/components/layout";
import utilStyles from "/styles/utils.module.css";
import Date from "/components/date";

// using beutiful soup, alter text in url to my format.
function alterText() {
  const url = "https://yoake.site"; // this will be scraped.
  scrapeWebsite(url).then((title) => {
    const cont = document.getElementById("contents");
    cont.innerHTML = title;
  });
}

//use axios
async function scrapeWebsite(url) {
  try {
    const response = await axios.get(url);
    console.log("debug");
    const page = cheerio.load(response.data);
    const title = page("title").text();
    return title;
  } catch (error) {
    return "error";
  }
}

//reset contents
function resetContent() {
  document.getElementById("contents").innerHTML = "";
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
        <button onClick={resetContent}>reset</button>

        <div id="contents"></div>
      </section>
    </Layout>
  );
}
