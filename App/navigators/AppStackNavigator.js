import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeUser,
  CapitulosUser,
  TemasUser1,
  PerfilUsuario,
  TemasUser2,
  InfoTema1,
  informacion,
  InfoTema2,
  TemasUser3,
  InfoTema3,
  TemasUser4,
  InfoTema4,
  TemasUser5_6,
  InfoTema5_6,
} from '../screens';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeUser" component={HomeUser} />
      <Stack.Screen name="informacion" component={informacion} />
      <Stack.Screen name="CapitulosUser" component={CapitulosUser} />
      <Stack.Screen name="TemasUser1" component={TemasUser1} />
      <Stack.Screen name='PerfilUsuario' component={PerfilUsuario} />
      <Stack.Screen name="TemasUser2" component={TemasUser2} />
      <Stack.Screen name="InfoTema1" component={InfoTema1} />
      <Stack.Screen name="InfoTema2" component={InfoTema2} />
      <Stack.Screen name="TemasUser3" component={TemasUser3} />
      <Stack.Screen name="InfoTema3" component={InfoTema3} />
      <Stack.Screen name="TemasUser4" component={TemasUser4} />
      <Stack.Screen name="InfoTema4" component={InfoTema4} />
      <Stack.Screen name="TemasUser5_6" component={TemasUser5_6} />
      <Stack.Screen name="InfoTema5_6" component={InfoTema5_6} />

    </Stack.Navigator>
  );
}

export default AppStackNavigator  