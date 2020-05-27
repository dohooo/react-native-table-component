import React, { Component } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ICellOptions {
	data: string | JSX.Element;
	width?: number;
	height?: number;
	flex?: number;
	style?: ViewStyle;
	textStyle?: TextStyle;
	borderStyle?: ViewStyle;
}

export class Cell extends Component<ICellOptions> {

	public render() {
		const { data, width, height, flex, style, textStyle, borderStyle, ...props } = this.props;
		const textDom = React.isValidElement(data) ? (
			data
		) : (
				<Text style={[textStyle, styles.text]} {...props}>
					{data}
				</Text>
			);
		const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
		const borderRightWidth = borderTopWidth;
		const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

		return (
			<View
				style={[
					{
						borderTopWidth,
						borderRightWidth,
						borderColor
					},
					styles.cell,
					width ? { width } : {},
					height ? { height } : {},
					flex ? { flex } : {},
					!width && !flex && !height && !style && { flex: 1 },
					style
				]}
			>
				{textDom}
			</View>
		);
	}

}

const styles = StyleSheet.create({
	cell: { justifyContent: 'center' },
	text: { backgroundColor: 'transparent' }
});
