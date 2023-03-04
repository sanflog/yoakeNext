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

function AddCardButton({ addCardButtonHandler }) {
	return (
		<button 
			className={` ${utilStyles.radiusButton} ${utilStyles.marginBottom20px} `} 
			onClick={() => addCardButtonHandler()}
		>
			+add
		</button>
	);
}

function AddCardForm({showForm}) {

	if (!showForm) {

		return null;

	} else {

		return (
			<div className={` ${styles.addCardForm} ${utilStyles.fadeIn} `} >
				<form>

					<div className={ styles.addCardTitle }>
						<label className={ utilStyles.fontBold }>Title: </label>
						<input className={ styles.addCardInput }type="text" />
					</div>

					<div className={ styles.addCardDetail }>
						<div className={ styles.addCardDetailItem }>
							<label className={ utilStyles.fontBold }>Target: </label><br />
							<input className={ styles.addCardInput } type="text" />
						</div>

						<div className={ styles.addCardDetailItem }>
							<label className={ utilStyles.fontBold }>Function: </label><br />
							<input type="radio" id="judgment" name="cFunction" value="JUDGMENT" />
							<label>Judgment </label>
							<input type="radio" id="preceive" name="cFunction" value="PERCEIVE" />
							<label>Pecveive </label>
						</div>

						<div className={ styles.addCardDetailItem }>
							<label className={ utilStyles.fontBold }>Type for Perceive: </label><br />
							<input type="radio" id="sight" name="cType" value="SIGHT" />
							<label>Sight </label>
							<input type="radio" id="sound" name="cType" value="SOUND" />
							<label>Sound </label>
							<input type="radio" id="taste" name="cType" value="TASTE" />
							<label>Taste </label>
							<input type="radio" id="touch" name="cType" value="TOUCH" />
							<label>Touch </label>
							<input type="radio" id="smell" name="cType" value="SMELL" />
							<label>Smell </label>
						</div>

						<div className={ styles.addCardDetailItem }>
							<label className={ utilStyles.fontBold }>Type for Judgment: </label><br />
							<input type="radio" id="feeling" name="cType" value="FEELING" />
							<label>Sight </label>
							<input type="radio" id="thinking" name="cType" value="THINKING" />
							<label>Thinking </label>
						</div>

						<div className={ styles.addCardDetailItem }>
							<label className={ utilStyles.fontBold }>Time: </label><br />
							<input type="radio" id="past" name="cTime" value="PAST" />
							<label>Past </label>
							<input type="radio" id="now" name="cTime" value="NOW" />
							<label>Now </label>
							<input type="radio" id="Feature" name="cTime" value="FEATURE" />
							<label>Feature </label>
							<input type="radio" id="possibility" name="cTime" value="POSSIBILITY" />
							<label>Possibility </label>
						</div>

						<div className={ styles.addCardDetailItem }>
							<label className={ utilStyles.fontBold }>What decide: </label><br />
							<input className={ styles.addCardInput } type="text" />
						</div>
					</div>

					<button className={ utilStyles.margin10px }>More Function</button><br />
					<input className={ utilStyles.margin10px } type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default function ThinkingAnalyzer({allPostsData}) {

	function addCardButtonHandler() {
		setShowForm(!showForm);
	}

	const [showForm, setShowForm] = useState(false);

	const cards = list.map((lst, n) => {
		return <li key={n}><FunctionCard item={lst} /></li>;
	});

	return (
		<Layout>
			<section>

				<Head>
					<title>Thinking Analyzer</title>
				</Head>

				<h2 className={ utilStyles.bigHeader }>Thinking Analyzer</h2>

				<AddCardButton addCardButtonHandler={addCardButtonHandler} />
				<AddCardForm showForm={showForm} />

				<h3>Thinking Patern List</h3>
				<ul>
					{cards}
				</ul>

			</section>
		</Layout>
	);
}
