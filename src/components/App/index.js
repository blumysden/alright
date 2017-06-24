import React, { PropTypes } from 'react';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import styles from './styles.scss';

import Nav from '../Nav'

import { projectStore, baseReducer } from '../../reducers/base'

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {

    }
}

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (window.localStorage) {
      let myState = window.localStorage.getItem('alright')
      if (myState) {
        this.props.dispatch({
          type: 'RESET_STORE',
          store: JSON.parse(myState)
        })
      }
    }
  }

  render() {
    let { children, borough } = this.props
    return (
      <div className="container">
        <div className="row">
          <h1 className={ `${styles.title} col-sm-12` }>NYC SUMMER INTERNSHIP SEARCH</h1>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return { borough: state.borough }
}
const initialProjectState = {
  borough: '',
  internships: []
}
const ConnectedApp = connect(mapStateToProps)(App)
const StoreProvider = (props) => {
  return <Provider store={ projectStore }>
    <ConnectedApp {...props}/>
  </Provider>
}


export default StoreProvider;
