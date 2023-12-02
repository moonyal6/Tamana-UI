import { Image, StyleSheet, Text, View } from 'react-native';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Page from '../auth-components/Page';
import Input from '../auth-components/Input';
import AppButton from '../auth-components/AppButton';
import OrDivider from '../auth-components/OrDivider';
import { buttonPrimaryColor, googleBlueButton } from './constants';

export default function SignInPage() {
  return (
    <Page>

      {/* Header Logo */}
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo.png')}/>
      </View> 

      {/* Body */}
      <View style={styles.body}>

        {/* Inputs */}
        <Input label='Email'/>
        <Input label='Password' password/>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Forgot your Password?</Text>
        </View>

        {/* Log In button */}
        <AppButton color={buttonPrimaryColor} text='Log in' />

        {/* Divider */}
        <OrDivider style={styles.OrDivider}/>

        {/* Other Log In options */}
        <View style={styles.providersButtons}>
          <AppButton color='black' icon={faApple} text='Sign with Apple'/>
          <AppButton color={googleBlueButton} icon={faGoogle} text='Sign with Google'/>
        </View>

      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    top: '20%',
  },

  header: {
    flex: 10, 
    alignItems: 'center',
  },

  body: {
    flex: 19,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    padding: 25,
    gap: 12
  },
  
  forgotPasswordContainer: {
    width: '100%',
  },

  forgotPassword: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'right'
  },

  providersButtons: {
    width: '100%',
    marginTop: 18,
    gap: 10,
  }
});
