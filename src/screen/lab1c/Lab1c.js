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
import HButton from "../../components/HButton";

export default function Lab1c({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.background}
                colors={[
                    "#fff",
                    "#D2F4F6",
                    "#fff",
                    "#fff",
                    "#D2F4F6",
                    "#D2F4F6",
                ]}
            >
                <View style={styles.textcontainer}>
                    <Text style={styles.text1}>code </Text>
                    <Text style={styles.text2}>verification</Text>
                    <Text style={styles.text3}>
                        Enter onetime password sent on
                        {`               `}
                        ++849092605798
                    </Text>
                </View>

                <View style={styles.wrapperInput}>
                    <TextInput style={styles.input} maxLength={1} />
                    <TextInput style={styles.input} maxLength={1} />
                    <TextInput style={styles.input} maxLength={1} />
                    <TextInput style={styles.input} maxLength={1} />
                    <TextInput style={styles.input} maxLength={1} />
                    <TextInput style={styles.input} maxLength={1} />
                </View>

                <HButton
                    text="VERIFY CODE"
                    bgColor="#E3C000"
                    fontSize={20}
                    textColor="black"
                    width="100%"
                    onPress={() => navigation.navigate("Lab1d")}
                />
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
        fontSize: 80,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    text2: {
        marginTop: 60,

        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
    },
    text3: {
        marginTop: 60,

        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    wrapperInput: {
        flexDirection: "row",
        alignItems: "center",

        marginTop: 40,

        width: "100%",
        borderWidth: 1,
        borderColor: "#000",
    },

    input: {
        flex: 1,
        paddingHorizontal: 8,
        height: 52,
        fontSize: 20,
        textAlign: "center",

        borderWidth: 1,
        borderColor: "#000",
    },

    // customBtn: {
    //     alignItems: "center",
    //     paddingVertical: 12,
    //     paddingHorizontal: 36,
    //     marginTop: 50,

    //     width: "100%",
    //     backgroundColor: "#E3C000",
    // },
    // textBtn: {
    //     color: "black",
    //     fontWeight: "bold",
    //     fontSize: 20,
    // },
});
