import { ADD_TODO, GET_TODO } from './actionTypes';

export const addTodo = (payload: any) => async (dispatch: any) => {
  try {
    const response = await fetch('http://localhost:3001/api/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        text: payload,
      }),
    });
    if (!response.ok) {
      throw new Error('Fetch Error');
    }

    return dispatch({
      type: ADD_TODO,
      payload: {
        items: [payload],
      },
    });
  } catch (e) {
    console.error('addTodo', e);
    // handle error
  }
};

export const getTodo = () => async (dispatch: any) => {
  try {
    const response = await fetch('http://localhost:3001/api/todos');
    if (!response.ok) {
      throw new Error('Fetch Error');
    }

    const payload = await response.json();
    return dispatch({
      type: GET_TODO,
      payload,
    });

  } catch (e) {
    console.error('getTodo', e);
    // handle error
  }
};