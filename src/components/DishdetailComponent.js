import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

export default class DishDetail extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedDish: null
		}
	}

	onDishSelect(dish) {
		this.setState({ selectedDish: dish })
	}

	renderComments(dish) {
		if (dish != null) {
			return (
				<div>
					<h4> Comments</h4>
					<ul className="list-unstyled">
						{dish.comments.map((item, index) => {
							return (
								<li key={index}>
									<p> {item.comment} </p>
									<p>
										-- {item.author},{' '}
										{new Date(item.date).toString().replace(/GMT.*/g, '')}
									</p>
								</li>
							)
						})}
					</ul>
				</div>
			)
		} else return <div />
	}

	render() {
		const dish = this.props.dish
		return (
			<div className="row ">
				<div className="col-12 col-md-5 m-1">
					<Card onClick={() => this.onDishSelect(dish)}>
						<CardImg top src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
				<div className="col-12 col-md-5 m-1">
					{this.renderComments(this.state.selectedDish)}
				</div>
			</div>
		)
	}
}
