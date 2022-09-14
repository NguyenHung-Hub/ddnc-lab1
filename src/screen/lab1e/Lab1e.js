import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import eye from "../../../assets/eye.png";

export default function Lab1e({ navigation }) {
    const [radio, setRadio] = useState("");
    const [isHidePass, setIsHidePass] = useState(true);

    console.log(isHidePass);
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text1}>REGISTER</Text>

            <View style={styles.wrapperForm}>
                <TextInput placeholder="Name" style={styles.input} />
                <TextInput placeholder="Phone" style={styles.input} />
                <TextInput placeholder="Email" style={styles.input} />
                <View style={styles.wrapperPass}>
                    <TextInput
                        secureTextEntry={isHidePass}
                        placeholder="Password"
                        style={styles.inputPass}
                    />
                    <TouchableOpacity
                        onPress={() => setIsHidePass(!isHidePass)}
                    >
                        <Image source={eye} />
                    </TouchableOpacity>
                </View>
                <TextInput placeholder="Birthday" style={styles.input} />

                <View style={styles.radioContainer}>
                    <View style={styles.wrapperRadio}>
                        <RadioButton
                            status={radio === "male" ? "checked" : "unchecked"}
                            value="male"
                            onPress={() => setRadio("male")}
                        />
                        <Text>Male</Text>
                    </View>
                    <View style={styles.wrapperRadio}>
                        <RadioButton
                            status={
                                radio === "female" ? "checked" : "unchecked"
                            }
                            value="female"
                            onPress={() => setRadio("female")}
                        />
                        <Text>Female</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.customBtn}
                    onPress={() => navigation.navigate("Lab1d")}
                >
                    <Text style={styles.textBtn}>REGISTER</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textcontainer}>
                <Text style={styles.text2}>
                    When you agree to terms and conditions
                </Text>
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

    radioContainer: {
        flexDirection: "row",
        width: "100%",
    },
    wrapperRadio: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 16,
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
