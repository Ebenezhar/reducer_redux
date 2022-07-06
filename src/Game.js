import React, { useReducer } from 'react'
import GameOver from './GameOver';
import Playing from './Playing';
import Start from './Start';
import Welcome from './Welcome';
function reducer(state, action) {
    switch (action.type) {
        case 'WELCOME':
            return {
                type: 'WELCOME',
            }
            break;
        case 'START':
            return {
                type: 'START',
            }
            break;
        case 'PLAYING':
            return {
                type: 'PLAYING',
            }
            break;
        case 'GAME_OVER':
            return {
                type: 'GAME_OVER',  
            }
            break;
        default: return state;
    }

}

function Game() {
    const [state, dispatch] = useReducer(reducer, { type: 'WELCOME' });
    return (
        <>
            <button onClick={() => {dispatch({type: 'WELCOME'})}}>WELCOME</button>
            <button onClick={() => {dispatch({type: 'START'})}}>START</button>
            <button onClick={() => {dispatch({type: 'PLAYING'})}}>PLAYING</button>
            <button onClick={() => {dispatch({type: 'GAME_OVER'})}}>GAME_OVER</button>
            {
                state.type === 'WELCOME' ? <Welcome/> : null
            }
            {
                state.type === 'START' ? <Start/> : null
            }
            {
                state.type === 'PLAYING' ? <Playing/> : null
            }
             {
                state.type === 'GAME_OVER' ? <GameOver/> : null
            }
        </>
    )
}

export default Game