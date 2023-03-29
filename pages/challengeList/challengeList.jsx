import { useState, useEffect } from 'react';

import Layout from '../../components/layout';
import SigninPage from './signinPage';
import UserPage from './userPage';

export default function ChallengesList() {
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
					setUsername(c.substring(name.length, c.length));
					setSignedIn('OK');
				}
			}
		}
	}, []);

	if (signedIn === '') {
		return(
			<Layout>
				<SigninPage 
					setSignedIn={setSignedIn}
					username={username}
					setUsername={setUsername}
				/>
			</Layout>
		);
	} else {
		return(
			<Layout>
				<UserPage 
					username={username} 
					setSignedIn={setSignedIn} 
				/>
			</Layout>
		);
	}

}
