import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const TextScreen = () => {
    const [name, setName] = React.useState('');

    return (
        <View>
            <Text>Enter Name</Text>

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="hello"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />

            <Text>Input is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 20,
    },
});
