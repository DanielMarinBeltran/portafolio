import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesAction } from '../../../redux/actions/getMoviesAction.js'
import ResultCard from './ResultCard.jsx';

function Add() {

  const dispatch = useDispatch();

	const [ query, setQuery ] = useState('');

  useEffect(()=>{
    if (query.length !== 0){
      dispatch(getMoviesAction(query));
    }
    // eslint-disable-next-line
  },[query]);

  const { moviesSearch } = useSelector((state) => state.movies);
  console.log(moviesSearch);

	return (
		<div className="add-page">
			<div className="container-local">
				<div className="add-content">
					<div className="input-wrapper">
						<input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie" />
					</div>
          { moviesSearch.length > 0 && (
            <ul className="results">
              { moviesSearch.map(movie =>(
                <li key={movie.id}>
                  <ResultCard movie={movie}/>
                </li>
              )) }
            </ul>
          ) }
				</div>
			</div>
		</div>
	);
}

export default Add;
