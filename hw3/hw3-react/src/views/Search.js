import React, { useState, useEffect } from 'react';
// import { dataAPI } from '../utils/callAPI';

function Search(props) {
  const [post, setPost] = useState('');
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { title } = props;
  const [name, setName] = useState('');
  const [pic, setPic] = useState('');

  const handleChange = (event) => {
    setPost(event.target.value);
  };

  const handleClick = () => {
    data.forEach((character) => {
      if (post === character.fullName) {
        setToggle(true);
        setName(character.fullName);
        setPic(character.imageUrl);
        console.log('match');
      } else {
        setToggle(false);
        setName('');
      }
    });
  };

  const url = 'https://thronesapi.com/api/v2/Characters';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((characters) => {
        setData(characters);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [url]);

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
          onClick={handleClick}
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
