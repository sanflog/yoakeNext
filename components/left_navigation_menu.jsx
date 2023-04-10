import Link from 'next/link'
import { forwardRef } from 'react';

import styles from './left_navigation_menu.module.css'
import utilStyles from '/styles/utils.module.css'

const LeftNavigationMenu = forwardRef(({leftNavRef, leftNavHiddenHandler}, ref) => {
	return (
		<div 
			className={`
				${styles.leftNavigationMenuHidden}
			`}
			ref={leftNavRef}
		>
			<div className={`
				${styles.leftNavigationContent} 
				${utilStyles.fadeIn3s} 
			`}>
				<Link href="/">YOAKE</Link>
				<Link href="/documents/documents">Documents</Link>
				<Link href="/thinkingAnalyzer/thinkingAnalyzer">Thinking Analyzer</Link>
				<Link href="/challengeList/challengeList">Challenge List</Link>
				<Link href="/about/aboutMe">About Me</Link>
				<Link href="https://twitter.com/SasakiYudai0">Twitter</Link>
				<Link href="https://github.com/sanflog/">Github</Link>
			</div>
		</div>
	);
});

export default LeftNavigationMenu;
