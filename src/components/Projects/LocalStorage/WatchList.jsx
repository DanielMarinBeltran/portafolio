import React, {useContext} from 'react'
import { GlobalContext } from "../../../../src/contexts/GlobalState";
import MovieCard from './MovieCard';

function WatchList() {
  const {watchList} = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container-local">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchList.length} {watchList.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watchList.length > 0 ? (
          <div className="movie-grid">
          {watchList.map(movie => {
            return(
              <MovieCard movie={movie} type='watchlist'/>
            )
          })}
          </div>
        ) : (
          <h2 className="no-movies">No movies in you list, add some!!</h2>
        )}
      </div>
    </div>
  )
}

export default WatchList