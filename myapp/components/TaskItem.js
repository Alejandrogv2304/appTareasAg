import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'


const TaskItem = ({task})=>{
    return (
      <View style={styles.itemsContainer}>
        <TouchableOpacity>
        <Text style={styles.itemTitle}> {task.title}</Text>
        <Text style={styles.itemTitle}> {task.description}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={{backgroundColor:"#ee5253", borderRadius:5, padding:7}}
        onPress={()=>console.log(task.id)}>
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
