import React from 'react'
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Row,
	Label,
	Col
} from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'

import { Link } from 'react-router-dom'

const required = val => val && val.length
const maxLength = len => val => !val || val.length <= len
const minLength = len => val => val && val.length >= len
const isNumber = val => !isNaN(Number(val))
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

class CommentForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isModalOpen: false
		}
	}
	toggleModal = () => {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		})
	}
	handleSubmit = values => {
		console.log('Current State is: ' + JSON.stringify(values))
		alert('Current State is: ' + JSON.stringify(values))
		// event.preventDefault();
	}

	render() {
		const ModalWindow = () => {
			return (
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>

					<ModalBody>
						<LocalForm onSubmit={values => this.handleSubmit(values)}>
							<Row className="form-group">
								<Col>
									<Label htmlFor="rating">Rating</Label>
									<Control.select model=".rating" name="rating" className="form-control">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
								</Col>
							</Row>

							<Row className="form-group">
								<Col>
									<Label htmlFor="yourname">Your Name</Label>
									<Control.text
										model=".yourname"
										id="yourname"
										name="yourname"
										placeholder="Your Name"
										className="form-control"
										validators={{
											required,
											minLength: minLength(3),
											maxLength: maxLength(15)
										}}
									/>
									<Errors
										className="text-danger"
										model=".yourname"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Must be greater then 2 characters',
											maxLength: 'Must be 15 characters or less'
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Col>
									<Label htmlFor="comment">Comment</Label>
									<Control.textarea
										model=".comment"
										id="comment"
										name="comment"
										rows="6"
										className="form-control"
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Col>
									<Button type="submit" color="primary">
										Submit
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			)
		}

		return (
			<React.Fragment>
				<Button type="submit" outline onClick={this.toggleModal}>
					<i className="fa fa-pencil" /> Submit Comment
				</Button>
				<ModalWindow />
			</React.Fragment>
		)
	}
}

function RenderDish({ dish }) {
	return (
		<div>
			<Card>
				<CardImg top src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	)
}

function RenderComments({ comments }) {
	return (
		<div>
			<h4> Comments</h4>
			<ul className="list-unstyled">
				{comments.map((item, index) => {
					return (
						<li key={index}>
							<p> {item.comment} </p>
							<p>
								-- {item.author},{new Date(item.date).toString().replace(/GMT.*/g, '')}
							</p>
						</li>
					)
				})}
			</ul>
			<CommentForm />
		</div>
	)
}

const DishDetail = props => {
	const dish = props.dish
	if (dish)
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/menu">Menu</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={props.dish} />
					</div>
					<div className="col-12 col-md-5 m-1">
						<RenderComments comments={props.comments} />
					</div>
				</div>
			</div>
		)
	else return <div />
}

export default DishDetail
