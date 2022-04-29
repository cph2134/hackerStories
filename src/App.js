import * as React from "react";

const welcome = {
  title: "React",
  greeting: "Hey",
};

function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label>
        Search:
        <input id="search" type="text" />
      </label>
    </div>
  );
}

export default App;
