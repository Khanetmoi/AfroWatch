import React, { useState } from 'react';

function MovieForm() {
  const [movieInfo, setMovieInfo] = useState({
    movieFile: '',
    trailer: '',
    movieName: '',
    description: '',
    actors: '',
    director: '',
    ageRange: '',
    videoLength: '',
    genre: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with movieInfo, e.g., submit to server, etc.
    console.log(movieInfo);
  };

  return (
    <div className="container">
      <h2>Movie Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Movie File:
          <input
            type="file"
            name="movieFile"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Trailer:
          <input
            type="file"
            name="trailer"
            value={movieInfo.trailer}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Movie Name:
          <input
            type="text"
            name="movieName"
            value={movieInfo.movieName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={movieInfo.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Actors:
          <input
            type="text"
            name="actors"
            value={movieInfo.actors}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Director:
          <input
            type="text"
            name="director"
            value={movieInfo.director}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Age Range:
          <input
            type="text"
            name="ageRange"
            value={movieInfo.ageRange}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Video Length:
          <input
            type="text"
            name="videoLength"
            value={movieInfo.videoLength}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={movieInfo.genre}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={movieInfo.status}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MovieForm;
