import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Picker } from '@react-native-picker/picker';
import React from "react";

interface formularioProps { }


export const Formulario: React.FC<formularioProps> = () => {
    return (
        <>
            <View style={styles.formulario}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Ciudad"
                        placeholderTextColor="#c3bebe"
                    />
                </View>

                <View>



                    <Picker
                        style={{ backgroundColor: "white", color: "black" }}
                    >
                        <Picker.Item label="-- Selecciona un pais --" value="" />
                        <Picker.Item label="Estados Unidos" value="US" />
                        <Picker.Item label="Mexico" value="MX" />
                        <Picker.Item label="Argentina" value="AR" />
                        <Picker.Item label="Colombia" value="CO" />
                        <Picker.Item label="Costa Rica" value="CR" />
                        <Picker.Item label="España" value="ES" />
                        <Picker.Item label="Peru" value="PE" />
                    </Picker>
                </View>


                <TouchableWithoutFeedback>
                    <View >
                        <Text style={styles.btn}>Buscar clima</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    formulario: {
        marginTop: 100,
    },
    input: {
        padding: 10,
        height: 50,
        backgroundColor: "white",
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
        color: "blue",
        fontWeight: "700",
    },
    btn: {
        textAlign: "center",
        backgroundColor: "green",
        padding: 10,
        marginTop: 40,
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        textTransform: "uppercase"
    }
});
