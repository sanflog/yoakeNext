import styles from './addChallengeItem.module.css';
import utilStyles from '../../../../styles/utils.module.css';

export default function AddChallengeItem({id}) {
	return (
		<div className={styles.addItem}>
			<form action="https://yoake.herokuapp.com/challengeList/addItem/" method="post">
				<input className={styles.addItemSubmit} type="submit" value="+" />
				<input className={styles.addItemInput} type="text" name="itemname" placeholder="entering new item..." />
				<input className={utilStyles.hiddenField} type="text" name="id" value={id} readOnly/>
			</form>
		</div>
	);
}
