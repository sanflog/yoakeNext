import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../../components/layout.jsx';
import FunctionCard from './functionCard';
import Searcher from './searcher';

import utilStyles from '/styles/utils.module.css';
import styles from './listCard.module.css';


export default function ListCard() {
	return (
		<Layout>

			<Head>
				<title>Thinking Function List</title>
			</Head>

			<section>

				<div>
					<h1 className={styles.pageTitle}>
						Thinking Functioning List
					</h1>

					<div 
						className={` 
							${utilStyles.bgGray}
							${styles.pageDescription}
						`}
					>
						<p>
							This page show all Thinking Function Patern which was registered anyone.
						</p>

						<p>
							<Link href="/thinkingAnalyzer/addCard/addCard">
								&gt;&gt; Go to Add Card Page &lt;&lt;
							</Link>
						</p>
					</div>

				</div>

				<div className={styles.descriptionSearcher}>
					<Searcher />
				</div>

				<div className={styles.functionCard}>
					<FunctionCard />
				</div>

			</section>

		</Layout>
	);
}
