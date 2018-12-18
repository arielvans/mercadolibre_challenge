import React, { Component } from "react";
import SearchBox from '../components/search-box';
import Results from '../components/results';
import ProductDescription from '../components/product-description';
import {
    Row,
    Col,
} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="app-main">
                    <SearchBox />
                    <Results />
                    <ProductDescription />
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
