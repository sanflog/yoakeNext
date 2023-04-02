import { useState } from 'react';
import Head from 'next/head';

import Cheader from './cHeader';
import SideMenu from './sideMenu';
import FooterMenu from '../../../components/footer_menu';

import utilStyles from '../../../styles/utils.module.css';

export const siteTitle = "Yoake";


export default function Clayout({children}) {
	const [showSidemenu, setShowSidemenu] = useState(false);

	const Sidemenu = () => {
		if (showSidemenu) {
			return (
				<SideMenu />
			);
		} else {
			return (
				null
			);
		}
	}

	return (
		<>
			<Head>
				<meta name="og:title" content={siteTitle} />
				<meta	property="og:image"	content="yoake"	/>
			</Head>

			<Cheader 
				showSidemenu={showSidemenu}
				setShowSidemenu={setShowSidemenu}
			/>
			{Sidemenu()}

			<div className={` ${utilStyles.fadeIn} `}>
				<main>{children}</main>
			</div>

			<FooterMenu />

		</>
	);
}
