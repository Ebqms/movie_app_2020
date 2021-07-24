import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  a {
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
    grid-gap: 20px;
    text-decoration: none;
    color: inherit;
  }

  img {
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  }

  .movie__data h3,
  .movie__data h5 {
      margin: 0;
      font-weight: 300;
  }

  .movie__data h3{
      margin-bottom: 5px;
      font-size: 24px;
      color: #2c2c2c;
  }

  .movie__data .movie__genres{
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      margin: 5px 0;
  }

  .movie__genres li,
  .movie__data h5{
      margin-right: 10px;
      font-size: 14px;
  }



`;

function Movie({ title, year, summary, poster, genres }) {
  return (
    <Wrapper>
      <Link
      to={{pathname:'/movie-detail', state:{year, title, summary, poster, genres}}}>
      <img src={poster} alt="" />
      <div className="movie__data">
        <h3>{title}</h3>
        <h5>{year}</h5>
        <p>{summary.slice(0, 180)}...</p>
        <ul className="movie__genres">
          {genres.map((g, i) => {
            return (
              <li key={i} className="movie__genre">
                {g}
              </li>
            );
          })}
        </ul>
      </div>
      </Link>
    </Wrapper>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
