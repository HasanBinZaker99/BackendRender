import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function TextInputScreen() {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      // 8.16.241.35
      console.log(text);
      const response = await fetch("http://8.16.241.35:3000/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Data saved successfully!");
        setText("");
      } else {
        Alert.alert("Error", data.error || "Failed to save data");
      }
    } catch (error) {
      Alert.alert("Error", "Network error. Check server connection.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});
