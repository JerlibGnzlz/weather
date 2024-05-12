import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { Formulario } from "@/components/Formulario";
import { Clima } from "@/components/Clima";




interface IResultado {
  resultado: string;
  name: string;
  city: {
    name: string;
  };
  list: any[]; // La propiedad 'list' es opcional
}
export default function Page() {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });


  const [resultado, guardarResultado] = useState<IResultado | null>(null);
  const [consultar, guardarConsultar] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarClima = async () => {
      if (consultar)
      {
        const apikey = `5f34fcd1c5c926315e0916bbf063c0a7`;
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ ciudad },${ pais }&appid=${ apikey }`;
        console.log(url)
        try
        {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);
        } catch (error)
        {
          mostrarAlerta();
        }
      }
    };
    consultarClima();
  }, [consultar, ciudad, pais]);

  const mostrarAlerta = () => {
    Alert.alert("Error", "No hay resultado intenta con otra ciudad o pais");
  };

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Clima
              resultado={resultado}
            />
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
