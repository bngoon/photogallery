import React from "react";

function Searchbar({ setSearchQuery, getPhotos }) {
  return (
    <div className="searchbar">
    
      <input
        placeholder="Enter Search Query"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button onClick={getPhotos}>Submit</button>
      
    </div>
  );
}

export default Searchbar;
