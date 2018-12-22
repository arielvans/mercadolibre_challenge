import React, { Component } from "react"
import {
	Row,
	Col,
	Card,
	Button,
	CardBody
} from 'reactstrap';
import eventshub from '../utils/eventshub';

class ProductDescription extends Component {

	state = {
		productObject: {}
	}

	componentDidMount() {
		this.onCurrentProductDescriptionChange = eventshub.onCurrentArticleDescriptionChange()
			.subscribe(value => {
				this.setState({ productObject: value });
				setTimeout(() => { console.log("product object: ", this.state.productObject) })

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
							<p>Electrónica, audio y video ></p>
						</div>
						<Card>
							<CardBody>
								<Row>
									<Col className="col-md-8">
										<img className="product-description-image" src={this.state.productObject.thumbnail} alt="PRODUCT_HERO" />
										<h3>Descripción del producto</h3>
										<p>
											{this.state.productObject.id}
										</p>
									</Col>
									<Col className="col-md-4">
										<p>Nuevo - {this.state.productObject.sold_quantity} vendidos</p>
										<h3>${this.state.productObject.price}</h3>
										<p>{this.state.productObject.title}</p>
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
