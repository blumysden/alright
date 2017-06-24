import React, { PropTypes } from 'react';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import styles from './styles.scss';

import Nav from '../Nav'


const makeProjectReducer = (initialState) => {

  return (state=initialState, action) => {
    // const getById = (id) => {
    //   return { ...state.entitiesById[id] }
    // }

    let { id, key } = action

    switch (action.type) {
      case 'RESET_STORE':
        return action.store

      // case 'ADD_ENTITY':
      //   entitiesById = addWithChildren(entity, entitiesById)
      //   parent.entities.splice(position, 0, entity.id)
      //   entitiesById[parentId] = parent
      //   return {...state, entitiesById }
    }

    return state
  }

}

function App({ children }) {

  return (
    <div>
      <h1 className={styles.title}>Alright</h1>
      <Nav />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
