import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
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
                        />
                    ))
                }
            </ScrollView>
        </View>
    );
}