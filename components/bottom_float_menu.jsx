import Link from 'next/link'
import styles from './bottom_float_menu.module.css'

export default function bottom_float_menu() {
	return (
		<div className={styles.bottomFloatMenu}>
			<div className={styles.bottomFloatMenuContent}>
				<Link href="/">Top</Link>
				<Link href="/blog/blog">Blog</Link>
				<Link href="https://twitter.com/SasakiYudai0">Twitter</Link>
				<Link href="https://github.com/sanflog/">Github</Link>
			</div>
			<div>
				MENU
			</div>
		</div>
	);
}
