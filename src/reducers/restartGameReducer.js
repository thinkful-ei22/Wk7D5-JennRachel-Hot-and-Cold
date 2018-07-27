import {RESTART_GAME} from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const restartGameReducer = (state=initialState, action) => {
  if (action.type === RESTART_GAME) {
    return Object.assign({}, state);
  }
  return state;
};