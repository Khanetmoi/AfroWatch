import React, { useState } from 'react';

function MovieForm() {
  const [movieInfo, setMovieInfo] = useState({
    movie_name: '',
    movie_producer: '',
    movie_actor: '',
    movie_description: '',
    movie_year_release: '',
    movie_age_range: '',
    movie_image: '',
    movie_file: '',
    movie_trailler_file: '',
    movie_rating: '',
    movie_genre: '',
    movie_length: '',
    movie_status: '',
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

  const url = 'https://myworklm.com/afrowatch/api/afrowatch_api_movie.php';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with movieInfo, e.g., submit to server, etc.
    console.log(movieInfo);
    postData(url, {
      admin_id:"0",
      movie_name: movieInfo.movie_name,
      movie_producer: movieInfo.movie_producer,
      movie_actor: movieInfo.movie_actor,
      movie_description: movieInfo.movie_description,
      movie_year_release: movieInfo.movie_year_release,
      movie_age_range: movieInfo.movie_age_range,
      movie_image: movieInfo.movie_image,
      movie_file: movieInfo.movie_file,
      movie_trailler_file: movieInfo.movie_trailler_file,
      movie_rating: movieInfo.movie_rating,
      movie_genre: movieInfo.movie_genre,
      movie_length:"hhhhhhh",
      movie_status: movieInfo.movie_status,
    });
  };

  return (
    <div className="container">
      <h2>Movie Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          1 Movie File:
          <input type="file" name="movie_file" value={movieInfo.movie_file} onChange={handleChange} required />
        </label>
        <br />
        <label>
          2 Trailer File:
          <input
            type="file"
            name="movie_trailler_file"
            value={movieInfo.movie_trailler_file}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          3 Image File:
          <input
            type="file"
            name="movie_image"
            value={movieInfo.movie_image}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          4 Status:
          <input
            type="text"
            name="movie_status"
            value={movieInfo.movie_status}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          5 Movie Name:
          <input
            type="text"
            name="movie_name"
            value={movieInfo.movie_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          6 Description:
          <textarea
            name="movie_description"
            value={movieInfo.movie_description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          7 Actors:
          <input
            type="text"
            name="movie_actor"
            value={movieInfo.movie_actor}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          8 Director:
          <input
            type="text"
            name="movie_producer"
            value={movieInfo.movie_producer}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          9 Age Range:
          <input
            type="text"
            name="movie_age_range"
            value={movieInfo.movie_age_range}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          10 Video Length:
          <input
            type="text"
            name="movie_length"
            value={movieInfo.movie_length}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          11 Genre:
          <input
            type="text"
            name="movie_genre"
            value={movieInfo.movie_genre}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          12 Release Year:
          <input
            type="text"
            name="movie_year_release"
            value={movieInfo.movie_year_release}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          13 Rating:
          <input
            type="text"
            name="movie_rating"
            value={movieInfo.movie_rating}
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
