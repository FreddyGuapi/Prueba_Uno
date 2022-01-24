import firestore from '@react-native-firebase/firestore';

// Crear un nuevo Tema
export const createQuestion = ( currentQuestionId, titulo) => {
    return firestore()
      .collection('Capitulo1')
      .doc(currentQuestionId)
      .set(titulo);
  };

//Traer todos los temas 
export const getTemas = () => {
  return firestore().collection('Capitulo1').get();
};


//Tema con id
export const getTemasById =(currentTemId) =>{
  return firestore().collection('Capitulo1').doc(currentTemId).get();
}

// Crear un nuevo Tema2
export const createQuestion2 = ( currentQuestionId, titulo) => {
  return firestore()
    .collection('Capitulo2')
    .doc(currentQuestionId)
    .set(titulo);
};

//Traer todos los temas2 
export const getTemas2 = () => {
return firestore().collection('Capitulo2').get();
};


//Tema2 con id
export const getTemas2ById =(currentTemId) =>{
return firestore().collection('Capitulo2').doc(currentTemId).get();
}


// Crear un nuevo Tema3
export const createQuestion3 = ( currentQuestionId, titulo) => {
  return firestore()
    .collection('Capitulo3')
    .doc(currentQuestionId)
    .set(titulo);
};

//Traer todos los temas3 
export const getTemas3 = () => {
return firestore().collection('Capitulo3').get();
};


//Tema3 con id
export const getTemas3ById =(currentTemId) =>{
return firestore().collection('Capitulo3').doc(currentTemId).get();
}



// Crear un nuevo Tema4
export const createQuestion4 = ( currentQuestionId, titulo) => {
  return firestore()
    .collection('Capitulo4')
    .doc(currentQuestionId)
    .set(titulo);
};

//Traer todos los temas4 
export const getTemas4 = () => {
return firestore().collection('Capitulo4').get();
};


//Tema4 con id
export const getTemas4ById =(currentTemId) =>{
return firestore().collection('Capitulo4').doc(currentTemId).get();
}


// Crear un nuevo Tema5
export const createQuestion5_6 = ( currentQuestionId, titulo) => {
  return firestore()
    .collection('Capitulo5')
    .doc(currentQuestionId)
    .set(titulo);
};

//Traer todos los temas5
export const getTemas5_6 = () => {
return firestore().collection('Capitulo5').get();
};


//Tema5 con id
export const getTemas5_6ById =(currentTemId) =>{
return firestore().collection('Capitulo5').doc(currentTemId).get();
}