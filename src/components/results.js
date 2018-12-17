import React, { Component } from "react"
import {
    Row,
    Col,
    Card,
    CardBody
} from 'reactstrap';
import shippingIcon from '../assets/ic_shipping.png'

class Results extends Component {
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
                        <Col md={12}>
                            <div className="text-left breadcrumbs">
                                <p>Electrónica, audio y video ></p>
                            </div>
                            <Card md="12">
                                <CardBody>
                                    <Row>
                                        <Col md={2}>
                                            <img src="https://www.placehold.it/150x150" alt=""/>
                                        </Col>
                                        <Col md={8}>
                                            <div className="result-description text-left">
                                                <div className="price-shipping">
                                                    <h3>$1980</h3>
                                                    <img style={{width: '20px', height: '20px'}} src={shippingIcon} alt="SHIPPING_ICON"/>
                                                </div>
                                                <p>Apple Ipod Touch</p>
                                            </div>
                                        </Col>
                                        <Col md={2}>
                                            <p>Capital Federal</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </React.Fragment>
        );
    }
}

export default Results;
