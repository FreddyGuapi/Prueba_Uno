import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, Button } from 'react-native'
import { COLORS } from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { signIn } from '../utils/auth';
import { ToastAndroid } from 'react-native';
import PassInput from '../components/shared/PassInput';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  let codigo = '123456';
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [showPasword, setShowPassword] = useState(false);

  const validar = () => {
    let error = false
    setErrorEmail('')
    setErrorPassword('')
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Ingrese un correo válido")
      error = true
    }
    if (password == '') {
      setErrorPassword("Ingrese una contraseña")
      error = true
    }
    return !error
  }

  const handleOnSubmit = () => {
    if (validar()) {
      if (email != '' && password != '') {
        if (email == 'admi@gmail.com' && password == codigo) {
          ToastAndroid.show('Logeado', ToastAndroid.SHORT);
          navigation.navigate('HomeAdmi')
          setEmail('')
          setPassword('')
        } else {
          signIn(email, password);
        }
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
      }}>
      {/*Logo */}
      <Image source={require('../components/img/logo.png')}
        style={{
          alignItems: 'center',
          width: 110,
          height: 110,
        }} />
      {/* Header */}
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: 'bold',
        }}>
        Acceder
      </Text>
      {/* Email */}
      <FormInput
        labelText="Correo electrónico"
        placeholderText="Ingrese su correo electrónico"
        onChangeText={value => {
          setEmail(value)
          setErrorEmail('')
        }}
        value={email}
        keyboardType={'email-address'}
        errorMessage={errorEmail}
      />
      <Text style={styles.errorMessage}>{errorEmail}</Text>
      {/* Password */}
      <View style={{ flexDirection: 'row' }}>
        <PassInput
          labelText="Contraseña"
          placeholderText="Ingrese su contraseña"
          onChangeText={value => {
            setPassword(value)
            setErrorPassword('')
          }}
          value={password}
          secureTextEntry={!showPasword}
          errorMessage={errorPassword}
        />
        <View style={{ marginVertical: 35, marginLeft: 5, width: '26%' }}>
          <Button
            title={showPasword ? 'Ocultar' : 'Mostrar'}
            onPress={() => setShowPassword(!showPasword)
            } />
        </View>
      </View>
      <Text style={styles.errorMessage}>{errorPassword}</Text>
      {/* Submit button */}
      <FormButton
        labelText="Ingresar"
        handleOnPress={handleOnSubmit}
        style={{ width: '100%' }}
      />
      {/* Footer */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text>Aún no tiene una cuenta?</Text>
        <Text
          style={{ marginLeft: 4, color: COLORS.primary }}
          onPress={() => navigation.navigate('Registro')}>
          Crear una cuenta
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text>Olvidaste tu contraseña?</Text>
        <Text
          style={{ marginLeft: 4, color: COLORS.primary }}
          onPress={() => navigation.navigate('Restablecer')}>
         Recuperar 
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    marginTop: -20,
  }
});

export default Login
