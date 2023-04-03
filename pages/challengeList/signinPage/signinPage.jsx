import { useState } from 'react';

import styles from './signinPage.module.css';


function sendUserInfo(
	setSignedIn, 
	username, 
	password
) {

	const reqBody = 'username=' + username + '&password=' + password;

	fetch('https://yoake.herokuapp.com/challengeList/signin/', {
		method: 'POST',
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded',
		},
		body: reqBody,
	})
		.then(response => response.json())
		.then(data => {
			document.cookie = 'username=' + username + ';max-age=3600; samesite=Lax';
			setSignedIn(data);
		})
		.catch(e => console.error(e))
}

function SigninForm({setSignedIn, username, setUsername}) {
	const [password, setPassword] = useState('');

	return (
		<div
			className={`
				${styles.wrapper}
			`}
		>

			<div className={styles.signinForm}>
				<h3>sign in</h3>

				<p>
					username: 
					<input 
						type="text" 
						name="username" 
						onChange={(e) => setUsername(e.target.value)}
					/>
				</p>

				<p>
					password: 
					<input 
						type="text" 
						name="password" 
						onChange={(e) => setPassword(e.target.value)}
					/>
				</p>

				<button 
					onClick={
						() => sendUserInfo(setSignedIn, username, password)
					}
				>
					Sign In
				</button>

			</div>

		</div>
	);
}


export default function SigninPage({
	setSignedIn, 
	username, 
	setUsername, 
	showSignin
}) {
	if (!showSignin) {
		return null;
	} else {
		return (
			<div>

				<SigninForm 
					setSignedIn={setSignedIn}
					username={username}
					setUsername={setUsername}
				/>

			</div>
		);
	}

}
