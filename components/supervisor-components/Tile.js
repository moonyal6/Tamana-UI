import { Image, StyleSheet, Switch, Text, View } from "react-native";
import { primaryColor, secondaryColor, textColor } from "../pages/constants";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import AppSwitch from "./AppSwitch";

export default function Tile({ 
    name, photo, id = '5', classId = 'A', type = 'home', isLast = false})
    {
    return(
        <View style={styles.container}>
            <View style={type == 'bus'?
                styles.typeBusContainer: 
                styles.typeHomeContainer}>
                    <Text style={styles.typeText}>{type}</Text>
            </View>
            <View style={styles.userContainer}>
                <LinearGradient style={styles.accountPictureContainer} 
                    colors={[primaryColor, 'transparent']}>
                    <Image style={styles.accountPicture}
                    source={photo}/>
                </LinearGradient>
                <View style={styles.tileContent}>
                    <View style={styles.accountInfoContainer}>
                        <Text style={styles.accountName}>{name}</Text>
                        <Text style={styles.accountId}>#{id}</Text>
                        <Text style={styles.accountClass}>Class: {classId}</Text>
                    </View>
                    <View style={styles.ringIconContainer}>
                        <FontAwesomeIcon icon={faPhone} size={22}/>
                    </View>
                </View>
            </View>
            <View style={styles.switchesContainer}>
                <AppSwitch text='Picked' beginTrue/>
                <AppSwitch text='Mark Absent'/>
            </View>
            {!isLast && <View style={styles.divider}/>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 18,
    },
    typeHomeContainer: {
        alignSelf: 'flex-end',
        backgroundColor: primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8
    },
    typeBusContainer: {
        alignSelf: 'flex-end',
        backgroundColor: secondaryColor,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8
    },
    typeText: {
        color: textColor,
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 16
    },
    userContainer: {        
        flexDirection: 'row',
    },
    accountPictureContainer: {
        borderRadius: 15,   
        paddingHorizontal: 17,
        paddingTop: 14,
        width: '28%',
        aspectRatio: 93/77,
        alignItems: 'center',
        justifyContent: 'flex-end',
        shadowOffset: {width: 2, height: 6},
        shadowRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.10)'  
    },
    accountPicture: {
        height: '100%',
        width: '100%',
        borderRadius: 11,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowColor: 'rgba(0, 0, 0, 0.20)'
    },
    tileContent: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    accountInfoContainer: {
        marginLeft: 14,
        marginTop: 2,
        justifyContent: 'space-between',
    },
    accountName: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 26,
        color: textColor
    },
    accountId: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: '#979797'
    },
    accountClass: {
        fontSize: 18,
        fontWeight: '700',
        color: '#00B189'
    },
    ringIconContainer: {
        justifyContent: 'center',
        paddingRight: 12,
    },
    switchesContainer: {
        marginTop: 34,
        marginBottom: 22,
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    
    divider: {
        width: '100%',
        height: 1.5,
        backgroundColor: '#EBEBEB',
    }
})