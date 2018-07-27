
export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = (newGame) => ({
  type: RESTART_GAME, newGame
});


export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = (guess) => ({
  type: SUBMIT_GUESS, guess
});

export const AURAL_UPDATE = 'AURAL_UPDATE';
export const auralUpdate = (feedback) => ({
  type: AURAL_UPDATE, feedback
});
