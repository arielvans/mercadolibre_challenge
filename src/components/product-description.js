import React, { Component } from "react"
import {
  Row,
  Col,
  Card,
  Button,
  CardBody
} from 'reactstrap';
import eventshub from '../utils/eventshub';
import webService from '../utils/webservice';

class ProductDescription extends Component {

  state = {
    productObject: {}
  }

  searchArticleDescriptionOnInit() {
    let searchId = this.props.props.location.pathname
      .substr(this.props.props.location.pathname.lastIndexOf('/') + 1);
    webService.searchArticleById(searchId).then(response => {
      this.setState({ productObject: response });
    })
  }

  componentDidMount() {
    this.searchArticleDescriptionOnInit();
    this.onCurrentProductDescriptionChange = eventshub.onCurrentArticleDescriptionChange()
      .subscribe(response => {
        this.setState({ productObject: response });
      });
  }

  componentWillUnmount() {
    this.onCurrentProductDescriptionChange.unsubscribe();
    this.onCurrentProductDescriptionChange = [];
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <div className="text-left breadcrumbs">
              {/* TODO: Resolve API Search missing content */}
              <p>Electrónica, audio y video > Producto</p>
            </div>
            <Card className="card-content">
              <CardBody>
                <Row>
                  <Col className="col-md-8">
                    <img className="product-description-image" src={this.state.productObject.thumbnail} alt="PRODUCT_HERO" />
                    <h3>Descripción del producto</h3>
                    <p>
                      {this.state.productObject.id}
                    </p>
                  </Col>
                  <Col className="col-md-4 data-container">
                    <p>{this.state.productObject.condition === "new" ? "Nuevo" : "Usado"} - {this.state.productObject.sold_quantity} vendidos</p>
                    <h3>{this.state.productObject.title}</h3>
                    <h2>${this.state.productObject.price}</h2>
                    <Button className="buy-button" color="primary">Comprar</Button>
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
