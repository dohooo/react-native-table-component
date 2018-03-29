# React Native Table Component
[![npm version](https://badge.fury.io/js/react-native-table-component.svg)](https://badge.fury.io/js/react-native-table-component) ![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-yellow.svg) 

This is a table component for react native.

- [Installation](#installation)
- [Changelogs](#Changelogs)
- [Examples](#examples)
- [Properties](#properties)
<br/><br/>

## Installation
> npm install react-native-table-component

  `USE:`
  ```jsx
  import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
  ```
<br/><br/>

## Changelogs
+ [v1.0.3]
  - 'TableWraper' changed to 'TableWrapper';
+ [v1.1.1]
  - Data supports incoming Element types;
<br/><br/>

## Examples

#### Example1
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/table_example_1.png?raw=true" width="375"/>

```jsx
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class tableView extends Component {
  render() {
    const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];
  
    return (
      <View>
        <Table>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 }
})
```

---

#### Example2
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/table_example_2.png?raw=true" width="375"/>

```jsx
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class tableView extends Component {
  render() {
    const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableData = [
      ['1', 'a'],
      ['2', 'b'],
      ['3', 'c'],
      ['4', 'd']
    ]
  
    return (
      <View>
        <Table style={styles.table} borderStyle={{borderWidth: 0.5, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} flexArr={[1, 2, 1, 2]}/>
          <Cols data={tableData} textStyle={styles.text} heightArr={[20, 50]} flexArr={[1, 2, 1, 2]}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  table: { width: 360 },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { textAlign: 'center' }
})
```

---

#### Example3
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/table_example_3.png?raw=true" width="375"/>

```jsx
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class tableView extends Component {
  render() {
    const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableTitle = ['Title', 'Title2'];
    const tableData = [
      ['', '', ''],
      ['', '', '']
    ];
    return (
      <View>
        <Table>
          <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={{flexDirection: 'row'}}>
            <Col data={tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={tableData} flexArr={[2, 1, 1]} style={styles.row}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' }
})
```

---

#### Example4
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/table_example_4.png?raw=true" width="375"/>

```jsx
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class tableView extends Component {
  render() {
    const tableData = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    return (
      <View>
        <Table style={{flexDirection: 'row'}}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data="Head" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['Head2', 'Head3']} style={styles.head} heightArr={[56, 56]}/>
              <Col data={['Title', 'Title2', 'Title3', 'Title4']} style={styles.title} heightArr={[28, 28, 28, 28]} textStyle={styles.text}></Col>
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper */}
          <TableWrapper style={{flex:1}}>
            <Rows data={tableData} style={{height: 28}}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  singleHead: { width: 80, height: 30, backgroundColor: '#c8e1ff' },
  head: { flex: 1, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  text: { marginRight: 6, textAlign:'right' }
});
```

---

#### Example5
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/table_example_5.png?raw=true" width="375"/>

```jsx
import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class tableView extends Component {
  render() {
    const tableHead = ['Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9', 'Head10','Head11'];
    const tableTitle = ['Title', 'Title2', 'Tilte3', 'Title4', 'Title5'];
    const tableData = [
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]
    ];
    const widthArr = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60];

    return (
      <View>
        <Table style={styles.table}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data="Head" style={styles.head} textStyle={styles.headText}/>
            {
              tableTitle.map((title, i) => (
                <Cell key={i} data={title} height={28} style={i%2 && {backgroundColor: '#DFF5F2'}} textStyle={styles.titleText}/>
              ))
            }
          </TableWrapper>

          {/* Right scrollview Wrapper */}
          <ScrollView horizontal={true}>
            {/* If parent element is not table element, you should add the type of borderstyle. */}
            <TableWrapper borderStyle={{borderWidth: 1,borderColor: '#000',}}>
              <Row data={tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr}/>
              {
                tableData.map((data, i) => (
                  <Row key={i} data={data} style={[styles.list, i%2 && {backgroundColor: '#DFF5F2'}]} widthArr={widthArr} textStyle={styles.listText}/>
                ))
              }
            </TableWrapper>
          </ScrollView>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  table: { width: 360, flexDirection: 'row' },
  head: { backgroundColor: '#333', height: 40 },
  headText: { color: '#fff', textAlign: 'center' },
  titleText: { marginLeft: 6 },
  list: { height: 28, backgroundColor: '#f0f0f0' },
  listText: { textAlign: 'right', marginRight: 6 }
})
```

---

#### Example6
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/table_example_6.png?raw=true" width="375"/>

```jsx
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class tableView extends Component {
  _alert = (value) => {
    Alert.alert(value);
  }

  render() {
    const ele = (value) => (
      <TouchableOpacity onPress={() => this._alert(value)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    const tableData = [
      ['1', '2', '3', ele('line 1')],
      ['a', 'b', 'c', ele('line 2')],
      ['1', '2', '3', ele('line 3')],
      ['a', 'b', 'c', ele('line 4')]
    ];
  
    return (
      <View>
        <Table>
          <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: { marginLeft: 5 },
  row: { height: 30 },
  btn: { width: 58, height: 18, backgroundColor: '#ccc', marginLeft: 15 },
  btnText: { textAlign: 'center', color: '#fff' }
});
```

---

<br/><br/>

## Properties
| Prop              | Type  | Description | Default |
|---|---|---|---|
| <b>data</b>       | Array | Table data. | `null` |
| <b>style</b>      | Style | Container style. | `null` |
| <b>borderStyle</b>| Object| Table border line width and color. | `{ borderWidth: 1, borderColor: #000 }` |
| <b>textStyle</b>  | Style | Cell font style. | `null` |
| <b>flexArr</b>    | Array | Flex value per column. | `[]` |
| <b>widthArr</b>   | Array | Width per column. | `[]` |
| <b>heightArr</b>  | Array | Height per line. | `[]` |
