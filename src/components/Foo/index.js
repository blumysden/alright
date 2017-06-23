
import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.scss';

class FooExample extends React.Component {

  constructor() {
    super()
  }

  getBar() {
    return this.props.bar
  }

  render() {
    return <p>I am the FooExample!  My bar is { this.getBar() }.  Bar is also { this.props.bar }!</p>
  }

}

FooExample.propTypes = {
  bar: PropTypes.string.isRequired
}


function Foo({ routeParams }) {

  if (routeParams.date) {
    return <div>
      <p>I AM FOO { routeParams.date }</p>
    </div>
  }

  // render the index page view
  return <div>
    <p>Foo here.</p>
  </div>
}

export default Foo;
