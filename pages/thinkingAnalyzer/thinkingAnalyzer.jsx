import Head from 'next/head';
import Link from 'next/link';

import { useState } from 'react';

import Layout from '/components/layout';

import utilStyles from '/styles/utils.module.css';
import styles from './thinkingAnalyzer.module.css';

const list = [
	{ 
		'title' : 'Test Title',
		'detail' : [
			{
				'target' : 'What',
				'function' : 'Percieve',
				'type' : 'Sight',
				'time' : 'Furture',
				'decideTo' : 'none',
			},
			{
				'target' : 'Pepar',
				'function' : 'Judgment',
				'type' : 'Feeling',
				'time' : 'none',
				'decideTo' : 'Value',
			}
		]
	},
	{ 
		'title' : 'Hello World',
		'detail' : [
			{
				'target' : 'What',
				'function' : 'Judging',
				'type' : 'Thinking',
				'time' : 'none',
				'decideTo' : 'Reason',
			}
		]
	}
];

function cardTitleHandler( showCard, setShowCard ) {
	setShowCard(!showCard);
}

function AddCardButton() {
	return <button>+add</button>
}

function FunctionCard({item}) {
	const [showCard, setShowCard] = useState(false);
	const details = item.detail.map((i, n) => {
		return (
			<div>
				<div className={ styles.detailTarget }>{n} Target: {i.target}</div>
				<table className={ styles.detailTable }>
					<tr>
						<th>Function</th>
						<th>Type</th>
						<th>Time</th>
						<th>Decide To</th>
					</tr>
					<tr>
						<td>{i.function}</td>
						<td>{i.type}</td>
						<td>{i.time}</td>
						<td>{i.decideTo}</td>
					</tr>
				</table>
			</div>
		);
	});

	if (!showCard) {
		return (
			<div className={ styles.thinkingAnalyzerCard }>
				<a onClick={ () => cardTitleHandler(showCard, setShowCard) }>
					<div>{item.title}</div>
				</a>
			</div>
		); 
	} else {
		return (
			<div className={ styles.thinkingAnalyzerCard }>
				<a onClick={ () => cardTitleHandler(showCard, setShowCard) }>
					<div>{item.title}</div>
				</a>

				<div className={` ${styles.thinkingAnalyzerList} ${utilStyles.fadeIn} `}>
					{details}
				</div>
			</div>
		); 
	}
}

function AddCardForm() {
	return (
		<form>

			<label>Title: </label><br />
			<input type="text" />
			<br />

			<label>Target: </label><br />
			<input type="text" />
			<br />

			<label>Function: </label><br />
			<input type="radio" id="judgment" name="cFunction" value="JUDGMENT" />
			<label>Judgment </label>
			<input type="radio" id="preceive" name="cFunction" value="PERCEIVE" />
			<label>Perveive </label>

		</form>
	);
}

export default function ThinkingAnalyzer({allPostsData}) {
	const cards = list.map((lst) => {
		return <FunctionCard item={lst} />;
	});

	return (
		<Layout>
			<section>

				<Head>
					<title>Thinking Analyzer</title>
				</Head>

				<h1>Thinking Analyzer</h1>

				<AddCardButton />
				<AddCardForm />
				{cards}

			</section>
		</Layout>
	);
}