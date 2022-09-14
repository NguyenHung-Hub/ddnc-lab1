import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import lock from "../../../assets/lab1b/lock.png";
import { AntDesign } from "@expo/vector-icons";

export default function Lab1b() {
    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.background}
                colors={["#fff", "#fff", "#CBF5E7", "#C7F5D5"]}
            >
                <Image source={lock} />
                <View style={styles.textcontainer}>
                    <Text style={styles.text1}>forget </Text>
                    <Text style={styles.text1}>password</Text>
                </View>
                <Text style={styles.text2}>
                    Provide your account's email for which you want to reset
                    your password
                </Text>
                <View style={styles.wrapperInput}>
                    <AntDesign
                        style={styles.icon}
                        name="mail"
                        size={24}
                        color="black"
                    />
                    <TextInput style={styles.input} placeholder="Email" />
                </View>

                <TouchableOpacity style={styles.customBtn}>
                    <Text style={styles.textBtn}>NEXT</Text>
                </TouchableOpacity>
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
    textcontainer: {
        flexDirection: "column",
        alignItems: "center",

        marginTop: 40,
    },
    text1: {
        fontSize: 28,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    text2: {
        marginTop: 30,

        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    wrapperInput: {
        flexDirection: "row",
        alignItems: "center",

        marginTop: 40,

        width: "100%",
        backgroundColor: "#C4C4C4",
    },
    icon: {
        marginHorizontal: 16,
    },
    input: {
        flex: 1,
        paddingHorizontal: 8,
        height: 52,

        fontSize: 20,
    },

    customBtn: {
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 50,

        width: "100%",
        backgroundColor: "#E3C000",
    },
    textBtn: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
});
