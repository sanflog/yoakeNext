import Layout from '/components/layout';
import Head from 'next/head';
import utilStyles from '/styles/utils.module.css';
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
	console.log(allPostsData);
	return (
		<Layout>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<Head>
					<title>Blog</title>
				</Head>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, data, content }) => (
						<li className={utilStyles.listItem} key="id">
							<h2>{data.title}</h2>
							<br />
							{id}: 
							{data.date}
							<br />
							<p>{content}</p>
							<br />
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
