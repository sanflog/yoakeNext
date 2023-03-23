import styles from './searcher.module.css';
import utilStyles from '../../../styles/utils.module.css';


export default function Searcher({
	searchStrings, 
	setSearchStrings, 
	setFilteredFunctionMain,
	setFilteredFunctionDetail,
	searchClickHandler,
}) {
	return (
		<>
			<input 
				className={styles.stringSearch} 
				type="text" 
				name="stringsSearch" 
				value={searchStrings}
				placeholder="search..."
				onChange={e => setSearchStrings(e.target.value)}
			/>
			<button 
				className={styles.stringSearchButton}
				onClick={() => searchClickHandler(searchStrings, setFilteredFunctionMain, setFilteredFunctionDetail)}
			>
				Search
			</button>
		</>
	);
}
