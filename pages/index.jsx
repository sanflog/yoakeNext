import { useState } from "react"

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return(
    <div>
			<h1>Yoake</h1>
			<h1>Sasaki Yudai</h1>
			<p>I am web designer.</p>
    </div>
  );
}

