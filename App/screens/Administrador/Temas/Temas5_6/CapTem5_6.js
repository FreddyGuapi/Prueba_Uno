import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native'
import FormButton from '../../../../components/shared/FormButton'
import firestore from '@react-native-firebase/firestore'
import { COLORS } from '../../../../constants/theme'

const CapTem5_6 = ({ navigation }) => {
    const [rtData, setRtData] = useState([])
    const [search, setsearch] = useState('')

    async function loadRTDAta() {
        const suscriber = firestore().collection('Capitulo5').onSnapshot(querySnapshot => {
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

    useEffect(() => {
        loadRTDAta()
    }, [])

    function renderRTItem({ item }) {
        return (
            <View style={{ marginBottom: 10, backgroundColor: '#D5DDDD', backgroundColor: COLORS.white, elevation: 3, borderRadius: 10, }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} >
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
                    <View style={{ marginHorizontal: 5, marginVertical: 2 }} >
                        <Text style={{ color: COLORS.black, fontSize: 17, textTransform: 'uppercase' }}>{item.titulo}</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, marginRight: 60, opacity: 0.7 }}>{item.descripcion}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = rtData.filter((key) => {
                const itemData = key.titulo ? key.titulo.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setRtData(newData);
            setsearch(text);
        } else {
            setRtData(loadRTDAta);
            setsearch(text)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Listado de Temas </Text>
            <Button
                title={rtData.length === 0 ? "Temas no disponibles" : "Actualizar temas"}
                onPress={() => navigation.navigate('OptionTem5_6')}
            />

            {/*Buscador */}
            <TextInput
                placeholder='Buscar......'
                value={search}
                onChangeText={(text) => searchFilter(text)}
                style={{ backgroundColor: COLORS.white, borderColor: COLORS.black, marginHorizontal: 10, marginTop: 10, borderRadius: 10, }}
            />
            <FlatList style={styles.cuadro}
                data={rtData}
                renderItem={renderRTItem}
                keyExtractor={item => item.key} />
            <FormButton
                labelText='Crear un Tema'
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    borderRadius: 50,
                    paddingHorizontal: 30,
                }}
                handleOnPress={() => {
                    navigation.navigate('NewTem5_6');
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 17,
        color: COLORS.black,
        margin: 15,
        textTransform: 'uppercase'
    },
    cuadro: {
        padding: 20,
    },
})

export default CapTem5_6
