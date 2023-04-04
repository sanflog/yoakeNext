import Head from 'next/head';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import styles from './challengeList.module.css';

import Clayout from './components/cLayout';
import SigninPage from './signinPage/signinPage';
import UserPage from './userPage/userPage';
import Cheader from './components/cHeader';
import SideMenu from './components/sideMenu';

function AllItems({allLst, allItemLst}) {
	let items = []
	if (!allLst == [] && !allItemLst == []) {
		items = allItemLst.map((item) => {
			return (
				<li key={item.id}>
					{item.challenge}
				</li>
			);
		});
	}

	if (!items == []) {
		return (
			<ul>
				{items}
			</ul>
		);
	} else {
		return null;
	}
}

export default function ChallengesList() {

	const [allLst, setAllLst] = useState([]);
	const [allItemLst, setAllItemLst] = useState([]);
	const [showSignin, setShowSignin] = useState(true);
	const [signedIn, setSignedIn] = useState('');
	const [username, setUsername] = useState('');
	const [showSidemenu, setShowSidemenu] = useState(false);


	useEffect(() => {
		if (document.cookie !== '') {
			const name = 'username='; 
			const decodeCookie = decodeURIComponent(document.cookie);
			const ca = decodeCookie.split(';');

			for (let i = 0; i < ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					if (c.substring(name.length, c.length) !== '') {
						setUsername(c.substring(name.length, c.length));
						setSignedIn('OK');
					}
				}
			}
		}

		fetch('https://yoake.herokuapp.com/challengeList/allList/')
			.then(response => response.json())
			.then(data => {
				setAllLst(data.lst)
				setAllItemLst(data.ilst)
			})
			.catch(e => console.error(e))
	}, []);

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


	if (signedIn === '') {
		return(
			<Clayout>
				<Head>
					<title>Challenge List</title>
				</Head>

				<Cheader 
					showSidemenu={showSidemenu}
					setShowSidemenu={setShowSidemenu}
					showSignin={showSignin}
					setShowSignin={setShowSignin}
				/>

				{Sidemenu()}

				<SigninPage 
					setSignedIn={setSignedIn}
					username={username}
					setUsername={setUsername}
					showSignin={showSignin}
				/>

				<h2>Challenges List</h2>

				<h3>All challenge items</h3>
				<div className={styles.items}>
					<AllItems allLst={allLst} allItemLst={allItemLst} />
				</div>


			</Clayout>
		);
	} else {
		return(
			<Clayout>
				<Head>
					<title>Challenge List</title>
				</Head>

				<Cheader 
					showSidemenu={showSidemenu}
					setShowSidemenu={setShowSidemenu}
				/>
				{Sidemenu()}

				<UserPage 
					username={username} 
					setSignedIn={setSignedIn} 
				/>

				<h3>All challenge items</h3>
				<div className={styles.items}>
					<AllItems allLst={allLst} allItemLst={allItemLst} />
				</div>
			</Clayout>
		);
	}
}
