import React from 'react';
import { connect } from 'react-redux'
import styles from './styles.scss';

// TO DO: Preselect based on location determined by Google Geo Api?
const BOROUGHS = ['Manhattan', 'Bronx', 'Brooklyn', 'Queens', 'Staten Island']

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    // this.setState({ borough: e.target.value })
    this.props.dispatch({
      type: 'SET_BOROUGH',
      borough: e.target.value
    })
  }

  render() {
    return <form>
      <div className="form-group">
        <label htmlFor="borough">What borough do you want to work in?</label>
        <select className="form-control" name="borough" value={ this.props.borough } onChange={ this.handleChange }>
          <option value="">Choose one...</option>
          { BOROUGHS.map((b, i) => {
            return <option value={b} key={ `borough-${i}` }>{b}</option>
          }) }
        </select>
      </div>
    </form>
  }
}

const mapStateToProps = (state, ownProps) => {
  return { borough: state.borough }
}
export default connect(mapStateToProps)(Search)
