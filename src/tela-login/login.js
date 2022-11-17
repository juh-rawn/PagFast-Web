//import {} from 'react-icons/fi'
import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
//import { View, KeyboardAvoidingView, Image } from 'react-native';
import './login.css';

export default function App() {

    const [offset] = useState(new Animated.ValueXY({x:0, y:95}));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(()=> {
      Animated.parallel([
        Animated.spring(offset.y, {
          toValue: 0,
          speed: 4,
          bounciness: 20
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration:200,
        })
      ]).start();

    }, );

  return (
    <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
            <Text>PagFast</Text>
            <img 
            style={{
              width: '80%',
              height: '80%',
              margin: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
              flex:1,
            }}
            src={require('./logo1.png')} alt='logo'/>
        </View>
        <Animated.View 
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y}
            ]
          }
          ]}
        >
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

        </Animated.View>
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
      paddingBottom:10,
      paddingTop:'15%' //deixar responsivo
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

 
