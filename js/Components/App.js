import React, { View, Text, StyleSheet, Component } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text_item}>Welcome to react native</Text>
              <Text style={[styles.text_item, {fontSize: 20}]}>Android | iPhone</Text>
              <Text style={[styles.text_item, {fontSize: 20, marginTop: 20}]}>Cmd/ctrl + save to update</Text>
            </View>
            );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text_item: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#123652'
    }
});

export default App;





