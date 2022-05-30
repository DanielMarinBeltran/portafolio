import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR
} from '../types/index';

const initialState = {
  moviesSearch:[],
};

export default function authReducer(state = initialState, action) {
  switch(action.type) {
      case GET_MOVIES_SUCCESS:
          return {
              ...state,
              moviesSearch: action.payload
          };
      case GET_MOVIES_ERROR:
          return {
              ...state,
              error: action.payload.error,
              moviesSearch: []
          };
      default:
          return state;
  }
}
