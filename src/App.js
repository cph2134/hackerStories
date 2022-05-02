import * as React from "react";

//example of a custom hook
//this follows several conventions of built-in hooks. 1) the naming convention, 2) returned values are return as an array.
//a goal of a custom hook should be reusability.
const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
};

const App = () => {
  const stories = [
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
  console.log("App renders");

  const [searchTerm, setSearchTerm] = useStorageState("search", "React");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchTermToRegex = new RegExp(searchTerm, "i");
  const searchedStories = stories.filter((item) =>
    item.title.match(searchTermToRegex)
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ onSearch, searchTerm, setSearchTerm }) => {
  console.log("Search renders");

  const handleChange = (e) => {
    onSearch(e);
  };

  return (
    <div>
      <label htmlFor="search" />
      Search:
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
      />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const List = ({ list }) => {
  console.log("list renders");
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {list.length === 0 ? (
          <p>No stories found!</p>
        ) : (
          list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />)
        )}
      </ul>
    </div>
  );
};

const Item = ({ title, url, author, num_comments, points }) => {
  console.log("item renders");
  return (
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span> {author}</span>
      <span> {num_comments}</span>
      <span> {points}</span>
    </li>
  );
};

export default App;
