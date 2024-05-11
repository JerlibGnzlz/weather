import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formulario } from "@/components/Formulario";
import { useState, useEffect } from "react";

export default function Page() {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, guardarConsultar] = useState(false);

  const { ciudad, pais } = busqueda;
  useEffect(() => {
    if (consultar) {
      const apikey = `5f34fcd1c5c926315e0916bbf063c0a7`;

      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&appid=${apikey}`;

      console.log(url);
    }
  }, [consultar]);

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(109,148,46)",
    justifyContent: "center",
    marginVertical: 0,
  },
  contenido: {
    marginHorizontal: 12,
  },
});
