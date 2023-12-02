import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function Input({ label, password = false }){
    /// Crating a React hook to update Input value on value change 
    const [text, onChangeText] = React.useState('');

    return(
        <View style={styles.container}>

            <Text style={styles.label}>
                {label}
            </Text>
            
            <TextInput
                secureTextEntry={password}
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between'
    },

    label: {
        fontWeight: '700',
        fontSize: 14,
        marginBottom: 10,
        lineHeight: 20,
    },

    input: {
      height: 45,
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderColor: '#858585'
    },
  });