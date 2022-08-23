import React, { useEffect, useRef, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../screens/MainScreen";
import CompletedTasksScreen from "../screens/CompletedTasksScreen";
import AddTaskScreen from "../screens/AddTaskScreen";
import tasksStorage from "../storage/tasksStorage";
import TaskContext from "../context/TaskContext";

const Drawer = createDrawerNavigator();

const storeTasks = async (tasks) => {
  // Store Tasks with AsyncStorage API
  await tasksStorage.storeData(tasks);
};
// Retrive the tasks from storage
const getStoredTasks = async () => {
  // Get tasks stored in the database
  return await tasksStorage.getData();
};

const AuthNavigator = () => {
  const [tasks, setTasks] = useState();

  const savePosts = useRef(false);
  useEffect(() => {
    // Update Tasks in Storage when the tasks change
    if (savePosts.current) {
      storeTasks(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    getStoredTasks().then((json) => setTasks(json));
    savePosts.current = true;
  }, []);

  const addTask = (newTask) => {
    tasks.length == 0
      ? (newTask.id = 1)
      : (newTask.id = tasks[tasks.length - 1].id + 1); // Get id of last element and add 1 if not then 1
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    // Remove the task with given id
    if (tasks.length == 0) return;
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completeTask = (taskId) => {
    // Toggle the complete status of task with given id
    if (tasks.length == 0) return;
    tasks.map((task) => {
      task.id == taskId ? (task.completed = !task.completed) : null;
    });
    setTasks([...tasks]);
  };

  const clearCompleted = () => {
    // Remove the vcompleted tasks
    const updatedTasks = tasks.filter((task) => task.completed == false);
    setTasks(updatedTasks);
    // Store the completed tasks in seperate array.
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        removeTask,
        completeTask,
        clearCompleted,
      }}
    >
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          headerStyle: { backgroundColor: "#002B5B" },
          headerTintColor: "#fff",
        }}
      >
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="CompletedTasks" component={CompletedTasksScreen} />
        <Drawer.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ title: "Add new Task" }}
        />
      </Drawer.Navigator>
    </TaskContext.Provider>
  );
};

export default AuthNavigator;
