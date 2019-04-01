import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

function RenderDish({ dish }) {
	return (
		<div className="col-12 col-md-5 m-1">
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

function RenderComments({ dish }) {
	return (
		<div className="col-12 col-md-5 m-1">
			<h4> Comments</h4>
			<ul className="list-unstyled">
				{dish.comments.map((item, index) => {
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
					<RenderDish dish={dish} />
					<RenderComments dish={dish} />
				</div>
			</div>
		)
	else return <div />
}

export default DishDetail
