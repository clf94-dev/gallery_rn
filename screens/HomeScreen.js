import  React, {useState, useEffect,useRef} from 'react';
import {ScrollView,View, Text, Button, Image, FlatList, TouchableOpacity} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
export default function HomeScreen ({navigation}){
 
    return(
        
        <SafeAreaView edges={['right', 'bottom', 'left']}>
        <View>
            <Text>Home</Text>
        </View>
        </SafeAreaView>
        
    )
}