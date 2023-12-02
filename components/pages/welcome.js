import { Image, StyleSheet, View } from "react-native";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import Page from "../auth-components/Page";
import AppButton from "../auth-components/AppButton";
import { buttonPrimaryColor, buttonSecondaryColor } from "./constants";
import OrDivider from "../auth-components/OrDivider";


export default function WelcomePage(){
    return(
        <Page>

            {/* Header Logo */}
            <View style={styles.header}>
                <Image source={require('../../assets/logo-full.png')}/>
            </View>

            {/* Body */}
            <View style={styles.body}>
                {/* Log In Buttons */}
                <AppButton color='#000' icon={faApple} text='Sign with Apple'/>
                <AppButton color={buttonPrimaryColor} 
                    text='Other sign up option'
                />

                {/* Divider */}
                <OrDivider style={styles.orDivider}/>
                
                {/* Sign Up Button */}
                <AppButton color={buttonSecondaryColor} 
                    text='Already have an account? Log In'
                />

            </View>
        </Page>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    body: {
        flex: 11,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems:  'center',
        padding: 25,
        gap: 12
      },

    orDivider: {
        marginVertical: 10,
    }
})