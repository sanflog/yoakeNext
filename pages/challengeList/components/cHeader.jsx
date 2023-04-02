import styles from './cHeader.module.css';

export default function Cheader({ showSidemenu, setShowSidemenu }) {
	return (
		<div className={styles.header}>
			<ul>
				<li>yoake</li>
				<li 
					onClick={() => setShowSidemenu(!showSidemenu)}
				>
					Menu
				</li>
				<li>Search</li>
			</ul>
		</div>
	);
}
