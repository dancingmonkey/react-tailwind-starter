import { useState } from "react";
import "./App.css";
import Navigation from "./Navigation";

const stories = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navigation />

      <div className="w-96 mx-auto mt-10 text-white bg-primary p-4 rounded-lg font-sans">
        <h1 className="text-3xl mb-2 font-bold">My Hacker Stories</h1>

        <Search search={searchTerm} onSearch={handleSearch} />

        <hr className="text-secondary" />

        <div className="text-primaryLightest py-4">
          <List list={searchedStories} />
        </div>
      </div>
    </div>
  );
};

const Search = ({ search, onSearch }) => (
  <div className="py-4 text-primaryLightest">
    <label htmlFor="search">Search:</label>
    <input
      className="ml-2 p-0 bg-transparent focus:outline-dashed outline-secondary"
      value={search}
      id="search"
      type="text"
      onChange={onSearch}
      placeholder="type here"
    ></input>
  </div>
);

const List = ({ list }) =>
  list.map(item => <Item key={item.objectID} item={item} />);

const Item = ({ item }) => (
  <div>
    <span>
      <a href={item.url}>{item.title}: </a>
    </span>
    <span>{item.author} </span>
    <span>{item.num_comments} </span>
    <span>{item.points} </span>
  </div>
);

export default App;
