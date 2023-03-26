import Layout from '../../components/layout';

function SignInPage() {
	return (
		<div>

			<h3>sign in</h3>

			<form action="https://yoake.herokuapp.com/challengeList/signin/" method="post">
				<label>username:</label>
				<input type="text" name="username" />

				<label>password:</label>
				<input type="text" name="password" />

				<input type="submit" value="sign in" />

			</form>
		</div>
	);
}

function SignUpPage() {
}

function userPage() {
}

export default function ChallengesList() {
	return(
		<Layout>
			<h1>Challenges List</h1>

			<SignInPage />

			<p>
				Here is put Challenge List. You can create challenge list your own, 
				and then you check whether challenges is achieved by you.
			</p>

		</Layout>
	);
}
