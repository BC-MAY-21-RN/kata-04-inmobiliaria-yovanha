import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';

export default function HouseItem({imageUri,name, address, size, price, bedroom, bathroom}) {
    return(
        <View style = {styles.houseContainer}>
            <View style = {styles.imgContainer}>
                <Image source = {imageUri} style = {styles.images}/>
                <Text>RATING</Text>
            </View>
            <View style = {styles.infoContainer}>
                <Text style = {styles.houseName}>{name}</Text>
                <View style = {styles.address}>
                    <Icon name = 'place' color = "black"/>
                    <Text style = {styles.addressText}>{address}</Text>   
                </View> 
                
                <View style = {styles.details}>
                    <Icon name = 'king-bed' color = "black"/>
                    <Text style = {styles.infoText}>{bedroom}</Text>
                    <Icon name = 'bathtub' color = "black"/>
                    <Text style = {styles.infoText}>{bathroom}</Text>
                    <Icon name = 'zoom-out-map' color = "black"/>
                    <Text style = {styles.infoText}>{size}</Text>  
                </View>
                <View style = {styles.price}>
                     <Text style = {styles.priceText}>{price}</Text>  
                     <Icon name = 'favorite-border' color = "black"/>
                </View>
            </View>   
        </View>
    );
}

const styles = StyleSheet.create({
    address:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressText:{
        fontSize: 15,
        paddingLeft: 7, 
    },
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between' 
    },
    images:{
        borderRadius: 15,
        height: 100,
        width: 100,  
    },
    infoContainer:{
        paddingLeft: 20,
    },
    houseContainer:{ 
        backgroundColor: '#F5FAFF',  
        borderRadius: 15,    
        flexDirection: 'row',
        margin: 10,
        padding: 15,
    },
    houseName:{
        color: 'black',
        fontSize: 20,
        fontWeight: '700'
        //fontFamily: 'Poppins-Light'
    },
    infoText: {
        fontWeight:'bold',
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 15
    },
    priceText: {
        fontSize: 17,
        fontWeight: '700'
    },
});