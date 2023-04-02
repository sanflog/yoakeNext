import styles from './addChallengeItem.module.css';
import utilStyles from '../../../../styles/utils.module.css';

export default function AddChallengeItem({id}) {
	return (
		<form action="https://yoake.herokuapp.com/challengeList/addItem/" method="post">
			<legend>Item post form </legend>
			<label>Item Name: </label>
			<input className={styles.createListInput} type="text" name="itemname" />
			<input className={utilStyles.hiddenField} type="text" name="id" value={id} readOnly/>
			<input type="submit" value="add" />
		</form>
	);
}
