import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Button } from 'react-native'
import useAuth from '../hooks/useAuth';

const HomeScreen = () => {
    const navigation = useNavigation();
    const {logout}=useAuth()
    return (
        <View>
            <Text>Im the homescreen</Text>
            <Button title="Go to the chat screen" onPress={()=>navigation.navigate('ChatScreen')}/>
            <Button title="Logout" onPress={()=>logout()}/>
        </View>
    )
}

export default HomeScreen
