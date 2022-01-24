import React, { useEffect, useState } from 'react'
import { Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native'
import { getTemas5_6ById } from '../../../utils/database'
import { COLORS } from '../../../constants/theme'
import RNFetchBlob from 'rn-fetch-blob';

const InfoTema5_6 = ({ navigation, route }) => {
    const [currentTemId, setCurrentTemId] = useState(route.params.quizId)
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [imagen, setImagen] = useState('')
    const [imagenQR, setImagenQR] = useState('')

    let IMAGE_PATH = imagenQR;

    const checkPermision = async () => {
        if (Platform.OS === 'ios') {
            downloadImage()
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message: 'App needs access to your storage to download Photos',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Storage Permission Granted.');
                    downloadImage();
                } else {
                    alert('Storage Permission Not Granted');
                }
            } catch (err) {
                console.warn(err);
            }
        }
    }

    const downloadImage = () => {
        let date = new Date();
        let image_URL = IMAGE_PATH
        let ext = getExtention(image_URL);
        ext = '.' + ext[0];
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    '/image_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    ext,
                description: 'Image',
            },
        };
        config(options)
            .fetch('GET', image_URL)
            .then(res => {
                console.log('res -> ', JSON.stringify(res));
                alert('Image Downloaded Successfully.');
            });

    }

    const getExtention = filename => {
        return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined
    }

    const getTemasandDetalles = async () => {
        let currentTem = await getTemas5_6ById(currentTemId)
        currentTem = currentTem.data();
        setTitulo(currentTem.titulo);
        setDescripcion(currentTem.descripcion);
        setImagen(currentTem.imagen);
        setImagenQR(currentTem.QR);
    }

    useEffect(() => {
        getTemasandDetalles()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.titulo}>{titulo}</Text>
                <Image source={{ uri: imagen }}
                    style={{ width: 300, height: 300, alignSelf: 'center' }} />
                <Text style={styles.text}>{descripcion}</Text>
                <Image source={{ uri: imagenQR }}
                    style={{ width: 300, height: 300, alignSelf: 'center' }} />
                <TouchableOpacity style={styles.button}
                    onPress={checkPermision}>
                    <Text style={styles.text}>
                        DESCARGAR QR
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
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
    button: {
        padding: 10,
        backgroundColor: 'orange',
        marginBottom: 20
    },
    text: {
        color: COLORS.black,
        fontSize: 17,
        textAlign: 'center',
        margin: 5
    },
})


export default InfoTema5_6
