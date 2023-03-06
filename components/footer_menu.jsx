import Link from 'next/link'
import styles from './footer_menu.module.css'

export default function FooterMenu() {
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.footerContent}>

				<div className={styles.footerCol}>
					<h4><Link href="/">YOAKE</Link></h4>
					<ul>
						<li><Link href="/blog/blog">Blog</Link></li>
						<li><Link href="/thinkingAnalyzer/thinkingAnalyzer">Thinking Analizer</Link></li>
						<li><Link href="/about/aboutMe">About</Link></li>
					</ul>
				</div>
				
				<div className={styles.footerCol}>
					<h5>CONTACT</h5>
					<ul>
						<li><Link href="https://twitter.com/SasakiYudai0">Twitter</Link></li>
						<li><Link href="https://github.com/sanflog/">Github</Link></li>
					</ul>
				</div>

			</div>	
		</div>
	);
}
