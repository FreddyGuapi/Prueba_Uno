import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Login,
  Registro,
  PerfilAdmi,
  HomeAdmi,
  Capitulos,
  CapTem1,
  NewTem1,
  OptionTem1,
  informacion,
  OptionTem2,
  CapTem2,
  NewTem2,
  OptionTem3,
  NewTem3,
  CapTem3,
  OptionTem4,
  NewTem4,
  CapTem4,
  OptionTem5_6,
  NewTem5_6,
  CapTem5_6,
  Restablecer
} from '../screens'
import Landing from '../Landing';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Restablecer" component={Restablecer} />
      <Stack.Screen name="HomeAdmi" component={HomeAdmi} />
      <Stack.Screen name="informacion" component={informacion} />
      <Stack.Screen name="PerfilAdmi" component={PerfilAdmi} />
      <Stack.Screen name="Capitulos" component={Capitulos} />
      <Stack.Screen name='CapTem1' component={CapTem1} />
      <Stack.Screen name='NewTem1' component={NewTem1} />
      <Stack.Screen name='OptionTem1' component={OptionTem1} />
      <Stack.Screen name='OptionTem2' component={OptionTem2} />
      <Stack.Screen name='CapTem2' component={CapTem2} />
      <Stack.Screen name='NewTem2' component={NewTem2} />
      <Stack.Screen name='OptionTem3' component={OptionTem3} />
      <Stack.Screen name='NewTem3' component={NewTem3} />
      <Stack.Screen name='CapTem3' component={CapTem3} />
      <Stack.Screen name='OptionTem4' component={OptionTem4} />
      <Stack.Screen name='NewTem4' component={NewTem4} />
      <Stack.Screen name='CapTem4' component={CapTem4} />
      <Stack.Screen name='OptionTem5_6' component={OptionTem5_6} />
      <Stack.Screen name='NewTem5_6' component={NewTem5_6} />
      <Stack.Screen name='CapTem5_6' component={CapTem5_6} />

    </Stack.Navigator>
  );
};

export default AuthStackNavigator;