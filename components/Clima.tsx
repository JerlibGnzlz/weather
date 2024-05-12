import { StyleSheet, Text, View } from "react-native";


interface IResultado {
    resultado: string;
    name: string;
    city: {
        name: string;
    };
    list: any[];
}


export const Clima = ({ resultado }: { resultado: IResultado | null }) => {
    if (resultado === null)
    {
        return <Text>No hay datos de clima disponibles</Text>;
    }
    const { list, city } = resultado

    console.log(resultado)
    console.log(city.name, "CIUDAD")
    console.log("otros", list)
    const kelvin = 273.15
    return (
        <>
            <View style={styles.clima}>
                <Text style={[styles.texto, styles.actual]}>
                    {parseInt(list[0].main.temp - kelvin)}
                    <Text style={styles.temperatura}>&#x2103;</Text>
                </Text>
                <Text >{city.name}</Text>
            </View >
        </>

    )

};

const styles = StyleSheet.create({
    clima: {

    },
    texto: {
        color: "#FFF",
        fontSize: 30,
        textAlign: "center",
        marginRight: 20
    },
    actual: {
        fontSize: 80,
        marginRight: 0,
        fontWeight: "bold"
    },
    temperatura: {
        fontSize: 24,
        fontWeight: "normal"

    }
});
