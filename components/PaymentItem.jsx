import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { PAYMENT_TYPE_SEND } from '../constants';

export function PaymentItem({item}) {
    return <TouchableOpacity style={styles.container} onPress={() => item.goToPayment(item.id)}>
        <Text style={[styles.amount, {color: item.type === PAYMENT_TYPE_SEND ? 'red' : 'black'}]}>{item.amount} TND</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        padding: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    amount: {
        fontSize: 20,
    },
    type: {
        fontSize: 13,
    },
    description: {
        fontSize: 18,
    }
})