import React from 'react';
import { connect } from 'react-redux'
import styles from './styles.scss';

import Search from '../Search';
import Results from '../Results';
import Map from '../Map';

function Home() {
  return (
    <div className="row">
      <section className="col-sm-12 col-md-6 col-md-offset-3">
        <p className={styles.paragraph}>
          Welcome to the <strong>Universal React Starter-kyt</strong>.
          This starter kyt should serve as the base for an advanced,
          server-rendered React app.
        </p>
        <Search />
        <Results />
        <Map />
      </section>
    </div>
  );
}

export default Home;
