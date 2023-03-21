import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../../components/layout.jsx';
import FunctionCard from './functionCard';

import utilStyles from '/styles/utils.module.css';
import styles from './listCard.module.css';


export default function ListCard() {
	return (
		<Layout>

			<Head>
				<title>Thinking Function List</title>
			</Head>

			<section>

				<div className={` 
					${utilStyles.title} 
				`}>
					<h1
					>
						Thinking Functioning List
					</h1>

					<p className={utilStyles.describeToTitle}>
						This page show all Thinking Function Patern which was registered anyone.
					</p>

					<p className={utilStyles.describeToTitle}>
						<Link href="/thinkingAnalyzer/addCard/addCard">
							&gt;&gt; Go to Add Card Page &lt;&lt;
						</Link>
					</p>

				</div>

				<div className={styles.functionCard}>
					<FunctionCard />
				</div>

			</section>

		</Layout>
	);
}
