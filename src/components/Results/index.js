import React from 'react';
import { connect } from 'react-redux'
import styles from './styles.scss';
import $ from 'jquery'

// TO DO: Preselect based on location determined by Google Geo Api?
class Results extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (window.MAPS_READY) {
      console.log('I CAN HAZ MAPS');
    }
  }

  render() {
    return <div>
      <p>ALL RIGHT!  I LOVE { this.props.borough }</p>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return { borough: state.borough }
}
export default connect(mapStateToProps)(Results)
