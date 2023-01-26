import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function FirstTest() {
	return (
		<Layout>
			<Head>
				<title>Yoake</title>
			</Head>
			<h1>First test</h1>
			<Image src="/images/profile.jpg" height={144} width={144} alt='sasaki' />
			<Link href="/">Back to home</Link>
		</Layout>
	);
}
