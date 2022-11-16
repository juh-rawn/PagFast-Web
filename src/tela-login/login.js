//import {} from 'react-icons/fi'
import React from 'react';
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity, } from 'react-native';
//import { View, KeyboardAvoidingView, Image } from 'react-native';
import './login.css';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
            <Text>PagFast</Text>
            <img src={require('./logo.jpg')} alt='logo'/>
        </View>
        <View style={styles.container}>
          <TextInput
          style={styles.input}
          placeholder="000.000.000/00"
          autoCorrect={false}
          onChangeText={()=> {}}
          />

          <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=> {}}
          />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#03ffff',
    },

    containerLogo:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'red',
    },

    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      paddingBottom: 50,
    },

    input:{
      backgroundColor:'#D9D9D9',
      width: '40%',
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 10,
      padding: 10,
    },

    btnSubmit:{
      backgroundColor: '#ccc',
      width: '10%',
      height: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
    },

    submitText:{
      fontSize: 18
    },

    btnRegister:{
      backgroundColor: '#ccc',
      width: '15%',
      height: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      marginTop:10,
    },

    registerText:{
      fontSize: 18
    }
})

 
