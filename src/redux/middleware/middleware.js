import * as TYPE from "../constants/action-types";

const forbiddenWordsMiddleware = ({ dispatch }) => {
	return function(next){
		return function(action){
			// do your stuff
			if (action.type === TYPE.ADD_TODO) {
				if (action.payload.description ==='') {
					return dispatch({ type: TYPE.EMPTY_TODO });
				}
			}
			return next(action);
		}
	}
};

export default forbiddenWordsMiddleware;