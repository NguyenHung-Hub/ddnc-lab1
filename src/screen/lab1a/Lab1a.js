import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Lab1a({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.background}
                colors={["#C8F4F7", "#2AF5AE"]}
            >
                <View style={styles.circle}></View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text1}>Grow </Text>
                    <Text style={styles.text1}>your business</Text>
                </View>
                <Text style={styles.text2}>
                    We will help you to grow business using online server
                </Text>

                <View style={styles.containerBtn}>
                    <TouchableOpacity
                        style={styles.customBtn}
                        onPress={() => navigation.navigate("Lab1d")}
                    >
                        <Text style={styles.textBtn}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.customBtn}
                        onPress={() => navigation.navigate("Lab1e")}
                    >
                        <Text style={styles.textBtn}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.text3}>How we work?</Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
    },
    background: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 40,
        justifyContent: "center",
    },
    circle: {
        width: 180,
        height: 180,
        borderWidth: 20,
        borderRadius: 500,
        borderColor: "#000",
    },

    containerBtn: {
        flexDirection: "row",
        justifyContent: "space-between",

        marginTop: 60,
        width: "100%",
    },
    customBtn: {
        paddingVertical: 16,
        paddingHorizontal: 36,
        backgroundColor: "#E3C000",
    },
    textBtn: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
    },
    textcontainer: {
        flexDirection: "column",
        alignItems: "center",

        marginTop: 60,
    },
    text1: {
        fontSize: 28,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    text2: {
        marginTop: 60,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    text3: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});
