import { StyleSheet, Text, View } from "react-native";


interface IResultado {
    resultado: string;
    name: string;
    city: {
        name: string;
    };
    list: any[]; // La propiedad 'list' es opcional
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

    return (
        <>
            <View style={styles.clima}>
                <Text>{list[0].main.temp}</Text>
                <Text>{city.name}</Text>
            </View >
        </>

    )

};

const styles = StyleSheet.create({
    clima: {

    }
});
