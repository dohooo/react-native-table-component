import React, { ReactText } from 'react';
import { StyleSheet, View } from 'react-native';
import { sum } from '../utils';
import { Cell } from './cell';
import { DefaultProps } from './types';

export const Col: React.FC<DefaultProps<ReactText[]>> = props => {
  const { data, style, width, heightArr, flex, textStyle, ...rest } = props;

  return data ? (
    <View style={[width ? { width: width } : { flex: 1 }, flex && { flex: flex }, style]}>
      {data.map((item, i) => {
        const height = heightArr && heightArr[i];
        return <Cell key={i} data={item} width={width} height={height} textStyle={textStyle} {...rest} />;
      })}
    </View>
  ) : null;
};

export const Cols: React.FC<DefaultProps<ReactText[]>> = props => {
  const { data, style, widthArr, heightArr, flexArr, textStyle, ...rest } = props;
  let width = widthArr ? sum(widthArr) : 0;

  return data ? (
    <View style={[styles.cols, width && { width }]}>
      {data.map((item, i) => {
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
};

const styles = StyleSheet.create({
  cols: { flexDirection: 'row' }
});
