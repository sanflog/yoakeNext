import styles from './load_page.module.css'
import utilStyles from '../styles/utils.module.css'

export default function LoadPage() {
	return (
		<div className={styles.loadPage}>
			<div className={` ${styles.loadPageText} ${utilStyles.headerFont} `}>
				YOAKE
			</div>
		</div>
	);
}
