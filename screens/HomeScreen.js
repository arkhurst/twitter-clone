import React from 'react';
import { Text,View,Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'



const HomeScreen = () => {
  return(
    <View style={styles.container }>
      <View style={{paddingHorizontal:20}}>
        <Text style={{fontSize:24, fontWeight:'bold'}}>Settings</Text>
      </View>
      <View style={{ backgroundColor:'#ffffff', flexDirection:'row'}}> 
      <View style={{ flex:3, height:100, alignItems:'center', justifyContent:'center'}}>
         <Image source={require('../assets/images/avatar.jpg')} style={{ width: 60, height:60, borderRadius:30}}/>
      </View>
      <View style={{flex:9, justifyContent:'center', height:100, paddingHorizontal:10}}>
         <Text style={{fontSize:24}}>Fiifi</Text>
         <Text>Apple ID, iCloud, iTunes & App Store</Text>
      </View>
      <View style={{ flex:1, height:100, alignItems:'center', justifyContent:'center'}}>
      <Ionicons
            name="ios-arrow-forward"
            size={26}
          />
          </View>
      </View>
      <View style={{backgroundColor:'#ffffff', marginTop:20,flexDirection:"row",height:40, borderWidth:0.3, borderColor:'#dedede'}}>
        <View style={{ flex:12, alignItems:"center", justifyContent:'space-between', flexDirection:'row'}}>
          <Text style={{paddingHorizontal:20}}>Finish setting up iPhone</Text>
          <View style={{height:20, width:20, borderRadius:10,backgroundColor:'red',alignItems:'center', justifyContent:'center'}}>
              <Text style={{color:"#fffff", fontWeight:'bold'}}>1</Text>
          </View>
        </View>
          <View style={{ flex:1,  alignItems:'center', justifyContent:'center'}}>
             <Ionicons
            name="ios-arrow-forward"
            size={26}
          />
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#e3e3e3'
  }
})

export default HomeScreen;