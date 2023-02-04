import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import BottomFloatMenu from '../components/bottom_float_menu';

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
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={` ${styles.indexPage}	`}>
				<div className={`	${styles.textCard} `}>
					<p className={styles.centerText}>
						<strong>Hello, I'm Yudai. <br />
							This site is showing what my thought.</strong>
					</p>
				</div>
				<BottomFloatMenu />
			</section>
		</>
	);
}
