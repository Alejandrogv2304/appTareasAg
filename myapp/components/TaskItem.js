import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'


const TaskItem = ({task, handleDelete})=>{

  const navigation = useNavigation()
    return (
      <View style={styles.itemsContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('TaskFormScreen', {id :task.id})}>
        <Text style={styles.itemTitle}> {task.title}</Text>
        <Text style={styles.itemTitle}> {task.description}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={{backgroundColor:"#ee5253", borderRadius:5, padding:7}}
        onPress={()=> handleDelete(task.id)}>
          <Text>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
   itemsContainer:{
    backgroundColor:"#F6AD55",
    padding: 20,
    marginVertical:8,
    borderRadius:7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
   },
   itemTitle:{
    color: "black",
   }

})

export default TaskItem
