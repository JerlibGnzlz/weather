import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Formulario } from "@/components/Formulario";



export default function Page() {
  return (
    <>
      <View style={styles.app}>
        <View style={styles.contenido}>
          <Formulario />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(109,148,46)",
    justifyContent: "center"

  },
  contenido: {
    marginHorizontal: 10
  }
});
