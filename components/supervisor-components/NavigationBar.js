import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, View } from "react-native"


export default function NavigationBar(){
    return(
        <View style={styles.navigationBar}>
            <View style={styles.button}>
                <FontAwesomeIcon icon={faHouse} style={styles.icon} size={25}/>
            </View>
            
            <View style={styles.divider}/>

            <View style={styles.button}>
                <FontAwesomeIcon icon={faUser} style={styles.icon} size={25}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    navigationBar: {
        marginBottom: 60,
        marginHorizontal: 38,
        height: 48,
        borderRadius: 14,
        borderWidth: 0.7,
        borderColor: '#979797',
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
    },
    divider: {
        width: 1,
        marginVertical: 6,
        alignSelf: 'stretch',
        backgroundColor: 'black'
    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
})