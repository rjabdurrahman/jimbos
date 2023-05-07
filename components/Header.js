import { Box, Center } from 'native-base'
import React from 'react'
import HeaderTop from './HeaderTop'
import { Image } from 'react-native'

export default function Header() {
    return (
        <Box
            paddingTop="12"
            paddingBottom="6"
            bg="tertiary.800"
        >
            <HeaderTop />
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
    )
}
