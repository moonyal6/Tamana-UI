import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { staticStyles } from '../pages/constants';


export default function Page({ children }) {
  return (
    <View style={staticStyles.flex}>
        <StatusBar translucent/> 

        {/* Background */}
        <Image style={staticStyles.absolute} 
            source={require('../../assets/background-line.png')}/>
        <LinearGradient style={styles.headShader} 
            colors={['#72CEB5', 'transparent']}/>
        <LinearGradient style={staticStyles.flex} 
          colors={['#00945ECC', '#00B189CC']} end={{ x: 0.5, y: 0.65 }}>
          {/* Body */}
          {children}
        </LinearGradient>

        {/* Bottom Green Bump */}
        <Image style={styles.bottomVector} 
            source={require('../../assets/bottom-vector.png')}/>

    </View>
  );
}


const styles = StyleSheet.create({  
  headShader: {
    height: '15%',
    position: 'absolute',
    width: '100%',
  },

  bottomVector: {
    position: 'absolute',
    bottom: -7,
    right: 0,    
  },
});
