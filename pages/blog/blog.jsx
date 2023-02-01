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

export default function Blog({allPostsData}) {
	return (
		<Layout>
			<section>
				<Head>
					<title>Blog</title>
				</Head>
				<h1 className={utilStyles.headerFont}>Blog</h1>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/blog/posts/${id}`}>{title}</Link>
							<br />
							<small>
								<Date dateString={date} />
							</small>
							<br />
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
