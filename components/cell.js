import React, { Component } from 'react';
import { View, ViewPropTypes, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class Cell extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    borderStyle: ViewPropTypes.style,
  }

  render() {
    const {data, width, height, flex, style, textStyle, onPress} = this.props;
    const textDom = React.isValidElement(data) ? data : (
        <Text style={[textStyle, styles.text]}>{data}</Text>
      );
    let borderWidth,borderColor;
    if (this.props.borderStyle && this.props.borderStyle.borderWidth) {
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
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[
          {
            borderTopWidth: borderWidth,
            borderRightWidth: borderWidth,
            borderColor: borderColor,
          },
          styles.cell,
          width && {width: width},
          height && {height: height},
          flex && {flex: flex},
          !width && !flex && !height && {flex: 1},
          style
        ]}>
          {textDom}
        </View>
      </TouchableWithoutFeedback>
      
    )
  }
}

const styles = StyleSheet.create({
  cell: {
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'transparent',
  },
})

export default Cell;
