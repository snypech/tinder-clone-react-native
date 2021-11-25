import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import useAuth from '../hooks/useAuth';
import tw from'tailwind-rn';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons} from'@expo/vector-icons'

const HomeScreen = () => {
    const navigation = useNavigation();
    const {user, logout}=useAuth()
    return (
        <SafeAreaView>
            <View style={tw('flex-row items-center justify-between px-4')}>
                <TouchableOpacity>
                    <Image 
                    source={{
                        uri:user.photoURL
                    }}
                    style={tw('h-10 w-10 rounded-full')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image 
                    source={require("../icon2.png")}
                    style={tw('h-14 w-14')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='chatbubble-sharp' size={30} color='#FF5864'/>
                </TouchableOpacity>
            </View>
            <Text>Im the homescreen</Text>
            <Button title="Go to the chat screen" onPress={()=>navigation.navigate('ChatScreen')}/>
            <Button title="Logout" onPress={()=>logout()}/>
        </SafeAreaView>
    )
}

export default HomeScreen
