import { useState } from 'react';

import Layout from '../../../components/layout.jsx';

import utilStyles from '/styles/utils.module.css';
import styles from './listCard.module.css';

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

function b() {
	fetch("https://yoake.herokuapp.com/thinkingAnalyzer/")
		.then(response => {
			console.log(response);
			return response;
		})
}

function cardTitleHandler( showCard, setShowCard ) {
	setShowCard(!showCard);
}

function FunctionCard({item}) {
	const [showCard, setShowCard] = useState(false);
	const details = item.detail.map((i, n) => {
		return (
			<div key={n}>
				<div className={ styles.detailTarget }>{n} Target: {i.target}</div>
				<table className={ styles.detailTable }>
					<tbody>
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
					</tbody>
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

export default function ListCard() {
	const [c, setC] = useState(b());
	const cards = list.map((lst, n) => {
		return <li key={n}><FunctionCard item={lst} /></li>;
	});

	console.log(c);

	return (
		<Layout>
			<section>
				<h1>Thinking Functioning List</h1>
				<ul>
					{cards}
				</ul>
			</section>
		</Layout>
	);
}
