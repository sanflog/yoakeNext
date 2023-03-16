import { useState } from 'react';
import Head from 'next/head';

import Layout from '../../../components/layout.jsx';

import utilStyles from '/styles/utils.module.css';
import styles from './addCard.module.css';


function DetailCard({ no }) {
	return (
		<div className={ styles.addCardDetail }>
			<p>{no}</p>
			<div className={ styles.addCardDetailItem }>
				<label className={ utilStyles.fontBold }>Target: </label><br />
				<input className={ styles.addCardInput } id={"Target" + no} name={"target" + no} type="text" placeholder="Target..." />
			</div>

			<div className={ styles.addCardDetailItem }>
				<label className={ utilStyles.fontBold }>Function: </label><br />
				<input type="radio" id={"judgment" + no} name="cFunction" value="JUDGMENT" />
				<label>Judgment </label>
				<input type="radio" id={"preceive" + no} name="cFunction" value="PERCEIVE" />
				<label>Pecveive </label>
			</div>

			<div className={ styles.addCardDetailItem }>
				<label className={ utilStyles.fontBold }>Type for Perceive: </label><br />
				<input type="radio" id={"sight" + no} name="cType" value="SIGHT" />
				<label>Sight </label>
				<input type="radio" id={"sound" + no} name="cType" value="SOUND" />
				<label>Sound </label>
				<input type="radio" id={"touch" + no} name="cType" value="TOUCH" />
				<label>Touch </label>
				<input type="radio" id={"smell" + no} name="cType" value="SMELL" />
				<label>Smell </label>
				<input type="radio" id={"taste" + no} name="cType" value="TASTE" />
				<label>Taste </label>
			</div>

			<div className={ styles.addCardDetailItem }>
				<label className={ utilStyles.fontBold }>Type for Judgment: </label><br />
				<input type="radio" id={"feeling" + no} name="cType" value="FEELING" />
				<label>Feeling </label>
				<input type="radio" id={"thinking" + no} name="cType" value="THINKING" />
				<label>Thinking </label>
			</div>

			<div className={ styles.addCardDetailItem }>
				<label className={ utilStyles.fontBold }>Time: </label><br />
				<input type="radio" id={"past" + no} name="cTime" value="PAST" />
				<label>Past </label>
				<input type="radio" id={"now" + no} name="cTime" value="NOW" />
				<label>Now </label>
				<input type="radio" id={"Feature" + no} name="cTime" value="FEATURE" />
				<label>Feature </label>
				<input type="radio" id={"possibility" + no} name="cTime" value="POSSIBILITY" />
				<label>Possibility </label>
			</div>

			<div className={ styles.addCardDetailItem }>
				<label className={ utilStyles.fontBold }>What decide: </label><br />
				<input className={ styles.addCardInput } id={"decideTo" + no} name={"decideTo" + no} type="text" placeholder="What decide..." />
			</div>

		</div>
	);
}

function AddCardForm() {
	const [detailCardCount, setDetailCardCount] = useState(1);

	const numArray = (detailCardCount) => {
		const arr = []
		for (let i = 0; i < detailCardCount; i++) {
			arr.push(i + 1);
		}
		return arr;
	}

	const details = numArray(detailCardCount).map((n, i) => {
		return <DetailCard key={i} no={i} />;
	});

	function plusCardHandler() {
		setDetailCardCount(detailCardCount + 1);
	}

	return (
		<div className={` ${styles.addCardForm} ${utilStyles.fadeIn} `} >
			<form action="https://yoake.herokuapp.com/thinkingAnalyzer/addFunctionCard/" method="get">

				<div className={ styles.addCardTitle }>
					<label className={ utilStyles.fontBold }>Title: </label><br />
					<input className={ styles.addCardInput } id="title" name={"title"} type="text" placeholder="Title..." />
				</div>

				<div className={ styles.addCardTitle }>
					<label className={ utilStyles.fontBold }>Detail: </label><br />
					<textarea id="detail" name="detail" placeholder="explain this card..." />
				</div>

				{details}

				<button 
				className={`
					${utilStyles.margin10px}
					${styles.addButton}
				`}
				onClick={(e) => {
					e.preventDefault();
					plusCardHandler();
				}}
				>
					+ Function Card
				</button>
				<input 
					className={`
						${utilStyles.margin10px}
						${styles.addButton}
					`} 
					type="submit" 
					value="Submit" 
				/>
			</form>
		</div>
	);
}

export default function ListCard() {
	return (
		<Layout>
			<Head>
				<title>Add Card</title>
			</Head>

			<section>

				<h1 className={utilStyles.bigHeader}>Add Functioning Card</h1>
				<p 
					className ={`
						${utilStyles.maxWidth700}
						${utilStyles.marginAlign}
						${utilStyles.fs15em}
					`}
				>
					Here is a page to add function cards.<br />
					If you add function detail to describe your action,	thought etc...,  you can click "+ Function Card" button.
				</p>

				<AddCardForm />

			</section>
		</Layout>
	);
}
