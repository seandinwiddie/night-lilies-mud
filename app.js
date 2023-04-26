import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputSubmit = () => {
    // Process user input and update output text
    setOutputText(`You entered: ${inputText}`);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.output}>{outputText}</Text>
      <Input
        value={inputText}
        placeholder="Enter a command"
        onChangeText={setInputText}
        onSubmitEditing={handleInputSubmit}
        style={styles.input}
      />
      <Button title="Submit" onPress={handleInputSubmit} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#61dafb',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  button: {
    margin: 10,
  },
  output: {
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});
