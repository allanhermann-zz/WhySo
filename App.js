import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, TouchableOpacity } from 'react-native';

export default class AllansFirst extends Component {
  render() {
    return (

      <View style={style.container}>
        <Image
          style={style.photo}
          source={require("./src/img.jpg")}
        />

        <Text style={style.titulo}>Bem vindo ao meu primeiro App!! a </Text>

        <Text style={style.corpo}>Bem vindo ao meu app teste :) Desenvolvi esse app apenas para aprender mais sobre React Native, então se você o está vendo, significa que eu fiz algo muito certo ou muito errado. Me contate pelos botões a seguir:</Text>



        <View style={style.social}>
          <TouchableOpacity style={style.IconeGM} activeOpacity={0.5} onPress={() => Linking.openURL('mailto:allan.hermann@gmail.com?subject=Seu app é demais!&body=Olá Allan, eu vi o seu app, espero que suas habilidades em React Native fiquem cada vez melhores!!')}>
            <Image
              source={require('./src/gmail.png')}
              style={style.IconeGM}
            />
          </TouchableOpacity>

          <TouchableOpacity style={style.IconeWP} activeOpacity={0.5} onPress={() => Linking.openURL('whatsapp://send?text=Oi Allan, eu vi o seu App!!&phone=5565981015585')}>
            <Image
              source={require('./src/wp.png')}
              style={style.IconeWP}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}



const style = StyleSheet.create({
  space: {

  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#afc7ed",
    flexDirection: "column",
  },
  photo: {
    width: 150,
    height: 150,
  },
  titulo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",

  },
  corpo: {
    textAlign: "justify",
    maxWidth: 400,
    fontSize: 18,
  },
  social: {
    flexDirection: "row",
  },
  IconeGM: {
    alignSelf: "flex-end",
    width: 100,
    height: 100,
    marginRight: 25,
  },
  IconeWP: {
    alignItems: "flex-end",
    width: 100,
    height: 100,
    marginLeft: 25,
  },

})