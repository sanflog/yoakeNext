import Link from 'next/link';
import styles from './cHeader.module.css';

export default function Cheader({ 
	showSidemenu, 
	setShowSidemenu,
	showSignin,
	setShowSignin
}) {

	return (
		<div className={styles.header}>
			<ul>
				<li><Link href="/">YOAKE</Link></li>
				<li	onClick={() => setShowSidemenu(!showSidemenu)}>Menu</li>
				<li>Search</li>
				<li onClick={() => setShowSignin(!showSignin)}>Sign in</li>
				<li><Link href="./signupPage/signupPage">Sign up</Link></li>
			</ul>
		</div>
	);
}
