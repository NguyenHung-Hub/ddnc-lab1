import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Lab1a from "./src/screen/lab1a/Lab1a";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // <SafeAreaProvider>
        //     <NavigationContainer>
        //         <Stack.Navigator>
        //             <Stack.Screen name="Lab1a" component={Lab1a} />
        //         </Stack.Navigator>
        //     </NavigationContainer>
        // </SafeAreaProvider>
        <>
            <Lab1a />
        </>
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
