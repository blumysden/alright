import React, { PropTypes } from 'react';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import styles from './styles.scss';

import Nav from '../Nav'

import baseReducer from '../../reducers/base'


function App({ children }) {

  return (
    <div>
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

export default App;
