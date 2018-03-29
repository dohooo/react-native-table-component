import React, { Component } from 'react';
import { View, ViewPropTypes, Text } from 'react-native';

class Table extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    borderStyle: ViewPropTypes.style,
  }

  _renderChildren(props) {
    return React.Children.map(props.children, child => {
      if(props.borderStyle && child.type.displayName !== "ScrollView") {
        return React.cloneElement(child, {
          borderStyle: props.borderStyle
        })
      } else {
        return React.cloneElement(child)
      }
    })
  }

  render() {
    let borderWidth, borderColor;
    if (this.props.borderStyle && this.props.borderStyle.borderWidth !== undefined) {
      borderWidth = this.props.borderStyle.borderWidth;
    } else {
      borderWidth = 1;
    }
    if (this.props.borderStyle && this.props.borderStyle.borderColor) {
      borderColor = this.props.borderStyle.borderColor;
    } else {
      borderColor = '#000';
    }

    return (
      <View style={[
        this.props.style,
        {
          borderLeftWidth: borderWidth,
          borderBottomWidth: borderWidth,
          borderColor: borderColor
        }
      ]}>
        {this._renderChildren(this.props)}
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
      if(props.borderStyle) {
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
        {this._renderChildren(this.props)}
      </View>
    );
  }
}

export {Table, TableWrapper};
