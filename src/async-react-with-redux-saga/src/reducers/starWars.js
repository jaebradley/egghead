import {
  FETCH_STAR_WARS_SUCCESS,
} from '../types';

const starWars = (state = { people: [] }, action) => {
  switch (action.type) {
    case FETCH_STAR_WARS_SUCCESS: {
      return { people: action.data };
    }

    default: {
      return state;
    }
  }
}

export default starWars;
