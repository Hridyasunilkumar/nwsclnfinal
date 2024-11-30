import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import banner from "../assets/banner.jpg";

const MovieDetails = () => {
  const { id } = useParams(); // Dynamic ID from URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch("/MovieDetails.json"); // Update with your API path
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        const selectedMovie = data.find((movie) => movie.contentID === id);
        if (!selectedMovie) {
          throw new Error("Movie not found");
        }
        setMovieDetails(selectedMovie);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
    <div className="movie-details-page">
      {/* Movie Details */}
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

        {/* Movie Description */}
        <div className="movie-details">
          {detail_elements.map((element, index) => {
            if (element.elementType === 0) {
              return <p key={index}>{element.elementContent}</p>;
            } else if (element.elementType === 8) {
              return (
                <div key={index} className="ad-placeholder">
                  <img
                    src={element.elementContent}
                    alt="Advertisement"
                    style={{ width: "300px", height: "250px", margin: "20px 0" }}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Related Articles */}
        <h3>Related Articles</h3>
        <ul className="rltd">
          {relatedArticles.map((article, index) => (
            <li key={index}>
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

      {/* Banner Section */}
      <div className="bnr">
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
};

export default MovieDetails;