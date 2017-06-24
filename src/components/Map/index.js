import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './styles.scss';

// TO DO: Preselect based on location determined by Google Geo Api?
class Map extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (window.MAPS_READY) {
      console.log('I CAN HAZ MAPS');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.updatedAgencies != this.props.updatedAgencies) {
      this.renderMap()
    }
  }

  renderMap() {
    let { agencies }  = this.props
    if (agencies.length === 0) {
      return false;
    }

    var map = new google.maps.Map(ReactDOM.findDOMNode(this.mapContainer), {
      center: { lng: agencies[0].lng, lat: agencies[0].lat },
      zoom: 12
    });

    this.props.agencies.forEach((a) => {
      let { lng, lat } = a
      new google.maps.Marker({
        position: { lng, lat },
        map: map
      });
    })
  }

  render() {
    if (!this.props.borough) {
      return <div></div>
    } else {
      return <div className={ styles.map } ref={ (elem) => this.mapContainer = elem }></div>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...state }
}
export default connect(mapStateToProps)(Map)
