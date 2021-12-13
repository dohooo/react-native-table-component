<p align="center">
  <img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/react-native-table-component-logo.png?raw=true" width="170" />
</p>

<h1 align="center">React Native Table Component</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-table-component"><img src="https://badge.fury.io/js/react-native-table-component.svg" /></a>
  <a href="https://www.npmjs.com/package/react-native-table-component"><img src="https://img.shields.io/badge/platform-Android%20%7C%20iOS-yellow.svg" /></a>
  <a href="https://www.npmjs.com/package/react-native-table-component"><img src="https://img.shields.io/npm/dm/react-native-table-component.svg?colorB=orange" /></a>
</p>

<p><span style="color: red;">*</span> The project is no longer maintained due to work reasons and can be transferred if necessary.</p>
<p>If you are interested in maintaining the project, please contact the email 594244274@qq.com.</p>
<br/><br/>

This is a table component for react native.

- [Installation](#installation)
- [Changelogs](#changelogs)
- [Examples](#examples)
- [Properties](#properties)
- [Notice](#notice)
- [License](#license)

[切换到中文文档](https://github.com/Gil2015/react-native-table-component/blob/master/readme_zh.md)
<br/><br/>

## Installation
> npm install react-native-table-component

`USE:`
```jsx
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
```

<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/example.jpg?raw=true" width="375"/>

<br/><br/>

## Changelogs
+ [v1.0.3]
  - 'TableWraper' changed to 'TableWrapper';
+ [v1.1.1]
  - Data supports incoming Element types
+ [v1.2.1]
  - Change the default value of the borderWidth from 1 to 0
<br/><br/>

## Examples

#### Example1
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/exampleOne.png?raw=true" width="320"/>

```jsx
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
```

---

#### Example2
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/exampleTwo.png?raw=true" width="320"/>

```jsx
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'Head1', 'Head2', 'Head3'],
      tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
      tableData: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});
```

---

#### Example3
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/exampleThree.gif?raw=true" width="320"/>

```jsx
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
    }
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});
```

---

#### Example4
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/exampleFour.gif?raw=true" width="320"/>

```jsx
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});
```

---

#### Example5
<img src="https://github.com/Gil2015/tools_file/blob/master/img/react-native-table-component/exampleFive.gif?raw=true" width="320"/>

```jsx
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper,Col, Cols, Cell } from 'react-native-table-component';

export default class ExampleFive extends Component {
  constructor(props) {
    super(props);
    const elementButton = (value) => (
      <TouchableOpacity onPress={() => this._alertIndex(value)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    this.state = {
      tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
      tableData: [
        [elementButton('1'), 'a', 'b', 'c', 'd'],
        [elementButton('2'), '1', '2', '3', '4'],
        [elementButton('3'), 'a', 'b', 'c', 'd']
      ]
    }
  }

  _alertIndex(value) {
    Alert.alert(`This is column ${value}`);
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table style={{flexDirection: 'row'}} borderStyle={{borderWidth: 1}}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data="" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['H1', 'H2']} style={styles.head} heightArr={[60, 60]} textStyle={styles.text} />
              <Col data={state.tableTitle} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper */}
          <TableWrapper style={{flex:1}}>
            <Cols data={state.tableData} heightArr={[40, 30, 30, 30, 30]} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff' },
  head: { flex: 1, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  titleText: { marginRight: 6, textAlign:'right' },
  text: { textAlign: 'center' },
  btn: { width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
  btnText: { textAlign: 'center' }
});
```

---



<br/><br/>

## Properties
| Prop              | Type  | Description | Default |
|---|---|---|---|
| <b>data</b>       | Array | Table data. | `null` |
| <b>style</b>      | Style | Container style. | `null` |
| <b>borderStyle</b>| Object| Table border line width and color. | `{ borderWidth: 0, borderColor: #000 }` |
| <b>textStyle</b>  | Style | Cell font style. | `null` |
| <b>flexArr</b>    | Array | Flex value per column. | `[]` |
| <b>widthArr</b>   | Array | Width per column. | `[]` |
| <b>heightArr</b>  | Array | Height per line. | `[]` |
| <b>...props</b>   | any   | more props       |      |
---



<br/><br/>

## Notice

+ Cells in Col and Cols components do not support adaptive height.
+ Please set the magin value in the textStyle property to adjust the padding and do not use the padding.
+ If parent element is not Table component，please add the type of borderstyle.

```jsx
<ScrollView horizontal={true}>
  {/* If parent element is not Table component，please add the type of borderstyle. */}
  <TableWrapper borderStyle={{borderWidth: 2, borderColor: 'blue',}}>
    <Cols data={data} />
  </TableWrapper>
</ScrollView>
```

## License

[MIT](LICENSE)
