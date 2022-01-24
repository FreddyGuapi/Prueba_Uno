import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View, Alert, KeyboardAvoidingView, ScrollView, ToastAndroid, TouchableOpacity, Image, Button } from 'react-native'
import FormButton from '../../../../components/shared/FormButton'
import FormInput from '../../../../components/shared/FormInput'
import { launchImageLibrary } from 'react-native-image-picker'
import { COLORS } from '../../../../constants/theme'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage';

const OptionTem2 = ({ navigation }) => {

    const [rtData, setRtData] = useState([])
    const [titulo, setTitulo] = useState('')
    const [imagen, setImagen] = useState('https://via.placeholder.com/200')
    const [QR, setQR] = useState('https://via.placeholder.com/200')
    const [descripcion, setDescripcion] = useState('')
    const [editDoc, setEditDoc] = useState('')

    async function loadRTDAta() {
        const suscriber = firestore().collection('Capitulo2').onSnapshot(querySnapshot => {
            const temas = []
            querySnapshot.forEach(documentSnapshot => {
                temas.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id
                })
            })
            setRtData(temas)
        })
        return () => suscriber()
    }

    function renderRTItem({ item }) {
        return (
            <View style={{ marginBottom: 10, backgroundColor: '#D5DDDD', elevation: 3, borderRadius: 10, }}>
                <TouchableOpacity onPress={() => eliminarTema(item)} style={{ flexDirection: 'row' }} >
                    <View >
                        <Image
                            style={
                                {
                                    width: 70,
                                    height: 70,
                                    marginVertical: '20%',
                                    borderRadius: 70 / 2,
                                    marginHorizontal: 2,
                                }
                            }
                            source={{ uri: item.imagen }} />
                    </View>
                    <View style={{ marginLeft: 5, marginRight: 15, marginVertical: 2 }} >
                        <Text style={{ color: COLORS.black, fontSize: 17, textTransform: 'uppercase' }}>{item.titulo}</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, marginRight: 60, opacity: 0.7 }}>{item.descripcion}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function eliminarTema(item) {
        Alert.alert(
            `Tema: ${item.titulo}`,
            "Elija una opción ",
            [
                {
                    text: "Cancelar",
                    style: 'cancel'
                },
                {
                    text: "Modificar",
                    onPress: () => {
                        rellenarInputs(item)
                    }
                },
                {
                    text: "Eliminar",
                    onPress: () => {
                        Eliminar(item)
                    },
                    style: 'destructive'
                }
            ]
        )
    }

    function Eliminar(item) {
        Alert.alert(
            `Está por eliminar: ${item.titulo}`,
            "¿Está seguro de que desea eliminar?",
            [
                {
                    text: "No",
                    style: 'cancel'
                },
                {
                    text: "Si",
                    onPress: () => {
                        firestore().collection('Capitulo2').doc(item.key).delete().then(() => {
                            Alert.alert(
                                "Eliminación Exitosa",
                                "El Tema se ha eliminado con exito. "
                            )
                        })
                    },
                    style: 'destructive'
                }
            ]
        )
    }


    {/*Funcion para rellenar los campos con el tema */ }
    function rellenarInputs(item) {
        setTitulo(item.titulo)
        setImagen(item.imagen)
        setDescripcion(item.descripcion)
        setQR(item.QR)
        setEditDoc(item.key)
    }

    {/*Editar Tema */ }
    const editarTema = async () => {
        if (titulo == '' || descripcion == '') {
            Alert.alert('Recuerde', 'Debe seleccionar un tema')
        } else {
            let imageUrl = '';
            if (imagen != '') {
                const reference = storage().ref(
                    `/Capitulos/Capitulo2/imagenes/${editDoc}.jpg`,
                );
                await reference.putFile(imagen).then(() => {
                    console.log('Imagen Guardada');
                });
                imageUrl = await reference.getDownloadURL();
            }
            let imageQUrl = '';
            if (QR != '') {
                const reference = storage().ref(
                    `/Capitulos/Capitulo2/QR/${editDoc}.jpg`,
                );
                await reference.putFile(QR).then(() => {
                    console.log('QR Guardado');
                });
                imageQUrl = await reference.getDownloadURL();
            }
            try {
                firestore().collection('Capitulo2').doc(editDoc).update({
                    titulo,
                    descripcion,
                    imagen: imageUrl,
                    QR: imageQUrl,
                })

            } catch (e) {
                console.log(e)
            }
            finally {
                setTitulo('')
                setImagen('')
                setDescripcion('')
                setQR('')
            }
        }
    }

    {/*Seleccionar imagenes  */ }
    const selectImage = () => {
        const options = {
            title: 'Selecciona una imagen',
            storegeOption: {
                skipBackup: true,
                path: 'images',
            }
        }
        launchImageLibrary(options, response => {
            if (response.errorCode) {
                console.log(response.errorMessage)
            } else if (response.didCancel) {
                console.log('El usuario cancelo')
            } else {
                const path = response.assets[0].uri
                setImagen(path)
            }
        })
    }

    {/*Seleccionar QR  */ }
    const selecQR = () => {
        const options = {
            title: 'Selecciona el QR',
            storegeOption: {
                skipBackup: true,
                path: 'images',
            }
        }
        launchImageLibrary(options, response => {
            if (response.errorCode) {
                console.log(response.errorMessage)
            } else if (response.didCancel) {
                console.log('El usuario cancelo')
            } else {
                const path = response.assets[0].uri
                setQR(path)
            }
        })
    }

    useEffect(() => {
        loadRTDAta()
    }, [])

    return (
        <KeyboardAvoidingView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    marginHorizontal: 10,
                    marginVertical: 10
                }}>
                {/*listado de Temas */}
                <FlatList style={styles.cuadro}
                    data={rtData}
                    renderItem={renderRTItem}
                    keyExtractor={item => item.key} />
                {/*formulario */}
                <FormInput
                    labelText='Título:'
                    placeholderText='Ingrese un título'
                    onChangeText={val => setTitulo(val)}
                    value={titulo.trimStart()} />
                {/*Imagen*/}
                <Image
                    style={{
                        alignSelf: 'center',
                        height: 200,
                        width: 200,
                        marginBottom: 5,
                    }}
                    source={{ uri: imagen }} />
                <Button
                    title='Seleccionar imagen'
                    onPress={selectImage} />
                {/*Imagen QR */}
                <Image
                    style={{
                        alignSelf: 'center',
                        height: 200,
                        width: 200,
                        marginVertical: 5,
                    }}
                    source={{ uri: QR }} />
                <Button
                    title='Seleccionar QR'
                    onPress={selecQR} />
                {/*Decripcion */}
                <View style={{ marginTop: 5, marginBottom: -10 }}>
                    <FormInput
                        labelText='Descripción:'
                        onChangeText={val => setDescripcion(val)}
                        value={descripcion.trimStart()}
                        numberOfLines={3}
                        multiline={true} />
                </View>
                {/*Botones */}
                <FormButton
                    labelText='Editar Tema'
                    handleOnPress={() => editarTema()}
                />
                <View style={{ marginTop: 6 }}>
                    <FormButton
                        labelText='Cancelar'
                        isPrimary={false}
                        handleOnPress={() => {

                            navigation.navigate('CapTem2');
                        }} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({

    cuadro: {
        paddingHorizontal: 20,
        marginHorizontal: -15
    },
})

export default OptionTem2


