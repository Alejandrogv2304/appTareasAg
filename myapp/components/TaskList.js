import React, {useState, useEffect} from 'react'
import { Text, View, FlatList, RefreshControl} from 'react-native'
import TaskItem from './TaskItem'
import { getTasks, deleteTask } from '../api'

const TaskList = ()=>{
    const [tasks, setTasks] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    }
  
    useEffect(()=>{
     loadTasks()
    },[])


    const renderItem = ({item}) =>{
        return <TaskItem task={item} />;
    }

    const onRefresh = React.useCallback(async()=>{
        setRefreshing(true)
        await loadTasks()
        setRefreshing(false)
    })
    return (
        <FlatList 
        style ={{width: '90%'}}
        data={tasks}
        keyExtractor={(item) => item.id + ''}
        renderItem={renderItem}
        refreshControl={
            <RefreshControl
            colors={["#78E08F"]}
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressBackgroundColor="#0a3d62"
            />
        }
        />
    )
}

export default TaskList


