import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, FlatList, ToastAndroid, ScrollView } from 'react-native'
import { COLORS } from '../../constants/theme';
import FormInput from '../../components/shared/FormInput';
import FormButton from '../../components/shared/FormButton';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const PerfilAdmi = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [rtData, setRtData] = useState([]);
  const [errorNombre, setErrorNombre] = useState('')

  const validar = () => {
    let error = false
    setErrorNombre('')
    const re = /^[a-zA-Z ]+$/
    if (!re.test(String(nombre).toLowerCase())) {
      setErrorNombre("El nombre solo debe contener texto")
      error = true
    }
    return !error
  }

  function editarPerfil() {
    try {
      if (nombre !== '') {
        if (validar()) {
          firestore()
            .collection('user')
            .doc('uWO8vldFVpDLiaOE5OnU')
            .update({
              nombre: nombre
            })
          navigation.navigate('HomeAdmi')
        } else {
          ToastAndroid.show('El nombre no puede quedar en blanco', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show('El nombre no puede quedar en blanco', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setNombre('')
    }
  }

  async function loadRTDAta() {
    const suscriber = firestore().collection('user').onSnapshot(querySnapshot => {
      const temas = []
      querySnapshot.forEach(documentSnapshot => {
        temas.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id

        })
      })
      setRtData(temas)
    })
    return () => suscriber()
  }

  useEffect(() => {
    loadRTDAta()
  }, [])

  function renderRTItem({ item }) {
    return (
      <View style={{ marginTop: 10 }}>
        <Text style={{ textAlign: 'center' }}>{item.email}</Text>
      </View>
    )
  }

  function renderNTItem({ item }) {
    return (
      <View >
        <Text style={{ textAlign: 'center' }}>{item.nombre}</Text>
      </View>
    )
  }

  function renderFTItem({ item }) {
    return (
      <View >
        <FormInput
          labelText="Nombre Completo:"
          placeholderText={item.nombre}
          onChangeText={value => {
            setNombre(value)
            setErrorNombre('')
          }}
          value={nombre.trimStart()}
        />
        <Text style={{ textAlign: 'center', marginBottom: 10, marginTop: -5 }}>{errorNombre}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: COLORS.white,
      }}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'} />

      {/*To Bar */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        elevation: 4,
      }}>
        <FlatList
          data={rtData}
          renderItem={renderNTItem}
          keyExtractor={item => item.key}
        />
        <Text style={{ color: COLORS.black }}></Text>
      </View>
      {/*Foto de Perfil */}
      <ScrollView style={{ width: "100%" }}>
        <Image source={require('../../components/img/perfil.png')}
          style={{
            width: 180,
            height: 180,
            marginTop: 10,
            alignSelf:'center'
          }} />
        {/*Email del usuario */}
        <FlatList
          data={rtData}
          renderItem={renderRTItem}
          keyExtractor={item => item.key}
        />
        {/*Formulario */}
        {/* Nombre */}
        <FlatList
          data={rtData}
          renderItem={renderFTItem}
          keyExtractor={item => item.key}
          style={{ marginHorizontal: 20, marginTop: 15, marginBottom: -15 }}
        />
        {/*Botones*/}
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 20,
        }}>
          {/* Submit button */}
          <FormButton
            labelText="Aceptar"
            style={{ width: '100%' }}
            handleOnPress={editarPerfil}
          />
          <View style={{ width: '100%', marginVertical: 10 }}>
            <FormButton
              labelText='Cancelar'
              isPrimary={false}
              handleOnPress={() => {
                navigation.navigate('HomeAdmi');
              }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PerfilAdmi
