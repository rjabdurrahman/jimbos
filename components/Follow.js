import React from 'react'
import { Center, Flex, Spacer, Text, Circle } from 'native-base'
import { View } from 'react-native'
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Follow() {
    const [fontsLoaded] = useFonts({
        BebasNeue_400Regular,
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <Center
                py="6"
                bg="gray.700"
            >
                <Text
                    color="white"
                    style={{
                        fontFamily: "BebasNeue_400Regular",
                        fontSize: 38,
                        lineHeight: 38
                    }}
                >
                    Follow JIMBO'S
                </Text>
                <Flex
                    direction="row"
                    w="140"
                >
                    <Circle
                        size="28"
                        bg="gray.400"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <FontAwesome5 name="facebook" size={18} color="#4D4D4D" />
                    </Circle>
                    <Spacer mx={1} />
                    <Circle
                        size="28"
                        bg="gray.400"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <FontAwesome5 name="twitter" size={18} color="#4D4D4D" />
                    </Circle>
                    <Spacer mx={1} />
                    <Circle
                        size="28"
                        bg="gray.400"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <FontAwesome5 name="youtube" size={18} color="#4D4D4D" />
                    </Circle>
                    <Spacer mx={1} />
                    <Circle
                        size="28"
                        bg="gray.400"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <FontAwesome5 name="instagram" size={18} color="#4D4D4D" />
                    </Circle>
                </Flex>
            </Center>
        </View>
    )
}
