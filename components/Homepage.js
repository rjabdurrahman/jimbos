
import React from 'react'
import { View } from 'react-native';
import TopSlider from './TopSlider';
import Header from './Header';
import Process from './Process';
import { ScrollView } from 'native-base';
import Follow from './Follow';
import { JoinForm } from './JoinForm';

export default function Homepage() {
    return (
        <View
            style={{ flex: 1 }}
        >
            <Header />
            <ScrollView>
                <View style={{ height: 4, backgroundColor: 'gray' }} />
                <TopSlider />
                <View style={{ height: 4, backgroundColor: 'gray' }} />
                <Process
                    img={require("./images/Jimbos_onsale_squares.jpg")}
                    text="What's On Sale"
                />
                <Process
                    img={require("./images/Jimbos_curbside_squares.jpg")}
                    text="Online Ordering"
                />
                <Process
                    img={require("./images/Jimbos_ingredients_sq.jpg")}
                    text="Become a Jimbo's Vendor"
                />
                <Follow />
                <JoinForm />
            </ScrollView>
        </View>
    )
}