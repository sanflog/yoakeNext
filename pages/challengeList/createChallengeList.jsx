import styles from './createChallengeList.module.css';
import utilStyles from '../../styles/utils.module.css';

export default function CreateChallengeList({username}) {
	return (
		<form action="http://yoake.herokuapp.com/challengeList/createList/" method="post">

			<legend>List post form </legend>

			<div>
				<label>List Name: </label><br />
				<input className={styles.createListInput} type="text" name="listname" />
			</div>

			<div>
				<label>Description: </label><br />
				<textarea name="description"></textarea>
			</div>

			<input className={utilStyles.hiddenField} type="text" name="username" value={username} readOnly />

			<input type="submit" value="create" />
		</form>
	);	
}
