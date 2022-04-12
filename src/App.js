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
    <div className="selection:bg-secondary selection:text-primary">
      <Navigation />

      <div className="mx-auto mt-10 w-96 rounded-lg bg-primary p-4 font-sans text-white">
        <h1 className="mb-2 text-3xl font-bold">My Hacker Stories</h1>

        <Search search={searchTerm} onSearch={handleSearch} />

        <hr className="text-secondary" />

        <div className="py-4 text-primaryLightest">
          <List list={searchedStories} />
        </div>
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-secondary">
          Some random text to test out first letter effect
        </p>
      </div>
    </div>
  );
};

const Search = ({ search, onSearch }) => (
  <div className="py-4 text-primaryLightest">
    <label htmlFor="search">Search:</label>
    <input
      className="ml-2 bg-transparent p-0 outline-secondary focus:outline-dashed"
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
