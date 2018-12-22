import React, { Component } from "react";
import SearchBox from '../components/search-box';
import ProductDescription from '../components/product-description';

class ArticleDescription extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="app-main">
                    <SearchBox />
                    <ProductDescription />
                </div>
            </React.Fragment>
        );
    }
}

export default ArticleDescription;