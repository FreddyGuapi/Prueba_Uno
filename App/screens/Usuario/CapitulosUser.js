import React, { useState } from 'react'
import { TextInput, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native'
import { COLORS } from '../../constants/theme'

const CapitulosUser = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, }}>
            <StatusBar barStyle='light-content' />
            <View
                style={{
                    alignItems: 'center',
                    backgroundColor: COLORS.white,
                    elevation: 4,
                    paddingHorizontal: 20,
                }}>
                <Text style={{ fontSize: 20, color: COLORS.black, padding: 10, }}>Listado de Capítulos </Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.contenedor}
                    onPress={() => { navigation.navigate('TemasUser1') }} >
                    <Image
                        style={
                            {
                                width: 60,
                                height: 60,
                                marginLeft: -140,
                                marginRight: -120,
                            }
                        }
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Fcapitulos%2Fcapitulo1.png?alt=media&token=2aa2d00a-f806-4664-af10-ddb58bccbadb' }} />
                    <View>
                        <Text style={styles.title}>Capítulo 1</Text>
                        <Text style={styles.contenido}>Definiciones</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contenedor}
                    onPress={() => { navigation.navigate('TemasUser2') }}>
                    <Image
                        style={
                            {
                                width: 60,
                                height: 60,
                                marginLeft: 0,
                                marginRight: 20,
                            }
                        }
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Fcapitulos%2Fcapitulo2.png?alt=media&token=4c8a4848-7d18-4b86-ab29-f76275487b0c' }} />
                    <View>
                        <Text style={styles.title}>Capítulo 2</Text>
                        <Text style={styles.contenido}>Los sistemas y los ecossitemas</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contenedor}
                    onPress={() => { navigation.navigate('TemasUser3') }}>
                    <Image
                        style={
                            {
                                width: 60,
                                height: 60,
                                marginLeft: -15,
                                marginRight: 10,
                            }
                        }
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Fcapitulos%2Fcapitulo3.png?alt=media&token=6ab07f62-cced-4934-a7fd-9d0cda097665' }} />
                    <View>
                        <Text style={styles.title}>Capítulo 3</Text>
                        <Text style={styles.contenido}>La ecología y los ecosistemas</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contenedor}
                    onPress={() => { navigation.navigate('TemasUser4') }}>
                    <Image
                        style={
                            {
                                width: 60,
                                height: 60,
                                marginLeft: -80,
                                marginRight: -60,
                            }
                        }
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Fcapitulos%2Fcapitulo4.jpg?alt=media&token=ead06122-6d82-40b8-9a09-cb91f507b4ec' }} />
                    <View>
                        <Text style={styles.title}>Capítulo 4</Text>
                        <Text style={styles.contenido}>Ambiente y sociedad</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contenedor}
                    onPress={() => { navigation.navigate('TemasUser5_6') }}>
                    <Image
                        style={
                            {
                                width: 60,
                                height: 60,
                                marginLeft: 10,
                                marginRight: 25,
                            }
                        }
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Fcapitulos%2Fcapitulo5.png?alt=media&token=f7fb4fdc-66eb-4494-970a-fda3985e0a05' }} />
                    <View>
                        <Text style={styles.title}>Capítulo 5</Text>
                        <Text style={styles.contenido}>Problemas ambientales globales</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contenedor}
                    onPress={() => { navigation.navigate('TemasUser5_6') }}>
                    <Image
                        style={
                            {
                                width: 60,
                                height: 60,
                                marginLeft: -70,
                                marginRight: -40,
                            }
                        }
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Fcapitulos%2Fcapitulo6.png?alt=media&token=efd33951-75c0-448a-8b49-e388eb79efa9' }} />
                    <View>
                        <Text style={styles.title}>Capítulo 6</Text>
                        <Text style={styles.contenido}>Desarrollo sustentable</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: COLORS.white
    },
    titulo: {
        marginTop: 5,
        marginHorizontal: 10,
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        color: COLORS.black,
        padding: 10,
        width: '100%',
    },
    contenedor: {
        marginTop: 10,
        marginHorizontal: 5,
        backgroundColor: '#D2D4EC',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        elevation: 3
    },
    title: {
        fontSize: 19,
        textAlign: 'justify',
        color: COLORS.black,
    },
    contenido: {
        fontSize: 16,
    }
})

export default CapitulosUser
