import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, ToastAndroid, TouchableOpacity, Image, Alert } from 'react-native'
import FormInput from '../../../../components/shared/FormInput'
import { COLORS } from '../../../../constants/theme'
import FormButton from '../../../../components/shared/FormButton'
import { createQuestion5_6 } from '../../../../utils/database'
import { launchImageLibrary } from 'react-native-image-picker'
import storage from '@react-native-firebase/storage';


const NewTem5_6 = ({ navigation }) => {
    const [question, setQuestion] = useState('')
    const [imageUri, setImageUri] = useState('')
    const [imageQR, setImageQR] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')

    const handleQuestionSave = async () => {
        if (
            question == "" || correctAnswer == "" || imageUri == "" || imageQR == ""
        ) {
            return (Alert.alert('Deber llenar todos los campos'))
        }
        let currentQuestionId = Math.floor(
            100000 + Math.random() * 9000,
        ).toString();
        //Subir imagen
        let imageUrl = '';
        if (imageUri != '') {
            const reference = storage().ref(
                `/Capitulos/Capitulo5/imagenes/${currentQuestionId}.jpg`,
            );
            await reference.putFile(imageUri).then(() => {
                console.log('Imagen Guardada');
            });
            imageUrl = await reference.getDownloadURL();
        }
        //Subir QR
        let imageQUrl = '';
        if (imageQR != '') {
            const reference = storage().ref(
                `/Capitulos/Capitulo5/QR/${currentQuestionId}.jpg`,
            );
            await reference.putFile(imageQR).then(() => {
                console.log('QR Guardado');
            });
            imageQUrl = await reference.getDownloadURL();
        }
        await createQuestion5_6(currentQuestionId, {
            titulo: question,
            descripcion: correctAnswer,
            imagen: imageUrl,
            QR: imageQUrl,
        });
        navigation.navigate('CapTem5_6')
        ToastAndroid.show('Tema guardado', ToastAndroid.SHORT);
        setQuestion('');
        setCorrectAnswer('');
        setImageUri('');
        setImageQR('');
    };

    {/*Seleccionar imagenes  */ }
    const selectImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
        },
            ({ assets }) => {
                if (assets && assets.length > 0) {
                    setImageUri(assets[0].uri);
                }
            },

        );
    };

    {/*Seleccionar QR  */ }
    const selectQR = () => {
        launchImageLibrary({
            mediaType: 'photo',
        },
            ({ assets }) => {
                if (assets && assets.length > 0) {
                    setImageQR(assets[0].uri);
                }
            },

        );
    };

    return (
        <KeyboardAvoidingView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            <ScrollView
                style={{
                    flex: 1,

                    marginHorizontal: 10
                }}>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: COLORS.black }}>
                        Agregar Tema
                    </Text>
                </View>
                <FormInput
                    labelText='Título'
                    placeholderText='Ingrese un título'
                    onChangeText={val => setQuestion(val)}
                    value={question.trimStart()} />
                {/*Imagene */}
                {
                    imageUri == '' ? (
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 28,
                                backgroundColor: COLORS.primary + '20',
                            }}
                            onPress={selectImage}>
                            <Text style={{ opacity: 0.5, color: COLORS.primary }}>
                                + agregar imagen
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <Image
                            source={{
                                uri: imageUri,
                            }}
                            resizeMode={'cover'}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 5,
                                alignSelf:'center',
                            }}
                        />
                    )
                }
                {/*Decripcion */}
                <View >
                    <FormInput
                        labelText='Descripción'
                        onChangeText={val => setCorrectAnswer(val)}
                        value={correctAnswer.trimStart()}
                        numberOfLines={3}
                        multiline={true}
                    />
                </View>
                {/*QR */}
                {
                    imageQR == '' ? (
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 28,
                                backgroundColor: COLORS.primary + '20',
                                marginBottom: 5
                            }}
                            onPress={selectQR}>
                            <Text style={{ opacity: 0.5, color: COLORS.primary }}>
                                + agregar QR
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <Image
                            source={{
                                uri: imageQR,
                            }}
                            resizeMode={'cover'}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 5,
                                alignSelf:'center',
                                marginBottom:5,
                            }}
                        />
                    )
                }
                {/*Botones */}
                <FormButton
                    labelText='Guardar Tema'
                    handleOnPress={handleQuestionSave} />
                <View style={{ marginTop: 5 }}>
                    <FormButton
                        labelText='Cancelar'
                        isPrimary={false}
                        handleOnPress={() => {
                            navigation.navigate('CapTem5_6');
                        }} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default NewTem5_6
