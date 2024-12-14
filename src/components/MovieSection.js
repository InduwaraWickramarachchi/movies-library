import { Search, X } from "lucide-react";
import "./MovieSection.css";
import { useState } from "react";

export function MovieSection() {
  const section_details = {
    title: "Collect your favorites",
    search: "Search movies",
  };

  const favorite_movies = [
    {
      path: "./movie_1.jpg",
      original_title: "Batman returns",
      overview:
        "Batman has not been seen for ten years. A new breed of criminal ravages Gotham City, forcing 55-year-old Bruce Wayne back into the cape and cowl. But, does he still have what it takes to fight crime in a new era?",
    },
    {
      path: "./movie_2.jpg",
      original_title: "Wild Wild west",
      overview:
        "Legless Southern inventor Dr. Arliss Loveless plans to rekindle the Civil War by assassinating President U.S. Grant. Only two men can stop him: gunfighter James West and master-of-disguise and inventor Artemus Gordon. The two must team up to thwart Loveless' plans.",
    },
    {
      path: "./movie_3.jpg",
      original_title: "The Amazing Spider-Man",
      overview:
        "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleSearch = async () => {
    const apiKey = "66a7f272cc1737ea798ff8d2a8923034";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      searchQuery,
    )}`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch movies.!");
      }
      const data = await res.json();
      setSearchedMovies(data.results.slice(0, 3) || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="movie-section">
      <div className="search-section">
        <h3>{section_details.title}</h3>
        <div className="search">
          <button className="search-icon" onClick={handleSearch}>
            <Search size={30} />
          </button>
          <input
            className="search-box"
            placeholder={section_details.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <div className="movie-card-section">
        {searchedMovies.length > 0 ? (
          searchedMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <p>No movies found. Try searching for something else!</p>
        )}
      </div>
      <hr />
      <div className="movie-card-section">
        {favorite_movies.map((movie) => (
          <StaticMovieCard movie={movie} key={movie.original_title} />
        ))}
      </div>
    </section>
  );
}

function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <div className="movie-card">
      <div className="image-section">
        <X className="close-btn" />
        <img
          className="card-image"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/no_image.jpg"
          }
          alt={movie.original_title || "No title available"}
        />
      </div>
      <div className="description-section">
        <h4>{movie.original_title || "No title available"}</h4>
        <p>{movie.overview || "No description available."}</p>
      </div>
    </div>
  );
}

function StaticMovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="image-section">
        <X className="close-btn" />
        <img
          className="card-image"
          src={movie.path}
          alt={movie.original_title}
        />
      </div>
      <div className="description-section">
        <h4>{movie.original_title}</h4>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
