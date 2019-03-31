import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

export default class DishDetail extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedDish: null
		}
	}

	renderComments(dish) {
		return (
			<div>
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

	render() {
		const dish = this.props.dish

		const dishDetail = () => {
			if (dish)
				return (
					<div className="row ">
						<div className="col-12 col-md-5 m-1">
							<Card>
								<CardImg top src={dish.image} alt={dish.name} />
								<CardBody>
									<CardTitle>{dish.name}</CardTitle>
									<CardText>{dish.description}</CardText>
								</CardBody>
							</Card>
						</div>
						<div className="col-12 col-md-5 m-1">{this.renderComments(dish)}</div>
					</div>
				)
			else return <div />
		}

		return <div className="container">{dishDetail()}</div>
	}
}
