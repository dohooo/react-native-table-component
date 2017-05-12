import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Table extends Component {
  static propTypes = {
    style: View.propTypes.style,
    borderStyle: View.propTypes.style,
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
    let borderWidth,borderColor;
    if (this.props.borderStyle && this.props.borderStyle.borderWidth) {
      borderWidth = this.props.borderStyle.borderWidth;
    } else {
      borderWidth = 0.5;
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

class TableWraper extends Component {
  static propTypes = {
    style: View.propTypes.style,
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

export {Table, TableWraper};
