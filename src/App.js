import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Searchbar from "./Searchbar";
import SearchButtons from "./SearchButtons";
import "./App.css";
import Pagination from "./Pagination";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [urlsToDisplay, setUrlsToDisplay] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Link to API https://unsplash.com/documentation#search-photos
  async function getPhotos() {
    try {
      const apiKey = "bBuKjLz1gVcMtrAfSAYcjFm12snEQDA_E6m4oL2lF_g";
      let res = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=25`
      );
      // console.log( res.data.results);
      setUrlsToDisplay(res.data.results);
    } catch (e) {
      console.log();
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <SearchButtons getUnsplashPhotos={getPhotos} />
        <Searchbar setSearchQuery={setSearchQuery} getPhotos={getPhotos} />
        <div className="row">
          {urlsToDisplay.map((image) => {
            return (
              <div className="images">
                <img src={image.urls.small} />
              </div>
            );
          })}
        </div>
      </div>
      <Pagination/>
    </div>
  );
}

export default App;
