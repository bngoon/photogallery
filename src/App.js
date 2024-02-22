import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Searchbar from "./Searchbar";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [urlsToDisplay, setUrlsToDisplay] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Link to Unsplash Search API Documentation: https://unsplash.com/documentation#search-photos
  async function getUnsplashPhotos() {
    try {
      const apiKey = "bBuKjLz1gVcMtrAfSAYcjFm12snEQDA_E6m4oL2lF_g";
      let res = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=24`
      );
      // console.log( res.data.results);
      setUrlsToDisplay(res.data.results);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main>
      <Header />
      <div className="fullscreen">
        <Searchbar
          setSearchQuery={setSearchQuery}
          getUnsplashPhotos={getUnsplashPhotos}
        />
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
    </main>
  );
}

export default App;
