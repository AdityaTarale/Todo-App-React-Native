import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

const InputForm = ({ onAddItem }) => {
  const [text, setText] = useState("");

  const handleInputChange = (value) => {
    setText(value);
  };

  const handleSubmit = () => {
    if (text.trim().length > 3) {
      onAddItem(text);
      setText("");
    } else {
      Alert.alert("OOPs!", "Todo's must be 3 chars long", [
        {
          text: "Understand",
          onPress: () => console.log("alert closed"),
        },
      ]);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={handleInputChange}
        value={text}
      />
      <View>
        <Button title="Submit" color="coral" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
    borderRadius: 5,
    borderBottomColor: "#ddd",
  },
});
