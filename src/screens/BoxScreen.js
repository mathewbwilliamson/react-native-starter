import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const BoxScreen = () => {
    return (
        <>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Box Screen</Text>
            </View>
            <View style={styles.viewStyleFlex}>
                <Text style={styles.textStyleOneFlex}>Child #1</Text>
                <Text style={styles.textStyleTwoFlex}>Child #2</Text>
                <Text style={styles.textStyleThreeFlex}>Child #3</Text>
            </View>
            <View style={styles.viewStylePosition}>
                <Text style={styles.textStyleOnePosition}>Child #1</Text>
                <Text style={styles.textStyleTwoPosition}>Child #2</Text>
                <Text style={styles.textStyleThreePosition}>Child #3</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 20,
        marginHorizontal: 30,
    },
    textStyle: {
        marginVertical: 20,
        marginHorizontal: 30,
        borderColor: 'red',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    viewStyleFlex: {
        borderColor: 'black',
        borderWidth: 3,
        height: 200,
        alignItems: 'center',
        // justifyContent: 'space-around',
        // flexDirection: 'row',
    },
    textStyleOneFlex: {
        borderColor: 'red',
        borderWidth: 3,
        flex: 2,
    },
    textStyleTwoFlex: {
        borderColor: 'red',
        borderWidth: 3,
        alignSelf: 'flex-end',
        flex: 1, // Makes it expand to fill as much space as possible
    },
    textStyleThreeFlex: {
        borderColor: 'red',
        borderWidth: 3,
        flex: 1,
    },
    viewStylePosition: {
        borderColor: 'black',
        borderWidth: 3,
        height: 200,
        marginTop: 20,
    },
    textStyleOnePosition: {
        borderColor: 'red',
        borderWidth: 3,
    },
    // Trick to get Child to cover entire parent container
    textStyleTwoPosition: {
        borderColor: 'red',
        borderWidth: 3,
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: 'red',
    },
    textStyleThreePosition: {
        borderColor: 'red',
        borderWidth: 3,
    },
});
