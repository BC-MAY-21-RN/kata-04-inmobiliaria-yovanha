import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import { Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HouseItem({imageUri,rating, name, address, size, price, bedroom, bathroom}) {
    return(
        <View style = {styles.houseContainer}>
            <View style = {styles.imgContainer}>
                <ImageBackground source = {imageUri} style = {styles.images} imageStyle={styles.images}></ImageBackground>    
                <View style = {styles.ratingContainer}>
                    <Icon
                    name = 'star'
                    color = '#EEBA00'
                    />
                    <Text> {rating} </Text>
                </View>
            </View>
    
            <View style = {styles.infoContainer}>
                <Text style = {styles.houseName}>{name}</Text>
                <View style = {styles.address}>
                    <Ionicons 
                        name = 'location-outline'
                        size = {20}
                        color = "black"
                    />
                    <Text style = {styles.addressText}>{address}</Text>   
                </View> 
                <View style = {styles.details}>
                    <Ionicons 
                        name = 'bed-outline'
                        size = {20} 
                        color = "#8B8F9A"
                    />
                    <Text style = {styles.infoText}>{bedroom}</Text>
                    <Icon 
                        name = 'bathtub' 
                        size = {20}
                        color = "#8B8F9A"
                    />
                    <Text style = {styles.infoText}>{bathroom}</Text>
                    <Ionicons 
                        name = 'md-expand'
                        size = {20} 
                        color = "#8B8F9A"
                    />
                    <Text style = {styles.infoText}>{size}</Text>  
                </View>
                <View style = {styles.price}>
                     <Text style = {styles.priceText}>{price}</Text>  
                     <Ionicons 
                     name = 'heart-circle-sharp' 
                     size = {25}
                     color = "#00B074"
                     />
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
        borderRadius: 10,
        height: 110,
        width: 100,  
        position: 'absolute'
    },
    imgContainer:{
        alignItems:'center',
        height: 110,
        width: 100,
        paddingTop: 75,
    },
    infoContainer:{
        paddingLeft: 15,
        justifyContent: 'space-between',
        width: 200,
    },
    infoText: {
        fontWeight:'bold',
    },
    houseContainer:{ 
        backgroundColor: '#F5FDFF',  
        borderRadius: 15,    
        flexDirection: 'row',
        margin: 10,
        padding: 15,
        width: 350,
    },
    houseName:{
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Poppins'
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
    ratingContainer: {
        alignItems: 'center', 
        backgroundColor: '#FBEDB5',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 4,
    },
});