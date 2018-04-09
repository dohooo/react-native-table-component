import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text, StyleSheet } from 'react-native';
import Cell from './cell';

class Row extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
  }

  render() {
    const {data, style, widthArr, height, flexArr, textStyle, borderStyle, ...props} = this.props;
    let widthNum = 0;
    if (widthArr) {
      for(let i=0; i<widthArr.length; i++) {
          widthNum += widthArr[i];
      }
    }


    return (
      data ?
      <View style={[
        height && {height: height},
        widthNum && {width: widthNum},
        styles.row,
        style
      ]}>
        {
          data.map((item, i) => {
            const flex = flexArr && flexArr[i];
            const width = widthArr && widthArr[i];
            return <Cell key={i} data={item} width={width} height={height} flex={flex} textStyle={textStyle} borderStyle={borderStyle} {...props}/>
          })
        }
      </View>
      : null
    )
  }
}

class Rows extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
  }

  render() {
    const {data, style, widthArr, heightArr, flexArr, textStyle, borderStyle, ...props} = this.props;
    let flexNum = 0, widthNum = 0;
    if (flexArr) {
      for(let i=0; i<flexArr.length; i++) {
          flexNum += flexArr[i];
      }
    }
    if (widthArr) {
      for(let i=0; i<widthArr.length; i++) {
          widthNum += widthArr[i];
      }
    }

    return (
      data ?
      <View style={[
        flexNum && {flex: flexNum},
        widthNum && {width: widthNum},
      ]}>
        {
          data.map((item, i) => {
            const height = heightArr && heightArr[i];
            return <Row key={i} data={item} widthArr={widthArr} height={height} flexArr={flexArr} style={style} textStyle={textStyle} borderStyle={borderStyle} {...props}/>
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

export { Row, Rows };
