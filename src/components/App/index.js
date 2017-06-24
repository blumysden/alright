import React, { PropTypes } from 'react';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import styles from './styles.scss';

import Nav from '../Nav'

import { projectStore, baseReducer } from '../../reducers/base'

function App({ children, borough }) {
  return (
    <div className="container">
      <div className="row">
        <h1 className={ `${styles.title} col-sm-12` }>Alright</h1>
      </div>
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
