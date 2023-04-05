import { useState, useEffect } from 'react';
import { cookies } from 'next/headers';

import CreateChallengeList from './createChallengeList/createChallengeList';
import AddChallengeItem from './addChallengeItem/addChallengeItem';

import styles from './userPage.module.css';
import utilStyles from '../../../styles/utils.module.css';


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
				const checkbox = () => {
					if (!item.isAchieve) {
						return (
							<input className={styles.checkitem} type="checkbox" />
						);
					} else {
						return (
							<input 
								className={styles.checkitem} 
								type="checkbox" 
								checked
							/>
						);
					}
				}
				return (
					<>
						<li className={styles.item} key={'item' + item.id}>
							{checkbox()}
							<span className={styles.itemtext}>{item.challenge}</span>
							<button 
								className={styles.itemDeleteBtn}
								onClick={() => deleteItem(item.id, setResMsg)}
							>
								X
							</button>
						</li>
					</>
				);
			}
		});

		return (
			<div key={'list' + list.listName} className={styles.challengeList}>
				<span className={styles.listName}>{list.listName}</span>
				<button 
					className={styles.listDeleteBtn} 
					onClick={() => deleteList(list.id, setResMsg)}
				>
					Del
				</button>
				<p className={styles.listDescription}>{list.description}</p>

				<div className={styles.items}>
					<ul>
						{items}
					</ul>
				</div>

				<AddChallengeItem id={list.id} />

			</div>
		);
	});

	return (
		<div>

			<ResponseMessage resMsg={resMsg} />

			<div className={styles.username}>{username}</div>
			<div className={styles.userpageHeader}>
				<ul>
					<li onClick={() => setShowCreateList(!showCreateList)}>Add List</li>
					<li onClick={() => signout(setSignedIn)}>sign out</li>
				</ul>
			</div>

			<CreateChallengeList 
				username={username} 
				showCreateList={showCreateList} 
				setShowCreateList={setShowCreateList} 
			/>

			<div>
				{lists}
			</div>

		</div>
	);
}
