import { Image, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { primaryColor, textColor } from "../pages/constants";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faBackward, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return( 
        <View style={styles.container}>

            {/* Background */}
            <LinearGradient style={styles.shader} 
            colors={['#72CEB5', 'transparent']}/>
            <LinearGradient style={styles.background} 
                colors={['#00945ECC', '#00B189CC']} end={{ x: 0.5, y: 0.65 }}>  
                <Image style={styles.backgroundLogo}
                    source={require('../../assets/background-logo.png')}/>

                {/* Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.content}>

                        {/* Back Button */}
                        <View style={styles.button}>
                            <FontAwesomeIcon style={styles.icon} 
                                icon={faArrowLeft} size={18}/>
                        </View>

                        {/* Title */}
                        <Text style={styles.title}>Hi Supervisor</Text>

                        {/* Chat and Account */}
                        <View style={styles.accountRow}>
                            <FontAwesomeIcon icon={faMessage} size={24}/>
                            <View style={styles.button}>
                                <Image style={styles.accountPicture}
                                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/10316/10316931.png'}} />
                            </View>
                        </View>

                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    shader: {
        height: '100%',
        position: 'absolute',
        width: '100%',
      },
    container: {
        height: '15%',
        width: '100%',
        marginBottom: 6,
    },
    background: {
        height: '100%'
    },
    backgroundLogo: {
        position: 'absolute',
        width: '32%',
        left: -14,
        top: -10,
        resizeMode: 'cover'
    },
    contentContainer: {
        height: '100%',
        paddingBottom: 18,
        paddingHorizontal: 24,
        justifyContent: 'flex-end',        
    },
    button: {
        height: 44,
        width: 44,
        backgroundColor: textColor,
        borderRadius: 15,
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.39)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: 'white' 
    },
    title: {
        color: 'white',
        marginRight: 48,
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 24,
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
    },
    accountPicture: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    accountRow: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center'
    }
})
