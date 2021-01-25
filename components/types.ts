import { type } from 'os';
import { ReactText } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type Data = JSX.Element | ReactText[][] | ReactText[] | ReactText;
export interface DefaultProps<DataType extends Data> {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
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
  style?: StyleProp<ViewStyle>;
  borderStyle?: ViewStyle;
}>;

export type TableProps = React.PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  borderStyle?: ViewStyle;
}>;
