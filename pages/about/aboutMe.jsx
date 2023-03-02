import Head from 'next/head';
import Link from 'next/link';

import Layout from '/components/layout';
import utilStyles from '/styles/utils.module.css';
import Date from '/components/date';
import { getSortedPostsData } from '/lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		}
	};
}

export default function About({allPostsData}) {
	return (
		<Layout>
			<section>
				<Head>
					<title>About Me</title>
				</Head>
				<h1>About Me</h1>
			</section>
		</Layout>
	);
}
