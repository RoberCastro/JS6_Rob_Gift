(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Author: RoberCastro
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Date:   13-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Email:  robertoicastro@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified by:   robercastro
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified time: 13-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _home = require('./pages/home/home');

var _apikeyfirebase = require('./helpers/apikeyfirebase');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyApp = function () {
  function MyApp() {
    _classCallCheck(this, MyApp);

    this.appBody = document.getElementsByTagName("app")[0];
  }

  _createClass(MyApp, [{
    key: 'start',
    value: function start() {

      // Initialize Firebase
      var config = {
        apiKey: _apikeyfirebase.API_KEY_FIREBASE,
        authDomain: "castrogastro-858c3.firebaseapp.com",
        databaseURL: "https://castrogastro-858c3.firebaseio.com",
        storageBucket: "castrogastro-858c3.appspot.com",
        messagingSenderId: "508588633189"
      };
      firebase.initializeApp(config);

      // init HomePage
      var homePage = new _home.HomePage(this.appBody);
    }
  }]);

  return MyApp;
}();

var myApp = new MyApp();
myApp.start();

},{"./helpers/apikeyfirebase":2,"./pages/home/home":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_KEY_FIREBASE = exports.API_KEY_FIREBASE = "AIzaSyCpFgr84epTyPOdUGgVMLpxLDOE4pAGQzo";

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* @Author: RoberCastro
* @Date:   20-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 13-12-2016
*/

var FireBaseHelper = exports.FireBaseHelper = function () {
  function FireBaseHelper() {
    _classCallCheck(this, FireBaseHelper);

    // Get a reference to the database service
    this.database = firebase.database();
    this.dbData = [];
  }

  _createClass(FireBaseHelper, [{
    key: 'addObjectToBase',
    value: function addObjectToBase(product) {

      // l'envoyer dans la collection "products" sur Firebase
      this.database.ref('localOrder').push(product);
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.database.ref('localOrder').on('child_added', function (snapshot) {
          //console.log('child added-> ', snapshot.val());

          _this.dbData.push(snapshot.val());
          // les valeur sont contenu dans snapshot.val()
          // et passée à une fonction pour être traitée plus loin...
          //  displayProductsInList(snapshot)
          resolve(_this.dbData);
        });
      });
    }
  }]);

  return FireBaseHelper;
}();

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Author: RoberCastro
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Date:   21-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Email:  robertoicastro@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified by:   robercastro
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified time: 21-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _home = require('../../pages/home/home');

var _firebaseHelper = require('../../helpers/firebaseHelper');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminPage = exports.AdminPage = function () {
  function AdminPage(appBody, formInput) {
    _classCallCheck(this, AdminPage);

    this.appBody = appBody;
    this.formData = formInput;
    this.pageTitle = "Administration des commandes";
    this.time = new Date();
    this.initUI();
    this.fFireBaseHelper();
  }

  _createClass(AdminPage, [{
    key: 'initUI',
    value: function initUI() {
      // remove all section before display UI
      if (document.getElementsByTagName("section")[0]) {
        document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0]);
      }
      // create page skeleton
      var pageSkeleton = '\n      <section>\n        <form>\n          <p>' + this.pageTitle + ' ' + this.formData + ' !</p>\n          <nav class="navBarTop">\n           <div class="nav-wrapper" class="navBarTop" >\n             <a href="#!" class="brand-logo">Logo</a>\n             <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>\n             <ul class="right hide-on-med-and-down">\n               <li><a id="home" href="#">Inicio</a></li>\n               <li><a href="#">Productos</a></li>\n               <li><a href="#">Quienes somos</a></li>\n               <li><a href="#">Contacto</a></li>\n               <li><a id="adminPage" href="#">Admin</a></li>\n             </ul>\n             <ul class="side-nav" id="mobile-demo">\n               <li><a id="homeMob" href="#">Inicio</a></li>\n               <li><a href="#">Productos</a></li>\n               <li><a href="#">Quienes somos</a></li>\n               <li><a href="#">Contacto</a></li>\n               <li><a id="adminPageMob" href="#">Admin</a></li>\n             </ul>\n           </div>\n         </nav>\n         <div class="grid-container outline">\n             <div id="buyList">\n\n             </div>\n          </div>\n        </form>\n      </section>\n      ';
      // add page skeleton in body
      this.appBody.insertAdjacentHTML('afterbegin', pageSkeleton);
      $(document).ready(function () {
        $(".button-collapse").sideNav();
      });
      //let list = this.listOrders
      //console.log(list)
      this.loadEventUI();
    }
  }, {
    key: 'loadEventUI',
    value: function loadEventUI() {
      var _this = this;

      $("#home")[0].addEventListener('click', function (event) {
        return _this.onLogin(event);
      }, false);
      $("#homeMob")[0].addEventListener('click', function (event) {
        return _this.onLogin(event);
      }, false);
    }
  }, {
    key: 'onLogin',
    value: function onLogin(event) {

      event.preventDefault();
      new _home.HomePage(this.appBody);
    }
  }, {
    key: 'fFireBaseHelper',
    value: function fFireBaseHelper() {
      var _this2 = this;

      //We instanciate the Firebase class
      var dataBaseCastro = new _firebaseHelper.FireBaseHelper();

      dataBaseCastro.loadData().then(function (response) {

        var ordre = void 0;

        for (var id in response) {

          ordre = response[id].order;

          var divOrdre = document.createElement('div');
          divOrdre.innerHTML = 'Liste d\'achat num\xE9ro : ' + id + ' </br>\n                                  Client mail : ' + response[id].mail + '</br>\n                                  Prix du pannier : ' + response[id].priceOrder + '</br>\n                                  Quantit\xE9 de panniers : ' + response[id].nbOrder + '</br>\n                                  Prix total : ' + response[id].totalPrice + '</br>';
          divOrdre.setAttribute('id', 'liste' + id);
          divOrdre.setAttribute('style', 'display:block; overflow:auto;');
          divOrdre.setAttribute('class', 'divProd');
          document.getElementById('buyList').appendChild(divOrdre);
          var idDiv = 'liste' + id;

          console.log("ordre", id);

          for (var i in ordre) {

            document.getElementById(idDiv).insertAdjacentHTML('beforeend', _this2.dessinerProduit(ordre[i]));
          }
        }
      }).catch(function (err) {
        console.log('Error with Firebase loadData()-> ', err);
      });

      //console.log(listOrders)
    }
  }, {
    key: 'dessinerPanier',
    value: function dessinerPanier(listOrders) {
      // Supprimer contenu panier
      var liste = document.getElementById('buyList');
      while (liste.children.length > 0) {
        liste.removeChild(liste.lastChild);
      }
      //  priceCommande = 0;

      // Afficher les éléments

      for (var id in listOrders) {
        this.dessinerProduit(listOrders[0].order[id]);
        //priceCommande = priceCommande + listOrders[id].pricePro * listOrders[id].timesPro ;
      }
      // document.getElementById('totalPriceCommande').innerHTML = priceCommande;
      // document.getElementById('totalPricePackage').innerHTML = priceCommande;
      // if(document.getElementById('timesCommande').innerHTML == "Quantité"){
      //   document.getElementById('timesCommande').innerHTML = 1;
      // };
    }
  }, {
    key: 'dessinerProduit',
    value: function dessinerProduit(ordre) {
      // Lire le src du produit (stocké dans le html)
      return '\n      <div id="' + ordre.idPro + '" class="col-105">\n         <figure style= "margin:0;">\n           <img id="imgPan1" src="' + ordre.src + '">\n         </figure>\n         <p class = "priceHidden"> ' + ordre.pricePro + ' </p>\n         <p>' + ordre.timesPro + '</p>\n      </div>\n      ';
    }
  }]);

  return AdminPage;
}();

},{"../../helpers/firebaseHelper":3,"../../pages/home/home":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Author: RoberCastro
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Date:   13-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Email:  robertoicastro@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified by:   robercastro
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified time: 13-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _firebaseHelper = require('../../helpers/firebaseHelper');

var _admin = require('../../pages/admin/admin');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePage = exports.HomePage = function () {
  function HomePage(appBody) {
    _classCallCheck(this, HomePage);

    this.appBody = appBody;
    this.pageTitle = 'Welcome to Gastro Castro';
    this.initUI();
    this.fFireBaseHelper();
    this.emptyBoxF();
  }

  _createClass(HomePage, [{
    key: 'initUI',
    value: function initUI() {

      //Iniciate the variable Q to the value in the html
      var vQ;
      //Iniciate the variable priceProduct
      var priceProduct;
      var priceCommande;
      var timesCommande;
      var totalPricePackage;
      var localOrder = {};

      // remove all section before display UI
      if (document.getElementsByTagName("section")[0]) {
        document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0]);
      }
      $(document).ready(function () {
        $(".button-collapse").sideNav();
      });
      // create page skeleton
      var pageSkeleton = this.skeletonBase();

      // add page skeleton in body
      this.appBody.insertAdjacentHTML('afterbegin', pageSkeleton);
      this.loadEventUI();
      this.dessinerPanier(priceCommande, timesCommande, totalPricePackage);
      this.chooseProduct(vQ, priceProduct, priceCommande, timesCommande, totalPricePackage, localOrder);
      this.clickCommandeQt(priceCommande, timesCommande, totalPricePackage);

      Materialize.toast('I am a toast!', 4000); // 4000 is the duration of the toast
    }
  }, {
    key: 'fFireBaseHelper',
    value: function fFireBaseHelper() {
      var _this = this;

      //We instanciate the Firebase class
      var dataBaseCastro = new _firebaseHelper.FireBaseHelper();

      //In the case the user send the order we save in the database
      $("#sendOrder")[0].addEventListener('click', function (e) {

        e.preventDefault();

        var sEmail = $('#txtEmail').val();
        // Checking Empty Fields
        if ($.trim(sEmail).length == 0) {
          e.preventDefault();
          alert('Remplissez le champ email');
          return false;
        }
        if (_this.validateEmail(sEmail)) {
          e.preventDefault();
          Materialize.toast('Email ok', 4000); // 4000 is the duration of the toast
        } else {
          e.preventDefault();
          alert('Invalid Email Address');
          return false;
        }

        var comLocalStorage = JSON.parse(localStorage.getItem("localOrder"));
        console.log(comLocalStorage);
        dataBaseCastro.addObjectToBase({
          order: comLocalStorage,
          priceOrder: $("#totalPriceCommande")[0].innerHTML,
          nbOrder: $("#timesCommande")[0].innerHTML,
          totalPrice: $("#totalPricePackage")[0].innerHTML,
          mail: $("input[name='email']").val()
        });

        alert("Bien envoyé");
      });
    }
  }, {
    key: 'emptyBoxF',
    value: function emptyBoxF() {
      var _this2 = this;

      $("#emptyBox")[0].addEventListener('click', function () {

        //e.preventDefault();
        localStorage.removeItem("localOrder");
        _this2.initUI();
      });
    }
  }, {
    key: 'validateEmail',
    value: function validateEmail(sEmail) {
      var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;

      if (filter.test(sEmail)) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'dessinerPanier',
    value: function dessinerPanier(priceCommande, timesCommande, totalPricePackage) {
      // Supprimer contenu panier
      var liste = document.getElementById('buyList');
      while (liste.children.length > 1) {
        liste.removeChild(liste.lastChild);
      }
      priceCommande = 0;

      // Afficher les éléments
      var produits = JSON.parse(localStorage.getItem("localOrder"));
      for (var id in produits) {
        this.dessinerProduit(produits[id]);
        priceCommande = priceCommande + produits[id].pricePro * produits[id].timesPro;
      }
      document.getElementById('totalPriceCommande').innerHTML = priceCommande;
      document.getElementById('totalPricePackage').innerHTML = priceCommande;
      if (document.getElementById('timesCommande').innerHTML == "Quantité") {
        document.getElementById('timesCommande').innerHTML = 1;
      };
    }
  }, {
    key: 'dessinerProduit',
    value: function dessinerProduit(produit) {
      // Lire le src du produit (stocké dans le html)
      var srcImage = document.querySelector('img[data-id=' + produit.idPro + ']').src;
      var productToList = '\n    <div id="' + produit.idPro + '" class="col-105">\n       <figure style= "margin:0;">\n         <img id="imgPan1" src="' + srcImage + '">\n       </figure>\n       <p class = "priceHidden"> ' + produit.pricePro + ' </p>\n       <p>' + produit.timesPro + '</p>\n    </div>\n    ';
      document.getElementById('buyList').insertAdjacentHTML('beforeend', productToList);
    }
  }, {
    key: 'chooseProduct',
    value: function chooseProduct(vQ, priceProduct, priceCommande, timesCommande, totalPricePackage, localOrder) {
      var _this3 = this;

      if (document.getElementById('productList')) {
        document.getElementById('productList').addEventListener('click', function (event) {

          event.preventDefault();

          _this3.clickFigure(event);
          //console.log(event)
          _this3.clickPlusLess(event, vQ, priceProduct, priceCommande, timesCommande, totalPricePackage, localOrder);
          //this.dessinerPanier();
        });
      }
    }
  }, {
    key: 'clickPlusLess',
    value: function clickPlusLess(event, vQ, priceProduct, priceCommande, timesCommande, totalPricePackage, localOrder) {

      //Iniciate the quantity to 0
      var qProduct;

      if (document.getElementById('buyList').lastElementChild.firstElementChild.tagName !== "FIGURE") {
        priceCommande = 0;
        document.getElementById('timesCommande').innerHTML = 1;
      } else {
        priceCommande = parseInt(document.getElementById('totalPriceCommande').innerHTML, 10);
      }

      //If the click is in a button
      if (event.target.tagName == 'BUTTON') {

        //Convert the html text in an integer number so we can operate with it
        priceProduct = parseInt(event.target.parentElement.nextElementSibling.innerHTML, 10);

        //If the product don't exist in the list
        if (!document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id')) && event.target.innerHTML == '+') {

          if (JSON.parse(localStorage.getItem("localOrder"))) {
            localOrder = JSON.parse(localStorage.getItem("localOrder"));
          }

          localOrder[event.target.parentElement.previousElementSibling.getAttribute('data-id')] = {
            idPro: event.target.parentElement.previousElementSibling.getAttribute('data-id'),
            src: event.target.parentElement.previousElementSibling.getAttribute('src'),
            timesPro: 1,
            pricePro: priceProduct
          };
          localStorage.setItem("localOrder", JSON.stringify(localOrder));

          //Add the html content to the div buyList
          this.dessinerPanier(priceCommande, timesCommande, totalPricePackage);
          //Calculate and prices and quantities
          priceCommande = priceCommande + priceProduct;
          totalPricePackage = parseInt(document.getElementById('totalPricePackage').innerHTML, 10);
          timesCommande = parseInt(document.getElementById('timesCommande').innerHTML, 10);
          totalPricePackage = priceCommande * timesCommande;
          document.getElementById('totalPricePackage').innerHTML = totalPricePackage;

          //If the product exist in the list
        } else if (document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id'))) {

          vQ = parseInt(document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id')).lastChild.previousElementSibling.innerHTML, 10);

          //If the click is on the plus button
          if (event.target.innerHTML == '+') {

            qProduct = vQ + 1;
            priceCommande = priceCommande + priceProduct;
            document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id')).lastChild.previousElementSibling.innerHTML = qProduct;

            localOrder = JSON.parse(localStorage.getItem("localOrder"));
            localOrder[event.target.parentElement.previousElementSibling.getAttribute('data-id')] = {
              idPro: event.target.parentElement.previousElementSibling.getAttribute('data-id'),
              src: event.target.parentElement.previousElementSibling.getAttribute('src'),
              timesPro: qProduct,
              pricePro: priceProduct
            };
            localStorage.setItem("localOrder", JSON.stringify(localOrder));
            this.dessinerPanier(priceCommande, timesCommande, totalPricePackage);
            this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);
            //If the click is on the less button
          } else if (event.target.innerHTML == '--') {

            //if the quantity is 1 we take off the div of the product from the productList
            if (vQ === 1) {
              priceCommande = priceCommande - priceProduct;
              var idPro = event.target.parentElement.previousElementSibling.getAttribute('data-id');
              var pr = document.getElementById(idPro);
              pr.parentNode.removeChild(pr);

              localOrder = JSON.parse(localStorage.getItem("localOrder"));
              delete localOrder[event.target.parentElement.previousElementSibling.getAttribute('data-id')];
              localStorage.setItem("localOrder", JSON.stringify(localOrder));
              //console.log(localOrder);
              this.dessinerPanier(priceCommande, timesCommande, totalPricePackage);
              this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);

              //if the quantity is more than 1 we take one unity from the quantity of the product
            } else if (vQ > 1) {
              priceCommande = priceCommande - priceProduct;
              qProduct = vQ - 1;
              document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id')).lastChild.previousElementSibling.innerHTML = qProduct;
              localOrder = JSON.parse(localStorage.getItem("localOrder"));
              localOrder[event.target.parentElement.previousElementSibling.getAttribute('data-id')] = {
                idPro: event.target.parentElement.previousElementSibling.getAttribute('data-id'),
                src: event.target.parentElement.previousElementSibling.getAttribute('src'),
                timesPro: qProduct,
                pricePro: priceProduct
              };
              localStorage.setItem("localOrder", JSON.stringify(localOrder));
              this.dessinerPanier(priceCommande, timesCommande, totalPricePackage);
              this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);
            }
          }
        }
      }
      document.getElementById('totalPriceCommande').innerHTML = priceCommande;
    }
  }, {
    key: 'clickCommandeQt',
    value: function clickCommandeQt(priceCommande, timesCommande, totalPricePackage) {

      document.getElementById('commandeColumn').addEventListener('click', function (eventCommande) {
        eventCommande.preventDefault();
        priceCommande = parseInt(document.getElementById('totalPriceCommande').innerHTML, 10);
        timesCommande = parseInt(document.getElementById('timesCommande').innerHTML, 10);
        document.getElementById('timesCommande').innerHTML = 1;
        totalPricePackage = parseInt(document.getElementById('totalPricePackage').innerHTML, 10);

        if (eventCommande.target.id == 'plus') {
          timesCommande = timesCommande + 1;
          document.getElementById('timesCommande').innerHTML = timesCommande;
        } else if (eventCommande.target.id == 'moins' && timesCommande > 1) {
          timesCommande--;
          document.getElementById('timesCommande').innerHTML = timesCommande;
        }

        totalPricePackage = priceCommande * timesCommande;
        document.getElementById('totalPricePackage').innerHTML = totalPricePackage;
      });
    }
  }, {
    key: 'refreshTotalCommande',
    value: function refreshTotalCommande(priceCommande, timesCommande, totalPricePackage) {

      document.getElementById('totalPriceCommande').innerHTML = priceCommande;
      totalPricePackage = priceCommande * timesCommande;

      document.getElementById('totalPricePackage').innerHTML = totalPricePackage;
      priceCommande = parseInt(document.getElementById('totalPriceCommande').innerHTML, 10);
      timesCommande = parseInt(document.getElementById('timesCommande').innerHTML, 10);

      document.getElementById('totalPricePackage').innerHTML = 1;
      totalPricePackage = parseInt(document.getElementById('totalPricePackage').innerHTML, 10);

      totalPricePackage = priceCommande * timesCommande;
      document.getElementById('totalPricePackage').innerHTML = totalPricePackage;
    }
  }, {
    key: 'clickFigure',
    value: function clickFigure(event) {

      if (event.target.tagName == 'IMG') {

        var typeProd = event.target.getAttribute('data-id');

        switch (typeProd) {

          case 'imgClick1br':
            document.getElementById('textExplicatifBrandy').innerHTML = "Ceci est le premier brandy de la liste";
            break;
          case 'imgClick2br':
            document.getElementById('textExplicatifBrandy').innerHTML = "Ceci est le deuxième brandy de la liste";
            break;
          case 'imgClick3br':
            document.getElementById('textExplicatifBrandy').innerHTML = "Ceci est le troisième brandy de la liste";
            break;
          case 'imgClick1wine':
            document.getElementById('textExplicatifWine').innerHTML = "Ceci est le premier vin de la liste";
            break;
          case 'imgClick2wine':
            document.getElementById('textExplicatifWine').innerHTML = "Ceci est le deuxième vin de la liste";
            break;
          case 'imgClick3wine':
            document.getElementById('textExplicatifWine').innerHTML = "Ceci est le troisième vin de la liste";
            break;
          case 'imgClick1oil':
            document.getElementById('textExplicatifOil').innerHTML = "Ceci est le premier huile de la liste";
            break;
          case 'imgClick2oil':
            document.getElementById('textExplicatifOil').innerHTML = "Ceci est le deuxième huile de la liste";
            break;
          case 'imgClick3oil':
            document.getElementById('textExplicatifOil').innerHTML = "Ceci est le troisième huile de la liste";
            break;
          case 'imgClick1ch':
            document.getElementById('textExplicatifCheese').innerHTML = "Ceci est le troisième huile de la liste";
            break;
          case 'imgClick2ch':
            document.getElementById('textExplicatifCheese').innerHTML = "Ceci est le premier fromage de la liste";
            break;
          case 'imgClick3ch':
            document.getElementById('textExplicatifCheese').innerHTML = "Ceci est le troisième fromage de la liste";
            break;
          case 'imgClick1ham':
            document.getElementById('textExplicatifHam').innerHTML = "Ceci est le premier jambon de la liste";
            break;
          case 'imgClick2ham':
            document.getElementById('textExplicatifHam').innerHTML = "Ceci est le deuxième jambon de la liste";
            break;
          case 'imgClick3ham':
            document.getElementById('textExplicatifHam').innerHTML = "Ceci est le troisième jambon de la liste";
            break;
          default:
            alert("Ce produit n'a pas de description");
        }
      }
    }
  }, {
    key: 'loadEventUI',
    value: function loadEventUI() {
      var _this4 = this;

      $("#adminPage")[0].addEventListener('click', function (event) {
        return _this4.onLogin(event);
      }, false);
      $("#adminPageMob")[0].addEventListener('click', function (event) {
        return _this4.onLogin(event);
      }, false);
    }
  }, {
    key: 'onLogin',
    value: function onLogin(event) {

      var validationInput = 0;
      var formInput = $('#txtEmail').val();

      event.preventDefault();
      if ($('#txtEmail').val().length > 0) {
        new _admin.AdminPage(this.appBody, formInput);
      } else {
        event.preventDefault();
        alert("Hello", "Introduisez votre mail");
      }
    }
  }, {
    key: 'skeletonBase',
    value: function skeletonBase() {

      var vSkeleton = '\n    <section>\n        <h3 class="center">' + this.pageTitle + '</h3>\n        <form>\n          <nav class="navBarTop">\n           <div class="nav-wrapper" class="navBarTop" >\n             <a href="#!" class="brand-logo">Logo</a>\n             <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>\n             <ul class="right hide-on-med-and-down">\n               <li><a href="#">Inicio</a></li>\n               <li><a href="#">Productos</a></li>\n               <li><a href="#">Quienes somos</a></li>\n               <li><a href="#">Contacto</a></li>\n               <li><a id="adminPage" href="#">Admin</a></li>\n             </ul>\n             <ul class="side-nav" id="mobile-demo">\n               <li><a href="#">Inicio</a></li>\n               <li><a href="#">Productos</a></li>\n               <li><a href="#">Quienes somos</a></li>\n               <li><a href="#">Contacto</a></li>\n               <li><a id="adminPageMob" href="#">Admin</a></li>\n             </ul>\n           </div>\n         </nav>\n\n         <div class="sendOrder">\n            <button class="btn" id="sendOrder">Envoyer commande</button>\n            <button class="btn" id="emptyBox">Vider le coffre</button>\n            <p>\n              <label for="email">Email:</label><input id="txtEmail" type="email" name="email" value="" placeholder="votreemail.ch"/>\n            </p>\n\n         </div>\n\n         <div class="grid-container outline">\n             <div id="buyList" class="row">\n               <div class="col-105" id="commandeColumn">\n                  <p>Coffre</p>\n                  <p id="totalPriceCommande"></p></br>\n                  <p>Qt\xE9 :</p><p id="timesCommande">Quantit\xE9</p></br>\n                  <p>Total :</p><p id="totalPricePackage"></p></br>\n                  <div class="ligneBt"><button id="moins">--</button><button id="plus">+</button></div>\n               </div>\n             </div>\n\n\n            <div id="productList" >\n\n<!--First line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Brandy</p></div>\n\n                  <div class="col-1 center" >\n                    <figure style= "margin:0;">\n                      <img data-id="imgClick1br" src="./src/images/brandy1.png">\n                      <div id="ligneBt"><button id="moinsB1">--</button><button id="moinsB1">+</button></div>\n                      <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img data-id="imgClick2br" src="./src/images/brandy-casajuana-100-anos-reserva.jpeg">\n                        <div class="ligneBt"><button id="moinsB2">--</button><button id="plusB2">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div  class="col-1 center">\n                     <figure style= "margin:0;">\n                        <img  data-id="imgClick3br" src="./src/images/barbadillo.jpeg">\n                        <div class="ligneBt"><button id="moinsB3">--</button><button id="plusB3">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                     </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifBrandy"></p></div>\n               </div>\n\n<!--Second line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Vinos</p></div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img  data-id="imgClick1wine" src="./src/images/vin1.jpg">\n                        <div class="ligneBt"><button id="moinsW1">--</button><button id="plusW1">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img  data-id="imgClick2wine" src="./src/images/vin2.jpg">\n                        <div class="ligneBt"><button id="moinsW2">--</button><button id="plusW2">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img data-id="imgClick3wine" src="./src/images/vin3.jpg">\n                        <div class="ligneBt"><button id="moinsW3">--</button><button id="plusW3">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifWine"></p></div>\n               </div>\n\n<!--Third line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Aceite de oliva</p></div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick1oil" src="./src/images/ROXANE ARBEQUINA_500_02.jpeg">\n                          <div class="ligneBt"><button id="moinsO1">--</button><button id="plusO1">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick2oil" src="./src/images/maria-de-la-o-seleccion-gourmet-500-ml.jpeg">\n                          <div class="ligneBt"><button id="moinsO2">--</button><button id="plusO2">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick3oil" src="./src/images/ROXANE ARBEQUINA_500_02.jpeg">\n                          <div class="ligneBt"><button id="moinsO3">--</button><button id="plusO3">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifOil"></p></div>\n               </div>\n\n  <!--Fourth line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Queso</p></div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick1ch" src="./src/images/cogman-semicurado-puro-oveja.jpeg">\n                          <div class="ligneBt"><button id="moinsCh1">--</button><button id="plusCh1">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick2ch" src="./src/images/queso-curado-al-romero-tomelloso.jpeg">\n                          <div class="ligneBt"><button id="moinsCh2">--</button><button id="plusCh2">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick3ch" src="./src/images/montalvo-curado-en-aceite.jpeg">\n                          <div class="ligneBt"><button id="moinsCh3">--</button><button id="plusCh3">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifCheese"></p></div>\n               </div>\n\n<!--Fifth line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Jamon ib\xE9rico</p></div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick1ham" src="./src/images/jamon1.jpeg">\n                          <div class="ligneBt"><button id="moinsH1">--</button><button id="plusH1">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick2ham" src="./src/images/jamon2.jpeg">\n                          <div class="ligneBt"><button id="moinsH2">--</button><button id="plusH2">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick3ham" src="./src/images/jamon3.jpeg">\n                          <div class="ligneBt"><button id="moinsH3">--</button><button id="plusH3">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div  id="imgClick1" class="col-1"><p id="textExplicatifHam"></p></div>\n               </div>\n            </div>\n          </div>\n\n         </form>\n      </section>';
      return vSkeleton;
    }
  }]);

  return HomePage;
}();
// window.onload = function () {
//   dessinerPanier();
// }

},{"../../helpers/firebaseHelper":3,"../../pages/admin/admin":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvaGVscGVycy9hcGlrZXlmaXJlYmFzZS5qcyIsImRldi9hcHAvaGVscGVycy9maXJlYmFzZUhlbHBlci5qcyIsImRldi9hcHAvcGFnZXMvYWRtaW4vYWRtaW4uanMiLCJkZXYvYXBwL3BhZ2VzL2hvbWUvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O3FqQkNBQTs7Ozs7Ozs7O0FBT0E7O0FBQ0E7Ozs7SUFHTSxLO0FBRUosbUJBQWE7QUFBQTs7QUFDWCxTQUFLLE9BQUwsR0FBZSxTQUFTLG9CQUFULENBQThCLEtBQTlCLEVBQXFDLENBQXJDLENBQWY7QUFDRDs7Ozs0QkFFTTs7QUFFTDtBQUNBLFVBQUksU0FBUztBQUNYLGdEQURXO0FBRVgsb0JBQVksb0NBRkQ7QUFHWCxxQkFBYSwyQ0FIRjtBQUlYLHVCQUFlLGdDQUpKO0FBS1gsMkJBQW1CO0FBTFIsT0FBYjtBQU9BLGVBQVMsYUFBVCxDQUF1QixNQUF2Qjs7QUFFQTtBQUNBLFVBQUksV0FBVyxtQkFBYSxLQUFLLE9BQWxCLENBQWY7QUFDRDs7Ozs7O0FBSUgsSUFBSSxRQUFRLElBQUksS0FBSixFQUFaO0FBQ0EsTUFBTSxLQUFOOzs7Ozs7OztBQ3BDTyxJQUFNLDhDQUFtQix5Q0FBekI7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7SUFRYSxjLFdBQUEsYztBQUVYLDRCQUFhO0FBQUE7O0FBRVg7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsU0FBUyxRQUFULEVBQWhCO0FBQ0EsU0FBSyxNQUFMLEdBQWMsRUFBZDtBQUVBOzs7O29DQUVjLE8sRUFBUTs7QUFFdEI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLElBQWhDLENBQXFDLE9BQXJDO0FBQ0Q7OzsrQkFFUztBQUFBOztBQUNSLGFBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVB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bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMTMtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgQVBJX0tFWV9GSVJFQkFTRSB9IGZyb20gJy4vaGVscGVycy9hcGlrZXlmaXJlYmFzZSc7XG5cblxuY2xhc3MgTXlBcHAge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5hcHBCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcHBcIilbMF07XG4gIH1cblxuICBzdGFydCgpe1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBhcGlLZXk6IEFQSV9LRVlfRklSRUJBU0UsXG4gICAgICBhdXRoRG9tYWluOiBcImNhc3Ryb2dhc3Ryby04NThjMy5maXJlYmFzZWFwcC5jb21cIixcbiAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY2FzdHJvZ2FzdHJvLTg1OGMzLmZpcmViYXNlaW8uY29tXCIsXG4gICAgICBzdG9yYWdlQnVja2V0OiBcImNhc3Ryb2dhc3Ryby04NThjMy5hcHBzcG90LmNvbVwiLFxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTA4NTg4NjMzMTg5XCJcbiAgICB9O1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcblxuICAgIC8vIGluaXQgSG9tZVBhZ2VcbiAgICBsZXQgaG9tZVBhZ2UgPSBuZXcgSG9tZVBhZ2UodGhpcy5hcHBCb2R5KTtcbiAgfVxuXG59XG5cbmxldCBteUFwcCA9IG5ldyBNeUFwcCgpO1xubXlBcHAuc3RhcnQoKTtcbiIsImV4cG9ydCBjb25zdCBBUElfS0VZX0ZJUkVCQVNFID0gXCJBSXphU3lDcEZncjg0ZXBUeVBPZFVHZ1ZNTHB4TERPRTRwQUdRem9cIjtcbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAyMC0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxMy0xMi0yMDE2XG4qL1xuXG5leHBvcnQgY2xhc3MgRmlyZUJhc2VIZWxwZXIge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRhdGFiYXNlIHNlcnZpY2VcbiAgICB0aGlzLmRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICB0aGlzLmRiRGF0YSA9IFtdO1xuXG4gICB9XG5cbiAgYWRkT2JqZWN0VG9CYXNlKHByb2R1Y3Qpe1xuXG4gICAgLy8gbCdlbnZveWVyIGRhbnMgbGEgY29sbGVjdGlvbiBcInByb2R1Y3RzXCIgc3VyIEZpcmViYXNlXG4gICAgdGhpcy5kYXRhYmFzZS5yZWYoJ2xvY2FsT3JkZXInKS5wdXNoKHByb2R1Y3QpO1xuICB9XG5cbiAgbG9hZERhdGEoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgIHRoaXMuZGF0YWJhc2UucmVmKCdsb2NhbE9yZGVyJykub24oJ2NoaWxkX2FkZGVkJywgKHNuYXBzaG90KT0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGlsZCBhZGRlZC0+ICcsIHNuYXBzaG90LnZhbCgpKTtcblxuICAgICAgICAgIHRoaXMuZGJEYXRhLnB1c2goc25hcHNob3QudmFsKCkpO1xuICAgICAgICAgIC8vIGxlcyB2YWxldXIgc29udCBjb250ZW51IGRhbnMgc25hcHNob3QudmFsKClcbiAgICAgICAgICAvLyBldCBwYXNzw6llIMOgIHVuZSBmb25jdGlvbiBwb3VyIMOqdHJlIHRyYWl0w6llIHBsdXMgbG9pbi4uLlxuICAgICAgICAgIC8vICBkaXNwbGF5UHJvZHVjdHNJbkxpc3Qoc25hcHNob3QpXG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLmRiRGF0YSlcbiAgICAgIH0pO1xuICAgIH0pXG5cbiAgfVxuICBcbn1cbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAyMS0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAyMS0xMi0yMDE2XG4qL1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi8uLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgRmlyZUJhc2VIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2ZpcmViYXNlSGVscGVyJztcblxuZXhwb3J0IGNsYXNzIEFkbWluUGFnZSB7XG5cbiAgY29uc3RydWN0b3IoYXBwQm9keSxmb3JtSW5wdXQpe1xuICAgIHRoaXMuYXBwQm9keSA9IGFwcEJvZHk7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1JbnB1dDtcbiAgICB0aGlzLnBhZ2VUaXRsZSA9IFwiQWRtaW5pc3RyYXRpb24gZGVzIGNvbW1hbmRlc1wiO1xuICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKClcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMuZkZpcmVCYXNlSGVscGVyKCk7XG4gIH1cblxuICBpbml0VUkoKXtcbiAgICAvLyByZW1vdmUgYWxsIHNlY3Rpb24gYmVmb3JlIGRpc3BsYXkgVUlcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxuICAgIH1cbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxuICAgIGxldCBwYWdlU2tlbGV0b24gPSBgXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPHA+JHt0aGlzLnBhZ2VUaXRsZX0gJHt0aGlzLmZvcm1EYXRhfSAhPC9wPlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZCYXJUb3BcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3M9XCJicmFuZC1sb2dvXCI+TG9nbzwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzcz1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiaG9tZVwiIGhyZWY9XCIjXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3RvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJhZG1pblBhZ2VcIiBocmVmPVwiI1wiPkFkbWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBpZD1cImhvbWVNb2JcIiBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlTW9iXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9uYXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXIgb3V0bGluZVwiPlxuICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXlMaXN0XCI+XG5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgYDtcbiAgICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcbiAgICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcbiAgICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xuICAgICAgfSk7XG4gICAgICAvL2xldCBsaXN0ID0gdGhpcy5saXN0T3JkZXJzXG4gICAgICAvL2NvbnNvbGUubG9nKGxpc3QpXG4gICAgICB0aGlzLmxvYWRFdmVudFVJKCk7XG4gICAgfVxuXG4gICAgbG9hZEV2ZW50VUkoKXtcblxuICAgICAgJChcIiNob21lXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgICAgJChcIiNob21lTW9iXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgIH1cblxuICAgIG9uTG9naW4oZXZlbnQpe1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmV3IEhvbWVQYWdlKHRoaXMuYXBwQm9keSk7XG4gICAgfVxuXG4gICAgZkZpcmVCYXNlSGVscGVyKCl7XG5cbiAgICAgIC8vV2UgaW5zdGFuY2lhdGUgdGhlIEZpcmViYXNlIGNsYXNzXG4gICAgICBsZXQgZGF0YUJhc2VDYXN0cm8gPSBuZXcgRmlyZUJhc2VIZWxwZXIoKTtcblxuICAgICAgZGF0YUJhc2VDYXN0cm8ubG9hZERhdGEoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT57XG5cbiAgICAgICAgICBsZXQgb3JkcmU7XG5cbiAgICAgICAgICBmb3IobGV0IGlkIGluIHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgIG9yZHJlID0gcmVzcG9uc2VbaWRdLm9yZGVyO1xuXG4gICAgICAgICAgICBsZXQgZGl2T3JkcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGl2T3JkcmUuaW5uZXJIVE1MID0gYExpc3RlIGQnYWNoYXQgbnVtw6lybyA6ICR7aWR9IDwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50IG1haWwgOiAke3Jlc3BvbnNlW2lkXS5tYWlsfTwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpeCBkdSBwYW5uaWVyIDogJHtyZXNwb25zZVtpZF0ucHJpY2VPcmRlcn08L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YW50aXTDqSBkZSBwYW5uaWVycyA6ICR7cmVzcG9uc2VbaWRdLm5iT3JkZXJ9PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcml4IHRvdGFsIDogJHtyZXNwb25zZVtpZF0udG90YWxQcmljZX08L2JyPmA7XG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ2lkJyxgbGlzdGUke2lkfWApXG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2s7IG92ZXJmbG93OmF1dG87JylcbiAgICAgICAgICAgIGRpdk9yZHJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2UHJvZCcpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmFwcGVuZENoaWxkKGRpdk9yZHJlKVxuICAgICAgICAgICAgdmFyIGlkRGl2ID0gYGxpc3RlJHtpZH1gXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkcmVcIiwgaWQpXG5cbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiBvcmRyZSkge1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWREaXYpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5kZXNzaW5lclByb2R1aXQob3JkcmVbaV0pKTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdpdGggRmlyZWJhc2UgbG9hZERhdGEoKS0+ICcsIGVycilcbiAgICAgICAgfSlcblxuICAgICAgLy9jb25zb2xlLmxvZyhsaXN0T3JkZXJzKVxuXG4gICAgfVxuXG4gICAgZGVzc2luZXJQYW5pZXIobGlzdE9yZGVycykge1xuICAgICAgLy8gU3VwcHJpbWVyIGNvbnRlbnUgcGFuaWVyXG4gICAgICB2YXIgbGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpO1xuICAgICAgd2hpbGUgKGxpc3RlLmNoaWxkcmVuLmxlbmd0aD4wKSB7bGlzdGUucmVtb3ZlQ2hpbGQobGlzdGUubGFzdENoaWxkKX1cbiAgICAvLyAgcHJpY2VDb21tYW5kZSA9IDA7XG5cbiAgICAgIC8vIEFmZmljaGVyIGxlcyDDqWzDqW1lbnRzXG5cbiAgICAgIGZvcihsZXQgaWQgaW4gbGlzdE9yZGVycykge1xuICAgICAgICB0aGlzLmRlc3NpbmVyUHJvZHVpdChsaXN0T3JkZXJzWzBdLm9yZGVyW2lkXSk7XG4gICAgICAgIC8vcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBsaXN0T3JkZXJzW2lkXS5wcmljZVBybyAqIGxpc3RPcmRlcnNbaWRdLnRpbWVzUHJvIDtcbiAgICAgIH1cbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICAgIC8vIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID09IFwiUXVhbnRpdMOpXCIpe1xuICAgICAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICAvLyB9O1xuICAgIH1cblxuICAgIGRlc3NpbmVyUHJvZHVpdChvcmRyZSkge1xuICAgICAgLy8gTGlyZSBsZSBzcmMgZHUgcHJvZHVpdCAoc3RvY2vDqSBkYW5zIGxlIGh0bWwpXG4gICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBpZD1cIiR7b3JkcmUuaWRQcm99XCIgY2xhc3M9XCJjb2wtMTA1XCI+XG4gICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICA8aW1nIGlkPVwiaW1nUGFuMVwiIHNyYz1cIiR7b3JkcmUuc3JjfVwiPlxuICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gJHtvcmRyZS5wcmljZVByb30gPC9wPlxuICAgICAgICAgPHA+JHtvcmRyZS50aW1lc1Byb308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG59XG4iLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMTMtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cblxuaW1wb3J0IHsgRmlyZUJhc2VIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2ZpcmViYXNlSGVscGVyJztcbmltcG9ydCB7IEFkbWluUGFnZSB9IGZyb20gJy4uLy4uL3BhZ2VzL2FkbWluL2FkbWluJztcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcblxuICBjb25zdHJ1Y3RvcihhcHBCb2R5KXtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5XG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnV2VsY29tZSB0byBHYXN0cm8gQ2FzdHJvJztcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMuZkZpcmVCYXNlSGVscGVyKCk7XG4gICAgdGhpcy5lbXB0eUJveEYoKTtcbiAgfVxuXG5cbiAgaW5pdFVJKCl7XG5cbiAgICAvL0luaWNpYXRlIHRoZSB2YXJpYWJsZSBRIHRvIHRoZSB2YWx1ZSBpbiB0aGUgaHRtbFxuICAgIHZhciB2UTtcbiAgICAvL0luaWNpYXRlIHRoZSB2YXJpYWJsZSBwcmljZVByb2R1Y3RcbiAgICB2YXIgcHJpY2VQcm9kdWN0O1xuICAgIHZhciBwcmljZUNvbW1hbmRlO1xuICAgIHZhciB0aW1lc0NvbW1hbmRlO1xuICAgIHZhciB0b3RhbFByaWNlUGFja2FnZTtcbiAgICB2YXIgbG9jYWxPcmRlciA9IHt9O1xuXG5cbiAgICAvLyByZW1vdmUgYWxsIHNlY3Rpb24gYmVmb3JlIGRpc3BsYXkgVUlcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxuICAgIH1cbiAgICAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XG4gICAgfSlcbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxuICAgIGxldCBwYWdlU2tlbGV0b24gPSB0aGlzLnNrZWxldG9uQmFzZSgpO1xuXG4gICAgLy8gYWRkIHBhZ2Ugc2tlbGV0b24gaW4gYm9keVxuICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcbiAgICB0aGlzLmxvYWRFdmVudFVJKClcbiAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICB0aGlzLmNob29zZVByb2R1Y3QodlEscHJpY2VQcm9kdWN0LHByaWNlQ29tbWFuZGUsdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UsIGxvY2FsT3JkZXIpXG4gICAgdGhpcy5jbGlja0NvbW1hbmRlUXQocHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSlcblxuICAgIE1hdGVyaWFsaXplLnRvYXN0KCdJIGFtIGEgdG9hc3QhJywgNDAwMCkgLy8gNDAwMCBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIHRvYXN0XG5cbiAgfVxuXG4gIGZGaXJlQmFzZUhlbHBlcigpe1xuXG4gICAgLy9XZSBpbnN0YW5jaWF0ZSB0aGUgRmlyZWJhc2UgY2xhc3NcbiAgICBsZXQgZGF0YUJhc2VDYXN0cm8gPSBuZXcgRmlyZUJhc2VIZWxwZXIoKTtcblxuICAgIC8vSW4gdGhlIGNhc2UgdGhlIHVzZXIgc2VuZCB0aGUgb3JkZXIgd2Ugc2F2ZSBpbiB0aGUgZGF0YWJhc2VcbiAgICAkKFwiI3NlbmRPcmRlclwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciBzRW1haWwgPSAkKCcjdHh0RW1haWwnKS52YWwoKTtcbiAgICAgIC8vIENoZWNraW5nIEVtcHR5IEZpZWxkc1xuICAgICAgaWYgKCQudHJpbShzRW1haWwpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGFsZXJ0KCdSZW1wbGlzc2V6IGxlIGNoYW1wIGVtYWlsJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmFsaWRhdGVFbWFpbChzRW1haWwpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgTWF0ZXJpYWxpemUudG9hc3QoJ0VtYWlsIG9rJywgNDAwMCkgLy8gNDAwMCBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIHRvYXN0XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIEVtYWlsIEFkZHJlc3MnKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICBjb25zb2xlLmxvZyhjb21Mb2NhbFN0b3JhZ2UpXG4gICAgICBkYXRhQmFzZUNhc3Ryby5hZGRPYmplY3RUb0Jhc2Uoe1xuICAgICAgICBvcmRlcjogY29tTG9jYWxTdG9yYWdlLFxuICAgICAgICBwcmljZU9yZGVyOiAkKFwiI3RvdGFsUHJpY2VDb21tYW5kZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgIG5iT3JkZXI6ICQoXCIjdGltZXNDb21tYW5kZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgIHRvdGFsUHJpY2U6ICQoXCIjdG90YWxQcmljZVBhY2thZ2VcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICBtYWlsOiAkKFwiaW5wdXRbbmFtZT0nZW1haWwnXVwiKS52YWwoKVxuICAgICAgfSk7XG5cbiAgICAgIGFsZXJ0KFwiQmllbiBlbnZvecOpXCIpXG4gICAgfSlcbiAgfVxuXG4gIGVtcHR5Qm94Rigpe1xuICAgICQoXCIjZW1wdHlCb3hcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXG4gICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxPcmRlclwiKTtcbiAgICAgIHRoaXMuaW5pdFVJKCk7XG5cbiAgICB9KVxuICB9XG5cbiAgdmFsaWRhdGVFbWFpbChzRW1haWwpIHtcbiAgICB2YXIgZmlsdGVyID0gL15bXFx3LS4rXStAW2EtekEtWjAtOS4tXSsuW2EtekEtejAtOV17Miw0fSQvO1xuXG4gICAgaWYgKGZpbHRlci50ZXN0KHNFbWFpbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBkZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSkge1xuICAgIC8vIFN1cHByaW1lciBjb250ZW51IHBhbmllclxuICAgIHZhciBsaXN0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXlMaXN0Jyk7XG4gICAgd2hpbGUgKGxpc3RlLmNoaWxkcmVuLmxlbmd0aD4xKSB7bGlzdGUucmVtb3ZlQ2hpbGQobGlzdGUubGFzdENoaWxkKX1cbiAgICBwcmljZUNvbW1hbmRlID0gMDtcblxuICAgIC8vIEFmZmljaGVyIGxlcyDDqWzDqW1lbnRzXG4gICAgdmFyIHByb2R1aXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xuICAgIGZvcihsZXQgaWQgaW4gcHJvZHVpdHMpIHtcbiAgICAgIHRoaXMuZGVzc2luZXJQcm9kdWl0KHByb2R1aXRzW2lkXSk7XG4gICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSArIHByb2R1aXRzW2lkXS5wcmljZVBybyAqIHByb2R1aXRzW2lkXS50aW1lc1BybyA7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwgPT0gXCJRdWFudGl0w6lcIil7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgfTtcbiAgfVxuXG4gIGRlc3NpbmVyUHJvZHVpdChwcm9kdWl0KSB7XG4gICAgLy8gTGlyZSBsZSBzcmMgZHUgcHJvZHVpdCAoc3RvY2vDqSBkYW5zIGxlIGh0bWwpXG4gICAgdmFyIHNyY0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW1nW2RhdGEtaWQ9JHtwcm9kdWl0LmlkUHJvfV1gKS5zcmM7XG4gICAgdmFyIHByb2R1Y3RUb0xpc3QgPSBgXG4gICAgPGRpdiBpZD1cIiR7cHJvZHVpdC5pZFByb31cIiBjbGFzcz1cImNvbC0xMDVcIj5cbiAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgPGltZyBpZD1cImltZ1BhbjFcIiBzcmM9XCIke3NyY0ltYWdlfVwiPlxuICAgICAgIDwvZmlndXJlPlxuICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAke3Byb2R1aXQucHJpY2VQcm99IDwvcD5cbiAgICAgICA8cD4ke3Byb2R1aXQudGltZXNQcm99PC9wPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1eUxpc3QnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHByb2R1Y3RUb0xpc3QpO1xuICB9XG5cbiAgY2hvb3NlUHJvZHVjdCh2USwgcHJpY2VQcm9kdWN0LHByaWNlQ29tbWFuZGUsdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UsIGxvY2FsT3JkZXIpe1xuXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RMaXN0JykpXG4gICAge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RMaXN0JykuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgZXZlbnQ9PntcblxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICB0aGlzLmNsaWNrRmlndXJlKGV2ZW50KTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICAgIHRoaXMuY2xpY2tQbHVzTGVzcyhldmVudCwgdlEsIHByaWNlUHJvZHVjdCwgcHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UsIGxvY2FsT3JkZXIpO1xuICAgICAgICAgIC8vdGhpcy5kZXNzaW5lclBhbmllcigpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG5cblxuICBjbGlja1BsdXNMZXNzKGV2ZW50LCB2USwgcHJpY2VQcm9kdWN0LCBwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcil7XG5cbiAgICAgIC8vSW5pY2lhdGUgdGhlIHF1YW50aXR5IHRvIDBcbiAgICAgIHZhciBxUHJvZHVjdDtcblxuICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1eUxpc3QnKS5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09IFwiRklHVVJFXCIpe1xuICAgICAgICBwcmljZUNvbW1hbmRlID0gMDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwgPSAxO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHByaWNlQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MLDEwKTtcbiAgICAgIH1cblxuICAgICAgLy9JZiB0aGUgY2xpY2sgaXMgaW4gYSBidXR0b25cbiAgICAgIGlmKGV2ZW50LnRhcmdldC50YWdOYW1lID09ICdCVVRUT04nKXtcblxuICAgICAgICAvL0NvbnZlcnQgdGhlIGh0bWwgdGV4dCBpbiBhbiBpbnRlZ2VyIG51bWJlciBzbyB3ZSBjYW4gb3BlcmF0ZSB3aXRoIGl0XG4gICAgICAgIHByaWNlUHJvZHVjdCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwsIDEwKTtcblxuICAgICAgICAvL0lmIHRoZSBwcm9kdWN0IGRvbid0IGV4aXN0IGluIHRoZSBsaXN0XG4gICAgICAgIGlmKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSAmJiBldmVudC50YXJnZXQuaW5uZXJIVE1MID09ICcrJyl7XG5cblxuICAgICAgICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKSl7XG4gICAgICAgICAgICBsb2NhbE9yZGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgbG9jYWxPcmRlcltldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXSA9IHtcbiAgICAgICAgICAgIGlkUHJvOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxuICAgICAgICAgICAgc3JjOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnc3JjJyksXG4gICAgICAgICAgICB0aW1lc1BybzogMSxcbiAgICAgICAgICAgIHByaWNlUHJvOiBwcmljZVByb2R1Y3RcbiAgICAgICAgICB9O1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcblxuICAgICAgICAgIC8vQWRkIHRoZSBodG1sIGNvbnRlbnQgdG8gdGhlIGRpdiBidXlMaXN0XG4gICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgLy9DYWxjdWxhdGUgYW5kIHByaWNlcyBhbmQgcXVhbnRpdGllc1xuICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJpY2VQcm9kdWN0O1xuICAgICAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIHRpbWVzQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCwxMClcbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHByaWNlQ29tbWFuZGUgKiB0aW1lc0NvbW1hbmRlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuXG4gICAgICAgIC8vSWYgdGhlIHByb2R1Y3QgZXhpc3QgaW4gdGhlIGxpc3RcbiAgICAgICAgfWVsc2UgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkpe1xuXG4gICAgICAgICAgdlEgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKS5sYXN0Q2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwsIDEwKTtcblxuICAgICAgICAgIC8vSWYgdGhlIGNsaWNrIGlzIG9uIHRoZSBwbHVzIGJ1dHRvblxuICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT0gJysnKXtcblxuICAgICAgICAgICAgcVByb2R1Y3QgPSB2USArIDE7XG4gICAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSArIHByaWNlUHJvZHVjdDtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpLmxhc3RDaGlsZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IHFQcm9kdWN0O1xuXG4gICAgICAgICAgICBsb2NhbE9yZGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xuICAgICAgICAgICAgbG9jYWxPcmRlcltldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXSA9IHtcbiAgICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICAgIHNyYzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ3NyYycpLFxuICAgICAgICAgICAgICB0aW1lc1BybzogcVByb2R1Y3QsXG4gICAgICAgICAgICAgIHByaWNlUHJvOiBwcmljZVByb2R1Y3RcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsT3JkZXJcIixKU09OLnN0cmluZ2lmeShsb2NhbE9yZGVyKSk7XG4gICAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRvdGFsQ29tbWFuZGUocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgICAgICAgIC8vSWYgdGhlIGNsaWNrIGlzIG9uIHRoZSBsZXNzIGJ1dHRvblxuICAgICAgICAgIH1lbHNlIGlmKGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT0gJy0tJyl7XG5cbiAgICAgICAgICAgICAgLy9pZiB0aGUgcXVhbnRpdHkgaXMgMSB3ZSB0YWtlIG9mZiB0aGUgZGl2IG9mIHRoZSBwcm9kdWN0IGZyb20gdGhlIHByb2R1Y3RMaXN0XG4gICAgICAgICAgICAgIGlmKHZRPT09MSl7XG4gICAgICAgICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgLSBwcmljZVByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgdmFyIGlkUHJvID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgcHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZFBybyk7XG4gICAgICAgICAgICAgICAgcHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcik7XG5cbiAgICAgICAgICAgICAgICBsb2NhbE9yZGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGxvY2FsT3JkZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFRvdGFsQ29tbWFuZGUocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuXG4gICAgICAgICAgICAgIC8vaWYgdGhlIHF1YW50aXR5IGlzIG1vcmUgdGhhbiAxIHdlIHRha2Ugb25lIHVuaXR5IGZyb20gdGhlIHF1YW50aXR5IG9mIHRoZSBwcm9kdWN0XG4gICAgICAgICAgICAgIH1lbHNlIGlmKHZRPjEpe1xuICAgICAgICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlIC0gcHJpY2VQcm9kdWN0O1xuICAgICAgICAgICAgICAgIHFQcm9kdWN0ID0gdlEgLSAxO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpLmxhc3RDaGlsZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IHFQcm9kdWN0O1xuICAgICAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgICAgICAgbG9jYWxPcmRlcltldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXSA9IHtcbiAgICAgICAgICAgICAgICAgIGlkUHJvOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxuICAgICAgICAgICAgICAgICAgc3JjOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnc3JjJyksXG4gICAgICAgICAgICAgICAgICB0aW1lc1BybzogcVByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICBwcmljZVBybzogcHJpY2VQcm9kdWN0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsT3JkZXJcIixKU09OLnN0cmluZ2lmeShsb2NhbE9yZGVyKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XG4gICAgfVxuXG5cbiAgICBjbGlja0NvbW1hbmRlUXQocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2Upe1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWFuZGVDb2x1bW4nKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBldmVudENvbW1hbmRlPT57XG4gICAgICAgICAgZXZlbnRDb21tYW5kZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIHRpbWVzQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCwxMClcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXG5cbiAgICAgICAgICBpZihldmVudENvbW1hbmRlLnRhcmdldC5pZCA9PSAncGx1cycpe1xuICAgICAgICAgICAgdGltZXNDb21tYW5kZSA9IHRpbWVzQ29tbWFuZGUgKzE7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgfWVsc2UgaWYoZXZlbnRDb21tYW5kZS50YXJnZXQuaWQgPT0gJ21vaW5zJyAmJiB0aW1lc0NvbW1hbmRlID4gMSl7XG4gICAgICAgICAgICB0aW1lc0NvbW1hbmRlLS07XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwcmljZUNvbW1hbmRlICogdGltZXNDb21tYW5kZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIHJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKXtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XG4gICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHByaWNlQ29tbWFuZGUgKiB0aW1lc0NvbW1hbmRlO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcbiAgICAgIHByaWNlQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSAxO1xuICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXG5cbiAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcblxuICAgIH1cblxuICAgIGNsaWNrRmlndXJlKGV2ZW50KXtcblxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ0lNRycpe1xuXG4gICAgICAgIHZhciB0eXBlUHJvZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICBzd2l0Y2godHlwZVByb2Qpe1xuXG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxYnInOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQnJhbmR5JykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBwcmVtaWVyIGJyYW5keSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJicic6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZCcmFuZHknKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIGRldXhpw6htZSBicmFuZHkgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szYnInOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQnJhbmR5JykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIGJyYW5keSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazF3aW5lJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZldpbmUnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgdmluIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMndpbmUnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmV2luZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIHZpbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazN3aW5lJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZldpbmUnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgdmluIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMW9pbCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZPaWwnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgaHVpbGUgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syb2lsJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZk9pbCcpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIGh1aWxlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM29pbCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZPaWwnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgaHVpbGUgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMWNoJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkNoZWVzZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBodWlsZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJjaCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZDaGVlc2UnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgZnJvbWFnZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNjaCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZDaGVlc2UnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgZnJvbWFnZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazFoYW0nOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkhhbScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBqYW1ib24gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syaGFtJzpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZIYW0nKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIGRldXhpw6htZSBqYW1ib24gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szaGFtJzpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZIYW0nKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgamFtYm9uIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBhbGVydChcIkNlIHByb2R1aXQgbidhIHBhcyBkZSBkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWRFdmVudFVJKCl7XG5cbiAgICAkKFwiI2FkbWluUGFnZVwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKTtcbiAgICAkKFwiI2FkbWluUGFnZU1vYlwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKTtcblxuICB9XG5cbiAgb25Mb2dpbihldmVudCl7XG5cbiAgICBsZXQgdmFsaWRhdGlvbklucHV0ID0gMFxuICAgIGxldCBmb3JtSW5wdXQgPSAkKCcjdHh0RW1haWwnKS52YWwoKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpZigkKCcjdHh0RW1haWwnKS52YWwoKS5sZW5ndGg+MCl7XG4gICAgICBuZXcgQWRtaW5QYWdlKCB0aGlzLmFwcEJvZHksIGZvcm1JbnB1dCk7XG4gICAgfWVsc2V7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWxlcnQoXCJIZWxsb1wiLCBcIkludHJvZHVpc2V6IHZvdHJlIG1haWxcIilcbiAgICB9XG4gIH1cblxuXG4gIHNrZWxldG9uQmFzZSgpe1xuXG4gICAgbGV0IHZTa2VsZXRvbiA9IGBcbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgzIGNsYXNzPVwiY2VudGVyXCI+JHt0aGlzLnBhZ2VUaXRsZX08L2gzPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2QmFyVG9wXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtd3JhcHBlclwiIGNsYXNzPVwibmF2QmFyVG9wXCIgPlxuICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzPVwiYnJhbmQtbG9nb1wiPkxvZ288L2E+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZS1kZW1vXCIgY2xhc3M9XCJidXR0b24tY29sbGFwc2VcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvaT48L2E+XG4gICAgICAgICAgICAgPHVsIGNsYXNzPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgPHVsIGNsYXNzPVwic2lkZS1uYXZcIiBpZD1cIm1vYmlsZS1kZW1vXCI+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5JbmljaW88L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2R1Y3RvczwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UXVpZW5lcyBzb21vczwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdG88L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBpZD1cImFkbWluUGFnZU1vYlwiIGhyZWY9XCIjXCI+QWRtaW48L2E+PC9saT5cbiAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZE9yZGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgaWQ9XCJzZW5kT3JkZXJcIj5FbnZveWVyIGNvbW1hbmRlPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgaWQ9XCJlbXB0eUJveFwiPlZpZGVyIGxlIGNvZmZyZTwvYnV0dG9uPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+PGlucHV0IGlkPVwidHh0RW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwidm90cmVlbWFpbC5jaFwiLz5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lciBvdXRsaW5lXCI+XG4gICAgICAgICAgICAgPGRpdiBpZD1cImJ1eUxpc3RcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMDVcIiBpZD1cImNvbW1hbmRlQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8cD5Db2ZmcmU8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBpZD1cInRvdGFsUHJpY2VDb21tYW5kZVwiPjwvcD48L2JyPlxuICAgICAgICAgICAgICAgICAgPHA+UXTDqSA6PC9wPjxwIGlkPVwidGltZXNDb21tYW5kZVwiPlF1YW50aXTDqTwvcD48L2JyPlxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgOjwvcD48cCBpZD1cInRvdGFsUHJpY2VQYWNrYWdlXCI+PC9wPjwvYnI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdExpc3RcIiA+XG5cbjwhLS1GaXJzdCBsaW5lIG9mIHByb2R1Y3RzLS0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+QnJhbmR5PC9wPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1pZD1cImltZ0NsaWNrMWJyXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2JyYW5keTEucG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNCMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cIm1vaW5zQjFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1pZD1cImltZ0NsaWNrMmJyXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2JyYW5keS1jYXNhanVhbmEtMTAwLWFub3MtcmVzZXJ2YS5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0IyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0IyXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM2JyXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2JhcmJhZGlsbG8uanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNCM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNCM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZkJyYW5keVwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG48IS0tU2Vjb25kIGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5WaW5vczwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazF3aW5lXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL3ZpbjEuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc1cxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1cxXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJ3aW5lXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL3ZpbjIuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc1cyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1cyXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1pZD1cImltZ0NsaWNrM3dpbmVcIiBzcmM9XCIuL3NyYy9pbWFnZXMvdmluMy5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZldpbmVcIj48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuPCEtLVRoaXJkIGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5BY2VpdGUgZGUgb2xpdmE8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMW9pbFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9ST1hBTkUgQVJCRVFVSU5BXzUwMF8wMi5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zTzFcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzTzFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2syb2lsXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL21hcmlhLWRlLWxhLW8tc2VsZWNjaW9uLWdvdXJtZXQtNTAwLW1sLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNPMlwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNPMlwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazNvaWxcIiBzcmM9XCIuL3NyYy9pbWFnZXMvUk9YQU5FIEFSQkVRVUlOQV81MDBfMDIuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc08zXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c08zXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmT2lsXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgPCEtLUZvdXJ0aCBsaW5lIG9mIHByb2R1Y3RzLS0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+UXVlc288L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMWNoXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2NvZ21hbi1zZW1pY3VyYWRvLXB1cm8tb3ZlamEuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0NoMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNDaDFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2syY2hcIiBzcmM9XCIuL3NyYy9pbWFnZXMvcXVlc28tY3VyYWRvLWFsLXJvbWVyby10b21lbGxvc28uanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0NoMlwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNDaDJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2szY2hcIiBzcmM9XCIuL3NyYy9pbWFnZXMvbW9udGFsdm8tY3VyYWRvLWVuLWFjZWl0ZS5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gzXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZkNoZWVzZVwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG48IS0tRmlmdGggbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPkphbW9uIGliw6lyaWNvPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazFoYW1cIiBzcmM9XCIuL3NyYy9pbWFnZXMvamFtb24xLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNIMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNIMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJoYW1cIiBzcmM9XCIuL3NyYy9pbWFnZXMvamFtb24yLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNIMlwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNIMlwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazNoYW1cIiBzcmM9XCIuL3NyYy9pbWFnZXMvamFtb24zLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNIM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNIM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiAgaWQ9XCJpbWdDbGljazFcIiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZkhhbVwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5gO1xuICAgICAgcmV0dXJuIHZTa2VsZXRvbjtcbiAgfVxufVxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgZGVzc2luZXJQYW5pZXIoKTtcbi8vIH1cbiJdfQ==
