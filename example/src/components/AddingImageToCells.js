import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Table, TableWrapper, Cell} from 'react-native-table-component';
import {Row} from '../../../../base/services/rows'

export default class StaffReportStyle extends Component {
    static navigationOptions = {
        title: 'AddingImageToCell'
    }

    constructor(props) {
        super(props);
        this.state = {
            tableHeader: [['Head1', true], ['Head2', false],
                ['Head3', false],
                ['Head4', false],
                ['Head5', true]],
            tableData: [
                ['1', '2', '3', '4', '5'],
                ['a', 'b', 'c', 'd', 'e'],
                ['1', '2', '4', '5'],
                ['a', 'b', 'c']
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: 'grey'}}>
                    <Row data={state.tableHeader} style={{
                        flexDirection: 'row',
                        height: 40,
                        width: '50%',
                        backgroundColor: 'red'
                    }}
                         imageStyles={{height: 20, width: 20, tintColor: 'white'}}
                         textStyle={{
                             textAlign: 'left',
                             color: 'white',
                             fontSize: 12
                         }} onImageClick={() => this.onImageClick()} image={require('../../../../../icons/sort.png')}/>
                    {state.tableData.map((rowData, index) => (
                        <TableWrapper key={index} style={{height: 40, flexDirection: 'row',}}>
                            {rowData.map((cellData, cellIndex) => (
                                <Cell key={cellIndex} style={{
                                    width: '20%',
                                    borderWidth: 1,
                                    backgroundColor: 'white'
                                }} data={cellData}
                                      textStyle={[{fontSize: 12, textAlign: 'center', color: 'black'}]}
                                >
                                </Cell>

                            ))
                            }
                        </TableWrapper>
                    ))
                    }
                </Table>
            </View>

        )
    }

    /* Functionality for on image click */
    onImageClick() {
        console.log('Clicked Image')
    }
}

const styles = StyleSheet.create({
    container: {
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    wrapper: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        backgroundColor: '#f6f8fa'
    },
    row: {
        height: 28
    },
    text: {
        textAlign: 'center'
    }
});
