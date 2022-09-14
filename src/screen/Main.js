import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Lab1a from "./lab1a/Lab1a";
import Lab1b from "./lab1b/Lab1b";
import Lab1c from "./lab1c/Lab1c";
import Lab1d from "./lab1d/Lab1d";
import Lab1e from "./lab1e/Lab1e";

const Stack = createNativeStackNavigator();

function Main() {
    return (
        <>
            {/* <Lab1a /> */}
            {/* <Lab1b /> */}
            {/* <Lab1c /> */}
            {/* <Lab1d /> */}
            <Lab1e />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="1a" component={<Lab1a />} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default Main;
