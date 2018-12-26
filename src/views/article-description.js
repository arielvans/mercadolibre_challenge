import React, { Component } from "react";
import SearchBox from '../components/search-box';
import ProductDescription from '../components/product-description';

class ArticleDescription extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="app-main">
                    <div className="content">
                        <SearchBox history={this.props.history} />
                        <ProductDescription props={this.props} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ArticleDescription;
