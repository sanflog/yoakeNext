import Head from 'next/head';
import Link from 'next/link';

import Layout from '/components/layout';
import Date from '/components/date';
import { getSortedPostsData } from '/lib/posts';

import utilStyles from '/styles/utils.module.css';
import styles from './thinkingAnalyzer.module.css';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		}
	};
}

function FunctionCard() {
	return (

		<div className={ styles.thinkingAnalyzerCard }>
			<h3>Make documents for job</h3>
			<div className={ styles.thinkingAnalyzerList }>
				<p>Furture Percieve to future target</p>
				<p>Past Percieve to actual results</p>
				<p>Now Percieve to now target</p>
				<p>Thinking decision to what I should wright</p>
			</div>
		</div>
	); 
}

export default function ThinkingAnalyzer({allPostsData}) {
	return (
		<Layout>
			<section>

				<Head>
					<title>Thinking Analyzer</title>
				</Head>

				<h1>Thinking Analyzer</h1>

				<FunctionCard />
				<FunctionCard />

			</section>
		</Layout>
	);
}
