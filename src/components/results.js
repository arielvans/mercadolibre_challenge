import React, { Component } from "react"
import {
	Row,
	Col,
	Card,
	CardBody
} from 'reactstrap';
// import shippingIcon from '../assets/ic_shipping.png';
import eventshub from '../utils/eventshub';


class Results extends Component {
	state = {
		productsArray: [],
		productId: null,
		selectedItem: null
	};

	onCurrentSearchChange = null;

	constructor(props) {
		super(props)
		this.props = props;
		this.onCurrentSearchChange = null;
	}

	componentDidMount() {
		this.onCurrentSearchChange = eventshub.onCurrentSearchChange().subscribe(value => {
			this.setState({ productsArray: value });
		});
	}

	componentWillUnmount() {
		this.onCurrentSearchChange.unsubscribe();
		this.onCurrentSearchChange = [];
	}

	accessProductDescription(item) {
		console.log("item: ", item)
		eventshub.setCurrentProductDescription(item);
		this.props.history.push(`/items/` + item.id);
		this.setState({ selectedItem: item })
	}

	render() {
		return (
			<React.Fragment>
				<Row>
					<Col md={{ size: 8, offset: 2 }}>
						<div className="text-left breadcrumbs">
							<p>Electrónica, audio y video ></p>
						</div>
						<Card md="12">
							<CardBody>
								<Row>
									{this.state.productsArray.map((item, i) => {
										return (
											<Col md={12}>
												<div className="d-flex" onClick={() => this.accessProductDescription(item)}>
													<div className="p-3">
														<img src={item.thumbnail} alt="THUMBNAIL_PRODUCT" />
													</div>
													<div className="p-3">
														<h3>${item.price}</h3>
														<p>{item.title}</p>
													</div>
													<div className="p-3 ml-auto">{item.address.city_name}</div>
												</div>
											</Col>
										)
									})}
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}

export default Results;
