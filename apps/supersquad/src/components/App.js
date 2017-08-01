/**
 * Create a class that will return the App JSX component
 */
import React, { Component } from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css';

/**
 * Extend the Component to ensure all custom functions
 * from the Component class are inherited
 */
class App extends Component {
    render() {
        // Return the JSX
        return (
            <div className="App">
                <h2>SuperSquad</h2>
                <CharacterList />
            </div>
        )
    }
}

/**
 * Export to be used in the root index.js file
 */
export default App;