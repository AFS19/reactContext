import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./userContext";

function App() {
  const [user, setUser] = React.useState(null);

  const providerValue = React.useMemo(
    () => ({ user, setUser }),
    [user, setUser]
  );

  return (
    <div className="container-md">
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="">
          <UserContext.Provider value={providerValue}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
