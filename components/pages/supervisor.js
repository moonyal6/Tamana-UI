import { Image, ScrollView, StyleSheet, View } from "react-native";
import { staticStyles, supervisorData } from "./constants";
import { StatusBar } from 'expo-status-bar'
import NavigationBar from "../supervisor-components/NavigationBar";
import Header from "../supervisor-components/Header";
import Tile from "../supervisor-components/Tile";


export default function SupervisorPage(){
    return(
        
        <View style={staticStyles.flex}>
            <StatusBar translucent/> 

            {/* Page Styling */}
            <Image style={staticStyles.absolute} 
                source={require('../../assets/background-line.png')}/>  
            <Image style={styles.bottomVector} 
                source={require('../../assets/bottom-vector.png')}/>

            {/* Header */}
            <Header/>    

            {/* Body */}
            <View style={staticStyles.flex}>
                <ScrollView style={styles.tilesContainer}>                 
                    {supervisorData.map((user, index) => <Tile 
                        key={index}
                        name={user.name}
                        photo={user.photo}
                        id={user.id}
                        classId={user.classId}
                        type={user.type}
                    />)}
                </ScrollView>
            </View>
            <NavigationBar/>
        </View>
    )
}


const styles = StyleSheet.create({  
    tilesContainer: {
        paddingHorizontal: 24, 
    },
    bottomVector: {
        position: 'absolute',
        bottom: -7,
        right: 0,    
      },
})
