import { Image, StyleSheet, View } from "react-native";
import Page from "../auth-components/Page";
import AppButton from "../auth-components/AppButton";
import { googleBlueButton, buttonPrimaryColor } from "./constants";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import OrDivider from "../auth-components/OrDivider";
import Input from "../auth-components/Input";
import { Text } from "react-native";


export default function SignUpPage(){
    return(
        <Page>

            {/* Header */}
            <View style={styles.header}>
                <Image style={styles.logo} 
                    source={require('../../assets/logo.png')}/>
            </View>

            {/* Body */}
            <View style={styles.body}>
                {/* Sign In Button */}
                <AppButton color={googleBlueButton} icon={faGoogle} 
                    text='Sign with Google'/>
                <OrDivider style={styles.orDivider}/>

                {/* Inputs */}
                <Input label='Email'/>
                <Input label='Password' password/>
                <Input label='Repeat Password' password/>
                <View style={styles.termsContainer}>
                    <Text style={styles.terms}>
                        Creating an account means you’re okay with our <Text 
                        style={styles.termsLink}>Terms of Service</Text>, <Text 
                        style={styles.termsLink}>Privacy 
                        Policy</Text>, and our default Notification Settings.
                    </Text>
                </View>

                {/* Sign Up Button */}
                <AppButton color={buttonPrimaryColor} text='Sign up'/>

                <Text style={styles.haveAccountText}>
                    Already have an account? Log In
                </Text>
            </View>
        </Page>
    )
}


const styles = StyleSheet.create({
    header: {
        flex: 9,
        alignItems: 'center'
    },
    logo: {
        position: 'absolute',
        top: '20%',
      },

    body: {
        flex: 20,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems:  'center',
        padding: 25,
        gap: 10
    },
    orDivider: {
        marginTop: 10,
    },

    termsContainer: {
        width: '100%',
        marginVertical: 10,
    },
    terms: {
        fontSize: 12,
        fontWeight: '400',
    },
    termsLink: {
        fontWeight: '700',
        color: '#ECB22F',
        textDecorationLine: 'underline'
    },
    haveAccountText: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: 3,
    }
})