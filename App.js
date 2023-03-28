import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Login</Text>
        <TextInput placeholder='Usuário' style={styles.input}/>
        <TextInput placeholder='Senha' style={styles.input} keyboardType="visible-password" />
        <TouchableOpacity style={styles.botao}>
          <Text>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10
  },
  formulario: {
    backgroundColor: 'lightgray',
    width: '70%',
    borderRadius: 10
  },
  input: {
    backgroundColor: '#E5E7EB',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    color: "black",
  },
  botao: {
    backgroundColor: 'lightblue',
    width: '40%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 15
  }
});
