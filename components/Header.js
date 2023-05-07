import React from 'react'
import { Box, Center, Flex, HamburgerIcon, Menu, Spacer } from "native-base"
import { Pressable, View, Image } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

export default function Header() {
    return (
        <View
            style={{ flex: 1 }}
        >
            <Box
                paddingTop="12"
                paddingBottom="6"
                bg="tertiary.800"
            >
                <Flex
                    direction="row"
                    px="4"
                    pb="4"
                    bg="tertiary.800"
                    justifyItems="center"
                >
                    <Center>
                        <FontAwesome5 name="search" size={18} color="white" />
                    </Center>
                    <Spacer />
                    <Center>
                        <Flex
                            direction="row"
                        >
                            <FontAwesome5 name="facebook" size={18} color="white" />
                            <Spacer mx={1} />
                            <FontAwesome5 name="twitter" size={18} color="white" />
                            <Spacer mx={1} />
                            <FontAwesome5 name="youtube" size={18} color="white" />
                            <Spacer mx={1} />
                            <FontAwesome5 name="instagram" size={18} color="white" />
                        </Flex>
                    </Center>
                    <Spacer />
                    <Center>
                        <Menu
                            shadow={2}
                            w="190"
                            trigger={triggerProps => {
                                return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <HamburgerIcon
                                        color="white"
                                        size={6}
                                    />
                                </Pressable>;
                            }}
                        >
                            <Menu.Item>Arial</Menu.Item>
                            <Menu.Item>Nunito Sans</Menu.Item>
                            <Menu.Item>Roboto</Menu.Item>
                            <Menu.Item>Poppins</Menu.Item>
                            <Menu.Item>SF Pro</Menu.Item>
                            <Menu.Item>Helvetica</Menu.Item>
                            <Menu.Item isDisabled>Sofia</Menu.Item>
                            <Menu.Item>Cookie</Menu.Item>
                        </Menu>
                    </Center>
                </Flex>
                <Center
                    bg="tertiary.800"
                >
                    <Image
                        source={require("./images/jimbos_logo_white.png")}
                        alt="Jimbos"
                        resizeMode="contain"
                        style={{
                            height: 38
                        }}
                    />
                </Center>
            </Box>
        </View>
    )
}
