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

          return {
            key: order,
            name: agency,
            location: address + ',\n' + city + ', NY ' + zip,
            phone: phone,
            age: age_grade
          }
        })
        console.log(agencies);
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
        <table>
          <tbody>
            { this.props.agencies.map((a, i) => {
              return <tr key={ `agency-${i}`}>
                <td>{a.name}</td>
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
  return { borough: state.borough, agencies: state.agencies }
}
export default connect(mapStateToProps)(Results)
