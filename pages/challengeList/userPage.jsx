import { useState } from 'react';
import CreateChallengeList from './createChallengeList';

const info = {
	'username' : 'sanset',
	'list' : [
		{ 
			'listname' : 'test',
			'challenge' : [
				[true, 'eat Sushi'],
				[false, 'testets'],
			]
		},
		{ 
			'listname' : 'test2',
			'challenge' : [
				[false, 'watch Youtube'],
				[false, 'aaaaa'],
			]
		}
	]
};



export default function UserPage() {
	const [showCreateList, setShowCreateList] = useState(false);

	function createListHandler() {
		setShowCreateList(!showCreateList);
	}

	const challengeLists = info.list.map((lst) => {
		const challengeList = lst.challenge.map((item, i) => {
			return (
				<tr key={i}>
					<td>{item[0] && "X"}</td>
					<td>{item[1]}</td>
				</tr>
			);
		});
		return (
			<div key={lst.listname}>
				<h4>{lst.listname}</h4>
				<table border="1px solid black">
					<tbody>
						{challengeList}
					</tbody>
				</table>
			</div>
		);
	});

	if (showCreateList) {
		return (
			<div>
				<h3>{info.username}</h3>

				<div>
					<a href="http://localhost:3000/challengeList/challengeList">sign out</a>
				</div>

				<CreateChallengeList />

				<div>
					<button onClick={() => createListHandler()}>
						Cancel 
					</button>
				</div>

				{challengeLists}

			</div>
		);
	} else {
		return (
			<div>
				<h3>{info.username}</h3>

				<div>
					<a href="http://localhost:3000/challengeList/challengeList">sign out</a>
				</div>

				<div>
					<button onClick={() => createListHandler()}>
						+ create a challenge list
					</button>
				</div>

				{challengeLists}

			</div>
		);
	}
}
