import Link from 'next/link'
import styles from './footer_menu.module.css'

export default function FooterMenu() {
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.footerContent}>
				<h4><Link href="/">YOAKE</Link></h4>
				<ul>
					<li><Link href="/blog/blog">Blog</Link></li>
					<li><Link href="/thinkingAnalyzer/thinkingAnalyzer">Thinking Analizer</Link></li>
					<li><Link href="/about/aboutMe">About</Link></li>
				</ul>
			</div>	
		</div>
	);
}
