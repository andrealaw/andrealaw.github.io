import characters_json from '../data/characters.json'; // Import store
import { ADD_CHARACTER } from '../actions'; // Import action with {} to match the exact action name because it's not the default export

function characters(state = characters_json, action) {
    switch(action.type) {
        case ADD_CHARACTER:
            let characters = state.filter(item => item.id !== action.id);
            return characters;
        default:
            return state;
    }
}

export default characters;