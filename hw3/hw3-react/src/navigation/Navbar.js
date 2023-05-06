import { Route, Routes, Link } from 'react-router-dom';

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
            <Link to="/search">Search</Link>
          </li>
          <li className="nav-link">
            <Link to="/houses">Houses</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home title=" GoT Enthusiast!" />} />

        <Route
          path="/search"
          element={<Search title="Search for your favorite character!" />}
        />

        <Route
          path="/houses"
          element={<Houses title="GoT House Distribution" />}
        />
      </Routes>
    </div>
  );
}

export default Navbar;
