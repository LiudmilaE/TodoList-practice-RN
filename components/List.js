import React, { Component } from 'react'
import { View, 
	TouchableOpacity, 
	Text,
	CheckBox, 
	StyleSheet } from 'react-native'


export default class List extends Component {

	renderItem = (todo, i) => {
	const {onPressItem} = this.props
	const {onToggleTodo} = this.props
	//each item shpuld have unique key
	return (
		<View 
			style={{display: 'flex', 
				flexDirection: 'row', 
				backgroundColor: 'whitesmoke',}}
			key={i}>
			<View style={{width: '80%'}}>
				<Text style={styles.itemText}>{todo.lable}</Text>
			</View>
			<CheckBox
				style={styles.checkbox}
				value={todo.completed}
				onValueChange={() => onToggleTodo(i)}
			/>
			<TouchableOpacity
			style={styles.item}
			onPress={() => onPressItem(i)}
			>
				<Text style={styles.closeText}>x</Text>
			</TouchableOpacity>
		</View>
	)
	}

	render() {
	const {list} = this.props

	return (
		<View>
		{list.map(this.renderItem)}
		</View>
	)
	}
}

const styles = StyleSheet.create({
	item: {
	marginBottom: 5,
	padding: 15, 
	flexGrow: 1,
	},
	itemText: {
		marginBottom: 5,
		padding: 15, 
		flexGrow: 1,
		fontSize: 18,
		color: 'steelblue'
	},
	closeText: {
		alignSelf: 'flex-end', 
		color: 'darkred',
		fontSize: 18,
	},
	checkbox: { 
		alignSelf: 'center',
	}
})