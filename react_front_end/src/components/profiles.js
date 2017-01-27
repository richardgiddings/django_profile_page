import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProfiles } from '../actions/index';

class Profiles extends Component {

    constructor(props) {
        super(props);
        this.props.fetchProfiles();   
    }

    renderResults(profileData) {

        return (
            profileData.map(function(row, i) {
                return (
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <img className="img-rounded" src={row.photo} alt={row.name} />
                            <div className="caption text-center">
                                <h3>{row.name}</h3>
                                <p>{row.bio}</p>
                            </div>
                        </div>
                    </div>
                );
            })
        );
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 page-header text-center">
                        <h1>Profile Page</h1>
                    </div>
                </div>
                <div className="row">
                    {this.props.results.length > 0 ? this.props.results.map(this.renderResults) : null}
                </div>
            </div>
        );
    }
}

// Need to map the fetchProfiles action creator to the dispatch method
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchProfiles}, dispatch);
}

// as the name of the function suggests the state from the reducer
// needs to be mapped to the props on this page
function mapStateToProps({ results }) {
    return { results };
}

// Connect the React component Profiles to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Profiles);