import React from 'react';
import {ScrollView, View} from 'react-native';
import HouseItem from './HouseItem';

export default function VerticalList({data}) {
    return( 
        <View>
            <ScrollView>
                {
                    data.map(houses => (
                        <HouseItem
                            address={houses.address}
                            bathroom={houses.bathroom}
                            bedroom={houses.bedroom}
                            imageUri={houses.src}
                            key={houses.title}
                            name={houses.title}
                            price={houses.price}
                            rating={houses.rating}
                            size={houses.size}
                        />    
                    ))
                }
            </ScrollView>
        </View>
    );
}
