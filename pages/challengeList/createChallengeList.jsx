import { useState } from 'react';

export default function CreateChallengeList() {
	const [listCount, setListCount] = useState(3);

	function pluseListCountHandler() {
		setListCount(listCount + 1);
	}

	const numArray = (listCount) => {
		const arr = [];
		for (let i = 0; i < listCount; i++) {
			arr.push(i + 1);
		}
		return arr;
	};

	const lists = numArray(listCount).map((n, i) => {
		return (
			<div key={n}>
				<label>{n}</label>
				<input type="text" />
			</div>
		);
	});

	return (
		<div>
			{lists}
			<div>
				<button onClick={() => pluseListCountHandler()}>+</button>
			</div>
			<button>submit</button>
		</div>
	);
}
