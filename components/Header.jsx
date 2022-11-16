import { StyleSheet, View, Button } from "react-native"

export function Header({ goToHome }) {
    return <View style={styles.container}>
        <Button title="< Back" onPress={goToHome} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
    },
});