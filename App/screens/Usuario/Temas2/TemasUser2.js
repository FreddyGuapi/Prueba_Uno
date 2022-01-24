import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { COLORS } from '../../../constants/theme';
import { getTemas2 } from '../../../utils/database';

const TemasUser2 = ({ navigation }) => {
  const [search, setsearch] = useState('')
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getAllQuizzes = async () => {
    setRefreshing(true);
    const quizzes = await getTemas2();
    let tempQuizzes = [];
    await quizzes.docs.forEach(async quiz => {
      await tempQuizzes.push({ id: quiz.id, ...quiz.data() });
    });
    await setAllQuizzes([...tempQuizzes]);
    setRefreshing(false);
  };

  useEffect(() => {
    getAllQuizzes();
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = allQuizzes.filter((quiz) => {
        const itemData = quiz.titulo ? quiz.titulo.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setAllQuizzes(newData);
      setsearch(text);
    } else {
      setAllQuizzes(getAllQuizzes);
      setsearch(text)
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        position: 'relative',
      }}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View
        style={{
          alignItems: 'center',

          backgroundColor: COLORS.white,
          elevation: 4,
          paddingHorizontal: 20,
        }}>
        <Text style={{ fontSize: 20, color: COLORS.black, padding: 10, }}>Listado de Temas </Text>
      </View>
      {/*Buscador */}
      <TextInput
        placeholder='Buscar......'
        value={search}
        onChangeText={(text) => searchFilter(text)}
        style={{ backgroundColor: COLORS.white, borderColor: COLORS.black, marginHorizontal: 10, borderRadius: 10, marginTop: 10 }}
      />
      {/* Listado de Temas */}
      <FlatList
        data={allQuizzes}
        onRefresh={getAllQuizzes}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        style={{
          paddingVertical: 20,
        }}
        renderItem={({ item: quiz }) => (
          <View
            style={{
              padding: 20,
              borderRadius: 5,
              marginVertical: 5,
              marginHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: COLORS.white,
              elevation: 2,
            }}>
            <View style={{ flex: 1, paddingRight: 10 }}>
              <Text style={{ fontSize: 18, color: COLORS.black }}>
                {quiz.titulo}
              </Text>
              {quiz.descripcion != '' ? (
                <Text style={{ opacity: 0.5 }}>{quiz.descripcion}</Text>
              ) : null}
            </View>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 50,
                backgroundColor: COLORS.primary + '20',
              }}
              onPress={() => {
                navigation.navigate('InfoTema2', {
                  quizId: quiz.id,
                });
              }}>
              <Text style={{ color: COLORS.primary }}>Ver</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default TemasUser2
