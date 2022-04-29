import * as React from "react";

const welcome = {
  title: "React",
  greeting: "Hey",
};
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

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
      <h2>Topics</h2>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> {item.author}</span>
              <span> {item.num_comments}</span>
              <span> {item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
