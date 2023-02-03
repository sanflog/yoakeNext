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
					&lt;&gt;
				</li>
			</ul>
		</>
	);
}
