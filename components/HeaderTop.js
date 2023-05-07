import React from 'react'
import { Center, Flex, HamburgerIcon, Menu, Spacer, Text } from "native-base"
import { Pressable } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

export default function HeaderTop() {
    return (
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
                    {[
                        'About',
                        'Community',
                        'Join Our Team',
                        'Departments',
                        'Locations'
                    ].map(name => <Menu.Item key={name}>
                        <Text
                            style={{
                                textTransform: 'uppercase'
                            }}
                        >{name}</Text>
                    </Menu.Item>)}
                </Menu>
            </Center>
        </Flex>
    )
}
