import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

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
			</Head>

			<div className={styles.header}>
				<Link 
					className={styles.siteLogo}
					href="/"
				>
					<Image 
						src="/images/yoake.jpg" 
						width="75"
						height="45"
						alt="header image"
					/>
				</Link>
				<Link 
					className={styles.headerLink} 
					href="/blog/blog"
				>
					<strong>Blog</strong>
				</Link>
				<Link 
					className={styles.headerIcon} 
					href="https://twitter.com/SasakiYudai0"
				>
					<Image 
						src="/images/Twitter-logo-black.png" 
						width="25"
						height="22"
						alt="header image"
					/>
				</Link>
				<Link 
					className={styles.headerIcon} 
					href="https://github.com/sanflog/"
				>
					<Image 
						src="/images/github-mark.svg" 
						width="25"
						height="22"
						alt="header image"
					/>
				</Link>
			</div>

			<div className={styles.container}>
				<main>{children}</main>
				{backHome}
			</div>
		</>
	);
}
