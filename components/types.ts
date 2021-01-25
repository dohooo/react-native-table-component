import { type } from 'os';
import { ReactText } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export type Data = JSX.Element | ReactText[][] | ReactText[] | ReactText;
export interface DefaultProps<DataType extends Data> {
  style?: ViewStyle;
  textStyle?: TextStyle;
  borderStyle?: ViewStyle;
  data: DataType;
  width?: ReactText;
  height?: ReactText;
  flex?: number;
  heightArr?: number[];
  widthArr?: number[];
  flexArr?: number[];
}

export type TableComponent = React.FC<{
  style?: ViewStyle;
  borderStyle?: ViewStyle;
}>;

export type TableProps = React.PropsWithChildren<{
  style?: ViewStyle;
  borderStyle?: ViewStyle;
}>;
