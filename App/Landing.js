import React from 'react'
import { View,Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) =>{
    let backgroundColor;
    backgroundColor = selected ?'rgba(0,0,0,0.8)': 'rgba(0,0,0,0.3)';
    return(
        <View
        style={{
            width:5,
            height:5,
            marginHorizontal:3,
            backgroundColor
        }}/>
    )
};
const Skip =({...props})=>(
    <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
    >
<Text style={{color:'#000', fontSize:16}}>Acceder</Text>
    </TouchableOpacity>
);

const Next =({...props})=>(
    <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
    >
<Text style={{color:'#000', fontSize:16}}>Siguiente</Text>
    </TouchableOpacity>
);

const Done =({...props})=>(
    <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
    >
<Text style={{color:'#000', fontSize:16}}>Acceder</Text>
    </TouchableOpacity>
);

const Landing = ({navigation}) => {

    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={()=>navigation.replace('Login')}
        onDone={()=>navigation.navigate('Login')}
        pages={[
          {
            backgroundColor: '#F5F5F5',
            image: <Image source={require('./components/img/logo.png')} />,
            title: 'Bienvenido a EcoApp',
        
          },
          {
            backgroundColor: '#D8D8D8',
            image: <Image source={require('./components/img/logo.png')} />,
            subtitle: 'EcoApp es una aplicación que permite la gestión de los contenidos de la asignatura de Ecología y Ambiente, trabaja en conjunto con una aplicación de realidad aumentada, en donde podrás observar imágenes en 3D.',
          },
          {
            backgroundColor: '#ffefeb',
            image: <Image source={require('./components/img/logo.png')} />,
            title: 'Sabías que ...',
            subtitle: 'El avance tecnológico en la educación ha permitido que los estudiantes logren involucrarse más en clases, una de estas tecnologías es la Realidad Aumentada.',
          }
          
        ]}
      />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});

export default Landing
