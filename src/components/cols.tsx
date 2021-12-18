import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Cell } from './cell';
import { sum } from '../utils';

interface IColOptions {
	data: string[] | JSX.Element[];
	style?: ViewStyle;
	width?: number;
	heightArr?: number[];
	flex?: number;
	textStyle?: TextStyle;
}

export class Col extends Component<IColOptions> {

	public render() {
		const { data, style, width, heightArr, flex, textStyle, ...props } = this.props;

		return data ? (
			<View style={[width ? { width } : { flex: 1 }, flex ? { flex } : {}, style]}>
				{[...data].map((item, i) => {
					const height = heightArr && heightArr[i];
					return <Cell key={i} data={item} width={width} height={height} textStyle={textStyle} {...props} />;
				})}
			</View>
		) : null;
	}

}


interface IColsOptions {
	data: string[][] | JSX.Element[][];
	style?: ViewStyle;
	widthArr?: number[];
	heightArr?: number[];
	flexArr?: number[];
	textStyle?: TextStyle;
}

// tslint:disable-next-line: max-classes-per-file
export class Cols extends Component<IColsOptions> {

	public render() {
		const { data, style, widthArr, heightArr, flexArr, textStyle, ...props } = this.props;
		const width = widthArr ? sum(widthArr) : 0;

		return data ? (
			<View style={[styles.cols, width ? { width } : {}]}>
				{[...data].map((item, i) => {
					const flex = flexArr && flexArr[i];
					const wth = widthArr && widthArr[i];
					return (
						<Col
							key={i}
							data={item}
							width={wth}
							heightArr={heightArr}
							flex={flex}
							style={style}
							textStyle={textStyle}
							{...props}
						/>
					);
				})}
			</View>
		) : null;
	}
}

const styles = StyleSheet.create({
	cols: { flexDirection: 'row' }
});
