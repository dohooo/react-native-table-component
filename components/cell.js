import React, { Component } from 'react';
import { View, ViewPropTypes, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';

export class Cell extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    borderStyle: ViewPropTypes.style,
    onImageClick:PropTypes.func,
    imageStyles: PropTypes.objectOf({
            height:PropTypes.any,
            width:PropTypes.any,
            borderRadius: PropTypes.any,
            tintColor: PropTypes.string
        })
  };

  render() {
    const { data, width, height, flex, style, textStyle,image,imageStyles, onImageClick, borderStyle,disabled, ...props } = this.props;
    const textDom = React.isValidElement(data) ? (
      data
    ) : (
      <Text style={[textStyle, styles.text]} {...props}>
        {data}
      </Text>
    );
    const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 1;
    const borderRightWidth = borderTopWidth;
    const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

    return (
      <TouchableOpacity
        style={[
          {
            borderTopWidth,
            borderRightWidth,
            borderColor,
            flexDirection:'row',
            alignItems:'center'
          },
          styles.cell,
          width && { width },
          height && { height },
          flex && { flex },
          !width && !flex && !height && !style && { flex: 1 },
          style
        ]}
      onPress={this.onClickIcon.bind(this)} disabled={disabled}
      >
        {textDom}
              <Image
                    resizeMode={'contain'}
                    style={imageStyles}
                    source={image}/>
                
      </TouchableOpacity>
    );
  }
   onImageClick(){
         if(this.props.onImageClick()){
             this.props.onImageClick()
         }
    }
}

const styles = StyleSheet.create({
  cell: { justifyContent: 'center' },
  text: { backgroundColor: 'transparent' }
});
