import React, { useContext } from "react";
import { UserContext } from "../userContext";
import { Login } from "../utils/login";

function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button className="btn btn-danger" onClick={() => setUser(null)}>
          Logout
        </button>
      ) : (
        <button
          className="btn btn-success"
          onClick={async () => {
            const user = await Login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Home;
