import axios from "axios";
import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR
} from '../types/index'

export function getMoviesAction(prop) {
  return async (dispatch) =>{
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${prop}`
      );
      dispatch(moviesGetSuccess(response.data.results))
    }catch(error){
      dispatch(moviesGetError(error.data))
    }
  }
};

const moviesGetSuccess = (data) => ({
	type: GET_MOVIES_SUCCESS,
	payload: data
});

const moviesGetError = (error) => ({
	type: GET_MOVIES_ERROR,
	payload: error
});