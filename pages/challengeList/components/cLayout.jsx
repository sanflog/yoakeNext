import { useState } from 'react';
import Head from 'next/head';

import FooterMenu from '../../../components/footer_menu';

import styles from './cLayout.module.css';
import utilStyles from '../../../styles/utils.module.css';

export const siteTitle = "Yoake";


export default function Clayout({children}) {

	return (
		<>
			<Head>
				<meta name="og:title" content={siteTitle} />
				<meta	property="og:image"	content="yoake"	/>
			</Head>

			<div className={` ${styles.cContents} ${utilStyles.fadeIn} `}>
				<main>{children}</main>
			</div>

			<FooterMenu />
		</>
	);
}
