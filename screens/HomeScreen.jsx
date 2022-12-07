import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PaymentItem } from "../components";

export function HomeScreen({ balance, payments, navigation }) {
    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={[styles.title]}>Balance</Text>
            <Text style={[styles.balance, { color: balance >= 0 ? '#000000' : '#ff0000'}]}>{balance} TND</Text>
        </View>
        <FlatList data={[...payments].reverse()} renderItem={PaymentItem} />
        <View style={styles.footer}>
            <Image
                style={styles.logo}
                source={require('../assets/home.png')} />
            <TouchableOpacity onPress={navigation.goToSendPayment}>
                <Image
                    style={styles.logo}
                    source={require('../assets/carte-bancaire.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigation.goToReceivePayment} style={styles.receivePayment}><Text style={styles.plus}>+</Text></TouchableOpacity>
            <Image
                style={styles.logo}
                source={require('../assets/chart.png')} />
            <Image
                style={styles.logo}
                source={require('../assets/settings.png')} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingHorizontal: 10
    },
    header: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        fontSize: 48,
    },
    title: {
        fontSize: 28,
    },
    balance: {
        alignSelf: "flex-end",
        fontSize: 48,
    },
    footer: {
        width: '100%',
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    receivePayment: {
        position: 'relative',
        top: -25,
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 25,
    },
    plus: {
        height: '100%',
        width: '100%',
        textAlign: "center",
        textAlignVertical: 'center',
        fontSize: 35,
        color: 'white',
    },
    logo: {
        width: 32,
        height: 32,
        color: 'black',
    },
})