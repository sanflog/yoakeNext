import Head from 'next/head'
import '../styles/global.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
				<meta name="dicsription" content="This is yoake website." />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Component {...pageProps} />
		</>
	);
}
