/**
* @Author: RoberCastro
* @Date:   13-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 13-12-2016
*/
import { HomePage } from './pages/home/home';
import { API_KEY_FIREBASE } from './helpers/apikeyfirebase';


class MyApp {

  constructor(){
    this.appBody = document.getElementsByTagName("app")[0];
  }

  start(){

    // Initialize Firebase
    var config = {
      apiKey: API_KEY_FIREBASE,
      authDomain: "castrogastro-858c3.firebaseapp.com",
      databaseURL: "https://castrogastro-858c3.firebaseio.com",
      storageBucket: "castrogastro-858c3.appspot.com",
      messagingSenderId: "508588633189"
    };
    firebase.initializeApp(config);

    // init HomePage
    let homePage = new HomePage(this.appBody);
  }

}

let myApp = new MyApp();
myApp.start();
