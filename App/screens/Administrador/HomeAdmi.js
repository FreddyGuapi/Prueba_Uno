import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native'
import { COLORS } from '../../constants/theme';

const HomeAdmi = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/*Logo */}
            <Image source={require('../../components/img/logo.png')}
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
                        navigation.navigate('Capitulos');
                    }}
                >
                    <Image source={require('../../components/img/book.png')}
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
                    <Image source={require('../../components/img/realidad.png')}
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
                    navigation.navigate('PerfilAdmi');
                }}
            >
                <Image source={require('../../components/img/user.png')}
                    style={{
                        width: 60,
                        height: 60,
                    }} />
                <Text style={{ color: COLORS.black }}>Perfil</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 50, marginHorizontal: 50 }}>
                <Button
                    title="Cerrar Sesion"
                    onPress={() => { navigation.navigate('Login') }}
                />
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
        paddingRight: 55,
        paddingLeft: 55,
        marginTop: 5,
        borderRadius: 10,
        elevation: 2
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

export default HomeAdmi
