import { StyleSheet, Text, View } from "react-native";

import { Header } from "../components";

export function PaymentScreen({ payment, goToHome }) {
    return <View style={styles.container}>
        <Header goToHome={goToHome} />
        <View style={styles.container}>
            <View style={styles.attrContainer}>
                <Text style={styles.title}>Amount</Text>
                <Text style={styles.value}>{payment.amount} TND</Text>
            </View>
            <View style={styles.attrContainer}>
                <Text style={styles.title}>Type</Text>
                <Text style={styles.value}>{payment.type}</Text>
            </View>
            <View style={styles.attrContainer}>
                <Text style={styles.title}>Description</Text>
                <Text style={styles.value}>{payment.description}</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 10,
    },
    attrContainer: {
        marginVertical: 5,
    },
    value: {
        fontSize: 28,
    }
});