import React, { Component } from 'react'
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native'

export default class Footer extends Component {

	render() {
		const {onPressItem} = this.props
		return (
		<TouchableOpacity
			style={styles.footer}
			onPress={() => onPressItem()}
		>
		<Text style={{color: 'darkred', fontSize: 18,}}>Remove completed items</Text>
		</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	footer: {
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopWidth: 1,
		marginBottom: 10,
		borderTopColor: 'lightgray',
		backgroundColor: 'whitesmoke',
	},
})