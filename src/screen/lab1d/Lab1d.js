import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";

import eye from "../../../assets/eye.png";
import facebook from "../../../assets/lab1d/facebook.png";
import google from "../../../assets/lab1d/google.png";

export default function Lab1d({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text1}>LOGIN</Text>

            <View style={styles.wrapperForm}>
                <TextInput placeholder="Email" style={styles.input} />
                <View style={styles.wrapperPass}>
                    <TextInput
                        placeholder="Password"
                        style={styles.inputPass}
                    />
                    <Image source={eye} />
                </View>

                <TouchableOpacity style={styles.customBtn}>
                    <Text style={styles.textBtn}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textcontainer}>
                <Text style={styles.text2}>
                    When you agree to terms and conditions
                </Text>
                <Text
                    style={styles.text3}
                    onPress={() => navigation.navigate("Lab1b")}
                >
                    For got your password?{" "}
                </Text>
                <Text style={styles.text4}>Or login with </Text>
            </View>
            <View style={styles.socialContainer}>
                <View style={styles.facebook}>
                    <Image source={facebook} />
                </View>
                <View style={styles.zalo}>
                    <Text style={styles.zaloText}>Z</Text>
                </View>
                <View style={styles.google}>
                    <Image source={google} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "space-evenly",

        height: "100%",
        width: "100%",

        paddingVertical: 40,
        paddingHorizontal: 32,

        backgroundColor: "#D8EFDE",
    },
    text1: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
    },

    wrapperForm: {
        flexDirection: "column",
        alignItems: "center",

        marginTop: 40,
    },

    input: {
        marginBottom: 32,
        paddingHorizontal: 16,

        width: "100%",
        height: 60,
        fontSize: 20,

        backgroundColor: "#C9E0D0",
    },
    wrapperPass: {
        flexDirection: "row",
        alignItems: "center",

        marginBottom: 32,
        paddingRight: 16,
        backgroundColor: "#C9E0D0",
    },
    inputPass: {
        flex: 1,
        paddingHorizontal: 16,

        height: 60,
        fontSize: 20,
    },

    customBtn: {
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 20,

        width: "100%",

        backgroundColor: "#C34E3B",
        borderRadius: 2,
    },
    textBtn: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
    },
    textcontainer: {
        flexDirection: "column",
        alignItems: "center",
    },

    text2: {
        marginTop: 20,

        fontSize: 18,
        textAlign: "center",
    },
    text3: {
        marginTop: 20,

        fontSize: 18,
        textAlign: "center",
        color: "#5D25FA",
    },
    text4: {
        marginTop: 20,

        fontSize: 18,
        textAlign: "center",
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 30,
    },
    facebook: {
        flex: 1,
        paddingTop: 8,
        height: "100%",
        alignItems: "center",
        backgroundColor: "#275A8D",
        borderRadius: 2,
    },
    zalo: {
        flex: 1,
        backgroundColor: "#1593C5",
        alignItems: "center",
        borderRadius: 2,
    },
    zaloText: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold",
    },
    google: {
        flex: 1,
        alignItems: "center",

        paddingTop: 4,
        height: "100%",

        borderWidth: 1,
        borderColor: "#0E88D3",
        borderRadius: 2,
    },
});
