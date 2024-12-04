function MovieCard({movie}) {

    function handleLike(id) {
        console.log(`like clicked for movie with id: ${id}`);
    }

  return <> 
  <div>
  
     <div className="movie-card">
        <div className="movie-poster"> 
        <img src={movie.url} alt={movie.title} />
        </div>

     </div>
     
       <div className="movie-overlay"> 
          <button className="movie-button" onClick={() => handleLike(movie.id)}>favorite-btn</button>
          ❤️
       </div>
       <div className="movie-title">
        <h3> {movie.title} </h3>
        <p> {movie.release} </p>
       </div>
  
  </div>
  </>
}

export default MovieCard