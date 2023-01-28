import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(){
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, '');
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const matterResult = matter(fileContents);
		const data = matterResult.data;
		const content = matterResult.content;

		return {
			id,
			data,
			content,
		};
	});
	return allPostsData.sort((a, b) => {
		if(a.data < b.data){
			return 1;
		}else{
			return -1;
		}
	});
}
