import { Box, Center, Flex, Text } from 'native-base'
import React from 'react'
import { Image, View } from 'react-native'
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Process({
    img,
    text
}) {
    const [fontsLoaded] = useFonts({
        BebasNeue_400Regular,
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <Image
                source={img}
                alt="Jimbos"
                resizeMode="contain"
                style={{
                    height: 280,
                    width: '100%'
                }}
            />
            <Box
                bg="tertiary.100"
                paddingY="4"
            >
                <Center>
                    <Text
                        color="tertiary.800"
                        style={{
                            fontFamily: "BebasNeue_400Regular",
                            fontSize: 32,
                            lineHeight: 32
                        }}
                    >
                        {text}
                    </Text>
                    <Flex
                        direction="row"
                        justifyItems="center"
                    >
                        <Text
                            color="tertiary.700"
                            style={{ marginRight: 4, fontSize: 14 }}
                        >
                            Learn More
                        </Text>
                        <FontAwesome5
                            name="chevron-right"
                            color="#337D58"
                            size={14}
                            marginTop={3}
                        />
                    </Flex>
                </Center>
            </Box>
        </View>
    )
}
