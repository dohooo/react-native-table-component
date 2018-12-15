import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text, StyleSheet } from 'react-native';
import Cell from './cell';
import { sum } from "../utils/sum"

export class Row extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
  }

  render() {
    const { data, style, widthArr, height, flexArr, ...props } = this.props;
    const widthSum = widthArr ? sum(widthArr) : 0
    return (
      data ?
        <View style={[
          height && { height: height },
          widthSum && { width: widthSum },
          styles.row,
          style
        ]}>
          {
            data.map((item, i) => {
              const flex = flexArr && flexArr[i];
              const width = widthArr && widthArr[i];
              return <Cell key={i} data={item} width={width} height={height} flex={flex} {...props} />
            })
          }
        </View>
        : null
    )
  }
}

export class Rows extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
  }

  render() {
    const { data, style, widthArr, heightArr, flexArr, ...props } = this.props;
    const flexSum = flexArr ? sum(flexArr) : 0
    const widthSum = widthArr ? sum(widthArr) : 0

    return (
      data ?
        <View style={[
          flexNum && { flex: flexSum },
          widthNum && { width: widthSum },
        ]}>
          {
            data.map((item, i) => {
              const height = heightArr && heightArr[i];
              return <Row key={i} data={item} widthArr={widthArr} height={height} flexArr={flexArr} style={style} {...props} />
            })
          }
        </View>
        : null
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    overflow: 'hidden'
  },
})
