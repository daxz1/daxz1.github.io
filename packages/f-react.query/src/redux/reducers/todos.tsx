import { ADD_TODO, GET_TODO } from '../actionTypes';

const initialState = {
  items: [],
}

export default function( state = initialState, action:any) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        items: [
          ...state.items, ...action.payload.items
        ]
      }
    }
    case GET_TODO: {
      return {
        items: [
          ...state.items, ...action.payload.items
        ]
      }
    }
    default: {
      return state;
    }
  }
}