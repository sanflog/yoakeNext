import { useState } from 'react';
import Link from 'next/link';

import Layout from '../../../components/layout';
import styles from './signupPage.module.css';
import utilStyles from '../../../styles/utils.module.css';


function submit(username, password, email, setIsSuccess) {

	fetch('http://localhost:8000/challengeList/signup/', {
		method: 'POST',
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded',
		},
		body: 'username=' + username + '&password=' + password + '&email=' + email,
	})
		.then(response => response.json())
		.then(data => setIsSuccess(data))
		.catch(e => console.error(e))
}


function SignupSuccess({}) {
	return (
		<div className={styles.successMessage}>

			<p className={utilStyles.textColorRed}>
				You signed up! <br />
				You should go sign in page and you sign in Challenge List!
			</p>

			<Link className={utilStyles.textColorRed} href="../challengeList">
				&gt;&gt; Go sign in page
			</Link> 

		</div>
	);
}


export default function SignupPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [isSuccess, setIsSuccess] = useState({});

	if (isSuccess.response == 'OK') {
		return (
			<Layout>
				<SignupSuccess />
			</Layout>
		);
	} else {
		return (
			<Layout>

				<fieldset>

					<legend><h2>Sign Up</h2></legend>

					<div className={styles.signupInput}>
						<label>username: </label>
						<input 
							type="text" 
							name="username" 
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>

					<div className={styles.signupInput}>
						<label>password: </label>
						<input 
							type="text" 
							name="password" 
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					<div className={styles.signupInput}>
						<label>e-mail: </label>
						<input 
							type="text" 
							name="email" 
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<button 
						className={styles.signupSubmit}
						onClick={() => submit(username, password, email, setIsSuccess)}
					>
						submit
					</button>

				</fieldset>

			</Layout>
		);
	}

}
