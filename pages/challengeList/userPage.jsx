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

function deleteItem(id, setResMsg) {
	const data = { 'id' : id };
	fetch('https://yoake.herokuapp.com/challengeList/deleteItem/', {
		method: 'POST',
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded'
		},
		body : 'id=' + id
	})
		.then(response => response.json())
		.then(data => setResMsg(data.msg))
		.catch(e => console.error(e))
}

function deleteList(id, setResMsg) {
	const data = { 'id' : id };
	fetch('https://yoake.herokuapp.com/challengeList/deleteList/', {
		method: 'POST',
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded'
		},
		body : 'id=' + id
	})
		.then(response => response.json())
		.then(data => setResMsg(data.msg))
		.catch(e => console.error(e))
}

function ResponseMessage({resMsg}) {
	if (resMsg !== '') { 
		return (
			<div>
				<p className={styles.resMsg}>{resMsg}</p>
				<button onClick={() => location.reload()}>you should reload page</button>
			</div>
		);
	} else {
		return null;
	}
}

export default function UserPage({ 
	username, 
	setSignedIn,
	allLst,
	allItemLst
}) {
	const [showCreateList, setShowCreateList] = useState(false);
	const [challengeLists, setChallengeLists] = useState([]);
	const [challengeItems, setChallengeItems] = useState([]);
	const [resMsg, setResMsg] = useState('');

	useEffect(() => {
		fetch('https://yoake.herokuapp.com/challengeList/userpage/?username=' + username)
			.then(response => response.json())
			.then(data => {
				setChallengeLists(data.challengeLists);
				setChallengeItems(data.challengeItems);
			})
			.catch(e => console.error(e))
		setResMsg('');
	}, []);

	function createListHandler() {
		setShowCreateList(!showCreateList);
	}

	const lists = challengeLists.map((list) => {
		const items = challengeItems.map((item) => {
			if (list.id == item.listName_id) {
				return (
					<>
						<li key={'item' + item.id}>
							{item.challenge} {item.isAchieve && <strong>done</strong>}
						</li>
						<button onClick={() => deleteItem(item.id, setResMsg)}>
							del
						</button>
					</>
				);
			}
		});

		return (
			<div key={'list' + list.listName} className={styles.challengeList}>
				<p>{list.listName}</p>
				<p>{list.description}</p>
				<button onClick={() => deleteList(list.id, setResMsg)}>
					del
				</button>

				<ul>
					{items}
				</ul>
				<AddChallengeItem id={list.id} />

				<hr />

			</div>
		);
	});

	let alllists = [];

	if (!allLst == [] && !allItemLst == []) {
		 alllists = allLst.map((list) => {
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
	}

	return (
		<div>

			<ResponseMessage resMsg={resMsg} />

			<div>
				<p>{username}</p>
			</div>

			<div onClick={() => signout(setSignedIn)}>
				<p>sign out</p>
			</div>

			<hr />

			<CreateChallengeList username={username} />

			<hr />

			<div>
				{lists}
			</div>

			<hr />

			<h1>other's challenge list</h1>
			<div>
				{alllists}
			</div>

		</div>
	);
}
