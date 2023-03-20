import { useState, useRef } from 'react';

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
					&or; Hidden Detail
				</button>

				{details}

			<form 
				action="https://yoake.herokuapp.com/thinkingAnalyzer/deleteFunctionCard/" 
				method="post"
			>
				<input 
					type="text" 
					name="title" 
					value={mainTitle} 
					className={utilStyles.hiddenField}
				/>
				<input 
					type="submit" 
					value=">>DELETE" 
					className={styles.deleteButton}
				/>
			</form>
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

export default function FunctionCard() {
	const [list, setList] = useState({});
	const [filteredList, setFilteredList] = useState({});

	useEffect(() => {
		fetch('https://yoake.herokuapp.com/thinkingAnalyzer/')
			.then(res => res.json())
			.then(data => setList(data))
	}, []);

	if (!filteredList) {
		const functionMain = list.thinkingFunction;
		const functionDetail = list.thinkingFunctionDetail;

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

	} else {

		const functionMain = filteredList.thinkingFunction;
		const functionDetail = filteredList.thinkingFunctionDetail;

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
}
