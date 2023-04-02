import Head from 'next/head';

import { useState, useEffect } from 'react';

import Layout from '../../components/layout';
import SigninPage from './signinPage';
import UserPage from './userPage';

export default function ChallengesList() {
	const [allLst, setAllLst] = useState([]);
	const [allItemLst, setAllItemLst] = useState([]);
	const [signedIn, setSignedIn] = useState('');
	const [username, setUsername] = useState('');

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

	if (signedIn === '') {
		return(
			<>
				<Head>
					<title>Challenge List</title>
				</Head>

				<Layout>
					<SigninPage 
						setSignedIn={setSignedIn}
						username={username}
						setUsername={setUsername}
						allLst={allLst}
						allItemLst={allItemLst}
					/>
				</Layout>
			</>
		);
	} else {
		return(
			<>
				<Head>
					<title>Challenge List</title>
				</Head>
				<Layout>
					<UserPage 
						username={username} 
						setSignedIn={setSignedIn} 
						allLst={allLst}
						allItemLst={allItemLst}
					/>
				</Layout>
			</>
		);
	}
}
