import React from 'react'
import Swiper from "react-native-swiper"
import { View, Image } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

export default function TopSlider() {
    return (
        <View style={{
            height: 100
        }}>
            <Swiper
                showsButtons={true}
                prevButton={<FontAwesome5
                    name="chevron-left"
                    color="white"
                    size={16}
                />}
                nextButton={<FontAwesome5
                    name="chevron-right"
                    color="white"
                    size={16}
                />}
                height={100}
                dotStyle={{ marginBottom: -20 }}
                activeDotStyle={{ marginBottom: -20 }}
            >
                <Image
                    source={require("./images/Jimbo-organic-slider.jpg")}
                    style={{
                        height: 100,
                        width: '100%'
                    }}
                />
                <Image
                    source={require("./images/Jimbo-story-slider.jpg")}
                    style={{
                        height: 100,
                        width: '100%'
                    }}
                />
                <Image
                    source={require("./images/plastic-free.jpg")}
                    style={{
                        height: 100,
                        width: '100%'
                    }}
                />
            </Swiper>
        </View>
    )
}
