import Head from "next/head";
import Link from "next/link";

import cheerio from "cheerio";
import axios from "axios";

import Layout from "/components/layout";
import utilStyles from "/styles/utils.module.css";
import Date from "/components/date";

// using beutiful soup, alter text in url to my format.
function alterText() {
  const url = "https://www.yahoo.co.jp"; // this will be scraped.
  const cnt = document.getElementById("contents");

  try {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        console.log(request.responseText);
        cnt.innerText = request.responseText;
      }
    };
  } catch {
    cnt.innerText = "error. You should see console.";
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
