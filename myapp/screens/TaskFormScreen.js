import React, {useState} from 'react'
import { Text, TextInput, View , StyleSheet, TouchableOpacity} from 'react-native'
import Layout from '../components/Layout'
import {saveTask} from '../api'
const TaskFormScreen = ({ navigation })=>{
  const[task, setTask] = useState({
    title:'',
    description:''
  })

  const handleChange = (name,value) => setTask({...task,[name]:value});

  const handleSubmit = () => {
    saveTask(task);
    navigation.navigate('HomeScreen')
  }
    return (
      <Layout>
        <TextInput 
        style={styles.input} 
        placeholder='Escribe un título' 
        placeholderTextColor='#FBF5E5'
       
        onChangeText={(text) => handleChange("title",text)}/>
        <TextInput 
        style={styles.input} 
        placeholder='Escribe tú tarea' 
        placeholderTextColor='#FBF5E5'
        
        onChangeText={(text) => handleChange("description",text)}/>
      
      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
      </Layout>

    )
}

const styles = StyleSheet.create({
  input:{
    width:'90%',
    backgroundColor:'#F6AD55',
    fontSize:20,
    marginBottom:7,
    borderWidth:1,
    borderColor:'#ffffff',
    height:45,
    borderRadius:7,
    color:'black',
    padding:5,
    textAlign:'center',
  },
  buttonSave:{
   paddingBottom:10,
   paddingTop:10,
   backgroundColor:'#344CB7',
   borderRadius:7,
   marginBottom: 3,
   width:'90%'
  },
  buttonText:{
  color:'#ffffff',
  textAlign:'center',
  }
})
export default TaskFormScreen
