import {combineReducers } from 'redux';
import {submitGuessReducer} from './submitGuessReducer';
import {restartGameReducer} from './restartGameReducer';
import {auralUpdateReducer} from './auralUpdateReducer';

const gameReducer = combineReducers({
  submitGuessReducer, restartGameReducer, auralUpdateReducer
});

export default gameReducer;