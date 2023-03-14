import { useState, useEffect } from 'react';

import Head from 'next/head'

import Layout from '../../../components/layout.jsx';

import utilStyles from '/styles/utils.module.css';
import styles from './listCard.module.css';


function cardTitleHandler( showDetail, setShowDetail ) {
	setShowDetail(!showDetail);
}


function FunctionDetailCard({ mainTitle, functionDetail }) {
	const details = functionDetail.map((fDetail) => {
		if (mainTitle === fDetail.thinkingFunction_id) {
			return (
				<table key={fDetail.detailNo} className={styles.cardTable}>
					<tbody>
						<tr>
							<td className={styles.cardTableFirstCol}>Detail No</td>
							<td className={styles.cardTableSecondCol}>{fDetail.detailNo}</td>
						</tr>
						<tr>
							<td>Target</td>
							<td>{fDetail.target}</td>
						</tr>
						<tr>
							<td>Function</td>
							<td>{fDetail.function}</td>
						</tr>
						<tr>
							<td>Type</td>
							<td>{fDetail.fType}</td>
						</tr>
						<tr>
							<td>Time</td>
							<td>{fDetail.time}</td>
						</tr>
						<tr>
							<td>Decide To</td>
							<td>{fDetail.decideTo}</td>
						</tr>
					</tbody>
				</table>
			);
		}
	});

	return (
		<>
			{details}
		</>
	);
}

function FunctionCard({functionMain, functionDetail}) {
	if (functionMain && functionDetail) {
		const cards = functionMain.map((fMain) => {
			return (
				<div 
					className={` 
						${utilStyles.card} 
						${utilStyles.radius20px} 
					`}
					key={fMain.title}
				>

					<h1 className={styles.cardTitle}>{fMain.title}</h1>
					<p className={styles.cardDetail}>{fMain.detail}</p>

					<FunctionDetailCard
						mainTitle={fMain.title} 
						functionDetail={functionDetail} 
					/>

				</div>
			);
		});

		return (
			<>
				{cards}
			</>
		);
	} else {
		return <p>Loading...</p>;
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

				<FunctionCard 
					functionMain={list.thinkingFunction} 
					functionDetail={list.thinkingFunctionDetail} 
				/>

			</section>

		</Layout>
	);
}
