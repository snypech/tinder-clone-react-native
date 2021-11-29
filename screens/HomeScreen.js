import { useNavigation } from '@react-navigation/core'
import React, { useRef } from 'react'
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native'
import useAuth from '../hooks/useAuth';
import tw from'tailwind-rn';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons, Entypo} from'@expo/vector-icons'
import Swiper from 'react-native-deck-swiper';

const burned_data=[
    {
        firstName:'Elizabeth',
        lastName:'Olsen',
        occupation:'Actress',
        photoURL:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2NTE5MzAyNjY3/elizabeth-olsen-20631899-1-402.jpg',
        age:32
    },
    {
        firstName:'Elon',
        lastName:'Musk',
        occupation:'Software Developer',
        photoURL:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg',
        age:40
    },
    {
        firstName:'Rafael',
        lastName:'Nadal',
        occupation:'Tennis player',
        photoURL:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5ODc2ODQzNzY2MTYzMDU1/gettyimages-982701222.jpg',
        age:35
    }
]

const HomeScreen = () => {
    const navigation = useNavigation();
    const {user, logout}=useAuth();
    const swipeRef= useRef(null);
    return (
        <SafeAreaView style={tw('flex-1')}>
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
                    <Ionicons name='chatbubble-sharp' size={30} color='#FF5864' onPress={()=>navigation.navigate('ChatScreen')}/>
                </TouchableOpacity>
            </View>
            <View style={tw('flex-1')}>
                <Swiper 
                containerStyle={tw('bg-transparent')} cards={burned_data} 
                ref={swipeRef}
                stackSize={5}
                cardIndex={0}
                animateCardOpacity
                verticalSwipe={false}
                overlayLabels={{
                    left:{
                        title:"NOPE",
                        style:{
                            label:{
                                textAlign:'right',
                                color:'red'
                            }
                        }
                    },
                    right:{
                        title:"MATCH",
                        style:{
                            label:{
                                textAlign:'left',
                                color:'green'
                            }
                        }
                    }
                }}
                onSwipedLeft={()=>{
                    console.log('left')
                }}
                onSwipedRight={()=>{

                }}
                renderCard={
                    (card)=>(
                        <View style={tw('bg-white h-3/4 rounded-xl')}>
                            <Image style={tw('flex-1 rounded-t-xl')} source={{uri:card.photoURL}}/> 
                            <View style={[tw('flex-row justify-between p-4 rounded-b-xl'),styles.cardShadow]}>
                                <View>
                                    <Text style={tw('text-xl font-bold')}>{card.firstName} {card.lastName}</Text>
                                    <Text>{card.occupation}</Text>
                                </View>
                                <Text style={tw('text-2xl font-bold')}>{card.age}</Text>
                            </View>
                            {/* <Text>{card.firstName}</Text> */}
                        </View>
                    )
                }
                />
            </View>
            <View style={tw('flex flex-row justify-evenly pb-4')}>
                <TouchableOpacity
                style={tw('bg-red-200 rounded-full w-16 h-16 items-center justify-center')}
                onPress={()=>swipeRef.current.swipeLeft()}>
                    <Entypo name= "cross" size={24} color='red'/>
                </TouchableOpacity>
                <TouchableOpacity
                style={tw('bg-green-200 rounded-full w-16 h-16 items-center justify-center')}
                onPress={()=>swipeRef.current.swipeRight()}>
                    <Entypo name= "heart" size={24} color= 'green'/>
                </TouchableOpacity>
            </View>
            {/* <Button title="Go to the chat screen" onPress={()=>navigation.navigate('ChatScreen')}/>
            <Button title="Logout" onPress={()=>logout()}/> */}
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:1
        },
        shadowOpacity:0.2,
        shadowRadius:1.41,
        elevation:2
    }
})