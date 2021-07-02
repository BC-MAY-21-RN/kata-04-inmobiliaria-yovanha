import React, {useState} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HouseItem({imageUri,rating, name, address, size, price, bedroom, bathroom}) {
    const [isSelected, setSelection] = useState(false);
    return(
        <View style = {styles.houseContainer}>
            <View style = {styles.imgContainer}>
                <ImageBackground source = {imageUri} style = {styles.images} imageStyle={styles.images}></ImageBackground>    
                <View style = {styles.ratingContainer}>
                    <Icon
                    name = 'star'
                    color = '#EEBA00'
                    />
                    <Text style = {styles.ratingText}> {rating} </Text>
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
                        onPress={() => setSelection(!isSelected)}
                        name={isSelected ? 'md-heart-circle-outline' : 'md-heart-circle'}
                        size = {27}
                        color = "#00B074"
                     />
                </View>
            </View>   
        </View>
    );
}

const styles = StyleSheet.create({
    address:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    addressText:{
        fontFamily: "Poppins-Regular",
        fontSize: 13,
        paddingLeft: 7, 
    },
    details:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    images:{
        borderRadius: 10,
        height: 110,
        position: 'absolute',
        width: 110,  
    },
    imgContainer:{
        alignItems:'center',
        height: 110,
        paddingTop: 75,
        width: 110,
    },
    infoContainer:{
        paddingLeft: 15,
        justifyContent: 'space-between',
        width: 200,
    },
    infoText: {
        fontFamily: "Poppins-SemiBold",
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
        fontSize: 17,
        fontFamily: "Poppins-SemiBold", 
    },
    price: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',  
    },
    priceText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
    },
    ratingContainer: {
        alignItems: 'center', 
        backgroundColor: '#FBEDB5',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 4,
    },
    ratingText: {
        color: '#7A6229',
        fontWeight: '700',
    },
});