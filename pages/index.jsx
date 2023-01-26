import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';

import { useState } from "react";

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
		<Layout>
			<Head>
				<title>Yoake</title>
			</Head>
			<h1>Yoake</h1>
			<h1>Sasaki Yudai</h1>
			<p>I am web designer.</p>
			This is <Link href="/tests/test_page">test page links!</Link>
		</Layout>
  );
}

