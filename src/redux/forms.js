import * as ActionTypes from './ActionTypes'

export const InitialFeedback = {
	firstname: '',
	lastname: '',
	telnum: '',
	email: '',
	agree: false,
	contactType: 'Tel.',
	message: ''
}

export const FeedBack = (state = { errMess: null, feedback: [] }, action) => {
	switch (action.type) {
		case ActionTypes.COMMENTS_FAILED:
			return { ...state, errMess: action.payload }

		case ActionTypes.ADD_COMMENT:
			var feedback = action.payload
			return { ...state, feedback: state.feedback.concat(feedback) }

		default:
			return state
	}
}
