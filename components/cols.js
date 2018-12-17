import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text, StyleSheet } from 'react-native';
import Cell from './cell';
import { sum } from "../utils/sum"

export class Col extends Component {
  static propTypes = {
    width: PropTypes.number,
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
  }

  render() {
    const { data, style, width, heightArr, flex, ...props } = this.props;

    return (
      data
        ? (
          <View style={[
            width ? { width } : { flex: 1 },
            flex && { flex },
            style
          ]}>
            {
              data.map((item, i) => <Cell key={i} data={item} width={width} height={heightArr && heightArr[i]} {...props} />)
            }
          </View>
        )
        : null
    )
  }
}

export class Cols extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
  }

  render() {
    const { data, style, widthArr, heightArr, flexArr, ...props } = this.props;
    const widthSum = widthArr ? sum(widthArr) : 0

    return (
      data ?
        <View style={[
          styles.cols,
          widthSum && { width: widthSum },
        ]}>
          {
            data.map((item, i) => {
              const flex = flexArr && flexArr[i];
              const width = widthArr && widthArr[i];
              return <Col key={i} data={item} width={width} heightArr={heightArr} flex={flex} style={style} {...props} />
            })
          }
        </View>
        : null
    )
  }
}

const styles = StyleSheet.create({
  cols: {
    flexDirection: 'row',
  }
})
