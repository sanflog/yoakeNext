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
		.then(data => {
			document.cookie = 'username=' + username + ';max-age=3600; samesite=Lax';
			setSignedIn(data);
		})
		.catch(e => console.error(e))
}

function SigninForm({setSignedIn, username, setUsername}) {
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

export default function SigninPage({
	setSignedIn, 
	username, 
	setUsername, 
	allLst,
	allItemLst
}) {

	const alllists = allLst.map((list) => {
		const items = allItemLst.map((item) => {
			if (list.id == item.listName_id) {
				return (
					<>
						<li key={'item' + item.id}>
							{item.challenge}
						</li>
					</>
				);
			}
		});

		return (
			<div key={'list' + list.listName}>
				<p>{list.listName}</p>
				<p>{list.description}</p>

				<ul>
					{items}
				</ul>

				<hr />

			</div>
		);
	});

	return (
		<div>
			<h1>Challenges List</h1>

			<SigninForm 
				setSignedIn={setSignedIn}
				username={username}
				setUsername={setUsername}
			/>

			<p>
				Here is put Challenge List. You can create challenge list your own, 
				and then you can check whether challenges is achieved by you.
			</p>
			<p>
				If you did not sign up yet, you should enter <Link href="./signupPage/signupPage">sign up</Link> page.
			</p>

			<h1>other's challenge list</h1>
			<div>
				{alllists}
			</div>

		</div>
	);
}
