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
				<meta 
					name='dicsription'
					content='This is yoake website.'
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle,
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/profile.jpg"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt=""
						/>
						<h1 className={utilStyles.heading2X1}>{name}</h1>
					</>
				) : (
					<>
						<Link href='/'>
							<Image
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt=""
							/>
						</Link>
						<h2 className="utilStyles.headingLg">
							<Link href="/" className="utleStyles.colorInherit">
								{name}
							</Link>
						</h2>
					</>
				)}
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
