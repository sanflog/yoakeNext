import { useState } from 'react';

import Layout from '../../components/layout';
import SigninPage from './signinPage';
import UserPage from './userPage';

export default function ChallengesList() {
	const [signedIn, setSignedIn] = useState('');

	if (signedIn === '') {
		return(
			<Layout>
				<SigninPage 
					setSignedIn={setSignedIn}
				/>
			</Layout>
		);
	} else {
		return(
			<Layout>
				<UserPage />
			</Layout>
		);
	}

}
