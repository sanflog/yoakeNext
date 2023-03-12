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
			<div>
				<h2 onClick={() => cardTitleHandler(showDetail, setShowDetail)}>{item.title}</h2>
			</div>
		);
	}else{
		return (
			<div>
				<h2 onClick={() => cardTitleHandler(showDetail, setShowDetail)}>{item.title}</h2>
				<ul className={utilStyles.list}>
					<li>Target: {item.target}</li>
					<li>Function: {item.function}</li>
					<li>Type: {item.fType}</li>
					<li>Time: {item.time}</li>
					<li>Decide To: {item.decideTo}</li>
				</ul>
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

				<div
					className={`
						${utilStyles.maxWidth700}
						${utilStyles.marginAlign}
					`}
				>
					<FunctionCard item={list} />
				</div>

			</section>

		</Layout>
	);
}
