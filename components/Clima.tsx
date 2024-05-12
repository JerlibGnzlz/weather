import { Image, StyleSheet, Text, View } from "react-native";


interface IResultado {
    weather: {
        description: any;
        icon: string
    };
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
    const { list, city, weather } = resultado

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
                    <Image
                        style={{ width: 66, height: 58 }}
                        source={{ uri: `http://openweathermap.org/img/w/${ list[1].weather[0].icon }.png` }}
                    />
                </Text>

                <View style={styles.temperaturas}>
                    <Text style={styles.temperatura}>
                        <Text style={styles.texto}>Min{" "}{parseInt(list[0].main.temp_min - kelvin)} &#x2103;</Text>
                    </Text>

                    <Text style={styles.temperatura}>
                        <Text style={styles.texto}>Max{" "}{parseInt(list[0].main.temp_max - kelvin)} &#x2103;</Text>
                    </Text>
                </View>
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
        // marginRight: 20
    },
    actual: {
        fontSize: 80,
        marginRight: 0,
        fontWeight: "bold"
    },
    temperatura: {
        margin: 10,
        fontSize: 24,
        fontWeight: "bold",

    },
    temperaturas: {
        flexDirection: "row",
        justifyContent: "center"
    }
});
