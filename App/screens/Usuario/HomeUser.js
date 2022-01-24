import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native'
import { COLORS } from '../../constants/theme';
import { signOut } from '../../utils/auth'

const HomeUser = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/*Logo */}
            <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Flogo.png?alt=media&token=6182e62b-8672-4d5c-878c-bcf0b9a4fcd5' }}
                style={{
                    width: 150,
                    height: 150,
                    alignItems:'center'
                }} />
            <Text style={{ color: COLORS.black, textTransform: 'uppercase', textAlign: 'center', marginBottom: 10 }}>Módulos de la aplicación</Text>
            {/*Botones del menu */}
            <View style={styles.fixToText}>
                <TouchableOpacity
                    style={styles.buttonl}
                    onPress={() => {
                        navigation.navigate('CapitulosUser');
                    }}
                >
                    <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Fbook.png?alt=media&token=cd7e128e-a48c-4dc7-b0ae-4401018e4d09' }}
                        style={{
                            width: 60,
                            height: 60,
                        }} />
                    <Text style={{ color: COLORS.black, }}>Contenido</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                        navigation.navigate('informacion');
                    }}
                >
                    <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Frealidad.png?alt=media&token=d0caa28b-2e0d-4f15-8976-e02af8fe9b4a' }}
                        style={{
                            width: 60,
                            height: 60,
                            alignSelf: 'center'
                        }} />
                    <Text style={{ color: COLORS.black }}>Realidad Aumentada</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('PerfilUsuario');
                }}
            >
                <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Fuser.png?alt=media&token=0a197c2c-a224-4d6b-b676-51b93dc5bcfe' }}
                    style={{
                        width: 60,
                        height: 60,
                    }} />
                <Text style={{ color: COLORS.black }}>Perfil</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 50, marginHorizontal: 50 }}>
                <View style={{ marginTop: 30, marginHorizontal: 50 }}>
                    <Button
                        title="Cerrar Sesión"
                        onPress={signOut}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: COLORS.white,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: 5,
        borderRadius: 10,
        elevation: 2,
        paddingRight: 55,
        paddingLeft: 55,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonl: {
        backgroundColor: "#DDDDDD",
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 50,
        paddingLeft: 50,
        borderRadius: 10,
        elevation: 2,
        margin:5,
    },
    button2: {
        backgroundColor: "#DDDDDD",
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10,
        elevation: 2,
        margin:5,
    },
})

export default HomeUser
