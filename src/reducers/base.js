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

      // case 'ADD_ENTITY':
      //   entitiesById = addWithChildren(entity, entitiesById)
      //   parent.entities.splice(position, 0, entity.id)
      //   entitiesById[parentId] = parent
      //   return {...state, entitiesById }
    }

    return state
  }

}

export default baseReducer;
