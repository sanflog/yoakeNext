import Link from 'next/link'
import { useState } from 'react'

import LeftNavigationMenu from './left_navigation_menu'
import style from './header_navigation_menu.module.css'

import { AiOutlineBulb } from 'react-icons/ai';

export default function headerNavigationMenu() {
	const [showLeftNav, setShowLeftNav] = useState(false);

	function leftNavClickHandler() {
		setShowLeftNav(!showLeftNav);
	}

	return (
		<>
			<ul className={style.header}>
				<li 
				className={` ${style.headerLeftItem} ${style.headerItem} `}
				onClick={() => setShowLeftNav(!showLeftNav)}
				>
					LEFTMENU
					{showLeftNav ? <LeftNavigationMenu leftNavClickHandler={leftNavClickHandler} /> : null } 
				</li>
				<li className={` ${style.headerLeftItem} ${style.headerItem} `}>
					<Link	href="/">
						YOAKE
					</Link>
				</li>
				<li className={` ${style.headerRightItem} ${style.headerItem} `} >
					<AiOutlineBulb />
				</li>
			</ul>
		</>
	);
}
