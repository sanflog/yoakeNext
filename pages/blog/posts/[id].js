import Head from 'next/head';
import Link from 'next/link';

import Layout from '/components/layout';
import Date from '/components/date';
import utilStyles from '/styles/utils.module.css';
import { getAllPostIds, getPostData } from '/lib/posts';

export function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export default function Post({ postData }) {
	return(
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingX1}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<br />
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
<<<<<<< HEAD
			<Link href="/blog/blog">back to Blog top</Link>
=======
			<Link href="/blog/blog">Back to the blog top</Link>	
>>>>>>> 4fcf852a51f37407266dfa4ffe6312829e99d5f8
		</Layout>
	);
}
