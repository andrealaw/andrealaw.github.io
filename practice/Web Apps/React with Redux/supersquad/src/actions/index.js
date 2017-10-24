/**
 * Root file of actions
 * 
 * The actions file is a series of functions
 * 
 * An action: 
 * - modifies reducers
 * - is an object with a type variable
 */

// Create an action type
export const ADD_CHARACTER = 'ADD_CHARACTER';
// Create an action creator
export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTER,
        id // Same as id: id
    }
    return action;
}