import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Lab1a from "./src/screen/lab1a/Lab1a";
import Lab1c from "./src/screen/lab1c/Lab1c";
import Lab1b from "./src/screen/lab1b/Lab1b";
import Lab1d from "./src/screen/lab1d/Lab1d";
import Lab1e from "./src/screen/lab1e/Lab1e";

const Stack = createNativeStackNavigator();

export default function App() {
    const config = {
        animation: "spring",
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{
                            animation: "slide_from_bottom",
                        }}
                        name="Lab1a"
                        component={Lab1a}
                    />
                    <Stack.Screen
                        options={{
                            animation: "slide_from_right",
                        }}
                        name="Lab1b"
                        component={Lab1b}
                    />
                    <Stack.Screen
                        options={{
                            animation: "slide_from_right",
                        }}
                        name="Lab1c"
                        component={Lab1c}
                    />
                    <Stack.Screen
                        options={{
                            animation: "fade_from_bottom",
                        }}
                        name="Lab1d"
                        component={Lab1d}
                    />
                    <Stack.Screen name="Lab1e" component={Lab1e} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
