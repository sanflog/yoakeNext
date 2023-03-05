import { useState } from 'react';

import Layout from '../../../components/layout.jsx';

import utilStyles from '/styles/utils.module.css';
import styles from './addCard.module.css';

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

function AddCardButton({ addCardButtonHandler }) {
	return (
		<div className={styles.addCardButton}>
			<a onClick={() => addCardButtonHandler()}>
				Click here to add card!
			</a>
		</div>
	);
}

export default function ListCard() {
	const [showForm, setShowForm] = useState(false);

	function addCardButtonHandler() {
		setShowForm(!showForm);
	}

	return (
		<Layout>
			<section>

				<h1>Add Functioning Card</h1>

				<AddCardButton addCardButtonHandler={addCardButtonHandler} />
				<AddCardForm showForm={showForm} />

			</section>
		</Layout>
	);
}
