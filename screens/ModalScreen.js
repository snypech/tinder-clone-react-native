import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from'tailwind-rn';
import useAuth from '../hooks/useAuth';


const ModalScreen = () => {
  const {user} = useAuth();
  const [image,setImage]=useState(null);
  const [job,setJob]=useState(null);
  const [age,setAge]=useState(null);

  const incompleteForm= !image||!job||!age;
  return (
    <SafeAreaView style={tw('flex-1 items-center pt-10')}>
      <Image
        style={tw('h-20 w-full')}
        resizeMode="contain"
        source={{uri:'https://links.papareact.com/2pf'}}
      />
      <Text style={tw('text-xl text-gray-500 font-bold p-2')}>Welecome {user.displayName}</Text>
      <Text style={tw('text-center p-4 font-bold text-red-400')}>Step 1: The profile picture</Text>
      <TextInput 
        value={image}
        onChangeText={(text)=>setImage(text)}
        style={tw('text-center text-xl pb-2')}
        placeholder='Enter a profile picture URL'
      />
      <Text style={tw('text-center p-4 font-bold text-red-400')}>Step 2: The Occupation</Text>
      <TextInput 
        value={job}
        onChangeText={(text)=>setJob(text)}
        style={tw('text-center text-xl pb-2')}
        placeholder='Enter your occupation'
      />
      <Text style={tw('text-center p-4 font-bold text-red-400')}>Step 3: The Age</Text>
      <TextInput 
        value={age}
        onChangeText={(text)=>setAge(text)}
        style={tw('text-center text-xl pb-2')}
        placeholder='Enter your age'
        keyboardType='numeric'
      />
      <TouchableOpacity 
        disabled={incompleteForm}
        style={[tw('w-64 p-3 rounded-xl my-20'),incompleteForm? tw('bg-gray-200') : tw('bg-red-400')]}>
        <Text style={[tw('text-center text-white')]}>Update Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ModalScreen
