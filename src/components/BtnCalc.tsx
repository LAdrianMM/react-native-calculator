import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface BtnCalcProps {
	txt: string,
	color?: string,
	btnBig?: boolean
	action: (val: string) => void
	longPress?: () => void
}

const BtnCalc = ({ txt, color = '#2d2d2d', btnBig, action, longPress }: BtnCalcProps) => {
	return (
		<TouchableOpacity
			onPress={() => action(txt)}
			onLongPress={longPress}
		>
			<View style={[styles.btn, {
				backgroundColor: color,
				width: btnBig ? 180 : 80
			}]}>
				<Text style={{
					...styles.btnText,
					color: (color === '#9b9b9b') ? 'black' : 'white'
				}}>{txt}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default BtnCalc

const styles = StyleSheet.create({
	btn: {
		height: 75,
		width: 60,
		borderRadius: 100,
		justifyContent: 'center',
		marginHorizontal: 8,
	},
	btnText: {
		textAlign: 'center',
		padding: 10,
		fontSize: 30,
		color: '#fff',
		fontWeight: 'bold'
	},
})
