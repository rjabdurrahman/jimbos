
import React from 'react'
import { View } from 'react-native';
import TopSlider from './TopSlider';
import Header from './Header';

export default function Homepage() {
    return (
        <View
            style={{ flex: 1 }}
        >
            <Header />
            <TopSlider />
        </View>
    )
}