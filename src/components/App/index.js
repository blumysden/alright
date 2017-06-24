import React, { PropTypes } from 'react';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import styles from './styles.scss';

// import Nav from '../Nav'

import { projectStore, baseReducer } from '../../reducers/base'

function App({ children, borough }) {
  return (
    <div>
      <div className={styles.titleBlock}>
        <div className="row">
          <h1 className={ `${styles.title} col-md-12` }>JobHuntrs</h1>
        </div>
      </div>
      {/* <Nav /> */}
      <div className={`${styles.content} container`}>
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
