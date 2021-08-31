import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./src/components/Header";
import InputForm from "./src/components/InputForm";
import Sandbox from "./src/components/Sandbox";
import TodoItem from "./src/components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React Native", key: "1" },
    { text: "Understand Fundamentals", key: "2" },
    { text: "Make project", key: "3" },
  ]);

  const handleAddTodo = (inputValue) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: inputValue, key: Math.random().toString() },
      ];
    });
  };
  const handleOnPress = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != id);
    });
  };

  {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <InputForm onAddItem={handleAddTodo} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => {
                  return <TodoItem item={item} onPressItem={handleOnPress} />;
                }}
              />
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  // return <Sandbox />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    backgroundColor: "pink",
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: "yellow",
  },
});
