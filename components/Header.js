import React from 'react'
import { Center, Flex, HamburgerIcon, Menu, Spacer } from "native-base"
import { Pressable } from 'react-native';

export default function Header() {
    return (
        <Flex
            direction="row"
            py="12"
            px="4"
            bg="tertiary.800"
        >
            <Center
                _text={{
                    color: "white"
                }}
            >A</Center>
            <Spacer />
            <Center>B</Center>
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
    )
}
