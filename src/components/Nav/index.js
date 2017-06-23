
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';

import S3 from '../../services/s3'

function Nav() {

  const myS3 = new S3()
  let files = myS3.getMyFiles()

  return (
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
  );
}

export default Nav;
