import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Switch } from 'react-native-switch';
import { textColor } from "../pages/constants";

export default function AppSwitch({ text, beginTrue = false}){
    const [isEnable, setIsEnable] = useState(beginTrue); 

    return(

        <View style={styles.switch}>
            <Switch value={isEnable} onValueChange={() => setIsEnable(!isEnable)} 
                containerStyle={isEnable? styles.activeSwitch: styles.inactiveSwitch}
                renderActiveText={false}
                renderInActiveText={false}
                backgroundActive="black"
                backgroundInactive="white"
                circleBorderActiveColor="black"
                circleBorderInactiveColor="black"
                circleBorderWidth={2}
                barHeight={20}
                switchLeftPx={3}
                switchRightPx={2}
                switchWidthMultiplier={1.4}
                circleSize={24}
                switchBorderRadius={24}
            />    
            <Text style={styles.switchText}>{text}</Text>
        </View>
        
    )
}   


const styles = StyleSheet.create({
    activeSwitch: {
        borderWidth: 2,
        borderColor: 'black' 
    },
    inactiveSwitch: {
        borderWidth: 2,
        borderColor: '#00000047' 
    },
    switch: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    switchText: {
        fontSize: 16,
        fontWeight: '600',
        color: textColor,
    },
})