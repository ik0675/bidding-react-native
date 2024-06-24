import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function LoginScreen() {
  return (
    <View>
        <View style={{ display: 'flex', alignItems: 'center', marginTop: 100 }}>
            <Image style={{ width: 220, height: 420, borderRadius: 20, borderWidth: 6, borderColor: '#000' }} source={require('./../assets/images/temp.jpeg')} />
        </View>

        <View style={styles.style1}>
            <Text style={{ fontSize: 30, fontFamily: 'roboto-m', textAlign: 'center' }}>당신은
                <Text style={{color: Colors.PRIMARY}}> 입찰을 </Text> 
                
                딸수 있습니다
            </Text>
            <Text style={{ fontSize: 16, fontFamily: 'roboto-r', marginVertical: 15, textAlign: 'center', color: Colors.GRAY}}>정확한 예가 계산과 저렴한 수수료!</Text>

            <TouchableOpacity style={styles.btn}>
                <Text style={{ textAlign: 'center', color: '#fff', fontFamily:'roboro-m'}}> 시작하기 </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    style1: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: -20,
    },
    btn: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        borderRadius: 99,
        marginTop: 20
    }
})