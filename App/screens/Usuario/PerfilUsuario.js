import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, ToastAndroid, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../constants/theme';
import FormInput from '../../components/shared/FormInput';
import FormButton from '../../components/shared/FormButton';
import { firebase } from '@react-native-firebase/auth';

const PerfilUsuario = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [errorNombre, setErrorNombre] = useState('')

  const user = firebase.auth().currentUser;
  if (user !== null) {
    const email = user.email;
    const displayName = user.displayName;
    const uid = user.uid;
  }

  const modificar = async () => {
    if (nombre !== '') {
      if (validar()) {
        user.updateProfile({
          displayName: nombre,
        }).then(() => {
          console.log('Modificado ')
          navigation.navigate('HomeUser')
        }).catch((error) => {
          console.log(error)
        });
      }
    } else {
      ToastAndroid.show('El nombre no puede quedar en blanco', ToastAndroid.SHORT);
    }
  }

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
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        elevation: 4,
      }}>
        <Text style={{ color: COLORS.black, alignSelf: 'center' }}>{user.displayName}</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView style={{ width: "100%", }}>
          {/*Foto de Perfil */}
          <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Fperfil.png?alt=media&token=f40f6348-5f60-4397-bb0d-4595021ad861' }}
            style={{
              width: 180,
              height: 180,
              marginTop: 10,
              alignSelf:'center'
            }} />
          {/*Formulario */}
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 20,
          }}>
            {/*Email del usuario */}
            <Text style={{ marginTop: -10, marginBottom: 20 }}>{user.email}</Text>
            {/* Nombre Completo */}
            <FormInput
              labelText="Nombre Completo: "
              placeholderText={user.displayName}
              onChangeText={value => {
                setNombre(value)
                setErrorNombre('')
              }}
              value={nombre.trimStart()}
            />
            <View style={{ marginTop: -10, marginBottom: 10 }}>
              <Text style={styles.errorMessage}>{errorNombre}</Text>
            </View>
            {/* Submit button */}
            <FormButton
              labelText="Aceptar"
              handleOnPress={val => modificar(val)
              }
              style={{ width: '100%' }}
            />
            <View style={{ width: '100%', marginVertical: 10 }}>
              <FormButton
                labelText='Cancelar'
                isPrimary={false}
                handleOnPress={() => {
                  navigation.navigate('HomeUser');
                }} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default PerfilUsuario
