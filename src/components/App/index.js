
import React, { PropTypes } from 'react';
import styles from './styles.scss';

import Nav from '../Nav'

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
