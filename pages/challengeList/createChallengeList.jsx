import { useState } from 'react';

export default function CreateChallengeList() {
	return (
		<form>
			<legend>List post form </legend>
			<label>List Name: </label>
			<input type="text" name="listname" />
			<input type="submit" value="create" />
		</form>
	);	
}
