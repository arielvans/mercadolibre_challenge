import React, { Component } from "react";
import SearchBox from '../components/search-box';

class Home extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            currentSearch: []
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="app-main">
                    <SearchBox props={this.props} search={this.props.location.search} history={this.props.history}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
