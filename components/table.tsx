import React from 'react';
import { View } from 'react-native';
import { TableComponent, TableProps } from './types';

export const Table: TableComponent = props => {
  function renderChildren(_props: TableProps) {
    return React.Children.map<React.ReactNode, React.ReactNode>(_props.children, child =>
      React.isValidElement(child)
        ? React.cloneElement(
            child,
            _props.borderStyle && child.type !== 'ScrollView' ? { borderStyle: _props.borderStyle } : {}
          )
        : null
    );
  }

  const { borderStyle } = props;
  const borderLeftWidth = (borderStyle && borderStyle.borderWidth) || 0;
  const borderBottomWidth = borderLeftWidth;
  const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

  return (
    <View
      style={[
        props.style,
        {
          borderLeftWidth,
          borderBottomWidth,
          borderColor
        }
      ]}
    >
      {renderChildren(props)}
    </View>
  );
};

export const TableWrapper: TableComponent = props => {
  function renderChildren(_props: TableProps) {
    return React.Children.map<React.ReactNode, React.ReactNode>(_props.children, child =>
      React.isValidElement(child)
        ? React.cloneElement(child, _props.borderStyle ? { borderStyle: _props.borderStyle } : {})
        : null
    );
  }
  const { style } = props;

  return <View style={style}>{renderChildren(props)}</View>;
};
