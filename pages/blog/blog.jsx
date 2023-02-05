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
				<h1 className={` ${utilStyles.headerFont} `}>Blog</h1>
				<div>
					{allPostsData.map(({ id, date, title }) => (
						<Link href={`/blog/posts/${id}`}>	
							<div className={utilStyles.card} key={id}>
								<h1 className={utilStyles.headerFont}>{title}</h1>
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
