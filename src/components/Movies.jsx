import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies.json") 
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="movies-container">
      <div className="mainheading">
        <p className="mv">Movies</p>
        <p className="rv">
          <Link to="/movies">Reviews</Link>
        </p>
      </div>
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
  );
};

export default Movies;