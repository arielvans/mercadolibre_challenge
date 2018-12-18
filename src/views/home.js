import React, { Component } from "react";
import SearchBox from '../components/search-box';
import Results from '../components/results';
import ProductDescription from '../components/product-description';

class Home extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            currentSearch: null
        }
    }

    getCurrentSearch = search => {
        this.setState({currentSearch: search})
        setTimeout(() => {
            console.log("this.state: ", this.state)
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="app-main">
                    <SearchBox currentSearch={this.getCurrentSearch} />
                    <Results results={this.state.currentSearch}/>
                    <ProductDescription />
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
