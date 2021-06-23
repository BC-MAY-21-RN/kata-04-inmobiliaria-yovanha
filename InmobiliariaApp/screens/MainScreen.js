import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import VerticalList from '../components/VerticalList';
import data from '../data';

export default class MainScreen extends React.Component {
    render(){
        return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.listContainer}>
                <VerticalList
                data = {data}
                />
            </View>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: '#F5FDFF',
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingLeft: 25
    }
})