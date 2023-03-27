import { useState } from 'react';

import Link from 'next/link';

function sendUserInfo(
	setSignedIn, 
	username, 
	password
) {
	const reqBody = 'username=' + username + '&password=' + password;

	fetch('http://localhost:8000/challengeList/signin/', {
		method: 'POST',
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded',
		},
		body: reqBody,
	})
		.then(response => response.json())
		.then(data => setSignedIn(data))
		.catch(e => console.error(e))

}

function SigninForm({setSignedIn}) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div>

			<h3>sign in</h3>

			<div>

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

export default function SigninPage({setSignedIn}) {
	return (
		<div>
			<h1>Challenges List</h1>

			<SigninForm 
				setSignedIn={setSignedIn}
			/>

			<p>
				Here is put Challenge List. You can create challenge list your own, 
				and then you can check whether challenges is achieved by you.
			</p>
			<p>
				If you did not sign up yet, you should enter <Link href="./signupPage/signupPage">sign up</Link> page.
			</p>

		</div>
	);
}
