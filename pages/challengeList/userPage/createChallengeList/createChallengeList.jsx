import styles from './createChallengeList.module.css';
import utilStyles from '../../../../styles/utils.module.css';

export default function CreateChallengeList({
	username, 
	showCreateList, 
	setShowCreateList
}) {
	if (showCreateList) {
		return (
			<div className={styles.wrapper}>
				<div className={styles.addListForm}>
					<form action="https://yoake.herokuapp.com/challengeList/createList/" method="post">

						<div>
							<label>Title </label><br />
							<input className={styles.titleInput} type="text" name="listname" />
						</div>

						<div>
							<label>Description </label><br />
							<textarea name="description"></textarea>
						</div>

						<input className={utilStyles.hiddenField} type="text" name="username" value={username} readOnly />

						<input className={styles.submitButton} type="submit" value="Submit" />
						<button className={styles.cancelButton} onClick={() => setShowCreateList(!showCreateList)}>Cancel</button>
					</form>
				</div>
			</div>
		);	
	} else {
		return null;
	}
}
