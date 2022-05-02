import * as React from "react";

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

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
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
    setSearchTerm(e.target.value);
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
          list.map((item) => <Item details={item} key={item.objectID} />)
        )}
      </ul>
    </div>
  );
};

const Item = ({ details }) => {
  console.log("item renders");
  return (
    <li>
      <span>
        <a href={details.url}>{details.title}</a>
      </span>
      <span> {details.author}</span>
      <span> {details.num_comments}</span>
      <span> {details.points}</span>
    </li>
  );
};

export default App;
