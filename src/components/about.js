import React, { useContext } from "react";
import { UserContext } from "../userContext";

function About() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>About</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default About;
