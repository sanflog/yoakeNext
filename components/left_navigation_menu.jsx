import Link from 'next/link'

import styles from './left_navigation_menu.module.css'
import utilStyles from '/styles/utils.module.css'

export default function LeftNavigationMenu({leftNavClickHandler}) {
	return (
		<div className={`
			${styles.leftNavigationMenu}
		`}>
			<div 
				className={`
					${styles.leftNavCloseButton}
					${utilStyles.fadeIn3s}
				`}
				onClick={() => leftNavClickHandler}
			>
				close
			</div>
			<div className={`
				${styles.leftNavigationContent} 
				${utilStyles.fadeIn3s} 
			`}>
				<Link href="/">YOAKE</Link>
				<Link href="/blog/blog">Blog</Link>
				<Link href="/thinkingAnalyzer/thinkingAnalyzer">Thinking Analyzer</Link>
				<Link href="/about/aboutMe">About Me</Link>
				<Link href="https://twitter.com/SasakiYudai0">Twitter</Link>
				<Link href="https://github.com/sanflog/">Github</Link>
			</div>
		</div>
	);
}
