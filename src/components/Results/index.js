import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './styles.scss';
import $ from 'jquery'

// TO DO: Preselect based on location determined by Google Geo Api?
class Results extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.borough != this.props.borough) {
      this.fetchInternships()
    }
  }

  fetchInternships() {
    $.ajax({
			url: 'https://data.cityofnewyork.us/resource/v76c-dw6g.json?location_1_city=' + this.props.borough,
			success: (data) => {

        let agencies = data.map((obj, i) => {

          let agency = obj.agency
          let order = i
          let age_grade = obj.grade_level_age_group
          let address = obj.location_1_location
          let city = obj.borough_community
          let zip = obj.location_1_zip
          let phone = obj.contact_number
          let marker = obj.location_1.coordinates

          return {
            key: order,
            name: agency,
            location: address + ',\n' + city + ', NY ' + zip,
            phone: phone,
            age: age_grade,
            lng: Math.round(marker[0]*1000)/1000,
            lat: Math.round(marker[1]*1000)/1000
          }
        })
        this.props.dispatch({
          type: 'SET_AGENCIES',
          agencies
        })
      },
			error: function (jqXHR) {
				console.log(jqXHR)
			}
		})
  }

  render() {
    if (!this.props.borough) {
      return <div></div>
    } else {
      return <div>
        <p>ALL RIGHT!  I LOVE { this.props.borough }</p>
        <p>I found { this.props.agencies.length } agencies for you!</p>
        <table className={ styles.table }>
          <thead>
            <tr>
              <th>No.</th>
              <th>Agency</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            { this.props.agencies.map((a, i) => {
              return <tr key={ `agency-${i}`}>

                <td>{i+1}</td>
                <td><a href={ `https://www.google.com/search?q=${ encodeURIComponent(a.name) }` }>{a.name}</a></td>
                <td>{a.location}</td>
                <td>{a.phone}</td>
              </tr>
            }) }
          </tbody>
        </table>
      </div>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...state }
}
export default connect(mapStateToProps)(Results)
