import { StyleSheet, View, Text } from "react-native";


export default function OrDivider(){
    return(
        <View style={styles.container}>
            <View style={styles.divider}/>
            <Text style={styles.text}>or</Text>
            <View style={styles.divider}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: '#D6D6D6'  
    },
    text: {
        fontSize: 18,
        marginHorizontal: 8,
        marginVertical: 14,
    }
})