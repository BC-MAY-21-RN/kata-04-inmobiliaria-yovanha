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
                            key={houses.title}
                            name={houses.title}
                            imageUri={houses.src}
                            address={houses.address}
                            bedroom={houses.bedroom}
                            bathroom={houses.bathroom}
                            size={houses.size}
                            price={houses.price}
                        />
                        
                    ))
                }
            </ScrollView>
        </View>
    );
}
