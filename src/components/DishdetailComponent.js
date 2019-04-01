import React from 'react'
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem
} from 'reactstrap'
import { Link } from 'react-router-dom'

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
