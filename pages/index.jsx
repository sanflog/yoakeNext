import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import BottomFloatMenu from '../components/bottom_float_menu';
import LoadPage from '../components/load_page';

import utilStyles from '/styles/utils.module.css';
import styles from './index.module.css';

import { getSortedPostsData } from '/lib/posts';
import { dropText } from '/lib/dropText';

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
			<LoadPage />
			<Layout>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>{siteTitle}</title>
				</Head>


				<section className={` ${styles.indexPage}	`}>
					<h1 className={`
						${utilStyles.heading2Xl}
						${utilStyles.paddingBottom10px}
					`}>YOAKE</h1>
					<p>
						You want to adjustment your thought.<br />
						<Link href="./thinkingAnalyzer/thinkingAnalyzer">&gt;&gt; jump to Thinking Analyzer</Link>
					</p>
					<p>
						Do you want to clear what you should do?<br />
						<Link href="./challengeList/challengeList">&gt;&gt; jump to Challenge List</Link>
					</p>
					<p>
						I'm writing document about important in thinking everything.<br />
						<Link href="./documents/documents">&gt;&gt; read documents</Link>
					</p>
				</section>
			</Layout>
		</>
	);
}
