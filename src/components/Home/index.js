import React from 'react';
import { connect } from 'react-redux'
import styles from './styles.scss';

// TO DO: Preselect based on location determined by Google Geo Api?
const BOROUGHS = ['Manhattan', 'The Bronx', 'Brooklyn', 'Queens', 'Staten Island']

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      borough: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ borough: e.target.value })
  }

  render() {
    return <form>
      <p>You are in { this.props.borough }.  What borough do you want to work in?</p>
        <div className="form-group">
          <label htmlFor="borough">What borough do you want to work in?</label>
          <select className="form-control" name="borough" value={ this.state.borough } onChange={ this.handleChange }>
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
const ConnectedSearch = connect(mapStateToProps)(Search)

function Home() {
  return (
    <section>
      <p className={styles.paragraph}>
        Welcome to the <strong>Universal React Starter-kyt</strong>.
        This starter kyt should serve as the base for an advanced,
        server-rendered React app.
      </p>
      <ConnectedSearch />
    </section>
  );
}

export default Home;
