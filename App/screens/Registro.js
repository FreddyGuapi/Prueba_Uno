import React, { useState } from 'react'
import { View, Text, SafeAreaView, Alert, ScrollView, KeyboardAvoidingView, Button, StyleSheet } from 'react-native'
import FormButton from '../components/shared/FormButton';
import FormInput from '../components/shared/FormInput';
import { COLORS } from '../constants/theme';
import firestore from '@react-native-firebase/firestore';
import { signUp } from '../utils/auth';
import PassInput from '../components/shared/PassInput';

const Registro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorConfirmarPassword, setErrorConfirmarPassword] = useState('')
  const [showPasword, setShowPassword] = useState(false);

  const validar = () => {
    let error = false
    setErrorEmail('')
    setErrorPassword('')
    setErrorConfirmarPassword(null)
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Ingrese un correo válido")
      error = true
    }
    if (password == '') {
      setErrorPassword("Ingrese una contraseña")
      error = true
    }
    if (confirmPassword == '') {
      setErrorConfirmarPassword("Confirme la contraseña")
      error = true
    }
    return !error
  }

  const handleOnSubmit = () => {
    if (validar()) {
      if (email != '' && password != '' && confirmPassword != '') {
        if (password == confirmPassword) {
          if (password.length >= 6) {
            signUp(email, password);
          } else {
            Alert.alert('La contraseña debe tener como mínimo 6 caracteres')
          }
        } else {
          Alert.alert('Las contraseñas ingresadas no coinciden vuelva a intentarlo');
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        backgroundColor: COLORS.white,
        height: "100%",
      }}
    >
      <ScrollView style={{ width: "100%", }}>
        <SafeAreaView
          style={{
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginHorizontal: 20,
          }}>
          {/* Header */}
          <Text
            style={{
              fontSize: 24,
              color: COLORS.black,
              fontWeight: 'bold',
              marginVertical: 32,
            }}>
            Registro
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
          {/* Confirm Password */}
          <View style={{ flexDirection: 'row' }}>
            <PassInput
              labelText="Confirme su contraseña"
              placeholderText="Reingrese la contraseña"
              onChangeText={value => {
                setConfirmPassword(value)
                setErrorConfirmarPassword('')
              }}
              value={confirmPassword}
              secureTextEntry={!showPasword}
              errorConfirmarPassword={errorConfirmarPassword}
            />
            <View style={{ marginVertical: 35, marginLeft: 5, width: '26%' }}>
              <Button
                title={showPasword ? 'Ocultar' : 'Mostrar'}
                onPress={() => setShowPassword(!showPasword)
                } />
            </View>
          </View>
          <Text style={styles.errorMessage}>{errorConfirmarPassword}</Text>
          {/* Submit button */}
          <View style={{ marginTop: 15, width: '100%' }}>
            <FormButton
              labelText="Registrarse"
              handleOnPress={handleOnSubmit}
              style={{ width: '100%' }}
            />
          </View>
          {/* Footer */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Text>Ya tiene una cuenta?</Text>
            <Text
              style={{ marginLeft: 4, color: COLORS.primary }}
              onPress={() => navigation.navigate('Login')}>
              Acceder
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorMessage: {
    color: 'red',
    marginTop: -20
  }
});

export default Registro
