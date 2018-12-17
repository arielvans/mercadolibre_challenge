import React, { Component } from "react"
import {
    Row,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import logoImg from '../assets/Logo_ML.png';
import searchIcon from '../assets/ic_Search.png';


class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
        }
        
    }

    render() {
        return (
            <React.Fragment>
                <Col md={10}>
                    <Row>
                        <Col md={1}>
                            <img src={logoImg} alt="LOGO" />
                        </Col>
                        <Col md={10}>
                            <InputGroup>
                                <Input placeholder="Nunca dejes de buscar" style={{border: 0}} />
                                <InputGroupAddon addonType="append">
                                    <Button style={{backgroundColor: '#EEEEEE', border: 0}}>
                                        <img src={searchIcon} alt="SEARCH_ICON" />
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
            </React.Fragment>
        );
    }
}

export default SearchBox;
