import Link from 'next/link'
import { useRef } from 'react'

import LeftNavigationMenu from './left_navigation_menu'
import style from './header_navigation_menu.module.css'
import leftNavStayles from './left_navigation_menu.module.css'

export default function HeaderNavigationMenu() {
	const leftNavRef = useRef(null);

	function leftNavShowHandler() {
		leftNavRef.current.className = leftNavStayles.leftNavigationMenuShow;
	}

	return (
		<>
			<ul className={style.header}>
				<li className={` ${style.headerLeftItem} ${style.headerItem} `}>
					<Link	href="/">
						YOAKE
					</Link>
				</li>
				<li 
				className={` ${style.headerRightItem} ${style.headerItem} `}
				onClick={() => leftNavShowHandler()}
				>
					MENU
				</li>
			</ul>

			<LeftNavigationMenu 
				leftNavRef={leftNavRef} 
			/>

		</>
	);
}
