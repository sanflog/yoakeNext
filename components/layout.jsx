import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import HeaderNavigationMenu from './header_navigation_menu';

const name = 'Sasaki Yudai';
export const siteTitle = "Yoake";

export const backHome = () => {
	if (home) {
		pass
	}else if (post){
		return (
			<div className={styles.BackToHome}>
				<Link href="/blog/blog"></Link>
			</div>
		);
	}else{
		return (
			<div className={styles.BackToHome}>
				<Link href="/"></Link>
			</div>
		);
	}
}

export default function Layout({ children, home }) {
	return (
		<>
			<Head>
				<link rel='icon' href="/favicon.ico" />
				<meta name='dicsription'content='This is yoake website.' />
				<meta	property="og:image"	content="yoake"	/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<script src="https://ket.fontawesome.com/df1935126b.js" crossorigin="anonymous"></script>
			</Head>

			<HeaderNavigationMenu />

			<div className={styles.container}>
				<main>{children}</main>
				{backHome}
			</div>
		</>
	);
}
