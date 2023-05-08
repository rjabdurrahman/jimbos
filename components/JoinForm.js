import React from "react";
import { Button, Center, FormControl, Input, Text, VStack } from "native-base";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";

export function JoinForm() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});

    const [fontsLoaded] = useFonts({
        BebasNeue_400Regular,
    });
    if (!fontsLoaded) {
        return null;
    }

    const validate = () => {
        if (formData.firstName === undefined) {
            setErrors({
                ...errors,
                firstName: 'Name is required'
            });
            return false;
        } else if (formData.firstName.length < 3) {
            setErrors({
                ...errors,
                firstName: 'Name is too short'
            });
            return false;
        }

        return true;
    };

    const onSubmit = () => {
        validate() ? console.log('Submitted') : console.log('Validation Failed');
    };

    return <Center
        flex={1}
        bg="gray.700"
        pb={4}
    >
        <Center>
            <Text
                color="white"
                style={{
                    fontFamily: "BebasNeue_400Regular",
                    fontSize: 24,
                    lineHeight: 24
                }}
            >
                Join The Jimbos Community Today
            </Text>
        </Center>
        <VStack width="90%" mx="3" maxW="300px">
            <FormControl isRequired isInvalid={'name' in errors}>
                <FormControl.Label
                    _text={{
                        bold: true
                    }}
                >
                    First Name
                </FormControl.Label>
                <Input
                    borderRadius="none"
                    bg="white"
                    placeholder="First"
                    onChangeText={value => setData({
                        ...formData,
                        firstName: value
                    })}
                    _invalid={{
                        color: 'white'
                    }}
                    _input={{
                        _focus: {
                            backgroundColor: 'white'
                        }
                    }}
                />
                <FormControl.Label
                    _text={{
                        bold: true
                    }}
                >
                    Last Name
                </FormControl.Label>
                <Input
                    borderRadius="none"
                    bg="white"
                    placeholder="Last"
                    onChangeText={value => setData({
                        ...formData,
                        lastName: value
                    })}
                />
                <FormControl.Label
                    _text={{
                        bold: true
                    }}
                >
                    Email Address
                </FormControl.Label>
                <Input
                    borderRadius="none"
                    bg="white"
                    placeholder="Email Address"
                    onChangeText={value => setData({
                        ...formData,
                        email: value
                    })}
                />
                <FormControl.Label
                    _text={{
                        bold: true
                    }}
                >
                    Jimbo's Location
                </FormControl.Label>
                <Input
                    borderRadius="none"
                    bg="white"
                    placeholder="Jimbo's Location"
                    onChangeText={value => setData({
                        ...formData,
                        location: value
                    })}
                />
                <FormControl.Label
                    _text={{
                        bold: true
                    }}
                >
                    Zip Code
                </FormControl.Label>
                <Input
                    borderRadius="none"
                    bg="white"
                    placeholder="Email Address"
                    onChangeText={value => setData({
                        ...formData,
                        zipCode: value
                    })}
                />
            </FormControl>
            <Button
                onPress={onSubmit}
                mt="5"
                colorScheme="cyan"
            >
                SIGN UP
            </Button>
        </VStack>
    </Center>;
}