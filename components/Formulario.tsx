import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Animated,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

interface BusquedaProps {
  pais: string;
  ciudad: string;
}

export const Formulario = ({
  busqueda,
  guardarBusqueda,
}: {
  busqueda: BusquedaProps;
  guardarBusqueda: Function;
}) => {
  const { pais, ciudad } = busqueda;

  const [animationBtn] = useState(new Animated.Value(1));

  const consultarClima = () => {
    if (pais.trim() === "" || ciudad.trim() === "") {
      mostrarAlerta();
      return;
    }
  };

  const mostrarAlerta = () => {
    Alert.alert("Error", "Agrega una Ciudad y Pais para la Busqueda", [
      { text: "Entendido" },
    ]);
  };

  const animacionEtranda = () => {
    Animated.spring(animationBtn, {
      toValue: 0.9,
      useNativeDriver: false,
      friction: 4,
      tension: 30,
    }).start();
  };

  const animacionSalida = () => {
    Animated.spring(animationBtn, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{ scale: animationBtn }],
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            value={ciudad}
            onChangeText={(ciudad) =>
              guardarBusqueda({
                ...busqueda,
                ciudad,
              })
            }
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#c3bebe"
          />
        </View>

        <View>
          <Picker
            selectedValue={pais}
            onValueChange={(pais) =>
              guardarBusqueda({
                ...busqueda,
                pais,
              })
            }
            style={{ backgroundColor: "white", color: "black" }}>
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

        <TouchableWithoutFeedback
          onPressIn={() => animacionEtranda()}
          onPressOut={() => animacionSalida()}
          onPress={() => consultarClima()}>
          <Animated.View style={estiloAnimacion}>
            <Text style={styles.btn}>Buscar clima</Text>
          </Animated.View>
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
    textTransform: "uppercase",
  },
});
