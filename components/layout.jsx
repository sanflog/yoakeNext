import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Sasaki Yudai';
export const siteTitle = "Yoake";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href="/favicon.ico" />
				<meta name='dicsription'content='This is yoake website.' />
				<meta	property="og:image"	content="yoake"	/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header>
				<div>
					<Link href="/">Yoake</Link>
				</div>
			</header>

			<main>{children}</main>

			{!home && (
				<div className="utileStyles.BackToHome">
					<Link href="/">Back</Link>
				</div>
			)}
		</div>
	);
}
