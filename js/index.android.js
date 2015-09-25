import React, { View, Text, Component } from 'react-native';


class App extends Component {
    constructor() {
        super();
    }

    render() {
        return <View style={styles.container}>
                    <Text style={styles.text_item}>Welcome to react native</Text>
            </View>
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text_item: {
        alignSelf: 'center'
    }
});