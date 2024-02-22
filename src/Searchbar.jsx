import React from "react";

function Searchbar({ setSearchQuery, getUnsplashPhotos }) {
  return (
    <div className="searchbar">
    
      <input
        placeholder="Enter Search Query"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button onClick={getUnsplashPhotos}>Submit</button>
      
    </div>
  );
}

export default Searchbar;
