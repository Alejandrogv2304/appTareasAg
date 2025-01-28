import React, {useState, useEffect} from 'react'
import { Text, TextInput, View , StyleSheet, TouchableOpacity} from 'react-native'
import Layout from '../components/Layout'
import {saveTask, getTask} from '../api'
const TaskFormScreen = ({ navigation, route })=>{
  const[task, setTask] = useState({
    title:'',
    description:''
  })

  const handleChange = (name,value) => setTask({...task,[name]:value});

  const handleSubmit = () => {
    saveTask(task);
    navigation.navigate('HomeScreen')
  }

  useEffect(() => {
    if ( route.params && route.params.id){
      navigation.setOptions( {headerTitle:  'Updating a Task'});
      (async() =>{
        const task = await getTask(route.params.id);
        setTask({title: task.title, description: task.description})
      })();
      
    }
  },[])
    return (
      <Layout>
        <TextInput 
        style={styles.input} 
        placeholder='Escribe un título' 
        placeholderTextColor='#FBF5E5'
        value={task.title}
        onChangeText={(text) => handleChange("title",text)}/>
        <TextInput 
        style={styles.input} 
        placeholder='Escribe tú tarea' 
        placeholderTextColor='#FBF5E5'
        value={task.description}
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
