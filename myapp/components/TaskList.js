import React from 'react'
import { Text, View, FlatList } from 'react-native'
import TaskItem from './TaskItem'

const TaskList = ({tasks})=>{

    const renderItem = ({item}) =>{
        return <TaskItem task={item} />;
    }
    return (
        <FlatList 
        style ={{width: '90%'}}
        data={tasks}
        keyExtractor={(item) => item.id + ''}
        renderItem={renderItem}
        />
    )
}

export default TaskList


