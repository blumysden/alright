import React, { PropTypes } from 'react';
import { createStore } from 'redux'

const localStorage = (typeof window == 'undefined') ? false : window.localStorage

if (typeof window == 'undefined') {
  let window = {}
}

const initialProjectState = {
  borough: '',
  agencies: [],
  myAgencies: []
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
        { myAgencies } = state

    if (!myAgencies) {
      myAgencies = []
    }

    switch (action.type) {
      case 'RESET_STORE':
        return action.store

      case 'SET_BOROUGH':
        return saveState(Object.assign({}, state, { borough: action.borough }))

      case 'SET_AGENCIES':
        return saveState(Object.assign({}, state, {
          updatedAgencies: Date.parse(new Date()),
          agencies: action.agencies
        }))

      case 'SAVE_AGENCY':
        if (myAgencies.indexOf(action.name) == -1) {
          myAgencies.push(action.name)
        }
        return saveState({ ...state, myAgencies })

      case 'REMOVE_AGENCY':
        let savedAt = myAgencies.indexOf(action.name)
        if (savedAt != -1) {
          myAgencies.splice(savedAt, 1)
        }
        return saveState({ ...state, myAgencies })
    }

    return state
  }

}



export const projectStore = createStore(baseReducer(initialProjectState))
