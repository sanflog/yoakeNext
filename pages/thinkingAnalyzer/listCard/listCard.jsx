import { useState, useEffect } from 'react';

import Head from 'next/head'

import Layout from '../../../components/layout.jsx';

import utilStyles from '/styles/utils.module.css';
import styles from './listCard.module.css';


function cardTitleHandler( showDetail, setShowDetail ) {
	setShowDetail(!showDetail);
}


function FunctionCard({item}) {
	const [showDetail, setShowDetail] = useState(false);

	if (!showDetail) {
		return (
			<div
				className={`
					${utilStyles.card}
					${utilStyles.bgRed}
					${utilStyles.radius20px}
				`}
			>
				<h2 onClick={() => cardTitleHandler(showDetail, setShowDetail)}>{item.title}</h2>
				<div className={styles.cardDetail}>
					{item.detail}
				</div>
			</div>
		);
	}else{
		return (
			<div
				className={`
					${utilStyles.card}
					${utilStyles.bgRed}
					${utilStyles.radius20px}
				`}
				onClick={
					() => {
						cardTitleHandler(showDetail, setShowDetail)
					}
				}
			>
				<h2>{item.title}</h2>

				<div className={styles.cardDetail}>
					{item.detail}
				</div>

				<div>
					<span className={styles.cardItem}>
						{item.target}
					</span>
					<span className={styles.cardItem}>
						{item.function}
					</span>
					<span className={styles.cardItem}>
						{item.fType}
					</span>
					<span className={styles.cardItem}>
						{item.time}
					</span>
					<span className={styles.cardItem}>
						{item.decideTo}
					</span>
				</div>
			</div>
		); 
	}
}


export default function ListCard() {
	const [list, setList] = useState({});

	useEffect(() => {
		fetch('https://yoake.herokuapp.com/thinkingAnalyzer/')
			.then(res => res.json())
			.then(data => setList(data))
	}, []);

	return (
		<Layout>

			<Head>
				<title>Thinking Function List</title>
			</Head>

			<section>

				<div className={` 
					${utilStyles.title} 
					${utilStyles.bgRed} 
				`}>
					<h1
						className={`
							${utilStyles.bigHeader} 
						`}
					>
						Thinking Functioning List
					</h1>

					<p className={utilStyles.describeToTitle}>
						This page show all Thinking Function Patern which was registered anyone.
					</p>
				</div>

				<FunctionCard item={list} />

			</section>

		</Layout>
	);
}
