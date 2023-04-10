import Head from 'next/head';
import Link from 'next/link';

import Date from '/components/date';

import Layout from '/components/layout';
import utilStyles from '/styles/utils.module.css';
import styles from './documents.module.css';

import { getSortedPostsData } from '/lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		}
	};
}

export default function Documents({allPostsData}) {
	return (
		<Layout>
			<section>
				<Head>
					<title>Documents</title>
				</Head>

				<div
					className={`
						${styles.title}
						${utilStyles.headerFont}
					`}
				>
					<h1>
						Documents
					</h1>
				</div>

				<div className={styles.docs}>
					{allPostsData.map(({ id, date, title }) => (
						<Link href={`/documents/posts/${id}`}>	
							<div 
								key={id}
								className={styles.card}
							>
								<p 
									className={`
										${utilStyles.headerFont}
										${styles.cardHeader}
									`}
								>
									{title}
								</p>
								<small>
									<Date dateString={date} />
								</small>
								<br />
							</div>
						</Link>
					))}
				</div>
			</section>
		</Layout>
	);
}
