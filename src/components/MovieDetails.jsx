import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import banner from "../assets/banner.jpg"

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch("/MovieDetails.json") 
      .then((response) => response.json())
      .then((data) => {
        if (data.contentID === id) {
          setMovieDetails(data);
        }
      })
      .catch((error) => console.error("Error fetching details:", error));
  }, [id]);

  if (!movieDetails) return <p>Loading...</p>; 

  const {
    itemTitle,
    publishedTime,
    itemAuthor,
    itemImageURL,
    itemImageCaption,
    detail_elements,
    relatedArticles,
  } = movieDetails;

  return (
    <>
    <div className="bnr"><img src={banner} alt="" /></div>
    <div className="movie-details-container">
      
      <h1 className="movie-title">{itemTitle}</h1>
      <p className="movie-author">
        By {itemAuthor} | {publishedTime}
      </p>
      <img
        src={`https://www.mathrubhumi.com${itemImageURL}`}
        alt={itemImageCaption}
        className="movie-image"
      />
      <p className="image-caption">{itemImageCaption}</p>

      <div className="movie-details">
        {detail_elements.map((element) => {
          if (element.elementType === 0) {
            return <p key={element.elementID}>{element.elementContent}</p>;
          }
          return null;
        })}
      </div>

      <h3>Related Articles</h3>
      <ul>
        {relatedArticles.map((article) => (
          
          <li key={article.relatedID}> 
            <a
              href={`https://www.mathrubhumi.com${article.relatedURL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.relatedTitle}
            </a>
          </li>

          
        ))}
      </ul>
    </div>
    </>
  );
};

export default MovieDetails;