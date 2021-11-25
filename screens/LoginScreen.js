import { useNavigation } from '@react-navigation/core';
import React, {useLayoutEffect} from 'react'
import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth'
import tw from'tailwind-rn';

const LoginScreen = () => {
    const {loading,signInWithGoogle} = useAuth();
    const navigation = useNavigation();

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown:false
    //     })
    // }, [])
    return (
        <View style={tw('flex-1')}>
            <ImageBackground
            source={{uri:'https://tinder.com/static/tinder.png'}}
            style={tw('flex-1 items-center')}
            resizeMode='cover'
            >
                <TouchableOpacity style={[tw('bg-white rounded-full w-52 p-4'),{top:"75%"}]}
                onPress={signInWithGoogle}
                >
                    {/* <Text>{loading ? 'loading...' : 'Login to the app'}</Text> */}
                    <Text style={[tw('font-semibold text-center')]}>Sign in & get swiping</Text>
                </TouchableOpacity>
                
                {/* <Button title='login' onPress={signInWithGoogle}/>  */}
            </ImageBackground>
            
        </View>
    )
}

export default LoginScreen
