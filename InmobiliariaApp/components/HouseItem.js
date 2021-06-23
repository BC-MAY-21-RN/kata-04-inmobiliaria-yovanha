import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

export default function HouseItem({imageUri,name}) {
    return(
        <View style = {styles.imgContainer}>
            <TouchableHighlight>
                <View>
                    <Image source = {imageUri} style = {styles.images}/>
                    <Text style = {styles.imageText}>
                        {name}
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
      );
}

const styles = StyleSheet.create({
    imgContainer:{
        width: 140,
        paddingLeft: 10,
        marginRight: 15,
        paddingTop: 15
    },
    images:{
        borderRadius: 10,
        height: 140,
        resizeMode:'cover',
        width: '100%'
    },
    imageText:{
        color: 'white',
        fontSize: 20,
        marginTop: 5
    },

});