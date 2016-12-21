/**
* @Author: RoberCastro
* @Date:   20-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 13-12-2016
*/

export class FireBaseHelper {

  constructor(){

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCpFgr84epTyPOdUGgVMLpxLDOE4pAGQzo",
      authDomain: "castrogastro-858c3.firebaseapp.com",
      databaseURL: "https://castrogastro-858c3.firebaseio.com",
      storageBucket: "castrogastro-858c3.appspot.com",
      messagingSenderId: "508588633189"
    };
    firebase.initializeApp(config);
    // Get a reference to the database service
   }

  addObjectToBase(product){

    let database = firebase.database();
    // l'envoyer dans la collection "products" sur Firebase
    database.ref('localOrder').push(product);
  }

}
