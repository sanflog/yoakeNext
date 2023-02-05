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
				<h1 className={` ${utilStyles.headerFont} ${utilStyles.textAlign} `}>Blog</h1>
				<div>
					{allPostsData.map(({ id, date, title }) => (
						<div className={utilStyles.card} key={id}>
							<Link href={`/blog/posts/${id}`}>	
								<h3 className={utilStyles.headerFont}>{title}</h3>
								<small>
									<Date dateString={date} />
								</small>
								<br />
							</Link>
						</div>
					))}
				</div>
			</section>
		</Layout>
	);
}
