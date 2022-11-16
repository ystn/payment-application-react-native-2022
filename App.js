import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { useState } from 'react';
import { HomeScreen, NewPaymentScreen, PaymentScreen, constants } from './screens';
import { PAYMENT_TYPE_RECEIVE, PAYMENT_TYPE_SEND } from './constants';

export default function App() {
  const [payments, setPayments] = useState([]);
  const [balance, setBalance] = useState(0);
  const [currentScreen, setCurrentScreen] = useState({name: constants.HOME_SCREEN, params: ""});

  function goToHome() {
    setCurrentScreen({name: constants.HOME_SCREEN, params: ""})
  }

  function goToSendPayment() {
    setCurrentScreen({name: constants.SEND_PAYMENT_SCREEN, params: ""})
  }

  function goToReceivePayment() {
    setCurrentScreen({name: constants.RECEIVE_PAYMENT_SCREEN, params: ""})
  }

  function goToPayment(id) {
    setCurrentScreen({name: constants.PAYMENT_SCREEN, params: id})
  }

  function goToHome() {
    setCurrentScreen({name: constants.HOME_SCREEN, params: ""})
  }

  const navigation = {
    goToHome,
    goToSendPayment,
    goToReceivePayment,
    goToPayment,
  }

  function appendPayment(payment) {
    setPayments(p => {
      try{
        let amount = parseInt(payment.amount);
        payment.type === PAYMENT_TYPE_RECEIVE ? setBalance(b => b + amount) : setBalance(b => b - amount);
        try{
          payment.id = p.reduce((prev, curr) => curr.id > prev.id ? curr : prev).id + 1;
        } catch(e) {
          payment.id = 0;
        }
        payment.goToPayment = navigation.goToPayment;
        return [...p, payment];
      } catch(e) {
        return p;
      }
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      { currentScreen.name === constants.HOME_SCREEN && <HomeScreen balance={balance} payments={payments} navigation={navigation} />}
      { currentScreen.name === constants.SEND_PAYMENT_SCREEN && <NewPaymentScreen goToHome={goToHome} appendPayment={appendPayment} type={PAYMENT_TYPE_SEND} />}
      { currentScreen.name === constants.RECEIVE_PAYMENT_SCREEN && <NewPaymentScreen goToHome={goToHome} appendPayment={appendPayment} type={PAYMENT_TYPE_RECEIVE} />}
      { currentScreen.name === constants.PAYMENT_SCREEN && <PaymentScreen payment={payments.filter(e => e.id === currentScreen.params)[0]} goToHome={navigation.goToHome} /> }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
});
