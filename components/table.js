import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';

export class Table extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    borderStyle: ViewPropTypes.style
  };

  _renderChildren(props) {
    return React.Children.map(props.children, child =>
      React.cloneElement(
        child,
        props.borderStyle && child.type.displayName !== 'ScrollView' ? { borderStyle: props.borderStyle } : {}
      )
    );
  }

  render() {
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

export class TableWrapper extends Component {
  static propTypes = {
    style: ViewPropTypes.style
  };

  _renderChildren(props) {
    return React.Children.map(props.children, child =>
      React.cloneElement(child, props.borderStyle ? { borderStyle: props.borderStyle } : {})
    );
  }

  render() {
    const { style } = this.props;
    return <View style={style}>{this._renderChildren(this.props)}</View>;
  }
}
