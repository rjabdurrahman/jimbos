import React from 'react'
import Swiper from "react-native-swiper"
import { View, Image } from 'react-native';
import { LeftArrow, RightArrow } from './Arrow';
import { Text } from 'native-base';

export default function TopSlider() {
    return (
        <Swiper
            showsButtons={true}
            prevButton={<Text>Prev</Text>}
            nextButton={<Text>Next</Text>}
            height={100}
        >
            <View>
                <Image
                    source={require("./images/Jimbo-organic-slider.jpg")}
                    // resizeMode="contain"
                    style={{
                        height: 100,
                        width: '100%'
                    }}
                />
            </View>
            <View>
                <Image
                    source={require("./images/Jimbo-story-slider.jpg")}
                    // resizeMode="contain"
                    style={{
                        height: 100,
                        width: '100%'
                    }}
                />
            </View>
            <View>
                <Image
                    source={require("./images/plastic-free.jpg")}
                    // resizeMode="contain"
                    style={{
                        height: 100,
                        width: '100%'
                    }}
                />
            </View>
        </Swiper>
    )
}
