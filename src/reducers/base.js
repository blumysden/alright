import React, { PropTypes } from 'react';
import { createStore } from 'redux'

const localStorage = (typeof window == 'undefined') ? false : window.localStorage

if (typeof window == 'undefined') {
  let window = {}
}

const initialProjectState = {
  borough: '',
  agencies: []
}

const saveState = (state) => {
  if (localStorage) {
    localStorage.setItem('alright', JSON.stringify(state))
  }
  return state
}

export const baseReducer = (initialState) => {

  return (state=initialState, action) => {
    // const getById = (id) => {
    //   return { ...state.entitiesById[id] }
    // }

    let { id, key } = action,
        newState = state

    switch (action.type) {
      case 'RESET_STORE':
        return action.store

      case 'SET_BOROUGH':
        let borough = action.borough
        return saveState(Object.assign({}, state, { borough }))

      case 'SET_AGENCIES':
        let agencies = action.agencies
        return saveState(Object.assign({}, state, {
          updatedAgencies: Date.parse(new Date()),
          agencies
        }))
    }

    return newState
  }

}



export const projectStore = createStore(baseReducer(initialProjectState))
