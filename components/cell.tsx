import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Data, DefaultProps } from './types';

export const Cell: React.FC<DefaultProps<Data>> = props => {
  const { data, width, height, flex, style, textStyle, borderStyle, ...rest } = props;

  const textDom = React.isValidElement(data) ? (
    data
  ) : (
    <Text style={[textStyle, styles.text]} {...rest}>
      {data}
    </Text>
  );
  const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
  const borderRightWidth = borderTopWidth;
  const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

  return (
    <View
      style={[
        {
          borderTopWidth,
          borderRightWidth,
          borderColor
        },
        styles.cell,
        width && { width },
        height && { height },
        flex && { flex },
        !width && !flex && !height && !style && { flex: 1 },
        style
      ]}
    >
      {textDom}
    </View>
  );
};

const styles = StyleSheet.create({
  cell: { justifyContent: 'center' },
  text: { backgroundColor: 'transparent' }
});
