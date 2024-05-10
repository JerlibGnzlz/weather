import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Formulario } from "@/components/Formulario";

export default function Page() {
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            placeholder="Ciudad"
            placeholderTextColor="#c3bebe"
          />
        </View>

        <View>
          <Picker>
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
          <View>
            <Text>Buscar Clima</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formulario: {
    marginTop: 100,
  },
});
