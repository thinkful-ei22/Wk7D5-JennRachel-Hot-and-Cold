import {SUBMIT_GUESS} from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const submitGuessReducer =(state=initialState, action) => {
  const guess = parseInt(action.guess, 10);
  if(action.type === SUBMIT_GUESS){
    if(isNaN(guess)){
      return Object.assign({}, state, {
        feedback:'Please enter a valid number',
        guesses:[...state.guesses, guess]});
    }
    const difference = Math.abs(guess-state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    return Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, guess]
    });
  }
  return state;
};