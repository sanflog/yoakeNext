import Link from 'next/link'
import { useRef } from 'react'

import LeftNavigationMenu from './left_navigation_menu'
import style from './header_navigation_menu.module.css'
import leftNavStayles from './left_navigation_menu.module.css'

import { AiOutlineBulb } from 'react-icons/ai';

export default function HeaderNavigationMenu() {
	const leftNavRef = useRef(null);

	function leftNavShowHandler() {
		leftNavRef.current.className = leftNavStayles.leftNavigationMenuShow;
	}

	function leftNavHiddenHandler() {
		leftNavRef.current.className = leftNavStayles.leftNavigationMenuHidden;
	}

	return (
		<>
			<ul className={style.header}>
				<li 
				className={` ${style.headerLeftItem} ${style.headerItem} `}
				onClick={() => leftNavShowHandler()}
				>
					MENU
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

			<LeftNavigationMenu 
				leftNavRef={leftNavRef} 
				leftNavHiddenHandler={leftNavHiddenHandler} 
			/>

		</>
	);
}
