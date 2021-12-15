import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';


export default function App() {
  const [task, setTask] = useState([
    {"task":"HTML5","done":true, "id": "1"},
    {"task":"CSS3","done":true, "id": "2"},
    {"task":"Responsive design","done":true, "id": "3"}
  ]);
  const addTask = (text) => {
    if(!text){
      Alert.alert('No task?', 'Please add a task.');
    } else {
      setTask(prevTasks => {
        return [{ task: text, id: uuidv4() }, ...prevTasks]
      });
    }
  };
  const deleteTask = id => {
    setTask(prevTasks => {
      return prevTasks.filter(task => task.id != id)
    });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTask addTask={addTask} />
          <View style={styles.list}>
            <FlatList
              data={task}
              renderItem={({ item }) => (
                <Task 
                  item={ item }
                  deleteTask={ deleteTask }
                />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 30,
    flex: 1
  },
  list: {
    marginTop: 30,
    flex: 1
  }
});
