import React from "react";

const SearchBox = (props) => {
  return (
    <div >
      <input
        onChange={props.searchChange}
        type="search"
        placeholder="Search Robots"
        className="pa2 input-reset bg-lightest-blue"
      ></input><br/><br/>
    </div>
  );
};

export default SearchBox;
