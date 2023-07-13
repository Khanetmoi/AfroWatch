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
    Image: '',
    release_year: '',
    age: '',
    rating: '',
    length: '',
  });

  const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Error posting data');
      }
  
      const responseData = await response.json();
      console.log('Response:', responseData);
      // Perform actions with the response data
  
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const url = "https://myworklm.com/afrowatch/api/afrowatch_api_admin.php";
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with movieInfo, e.g., submit to server, etc.
    console.log(movieInfo);
    postData(url, {
      movieFile: 'movie.mp4',
      trailer: 'trailer.mp4',
      movieName: 'Example Movie',
      })
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
          Image:
          <input
            type="file"
            name="trailer"
            value={movieInfo.Image}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Status:
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
