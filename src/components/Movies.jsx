import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.jpg"; 



const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isBannerLoaded, setIsBannerLoaded] = useState(false); /*to avoid unwanted banner displying*/
   
     useEffect(() => {
     fetch("/movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setIsBannerLoaded(true)); // Set banner as loaded
  }, []);

  return (
    <div className="movies-page">
      <div className="movies-container">
        <div className="mainheading">
          <p className="mv">Movies</p>
          <p className="rv">
            <Link to="/movies">Reviews</Link>
          </p>
        </div>
     
     {/* Flex container for the cards and banner */}
        <div className="cards-banner-container">
          {/* Movie Cards */}
          <div className="cards-container">
            {movies.map((movie, index) => (
              <Link
                key={index}
                to={`/moviedetails/${movie.contentID}`}
                style={{ textDecoration: "none" }}
              >
                
                <Card
                  sectiontitle={movie.subSectionTitle}
                  image={movie.itemImageURL}
                  title={movie.itemTitle}
                  itemtitlelead={movie.itemTitleLead}
                />
              </Link>
            ))}
          </div>

          {/* Conditional Banner Image */}
          {isBannerLoaded && (
            <div className="banner-container">
              <img src={bannerImage} alt="Banner" className="banner-image" />
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default Movies;