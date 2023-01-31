import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '/styles/utils.module.css';
import styles from './index.module.css';
import { getSortedPostsData } from '/lib/posts';

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
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={`
				${styles.indexPage}
				${utilStyles.width36emAndMarginAuto}
				${utilStyles.marginTop150px}
			`}>
				<p>
					<strong>Hello, I'm Yudai. I'm learning web development these days.</strong>
				</p>
				<p>
					<strong>Check my <a href="/blog/blog">Blog</a>.</strong>
				</p>
			</section>
		</>
	);
}
