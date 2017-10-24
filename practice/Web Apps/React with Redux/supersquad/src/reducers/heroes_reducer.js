import { ADD_CHARACTER } from '../actions'; // Import action with {} to match the exact action name because it's not the default export
import { createCharacter } from './helpers';

function heroes(state = [], action) {
    switch(action.type) {
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)];
            return heroes;
        default:
            return state;
    }
}

export default heroes;