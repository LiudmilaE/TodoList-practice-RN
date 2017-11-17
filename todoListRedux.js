//the types of actions
export const types = {
	ADD_ITEM: 'ADD_ITEM',
	REMOVE_ITEM: 'REMOVE_ITEM',
	TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
	REMOVE_COMPLETED_ITEMS: 'REMOVE_COMPLETED_ITEMS',
}

//Helper functions to dispatch actions
export const actionCreators = {
	addItem: (item) => {
		return {type: types.ADD_ITEM, payload: item}
	},
	removeItem: (index) => {
		return { type: types.REMOVE_ITEM, payload: index}
	},
	toggleItemCompleted: (index) => {
		return { type: types.TOGGLE_ITEM_COMPLETED, payload: index}
	},
	removeCompletedTodos: () => {
		return { type: types.REMOVE_COMPLETED_ITEMS, payload: true}
	}
}

//Initial state of the store
const initialState = {
	todos: [
		{lable: 'Learn RN', completed: false}, 
		{lable: 'Write a simple project', completed: false}
		],
}

//Function to handle actions and update the state
export const reducer = (state = initialState, action) => {
	const {todos} = state
	const {type, payload} = action

	switch (type) {
		case types.ADD_ITEM: {
			return {
				...state,
				todos: [payload, ...todos],
			}
		}
		case types.REMOVE_ITEM: {
			return {
				...state,
				todos: todos.filter((todo, i) => i !== payload),
			}
		}
		case types.TOGGLE_ITEM_COMPLETED: {
			return {
				...state,
				todos: todos.map((item, i) => {
					if(i === payload){
						item.completed = !item.completed
					}
				 	return item
				}),
			}
		} ///checkbox
		case types.REMOVE_COMPLETED_ITEMS: {
			return {
				...state,
				todos: todos.filter((todo) => todo.completed !== true),
			}
		}
	}

	return state
}