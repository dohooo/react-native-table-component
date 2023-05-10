import React from "react";
import {Animated} from "react-native";


export const ScalableView = React.forwardRef(({children}, ref) => {
    const avScale = React.useRef(new Animated.Value(1)).current;

    React.useImperativeHandle(ref, () => ({
        setScale: (scale) => avScale.setValue(scale)
    }));

    const animateStyle = {
        transform: [{scale: avScale}]
    };


    return (
        <Animated.View
            style={animateStyle}
            renderToHardwareTextureAndroid={true}
        >
            {children}
        </Animated.View>
    );
});