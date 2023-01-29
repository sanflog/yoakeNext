import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '/styles/utils.module.css';
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
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.textAlign}>
				<p>Hello. I'm learning web development these days.<br />
				You can contact me on <a href="https://twitter.com/SasakiYudai0">Twitter</a></p>
			<p>Github: <a href="https://github.com/sanflog">sanflog</a></p>
				<p>
					This <a href="/blog/blog">Blog</a> is written about my activities.
				</p>
			</section>
		</Layout>
  );
}

