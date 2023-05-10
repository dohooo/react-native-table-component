import React, {Component} from "react";
import {View, StyleSheet, FlatList} from "react-native";
import PropTypes from "prop-types";

import {Cell} from "./cell";
import {sum} from "../utils";


export class Row extends Component {
    static propTypes = {
        data: PropTypes.array,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        widthArr: PropTypes.arrayOf(PropTypes.number),
        height: PropTypes.number,
        flexArr: PropTypes.arrayOf(PropTypes.number),
        textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        cellTextStyle: PropTypes.func
    };

    render() {
        const {data, style, widthArr, height, flexArr, textStyle, cellTextStyle, ...props} = this.props;
        const width = widthArr ? sum(widthArr) : 0;

        return data ? (
            <View style={[height && {height}, width && {width}, styles.row, style]}>
                {data.map((item, i) => {
                    const flex = flexArr && flexArr[i];
                    const wth = widthArr && widthArr[i];
                    return (
                        <Cell
                            key={i}
                            data={item}
                            width={wth}
                            height={height}
                            flex={flex}
                            textStyle={[cellTextStyle && cellTextStyle(item), textStyle]}
                            {...props}
                        />
                    );
                })}
            </View>
        ) : null;
    }
}

export class Rows extends Component {
    static propTypes = {
        data: PropTypes.array,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        widthArr: PropTypes.arrayOf(PropTypes.number),
        heightArr: PropTypes.arrayOf(PropTypes.number),
        flexArr: PropTypes.arrayOf(PropTypes.number),
        textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    };

    render() {
        const {data, style, widthArr, heightArr, flexArr, textStyle, ...props} = this.props;
        const flex = flexArr ? sum(flexArr) : 0;
        const width = widthArr ? sum(widthArr) : 0;

        return data ? (
            <View style={[flex && {flex}, width && {width}]}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    renderItem={({item, index}) => {
                        const height = heightArr && heightArr[i];
                        return (
                            <Row
                                key={index}
                                data={item}
                                widthArr={widthArr}
                                height={height}
                                flexArr={flexArr}
                                style={style}
                                textStyle={textStyle}
                                {...props}
                            />
                        );
                    }}
                />
            </View>
        ) : null;
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        overflow: "hidden"
    }
});