import { Route, Link } from 'react-router-dom';

// import views
import Search from './../views/Search';
import Home from './../views/Home';
import Houses from './../views/Houses';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/Search">Search</Link>
          </li>
          <li className="nav-link">
            <Link to="/Houses">Houses</Link>
          </li>
        </ul>
      </nav>

      <Route path="/">
        <Home />
      </Route>
      <Route path="/search">
        <Search title="Search for your favorite character!" />
      </Route>
      <Route path="/Houses"></Route>
    </div>
  );
}

export default Navbar;
