import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

const Layout = ({children})=>{
    return (
      <View style={Styles.container}>
        <StatusBar backgroundColor='#F4538A'/>
       {children}
      </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        backgroundColor: "#63B3ED",
        padding: 20,
        flex: 1,
        alignItems: "center",
    }
})

export default Layout
