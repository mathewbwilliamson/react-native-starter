import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.marginBottom}>TEST ME KJSKJKdsfadf</Text>
            <Button
                onPress={() => navigation.navigate({ routeName: 'Components' })}
                title="Go to Components Demo"
                style={styles.marginBottom}
            />
            <Button
                onPress={() => navigation.navigate({ routeName: 'List' })}
                title="Go to List Demo"
                style={styles.marginBottom}
            />
            <Button
                onPress={() => navigation.navigate({ routeName: 'Image' })}
                title="Go to Image Demo"
                style={styles.marginBottom}
            />
            <Button
                onPress={() => navigation.navigate({ routeName: 'Counter' })}
                title="Go to Counter Demo"
                style={styles.marginBottom}
            />
            <Button
                onPress={() => navigation.navigate({ routeName: 'Color' })}
                title="Go to Color Demo"
                style={styles.marginBottom}
            />
            <Button
                onPress={() => navigation.navigate({ routeName: 'Square' })}
                title="Go to Square Demo"
                style={styles.marginBottom}
            />
            <Button
                onPress={() => navigation.navigate({ routeName: 'TextInput' })}
                title="Go to Text Input Demo"
                style={styles.marginBottom}
            />
            <Button
                onPress={() => navigation.navigate({ routeName: 'Box' })}
                title="Go to Box Screen Demo"
                style={styles.marginBottom}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    marginBottom: {
        marginBottom: 20,
    },
});

export default HomeScreen;
