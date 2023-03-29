import { useState, useEffect } from 'react';
import { cookies } from 'next/headers';

import CreateChallengeList from './createChallengeList';
import AddChallengeItem from './addChallengeItem';

import styles from './userPage.module.css';
import utilStyles from '../../styles/utils.module.css';


function signout(setSignedIn) {
	document.cookie = 'username= ;';
	setSignedIn('');
}


export default function UserPage({ username, setSignedIn }) {
	const [showCreateList, setShowCreateList] = useState(false);
	const [challengeLists, setChallengeLists] = useState([]);
	const [challengeItems, setChallengeItems] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/challengeList/userpage/?username=' + username)
			.then(response => response.json())
			.then(data => {
				setChallengeLists(data.challengeLists);
				setChallengeItems(data.challengeItems);
			})
			.catch(e => console.error(e))
	}, []);

	function createListHandler() {
		setShowCreateList(!showCreateList);
	}

	const lists = challengeLists.map((list) => {
		const items = challengeItems.map((item) => {
			if (list.listName == item.listName_id) {
				return (
					<>
						<li key={item.challenge}>
							{item.challenge} {item.isAchieve && <strong>done</strong>}
						</li>
						<button>del</button>
					</>
				);
			}
		});
		return (
			<div key={list.listName} className={styles.challengeList}>
				<p>{list.listName}</p>
				<button>del</button>

				<ul>
					{items}
				</ul>
				<AddChallengeItem />

				<hr />

			</div>
		);
	});

	return (
		<div>

			<div>
				<p>{username}</p>
			</div>

			<div onClick={() => signout(setSignedIn)}>
				<p>sign out</p>
			</div>

			<hr />

			<CreateChallengeList />

			<hr />

			<div>
				{lists}
			</div>

		</div>
	);
}
