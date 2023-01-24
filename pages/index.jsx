import { useState } from "react"

function Header({ title }) {
  console.log(title);
  return <h1>{`Cool ${title}`}</h1>; 
}

function CreateTitle(props) {
  if (props.title) {
    return <b>{props.title}</b>;
  }else{
    return 'Default title';
  }
}


export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return(
    <div>
      <Header title="React =" />
      <CreateTitle title="Hello, world."/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}

