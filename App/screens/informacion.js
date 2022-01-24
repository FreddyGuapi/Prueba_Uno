import React from 'react'
import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native'
import { COLORS } from '../constants/theme'

const informacion = () => {
    return (
        <View style={styles.contenedor}>
            {/*Logo */}
            <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/riasproject-ca344.appspot.com/o/Imagenes%2Flogo.png?alt=media&token=6182e62b-8672-4d5c-878c-bcf0b9a4fcd5' }}
                style={styles.imagen}
            />
            {/*Contenido*/}
            <Text style={styles.titulo}>Bienvenido</Text>
            <Text style={styles.contenido}>Esta aplicación permite gestionar los temas de cada capítulo y
                sus respectivas imágenes, por lo que es un complemento de otra aplicación, sabemos
                que tú al igual que yo queremos ver las imágenes en realidad aumenta por eso te invito
                a que te descargues la otra aplicación la cual es completamente segura y sobre todo te
                sirve para ver las imágenes.
            </Text>
            {/*Boton a la otra apliacación */}
            <View style={{ marginTop: 50, marginHorizontal: 50, borderRadius: 50, padding: 10 }}>
                <Button
                    title="Descargar aplicación"
                    onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.FreddyGuapi.ARProRias')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imagen: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginVertical: 10
    },
    titulo: {
        fontSize: 25,
        color: COLORS.black,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    contenido: {
        fontSize: 17,
        marginTop: 10,
        marginHorizontal: 20,
        textAlign: 'center'
    },
})

export default informacion

