import { StyleSheet, TouchableOpacity , Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export default function AppButton({ text, color, icon }){
    let styles = styleSheet(color) 
    return(
        <TouchableOpacity style={styles.button}>
            {icon && <FontAwesomeIcon style={styles.icon} icon={icon} 
            size={22}/>}  
            <Text style={styles.text}>{text}</Text> 
        </TouchableOpacity>
        
    )
}


const styleSheet = (color) => StyleSheet.create({
    button: {
        width: '100%',
        height: 50 , 
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
    },
    icon: {
        marginRight: 10,
        color: 'white'
    }
  });