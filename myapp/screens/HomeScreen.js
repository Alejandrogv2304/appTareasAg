import React, { useEffect, useState } from 'react'
import { View} from 'react-native'
import {getTasks} from '../api'
import TaskList from '../components/TaskList';
import Layout from '../components/Layout';

const HomeScreen = ()=>
   (
      <Layout>
        <TaskList />
      </Layout>
    );


export default HomeScreen
