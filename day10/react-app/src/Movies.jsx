import movies from "./movies";
import "./Movies.css"
const Movies = () => {
  return (
    <div className="movie-list">
      { movies.map((movies)=>
    (
        <div key={movies.id} className="movie">
            <img src={movies.image} className="movie-img"/>
            <h1>Title:{movies.title}</h1>
            <h2>language:{movies.language}</h2>
            <h2>cost :{movies.cost}</h2>
            </div>
    ))}
    </div>
  )
};

export default Movies;