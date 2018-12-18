import React, { Component } from "react"
import {
    Row,
    Col,
    Card,
    Button,
    CardBody
} from 'reactstrap';


class ProductDescription extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            init: 0
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <div className="text-left breadcrumbs">
                            <p>Electrónica, audio y video ></p>
                        </div>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col className="col-md-8">
                                        <img src="https://www.placehold.it/150x150" alt="PRODUCT_HERO" />
                                        <h3>Descripcion del producto</h3>
                                        <p>
                                            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
                                            en demostraciones de tipografías o de borradores de diseño para
                                            probar el diseño visual antes de insertar el texto final.
                                            Lorem ipsum es el texto que se usa habitualmente en diseño
                                            gráfico en demostraciones de tipografías o de borradores de
                                            diseño para probar el diseño visual antes de insertar el texto final.
                                            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
                                            demostraciones de tipografías o de borradores de diseño para probar el
                                            diseño visual antes de insertar el texto final.Lorem ipsum es el texto
                                            que se usa habitualmente en diseño gráfico en demostraciones de tipografías
                                            o de borradores de diseño para probar el diseño visual antes de insertar el
                                            texto final.
                                            </p>
                                    </Col>
                                    <Col className="col-md-4">
                                        <p>Nuevo - 234 vendidos</p>
                                        <h3>$1980</h3>
                                        <p>Apple Ipod Touch</p>
                                        <Button color="primary">Comprar</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default ProductDescription;
