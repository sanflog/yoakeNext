import { useState } from 'react';

import utilStyles from '/styles/utils.module.css';
import styles from './functionCard.module.css';

function cardTitleHandler( showDetailCard, setShowDetailCard ) {
	setShowDetailCard(!showDetailCard);
}

function FunctionDetailCard({ mainTitle, functionDetail }) {
	const [showDetailCard, setShowDetailCard] = useState(false);

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

	if (showDetailCard) {
		return (
			<>
				<button 
					className={styles.detailButton}
					onClick={
						() => cardTitleHandler(showDetailCard, setShowDetailCard)
					}
				>
					&gt; Hidden Detail
				</button>

				{details}
			</>
		);
	} else {
		return (
			<button 
				className={styles.detailButton}
				onClick={
					() => cardTitleHandler(showDetailCard, setShowDetailCard)
				}
			>
				&gt; Show Detail
			</button>
		);
	}
}

export default function FunctionCard({functionMain, functionDetail}) {
	if (functionMain && functionDetail) {
		const reverseMain = functionMain.reverse();

		const	cards = reverseMain.map((fMain) => {
			return (
				<div 
					className={` 
						${utilStyles.card} 
						${utilStyles.radius20px} 
						${utilStyles.bgPerple} 
					`}
					key={fMain.title}
				>

				<h3 className={`
					${styles.cardTitle}
				`}>
					{fMain.title}
				</h3>
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
