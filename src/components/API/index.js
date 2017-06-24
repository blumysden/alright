//React Imports
import React, {Component} from 'react';
import $ from 'jquery';


class API extends React.Component {
	constructor(props) {
	super(props);
	this.handleKeyPress = this.handleKeyPress.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.apiSearch = this.apiSearch.bind(this);

	}
	handleKeyPress(event) {
		if (event.key === 'Enter') {
			this.apiSearch()
		}
	}
	handleChange (event) {
		const inputV = event.target.value
		var input = inputV.charAt(0).toUpperCase() + inputV.substring(1).toLowerCase()
		if (input) {
		this.setState({value: input})
		}
	}
	apiSearch () {
		const that = this
		const featured = [];

		$.ajax({
			url: 'https://data.cityofnewyork.us/resource/v76c-dw6g.json?location_1_city=' + that.state.value,
			success: function (data) {
				setTimeout (function(){

					for (var i = 0; i < data.length; i++) {
					let agency = data[i].agency
					let order = i
					let age_grade = data[i].grade_level_age_group
					let address = data[i].location_1_location
					let city = data[i].borough_community
					let zip = data[i].location_1_zip
					let phone = data[i].contact_number

					let dataObject = {
						key: order,
						name: agency,
						location: address + ',\n' + city + ', NY ' + zip,
						phone: phone,
						age: age_grade
					}
						featured.push(dataObject)
					}
				}, 1000)
			},
			error: function (jqXHR) {
				console.log(jqXHR)
			}
		})
		that.setState({featured: featured}, function () {
		    console.log('FEATURED>>>>>>:',that.state.featured);
		})
	}
	render () {

			return (
				<div>
					<div className='inputRow'>
						<input
							id="search"
							onKeyPress={this.handleKeyPress}
							onChange={this.handleChange}
							type="text"></input>
						<button
							role="button"
							className="searchBox"
							onClick={this.apiSearch}>
								<i className="material-icons">search</i>
						</button>
					</div>

				</div>
			)
	}
}

export default API
