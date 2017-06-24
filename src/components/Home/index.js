import React from 'react';
import { connect } from 'react-redux'
import styles from './styles.scss';

import Search from '../Search';
import Results from '../Results';
import Map from '../Map';

function Home() {
  return (
    <div className="row">
      <div className={styles.results}>
      <section className="col-sm-12 col-md-6 col-md-offset-3">
        <p className={styles.paragraph}>
          Welcome to the <strong>Universal React Starter-kyt</strong>.
          This starter kyt should serve as the base for an advanced,
          server-rendered React app.
        </p>
        <Search />
        <Map />
      </section>
      <section className="col-md-10 col-md-offset-1">
        <Results />
      </section>
      </div>
    </div>
  );
}

export default Home;
