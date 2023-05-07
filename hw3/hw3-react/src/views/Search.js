import React, { useState, useEffect } from 'react';

function Search(props) {
  const [post, setPost] = useState('');
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { title } = props;
  let [name, setName] = useState('');
  let [pic, setPic] = useState('');

  const url = 'https://thronesapi.com/api/v2/Characters';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((characters) => {
        setData(characters);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [data]);

  const handleChange = (event) => {
    setPost(event.target.value);
  };

  const handleClick = (nameChange, picChange) => {
    console.log(post);
    console.log(name);
    data.forEach((character) => {
      if (post === character.fullName) {
        console.log('match');
        nameChange = character.fullName;
        picChange = character.imageUrl;
      }
    });
    console.log(post);
    console.log({ name });

    if (post !== name) {
      setName('');
      setPic('');
    }
  };

  return (
    <main className="container">
      <h1 className="text-black">{title}</h1>

      <div className="input-group">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleChange}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleClick(name, pic)}
        >
          search
        </button>
      </div>

      {!isLoaded && <div>Loading...</div>}

      <h1>{name}</h1>
      <img src={pic} width="225" height="225"></img>
    </main>
  );
}

export default Search;
