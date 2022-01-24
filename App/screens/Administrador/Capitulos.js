import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { COLORS } from '../../constants/theme'

const Capitulos = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titulo}>Listado de Capítulos</Text>
                    <TouchableOpacity style={styles.contenedor}
                        onPress={() => { navigation.navigate('CapTem1') }} >
                        <Image
                            style={
                                {
                                    width: 60,
                                    height: 60,
                                    marginLeft: -140,
                                    marginRight: -120,
                                }
                            }
                            source={require('../../components/img/capitulos/capitulo1.png')} />
                        <View>
                            <Text style={styles.title}>Capítulo 1</Text>
                            <Text style={styles.contenido}>Definiciones</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor}
                        onPress={() => { navigation.navigate('CapTem2') }} >
                        <Image
                            style={
                                {
                                    width: 60,
                                    height: 60,
                                    marginLeft: 0,
                                    marginRight: 20,
                                }
                            }
                            source={require('../../components/img/capitulos/capitulo2.png')} />
                        <View>
                            <Text style={styles.title}>Capítulo 2</Text>
                            <Text style={styles.contenido}>Los sistemas y los ecosistemas</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor}
                        onPress={() => { navigation.navigate('CapTem3') }}>
                        <Image
                            style={
                                {
                                    width: 60,
                                    height: 60,
                                    marginLeft: -15,
                                    marginRight: 10,
                                }
                            }
                            source={require('../../components/img/capitulos/capitulo3.png')} />
                        <View>
                            <Text style={styles.title}>Capítulo 3</Text>
                            <Text style={styles.contenido}>La ecología y los ecosistemas</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor}
                        onPress={() => { navigation.navigate('CapTem4') }}>
                        <Image
                            style={
                                {
                                    width: 60,
                                    height: 60,
                                    marginLeft: -80,
                                    marginRight: -60,
                                }
                            }
                            source={require('../../components/img/capitulos/capitulo4.jpg')} />
                        <View>
                            <Text style={styles.title}>Capítulo 4</Text>
                            <Text style={styles.contenido}>Ambiente y sociedad</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor}
                        onPress={() => { navigation.navigate('CapTem5_6') }}>
                        <Image
                            style={
                                {
                                    width: 60,
                                    height: 60,
                                    marginLeft: 10,
                                    marginRight: 25,
                                }
                            }
                            source={require('../../components/img/capitulos/capitulo5.png')} />
                        <View>
                            <Text style={styles.title}>Capítulo 5</Text>
                            <Text style={styles.contenido}>Problemas ambientales globales</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contenedor}
                        onPress={() => { navigation.navigate('CapTem5_6') }}>
                        <Image
                            style={
                                {
                                    width: 60,
                                    height: 60,
                                    marginLeft: -70,
                                    marginRight: -40,
                                }
                            }
                            source={require('../../components/img/capitulos/capitulo6.png')} />
                        <View>
                            <Text style={styles.title}>Capítulo 6</Text>
                            <Text style={styles.contenido}>Desarrollo sustentable</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
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
        fontSize: 15,
    }
})

export default Capitulos
