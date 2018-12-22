import React, { Component } from "react";
import SearchBox from '../components/search-box';
import Results from '../components/results';

class Home extends Component {
    state = { currentSearch: [] }

    render() {
        return (
            <React.Fragment>
                <div className="app-main">
                    <SearchBox search={this.props.location.search} history={this.props.history} />
                    <Results search={this.props.location.search} history={this.props.history}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
