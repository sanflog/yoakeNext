import Head from 'next/head';
import Link from 'next/link';

import { useState } from 'react';

import Layout from '/components/layout';

import utilStyles from '/styles/utils.module.css';
import styles from './thinkingAnalyzer.module.css';



export default function ThinkingAnalyzer({allPostsData}) {
	return (
		<Layout>
			<section>

				<Head>
					<title>Thinking Analyzer</title>
				</Head>

				<div className={` 
					${utilStyles.title} 
				`}>
					<h2 className={`
						${utilStyles.bigHeader} 
						${utilStyles.gradientColorText} 
					`}>
						Thinking Analyzer
					</h2>
					<p className={utilStyles.describeToTitle}>
						Thinking Analizer is a tool that allow you to structure what you think.<br />
						Structuring thought is very important to all of your life.
					</p>
				</div>

				<Link href="./addCard/addCard">
					<div className={`
						${utilStyles.mainArticle}
						${utilStyles.bgGreen}
					`}>
						<h3 className={`
							${utilStyles.bigHeader}
						`}>
							Let's Add Your Thinking Patern.
						</h3>
						<p className={ utilStyles.describeToTitle}>
							You can add card that is your thinking patern.<br />
							The add button below will be pushed when you want to add my thinking card. 
						</p>
					</div>
				</Link>

				<Link href="./listCard/listCard">
					<div className={`
						${utilStyles.mainArticle}
						${utilStyles.bgBlue}
					`}>
						<h3 className={`
							${utilStyles.bigHeader}
						`}>
							See all thinking patern.
						</h3>
						<p className={ utilStyles.describeToTitle}>
							Thinking functioning patern everyon adds is displayed here.
						</p>
					</div>
				</Link>

			</section>
		</Layout>
	);
}
