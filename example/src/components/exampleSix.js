import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class ExampleSix extends Component {
  static navigationOptions = {
    title: 'ExampleSix'
  }

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Gruppo A', '', 'G.', 'Diff.', 'Pti.'],
      tableData: [
        ['a', 'Russia', '1', '5', '3'],
        ['b', 'Uruguay', '1', '1', '3'],
        ['c', 'Egitto', '1', '-1', '0'],
        ['d', 'Arabia Saudita', '1', '-5', '0'],
      ],
    }
  }

  renderCellStyle(idx) {
    switch (idx) {
      case 0:
        return {
          flex: 2
        }
      case 1:
        return {
          flex: 4,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1
        }
      default:
        return {
          flex: 1,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1
        }
    }
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <View style={styles.btnBox}>
        <View style={[styles.btn, {marginRight: 6}, index > 1 && {borderColor: 'transparent'}]}>
          <Text style={styles.btnText}>{index + 1}</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{data}</Text>
        </View>
      </View>
    );
    
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} flexArr={[2,4,1,1,1]} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell 
                      key={cellIndex} 
                      data={cellIndex === 0 ? element(cellData, index) : cellData} 
                      style={this.renderCellStyle(cellIndex)}
                      textStyle={styles.text}/>
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
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  head: { 
    height: 60,
  },
  text: {
    margin: 6
  },
  row: {
    flexDirection: 'row',
    height: 50
  },
  btnBox: {
    flexDirection: 'row'
  },
  btn: { 
    width: 30, 
    height: 30, 
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#333'
  },
  btnText: { 
    textAlign: 'center', 
    lineHeight: 26
  }
});
