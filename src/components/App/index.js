import React, { PropTypes } from 'react';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import styles from './styles.scss';

import Nav from '../Nav'

import baseReducer from '../../reducers/base'

function App({ children, borough }) {
  console.log('what is borough?', borough);
  return (
    <div className="container">
      <h1 className={ `${styles.title} ${styles.green}` }>Alright</h1>
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
  borough: ''
}
const ConnectedApp = connect(mapStateToProps)(App)
const projectStore = createStore(baseReducer(initialProjectState))
const StoreProvider = (props) => {
  return <Provider store={ projectStore }>
    <ConnectedApp {...props}/>
  </Provider>
}


export default StoreProvider;
