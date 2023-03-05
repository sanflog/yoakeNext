import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import HeaderNavigationMenu from './header_navigation_menu';
import BottomFloatMenu from './bottom_float_menu';
import FooterMenu from './footer_menu';

const name = 'Sasaki Yudai';
export const siteTitle = "Yoake";

export default function Layout({ children, home }) {
	return (
		<>
			<Head>
				<meta name="og:title" content={siteTitle} />
				<meta	property="og:image"	content="yoake"	/>
			</Head>

			<HeaderNavigationMenu />

			<div className={` ${styles.container} ${utilStyles.fadeIn} `}>
				<main>{children}</main>
			</div>

			<BottomFloatMenu />
			<FooterMenu />
		</>
	);
}
