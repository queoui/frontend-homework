import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search(props) {
  const [posts, setPosts] = useState([]);
  const { title } = props;

  // url for the Thrones API
  const url = 'https://thronesapi.com/api/v2/Characters';

  useEffect(() => {
    const fetchPost = async () => {
      let response = await axios.get(url);
      setPosts(response.data);
    };
    fetchPost();
  });

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
        />
        <button type="button" class="btn btn-outline-primary">
          search
        </button>
      </div>
    </main>
  );
}

export default Search;
