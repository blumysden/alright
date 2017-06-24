import React, { PropTypes } from 'react';
import { createStore } from 'redux'

const baseReducer = (initialState) => {

  return (state=initialState, action) => {
    // const getById = (id) => {
    //   return { ...state.entitiesById[id] }
    // }

    let { id, key } = action

    switch (action.type) {
      case 'RESET_STORE':
        return action.store

      case 'SET_BOROUGH':
        let borough = action.borough
        return Object.assign({}, state, { borough })
    }

    return state
  }

}

export default baseReducer;
