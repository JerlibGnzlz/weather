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
  weather: {
    icon: string
  };
  resultado: string;
  name: string;
  city: {
    name: string;
  };
  list: any[];

}



export default function Page() {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });


  const [resultado, guardarResultado] = useState<IResultado | null>(null);
  const [consultar, guardarConsultar] = useState(false);

  const [bgColor, guardarBgColor] = useState("rgb(109,148,46)")

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

          const kelvin = 273.15
          const { list } = resultado

          const actual = list[0].main.temp - kelvin

          if (actual < 10)
          {
            guardarBgColor("rgb(105,108,149)")
          } else if (actual >= 10 && actual < 25)
          {
            guardarBgColor("rgb(71,149,212)")

          } else
          {
            guardarBgColor("rgb(178,28,61)")
          }
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
  const bgColorApp = {
    backgroundColor: bgColor
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={[styles.app, bgColorApp]}>
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
    justifyContent: "center",
    marginVertical: 0,
  },
  contenido: {
    marginHorizontal: 12,
  },
});
