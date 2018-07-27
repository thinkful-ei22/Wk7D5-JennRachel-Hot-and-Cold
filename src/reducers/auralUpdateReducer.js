import {AURAL_UPDATE} from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const auralUpdateReducer = (state=initialState, action)=>{
  if(action.type === AURAL_UPDATE){
    const pluralize = state.guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${state.feedback} You've made ${state.guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (state.guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${state.guesses.reverse().join(', ')}`;
    }
      
    return Object.assign({}, state, {auralStatus});
  }
  return state;
};
