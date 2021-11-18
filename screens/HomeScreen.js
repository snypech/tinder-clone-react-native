import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Im the homescreen</Text>
            <Button title="Go to the chat screen" onPress={()=>navigation.navigate('ChatScreen')}/>
        </View>
    )
}

export default HomeScreen
