import React, { Component } from 'react';
import { View, ViewPropTypes, Text } from 'react-native';

export class Table extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    borderStyle: ViewPropTypes.style,
  }

  render() {
    const { borderStyle } = this.props
    const borderLeftWidth = borderStyle && borderStyle.borderWidth || 1
    const borderBottomWidth = borderStyle && borderStyle.borderColor || '#000'

    return (
      <View style={[
        this.props.style,
        {
          borderLeftWidth,
          borderBottomWidth,
          borderColor
        }
      ]}>
        {
          React.Children.map(
            props.children,
            child => React.cloneElement(
              child,
              props.borderStyle && child.type.displayName !== "ScrollView" ? { borderStyle: props.borderStyle } : {}))
        }
      </View>
    )
  }
}

class TableWrapper extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
  }

  _renderChildren(props) {
    return React.Children.map(props.children, child => {
      if (props.borderStyle) {
        return React.cloneElement(child, {
          borderStyle: props.borderStyle
        })
      } else {
        return React.cloneElement(child)
      }
    })
  }

  render() {
    const { style } = this.props;
    return (
      <View style={style}>
        {
          React.Children.map(
            props.children,
            child => React.cloneElement(
              child,
              props.borderStyle ? { borderStyle: props.borderStyle } : {}))
        }
      </View>
    );
  }
}
