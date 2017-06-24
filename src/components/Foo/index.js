
import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.scss';

class FooExample extends React.Component {

  static propTypes = {
    bar: PropTypes.string.isRequired
  }

  constructor() {
    super()
  }

  getBar() {
    return this.props.bar
  }

  render() {
    return <p>I am the FooExample!  My bar is { this.getBar() }.</p>
  }

}



function Foo({ routeParams }) {

  if (routeParams.date) {
    return <div>
      <p>I AM FOO 88 { routeParams.date }</p>
      <FooExample bar="wow" />
    </div>
  }

  // render the index page view
  return <div>
    <p>Foo here.</p>
  </div>
}

export default Foo;
