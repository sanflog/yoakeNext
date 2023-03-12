import Head from 'next/head';

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
						Hello, I'm San.<br />
						This site is showing what my thought.
					</p>
					<p>
						Do you think you are right? In this state, are we really good on future?
					</p>
					<p>
						Here may show solution for it.
					</p>
				</section>
			</Layout>
		</>
	);
}
