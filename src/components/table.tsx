import React, { Component, ReactNode, ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';

interface ITableOptions {
	style?: ViewStyle;
	borderStyle?: ViewStyle;
}

export class Table extends Component<ITableOptions> {

	private _renderChildren(props: Readonly<ITableOptions> & Readonly<{ children?: ReactNode }>) {
		return React.Children.map(props.children, child =>
			React.cloneElement(
				(child as unknown as ReactElement),
				props.borderStyle && (child as unknown as { type: { displayName: string } }).type.displayName !== 'ScrollView' ? { borderStyle: props.borderStyle } : {}
			)
		);
	}

	public render() {
		const { borderStyle } = this.props;
		const borderLeftWidth = (borderStyle && borderStyle.borderWidth) || 0;
		const borderBottomWidth = borderLeftWidth;
		const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

		return (
			<View
				style={[
					this.props.style,
					{
						borderLeftWidth,
						borderBottomWidth,
						borderColor
					}
				]}
			>
				{this._renderChildren(this.props)}
			</View>
		);
	}

}


interface ITableWrapperOptions {
	style?: ViewStyle;
	borderStyle?: ViewStyle;
}

// tslint:disable-next-line: max-classes-per-file
export class TableWrapper extends Component<ITableWrapperOptions> {

	private _renderChildren(props: Readonly<ITableWrapperOptions> & Readonly<{ children?: ReactNode }>) {
		return React.Children.map(props.children, child =>
			React.cloneElement((child as unknown as ReactElement), props.borderStyle ? { borderStyle: props.borderStyle } : {})
		);
	}

	public render() {
		const { style } = this.props;
		return <View style={style}>{this._renderChildren(this.props)}</View>;
	}

}
