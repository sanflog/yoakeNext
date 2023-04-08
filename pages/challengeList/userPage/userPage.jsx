import { useState, useEffect } from 'react';
import { cookies } from 'next/headers';

import CreateChallengeList from './createChallengeList/createChallengeList';
import AddChallengeItem from './addChallengeItem/addChallengeItem';

import styles from './userPage.module.css';
import utilStyles from '../../../styles/utils.module.css';


{/*
	* Contact with server process
	* */}


function achieveChangeHandler(id, value) {
	{/*
		* The function to update an achieve status of a challenge item
		* */}

	fetch('https://yoake.herokuapp.com/challengeList/changeAchieve/', {
		method: 'POST',
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded'
		},
		body : 'id=' + id + '&value=' + value
	})
		.catch(e => console.error(e))
}


function deleteItem(id, setResMsg) {
	{/*
		* The function to delete a challenge item
		* */}

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
	{/*
		* The function to delete a challenge list
		* */}

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


{/*
	* Return response message for delete item or list
	*/}

function ResponseMessage({resMsg}) {
	if (resMsg !== '') { 
		return (
			<div>
				<p className={styles.resMsg}>{resMsg}</p>
			</div>
		);
	} else {
		return null;
	}
}

{/*
	* Sign out process	
	*/}

function signout(setSignedIn) {
	document.cookie = 'username= ;';
	setSignedIn('');
}


{/* 
	* MAIN PROCESS	
	*/}

export default function UserPage({ 
	username, 
	setSignedIn,
}) {

	{/* Declare variables  */}

	const [showCreateList, setShowCreateList] = useState(false);
	const [challengeLists, setChallengeLists] = useState([]);
	const [challengeItems, setChallengeItems] = useState([]);
	const [resMsg, setResMsg] = useState('');


	{/* Get user's list data from server  */}

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


	{/* Show create list handler */}

	function createListHandler() {
		setShowCreateList(!showCreateList);
	}


	{/* Make checkbox input by the condition of isAchieve property  */}

	function Checkbox({list, item}) {
		const [value, setValue] = useState(item.isAchieve)

		if (list.id == item.listName_id) {
			const checkbox = () => {

				if (!value) {

					{/* Generate checkbox */}

					return (
						<input 
							className={styles.checkitem} 
							type="checkbox" 
							value={!value}	
							onChange={(e) => {
								achieveChangeHandler(item.id, !value);
								setValue(!value);
							}}
						/>
					);

				} else {

					return (
						<input 
							className={styles.checkitem} 
							type="checkbox" 
							value={!value}	
							onChange={(e) => {
								achieveChangeHandler(item.id, !value);
								setValue(!value);
							}}
							checked
						/>
					);
				}
			}

			{/* Create item line */}

			return (
				<div key={item.id}>
					<li className={styles.item}>
						{checkbox()}
						<span className={styles.itemtext}>{item.challenge}</span>
						<button 
							className={styles.itemDeleteBtn}
							onClick={() => deleteItem(item.id, setResMsg)}
						>
							X
						</button>
					</li>
				</div>
			);
		}
	}


	{/* Generate challenge list */}

	const lists = challengeLists.map((list) => {
		const items = challengeItems.map((item) => {
			return (
				<Checkbox list={list} item={item} key={item.id} />
			);
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

	{/* Return entire of the user page  */}

	return (
		<div>

			<ResponseMessage resMsg={resMsg} />

			<div className={styles.userpageHeader}>
				<ul>
					<li>{username}</li>
					<li onClick={() => signout(setSignedIn)}>sign out</li>
					<li onClick={() => setShowCreateList(!showCreateList)}>Add List</li>
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
