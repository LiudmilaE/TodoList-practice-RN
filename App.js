/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	ScrollView,
	AsyncStorage,
} from 'react-native';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'

import Title from './components/Title'
import Footer from './components/Footer'
import Input from './components/Input'
import List from './components/List'
import { actionCreators, reducer } from './todoListRedux'

//// Add the autoRehydrate middleware to your redux store
const store = createStore(reducer, undefined, autoRehydrate())

// Enable persistence
persistStore(store, { storage: AsyncStorage })

const mapStateToProps = (state) => ({
	todos: state.todos,
})

 class App extends Component {

	onAddTodo = (text) => {
		const {dispatch} = this.props
		let item = { lable: text, completed: false}

		dispatch(actionCreators.addItem(item))
	}

	onRemoveTodo = (index) => {
		const {dispatch} = this.props

		dispatch(actionCreators.removeItem(index))
	}

	onToggleTodo = (index) => {
		const {dispatch} = this.props

		dispatch(actionCreators.toggleItemCompleted(index))
	}

	onRemoveCompletedTodo = () => {
		const {dispatch} = this.props

		dispatch(actionCreators.removeCompletedTodos())
	}

	render() {
		const {todos} = this.props

		return (
			<View style={styles.container}>
				<View>
					<Title>
						To-Do List
					</Title>
					<Input
					placeholder={'Enter a todo!'}
					onSubmitEditing={this.onAddTodo}
					/>
				</View>
				<ScrollView style={styles.container}>
						<List
							list={todos}
							onPressItem={this.onRemoveTodo}
							onToggleTodo={this.onToggleTodo}
						/>
				</ScrollView>
				<Footer 
					onPressItem={this.onRemoveCompletedTodo}/>
			</View>
		);
	}
}

App = connect(mapStateToProps)(App)

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
  )

export default AppWithStore

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});
