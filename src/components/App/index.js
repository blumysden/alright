
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';

import S3 from '../../services/s3'

function App({ children, foo }) {

  const myS3 = new S3()
  let files = myS3.getMyFiles()

  return (
    <div>
      <h1 className={styles.title}>Alright</h1>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/tools">Tools</Link>
        </li>
        { files.map((file) => {
          return <li className={styles.navItem}>
            <Link className={styles.link} to={`/foo/${file}`}>{ file }</Link>
          </li>
        }) }
      </ul>
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
