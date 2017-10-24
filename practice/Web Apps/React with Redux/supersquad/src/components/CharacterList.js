import React, { Component } from 'react';
import { connect } from 'react-redux'; // allow access to data stored
// import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
    render() {
        console.log('this.props', this.props);

        return (
            <div>
                <h4>Characters</h4>
                <ul className="list-group">
                    {
                        this.props.characters.map(character => {
                            return (
                                <li key={character.id} className="list-group-item">
                                    <div className="list-item">{character.name}</div>
                                    <div
                                        className="list-item"
                                        onClick={() => this.props.addCharacterById(character.id)}
                                    >
                                        +
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters // return an object named characters
    };
}

// A clear version of the export statement below:
// 
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ addCharacterById }, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps )(CharacterList);

export default connect(mapStateToProps, { addCharacterById })(CharacterList);