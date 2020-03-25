import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState ('Pressione para mostrar as dezenas sugeridas');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title = "Gerar as dezenas" onPress = {() => {setOutputText(numAleatorio())}}/>
    </View>
  );
}

function numAleatorio(){
  var nums = "";
  var vet = [];
  for (var x = 0; x < 60; x++){
    vet.push(x+1);
  }
  for (var i = 0; i < 6; i++){
    let index = (Math.floor(Math.random() * vet.length));
    nums = nums + vet[index].toString() + ", ";
    vet.splice(index, 1);
  }
  return (nums.substring(0, nums.length - 2));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
