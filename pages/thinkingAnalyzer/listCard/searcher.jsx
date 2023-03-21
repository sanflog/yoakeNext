import { useState } from 'react';

import styles from './searcher.module.css';
import utilStyles from '../../../styles/utils.module.css';


export default function Searcher() {
	return (
		<div>

			<form>
				<label>Search: </label>
				<input className={styles.stringSearch} type="text" name="stringsSearch" />
			</form>

		</div>
	);
}
