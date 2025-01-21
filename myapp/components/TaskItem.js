import React from 'react'
import { Text, View, StyleSheet} from 'react-native'


const TaskItem = ({task})=>{
    return (
      <View style={styles.itemsContainer}>
        <Text style={styles.itemTitle}> {task.title}</Text>
        <Text style={styles.itemTitle}> {task.description}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
   itemsContainer:{
    backgroundColor:"#F6AD55",
    padding: 20,
    marginVertical:8,
    borderRadius:7,
   },
   itemTitle:{
    color: "black",
   }

})

export default TaskItem
