import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '/styles/utils.module.css';

export default function HomePage() {
  return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello, I'm Yudai. I'm learning web development these days. You can contact me on <a href="https://twitter.com/SasakiYudai0">Twitter</a></p>
				<p>
				This is <a href="/tests/test_page">test page links!</a>
				</p>
			</section>
		</Layout>
  );
}

