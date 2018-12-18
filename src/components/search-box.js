import React, { Component } from "react";
import webservice from '../utils/webservice';
import axios from '../utils/axios';

import {
    Row,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
    Form
} from 'reactstrap';
import logoImg from '../assets/Logo_ML.png';
import searchIcon from '../assets/ic_Search.png';


class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            searchValue: "",
            currentSearchArray: null
        }
    }

    onSearchHandle = (event) => {
        event.preventDefault();
    }
    
    searchArticle = (searchInput) => {
        return axios.post("/search?q=" + searchInput, { headers: this.getHeaders() }).then(response => response.data);
      }

    onSearchHandleChange = (value) => {
        this.setState({ searchValue: value});
        setTimeout(() => {console.log(this.state)})
        webservice.searchArticle(value).then(response => {
            console.log("response: ", response.results)
            this.setState({currentSearchArray: response.results});
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="app-header">
                    <Row>
                        <Col md={{ size: 1, offset: 2 }}>
                            <img src={logoImg} alt="LOGO" />
                        </Col>
                        <Col md={{ size: 7, offset: 0 }}>
                            <Form noValidate onSubmit={this.onSearchHandle.bind(this)}>
                                <InputGroup>
                                    <Input 
                                        className="search-input" 
                                        placeholder="Nunca dejes de buscar" 
                                        value={this.state.searchValue.value}
                                        onChange={event => this.onSearchHandleChange(event.target.value)}
                                    />
                                    <InputGroupAddon addonType="append">
                                        <Button className="search-button">
                                            <img src={searchIcon} alt="SEARCH_ICON" />
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </React.Fragment >
        );
    }
}

export default SearchBox;
