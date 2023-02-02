import Link from 'next/link'
import style from './header_navigation_menu.module.css'

export default function headerNavigationMenu() {
	return (
		<>
			<ul className={style.header}>
				<li className={` ${style.headerLeftItem} ${style.headerItem} `}>
					<Link	href="/">
						YOAKE
					</Link>
				</li>
				<li className={` ${style.headerRightItem} ${style.headerItem} `}>
					<Link href="/blog/blog">
						MENU
					</Link>
				</li>
				<li className={` ${style.headerRightItem} ${style.headerItem} `}>
					<Link href="https://twitter.com/SasakiYudai0"	>
						Twitter
					</Link>
				</li>
				<li className={` ${style.headerRightItem} ${style.headerItem} `}>
					<Link href="https://github.com/sanflog/">
						Github
					</Link>
				</li>
				<li className={` ${style.headerRightItem} ${style.headerItem} `}>
					<Link	href="/blog/blog">
						Blog
					</Link>
				</li>
			</ul>
		</>
	);
}
