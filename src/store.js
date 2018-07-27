import {createStore} from 'redux';

import gameReducer from './reducers';

console.log(gameReducer);
export default createStore(gameReducer);
