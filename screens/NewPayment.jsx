import { View, StyleSheet, TextInput, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';

import { Header } from '../components';
import { PAYMENT_TYPE_SEND } from '../constants';

export function NewPaymentScreen({ appendPayment, type, goToHome }) {
    const [ amount, setAmount ] = useState();
    const [ description, setDescription ] = useState();

    function savePayment() {
        appendPayment({amount, description, type});
        goToHome();
    }

    return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Header goToHome={goToHome} />
            <View style={styles.form}>
                <TextInput style={styles.amount} value={amount} onChangeText={setAmount} placeholder="Amount: 50" keyboardType="numeric"/>
                <TextInput style={styles.description} value={description} onChangeText={setDescription} multiline={true} placeholder="Description" />
                <TouchableOpacity style={styles.button} onPress={savePayment}>
                    <Text style={styles.buttonText}>{type === PAYMENT_TYPE_SEND ? 'Send': 'Receive'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        paddingHorizontal: 10,
    },
    form: {
        width: '100%',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    amount: {
        fontSize: 23,
        margin: 10,
    },
    description: {
        width: '100%',
        minHeight: 100,
        padding: 10,
        margin: 10,
        fontSize: 20,
    },
    button: {
        width: '60%',
        padding: 10,
        margin: 20,
        backgroundColor: 'green',
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
})