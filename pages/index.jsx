import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
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
			<section className={utilStyles.headingMd}>
				<p>Hello, I'm Yudai. I'm learning web development these days. You can contact me on <a href="https://twitter.com/SasakiYudai0">Twitter</a></p>
				<p>
					This is a <a href="/tests/test_page">test</a> page!
				</p>
				<p>
					My <a href="/blog">Blog</a> is written about my activities.
				</p>
			</section>
		</Layout>
  );
}

