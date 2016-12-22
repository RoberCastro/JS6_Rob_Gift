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
          divOrdre.innerHTML = 'Liste d\'achat num\xE9ro : ' + id + ' </br>\n                                  Client mail : ' + response[id].mail + '</br>\n                                  Quantit\xE9 de panniers : ' + response[id].nbOrder + '</br>';
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
    this.pageTitle = 'Hello world! Hello Roberto';
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
          nbOrder: $("#timesCommande")[0].innerHTML,
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

      var vSkeleton = '\n    <section>\n      <img class="materialboxed" width="1024px" height="200px" src="./src/images/vinas2.jpeg">\n        <h1>' + this.pageTitle + '</h1>\n        <form>\n          <nav class="navBarTop">\n           <div class="nav-wrapper" class="navBarTop" >\n             <a href="#!" class="brand-logo">Logo</a>\n             <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>\n             <ul class="right hide-on-med-and-down">\n               <li><a href="#">Inicio</a></li>\n               <li><a href="#">Productos</a></li>\n               <li><a href="#">Quienes somos</a></li>\n               <li><a href="#">Contacto</a></li>\n               <li><a id="adminPage" href="#">Admin</a></li>\n             </ul>\n             <ul class="side-nav" id="mobile-demo">\n               <li><a href="#">Inicio</a></li>\n               <li><a href="#">Productos</a></li>\n               <li><a href="#">Quienes somos</a></li>\n               <li><a href="#">Contacto</a></li>\n               <li><a id="adminPageMob" href="#">Admin</a></li>\n             </ul>\n           </div>\n         </nav>\n\n         <div class="sendOrder">\n            <button class="btn" id="sendOrder">Envoyer commande</button>\n            <button class="btn" id="emptyBox">Vider le coffre</button>\n            <p>\n              <label for="email">Email:</label><input id="txtEmail" type="email" name="email" value="" placeholder="votreemail.ch"/>\n            </p>\n\n         </div>\n\n         <div class="grid-container outline">\n             <div id="buyList" class="row">\n               <div class="col-105" id="commandeColumn">\n                  <p>Total coffre</p></br>\n                  <p id="totalPriceCommande"></p></br>\n                  <p id="timesCommande">Quantit\xE9</p>\n                  <p id="totalPricePackage"></p></br>\n                  <div class="ligneBt"><button id="moins">--</button><button id="plus">+</button></div>\n               </div>\n             </div>\n\n\n            <div id="productList" >\n\n<!--First line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Brandy</p></div>\n\n                  <div class="col-1 center" >\n                    <figure style= "margin:0;">\n                      <img data-id="imgClick1br" src="./src/images/brandy1.png">\n                      <div id="ligneBt"><button id="moinsB1">--</button><button id="moinsB1">+</button></div>\n                      <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img data-id="imgClick2br" src="./src/images/brandy-casajuana-100-anos-reserva.jpeg">\n                        <div class="ligneBt"><button id="moinsB2">--</button><button id="plusB2">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div  class="col-1 center">\n                     <figure style= "margin:0;">\n                        <img  data-id="imgClick3br" src="./src/images/barbadillo.jpeg">\n                        <div class="ligneBt"><button id="moinsB3">--</button><button id="plusB3">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                     </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifBrandy"></p></div>\n               </div>\n\n<!--Second line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Vinos</p></div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img  data-id="imgClick1wine" src="./src/images/vin1.jpg">\n                        <div class="ligneBt"><button id="moinsW1">--</button><button id="plusW1">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img  data-id="imgClick2wine" src="./src/images/vin2.jpg">\n                        <div class="ligneBt"><button id="moinsW2">--</button><button id="plusW2">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img data-id="imgClick3wine" src="./src/images/vin3.jpg">\n                        <div class="ligneBt"><button id="moinsW3">--</button><button id="plusW3">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifWine"></p></div>\n               </div>\n\n<!--Third line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Aceite de oliva</p></div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick1oil" src="./src/images/ROXANE ARBEQUINA_500_02.jpeg">\n                          <div class="ligneBt"><button id="moinsO1">--</button><button id="plusO1">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick2oil" src="./src/images/maria-de-la-o-seleccion-gourmet-500-ml.jpeg">\n                          <div class="ligneBt"><button id="moinsO2">--</button><button id="plusO2">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick3oil" src="./src/images/ROXANE ARBEQUINA_500_02.jpeg">\n                          <div class="ligneBt"><button id="moinsO3">--</button><button id="plusO3">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifOil"></p></div>\n               </div>\n\n  <!--Fourth line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Queso</p></div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick1ch" src="./src/images/cogman-semicurado-puro-oveja.jpeg">\n                          <div class="ligneBt"><button id="moinsCh1">--</button><button id="plusCh1">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick2ch" src="./src/images/queso-curado-al-romero-tomelloso.jpeg">\n                          <div class="ligneBt"><button id="moinsCh2">--</button><button id="plusCh2">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick3ch" src="./src/images/montalvo-curado-en-aceite.jpeg">\n                          <div class="ligneBt"><button id="moinsCh3">--</button><button id="plusCh3">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifCheese"></p></div>\n               </div>\n\n<!--Fifth line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Jamon ib\xE9rico</p></div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick1ham" src="./src/images/jamon1.jpeg">\n                          <div class="ligneBt"><button id="moinsH1">--</button><button id="plusH1">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick2ham" src="./src/images/jamon2.jpeg">\n                          <div class="ligneBt"><button id="moinsH2">--</button><button id="plusH2">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick3ham" src="./src/images/jamon3.jpeg">\n                          <div class="ligneBt"><button id="moinsH3">--</button><button id="plusH3">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div  id="imgClick1" class="col-1"><p id="textExplicatifHam"></p></div>\n               </div>\n            </div>\n\n             <div class="row">\n                 <div class="col-2"><p>col-2</p></div>\n                 <div class="col-2"><p>col-2</p></div>\n                 <div class="col-2"><p>col-2</p></div>\n             </div>\n             <div class="row">\n                 <div class="col-3"><p>col-3</p></div>\n                 <div class="col-3"><p>col-3</p></div>\n             </div>\n             <div class="row">\n                 <div class="col-4"><p>col-4</p></div>\n                 <div class="col-2"><p>col-2</p></div>\n             </div>\n             <div class="row">\n                 <div class="col-5"><p>col-5</p></div>\n                 <div class="col-1"><p>col-1</p></div>\n             </div>\n             <div class="row">\n                 <div class="col-6"><p>col-6</p></div>\n             </div>\n         </div>\n\n          <a class="btn" onclick="Materialize.toast(\'I am a toast\', 4000)">Toast!</a>\n            <button>Login</button>\n          <div>\n            <div>\n\n                <!-- Dropdown Structure -->\n                <ul id=\'dropdown1\' class=\'dropdown-content\' class="col s6">\n                  <li><a href="#!">Ib\xE9rico</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Pata negra</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Jabugo</a></li>\n                </ul>\n            </div>\n            <div>\n\n                <!-- Dropdown Trigger -->\n                <a class=\'dropdown-button btn\' href=\'#\' data-activates=\'dropdown2\' class="col s2">Huile d\'olive</a>\n\n                <!-- Dropdown Structure -->\n                <ul id=\'dropdown2\' class=\'dropdown-content\'>\n                  <li><a href="#!">Normal</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Virgen</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Virgen extra</a></li>\n                </ul>\n            </div>\n            <div>\n                <!-- Dropdown Trigger -->\n                <a class=\'dropdown-button btn\' href=\'#\' data-activates=\'dropdown3\' class="col s2">Fromage manchego</a>\n\n                <!-- Dropdown Structure -->\n                <ul id=\'dropdown3\' class=\'dropdown-content\'>\n                  <li><a href="#!">Curado</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Semicurado</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Tierno</a></li>\n                </ul>\n            </div>\n            <div>\n                <!-- Dropdown Trigger -->\n                <a class=\'dropdown-button btn\' href=\'#\' data-activates=\'dropdown4\'>Confisserie</a>\n\n                <!-- Dropdown Structure -->\n                <ul id=\'dropdown4\' class=\'dropdown-content\'>\n                  <li><a href="#!">Turron</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Sobaos</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Polvorones</a></li>\n                </ul>\n            </div>\n            <div>\n                <!-- Dropdown Trigger -->\n                <a class=\'dropdown-button btn\' href=\'#\' data-activates=\'dropdown5\'>Brandy de Jerez</a>\n\n                <!-- Dropdown Structure -->\n                <ul id=\'dropdown5\' class=\'dropdown-content\'>\n                  <li><a href="#!">LA BOTA DE BRANDY N\xBA 29</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">TORRES JAIME I</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">PEINADO SOLERA 100 A\xD1OS</a></li>\n                </ul>\n\n            </div>\n          </div>\n\n        </form>\n      </section>';
      return vSkeleton;
    }
  }]);

  return HomePage;
}();
// window.onload = function () {
//   dessinerPanier();
// }

},{"../../helpers/firebaseHelper":3,"../../pages/admin/admin":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvaGVscGVycy9hcGlrZXlmaXJlYmFzZS5qcyIsImRldi9hcHAvaGVscGVycy9maXJlYmFzZUhlbHBlci5qcyIsImRldi9hcHAvcGFnZXMvYWRtaW4vYWRtaW4uanMiLCJkZXYvYXBwL3BhZ2VzL2hvbWUvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O3FqQkNBQTs7Ozs7Ozs7O0FBT0E7O0FBQ0E7Ozs7SUFHTSxLO0FBRUosbUJBQWE7QUFBQTs7QUFDWCxTQUFLLE9BQUwsR0FBZSxTQUFTLG9CQUFULENBQThCLEtBQTlCLEVBQXFDLENBQXJDLENBQWY7QUFDRDs7Ozs0QkFFTTs7QUFFTDtBQUNBLFVBQUksU0FBUztBQUNYLGdEQURXO0FBRVgsb0JBQVksb0NBRkQ7QUFHWCxxQkFBYSwyQ0FIRjtBQUlYLHVCQUFlLGdDQUpKO0FBS1gsMkJBQW1CO0FBTFIsT0FBYjtBQU9BLGVBQVMsYUFBVCxDQUF1QixNQUF2Qjs7QUFFQTtBQUNBLFVBQUksV0FBVyxtQkFBYSxLQUFLLE9BQWxCLENBQWY7QUFDRDs7Ozs7O0FBSUgsSUFBSSxRQUFRLElBQUksS0FBSixFQUFaO0FBQ0EsTUFBTSxLQUFOOzs7Ozs7OztBQ3BDTyxJQUFNLDhDQUFtQix5Q0FBekI7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7SUFRYSxjLFdBQUEsYztBQUVYLDRCQUFhO0FBQUE7O0FBRVg7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsU0FBUyxRQUFULEVBQWhCO0FBQ0EsU0FBSyxNQUFMLEdBQWMsRUFBZDtBQUVBOzs7O29DQUVjLE8sRUFBUTs7QUFFdEI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLElBQWhDLENBQXFDLE9BQXJDO0FBQ0Q7OzsrQkFFUztBQUFBOztBQUNSLGFBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVB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O0FBQ0EscUJBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsU0FBN0MsR0FBeUQsMENBQXpEO0FBQ0U7QUFDRjtBQUNFLGtCQUFNLG1DQUFOO0FBaERKO0FBa0RIO0FBQ0Y7OztrQ0FFWTtBQUFBOztBQUVYLFFBQUUsWUFBRixFQUFnQixDQUFoQixFQUFtQixnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkM7QUFBQSxlQUFTLE9BQUssT0FBTCxDQUFhLEtBQWIsQ0FBVDtBQUFBLE9BQTdDLEVBQTJFLEtBQTNFO0FBQ0EsUUFBRSxlQUFGLEVBQW1CLENBQW5CLEVBQXNCLGdCQUF0QixDQUF1QyxPQUF2QyxFQUFnRDtBQUFBLGVBQVMsT0FBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBaEQsRUFBOEUsS0FBOUU7QUFFRDs7OzRCQUVPLEssRUFBTTs7QUFFWixVQUFJLGtCQUFrQixDQUF0QjtBQUNBLFVBQUksWUFBWSxFQUFFLFdBQUYsRUFBZSxHQUFmLEVBQWhCOztBQUVBLFlBQU0sY0FBTjtBQUNBLFVBQUcsRUFBRSxXQUFGLEVBQWUsR0FBZixHQUFxQixNQUFyQixHQUE0QixDQUEvQixFQUFpQztBQUMvQiw2QkFBZSxLQUFLLE9BQXBCLEVBQTZCLFNBQTdCO0FBQ0QsT0FGRCxNQUVLO0FBQ0gsY0FBTSxjQUFOO0FBQ0EsY0FBTSxPQUFOLEVBQWUsd0JBQWY7QUFDRDtBQUNGOzs7bUNBR2E7O0FBRVosVUFBSSw4SUFHTSxLQUFLLFNBSFgsdW1hQUFKO0FBd1JFLGFBQU8sU0FBUDtBQUNIOzs7OztBQUVIO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMTMtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgQVBJX0tFWV9GSVJFQkFTRSB9IGZyb20gJy4vaGVscGVycy9hcGlrZXlmaXJlYmFzZSc7XG5cblxuY2xhc3MgTXlBcHAge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5hcHBCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcHBcIilbMF07XG4gIH1cblxuICBzdGFydCgpe1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBhcGlLZXk6IEFQSV9LRVlfRklSRUJBU0UsXG4gICAgICBhdXRoRG9tYWluOiBcImNhc3Ryb2dhc3Ryby04NThjMy5maXJlYmFzZWFwcC5jb21cIixcbiAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY2FzdHJvZ2FzdHJvLTg1OGMzLmZpcmViYXNlaW8uY29tXCIsXG4gICAgICBzdG9yYWdlQnVja2V0OiBcImNhc3Ryb2dhc3Ryby04NThjMy5hcHBzcG90LmNvbVwiLFxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTA4NTg4NjMzMTg5XCJcbiAgICB9O1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcblxuICAgIC8vIGluaXQgSG9tZVBhZ2VcbiAgICBsZXQgaG9tZVBhZ2UgPSBuZXcgSG9tZVBhZ2UodGhpcy5hcHBCb2R5KTtcbiAgfVxuXG59XG5cbmxldCBteUFwcCA9IG5ldyBNeUFwcCgpO1xubXlBcHAuc3RhcnQoKTtcbiIsImV4cG9ydCBjb25zdCBBUElfS0VZX0ZJUkVCQVNFID0gXCJBSXphU3lDcEZncjg0ZXBUeVBPZFVHZ1ZNTHB4TERPRTRwQUdRem9cIjtcbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAyMC0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxMy0xMi0yMDE2XG4qL1xuXG5leHBvcnQgY2xhc3MgRmlyZUJhc2VIZWxwZXIge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRhdGFiYXNlIHNlcnZpY2VcbiAgICB0aGlzLmRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICB0aGlzLmRiRGF0YSA9IFtdO1xuXG4gICB9XG5cbiAgYWRkT2JqZWN0VG9CYXNlKHByb2R1Y3Qpe1xuXG4gICAgLy8gbCdlbnZveWVyIGRhbnMgbGEgY29sbGVjdGlvbiBcInByb2R1Y3RzXCIgc3VyIEZpcmViYXNlXG4gICAgdGhpcy5kYXRhYmFzZS5yZWYoJ2xvY2FsT3JkZXInKS5wdXNoKHByb2R1Y3QpO1xuICB9XG5cbiAgbG9hZERhdGEoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgIHRoaXMuZGF0YWJhc2UucmVmKCdsb2NhbE9yZGVyJykub24oJ2NoaWxkX2FkZGVkJywgKHNuYXBzaG90KT0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGlsZCBhZGRlZC0+ICcsIHNuYXBzaG90LnZhbCgpKTtcblxuICAgICAgICAgIHRoaXMuZGJEYXRhLnB1c2goc25hcHNob3QudmFsKCkpO1xuICAgICAgICAgIC8vIGxlcyB2YWxldXIgc29udCBjb250ZW51IGRhbnMgc25hcHNob3QudmFsKClcbiAgICAgICAgICAvLyBldCBwYXNzw6llIMOgIHVuZSBmb25jdGlvbiBwb3VyIMOqdHJlIHRyYWl0w6llIHBsdXMgbG9pbi4uLlxuICAgICAgICAgIC8vICBkaXNwbGF5UHJvZHVjdHNJbkxpc3Qoc25hcHNob3QpXG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLmRiRGF0YSlcbiAgICAgIH0pO1xuICAgIH0pXG5cbiAgfVxuICBcbn1cbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAyMS0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAyMS0xMi0yMDE2XG4qL1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi8uLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgRmlyZUJhc2VIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2ZpcmViYXNlSGVscGVyJztcblxuZXhwb3J0IGNsYXNzIEFkbWluUGFnZSB7XG5cbiAgY29uc3RydWN0b3IoYXBwQm9keSxmb3JtSW5wdXQpe1xuICAgIHRoaXMuYXBwQm9keSA9IGFwcEJvZHk7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1JbnB1dDtcbiAgICB0aGlzLnBhZ2VUaXRsZSA9IFwiQWRtaW5pc3RyYXRpb24gZGVzIGNvbW1hbmRlc1wiO1xuICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKClcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMuZkZpcmVCYXNlSGVscGVyKCk7XG4gIH1cblxuICBpbml0VUkoKXtcbiAgICAvLyByZW1vdmUgYWxsIHNlY3Rpb24gYmVmb3JlIGRpc3BsYXkgVUlcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxuICAgIH1cbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxuICAgIGxldCBwYWdlU2tlbGV0b24gPSBgXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPHA+JHt0aGlzLnBhZ2VUaXRsZX0gJHt0aGlzLmZvcm1EYXRhfSAhPC9wPlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZCYXJUb3BcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3M9XCJicmFuZC1sb2dvXCI+TG9nbzwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzcz1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiaG9tZVwiIGhyZWY9XCIjXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3RvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJhZG1pblBhZ2VcIiBocmVmPVwiI1wiPkFkbWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBpZD1cImhvbWVNb2JcIiBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlTW9iXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9uYXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXIgb3V0bGluZVwiPlxuICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXlMaXN0XCI+XG5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgYDtcbiAgICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcbiAgICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcbiAgICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xuICAgICAgfSk7XG4gICAgICAvL2xldCBsaXN0ID0gdGhpcy5saXN0T3JkZXJzXG4gICAgICAvL2NvbnNvbGUubG9nKGxpc3QpXG4gICAgICB0aGlzLmxvYWRFdmVudFVJKCk7XG4gICAgfVxuXG4gICAgbG9hZEV2ZW50VUkoKXtcblxuICAgICAgJChcIiNob21lXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgICAgJChcIiNob21lTW9iXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgIH1cblxuICAgIG9uTG9naW4oZXZlbnQpe1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmV3IEhvbWVQYWdlKHRoaXMuYXBwQm9keSk7XG4gICAgfVxuXG4gICAgZkZpcmVCYXNlSGVscGVyKCl7XG5cbiAgICAgIC8vV2UgaW5zdGFuY2lhdGUgdGhlIEZpcmViYXNlIGNsYXNzXG4gICAgICBsZXQgZGF0YUJhc2VDYXN0cm8gPSBuZXcgRmlyZUJhc2VIZWxwZXIoKTtcblxuICAgICAgZGF0YUJhc2VDYXN0cm8ubG9hZERhdGEoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT57XG5cbiAgICAgICAgICBsZXQgb3JkcmU7XG5cbiAgICAgICAgICBmb3IobGV0IGlkIGluIHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgIG9yZHJlID0gcmVzcG9uc2VbaWRdLm9yZGVyO1xuXG4gICAgICAgICAgICBsZXQgZGl2T3JkcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGl2T3JkcmUuaW5uZXJIVE1MID0gYExpc3RlIGQnYWNoYXQgbnVtw6lybyA6ICR7aWR9IDwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50IG1haWwgOiAke3Jlc3BvbnNlW2lkXS5tYWlsfTwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhbnRpdMOpIGRlIHBhbm5pZXJzIDogJHtyZXNwb25zZVtpZF0ubmJPcmRlcn08L2JyPmA7XG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ2lkJyxgbGlzdGUke2lkfWApXG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2s7IG92ZXJmbG93OmF1dG87JylcbiAgICAgICAgICAgIGRpdk9yZHJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2UHJvZCcpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmFwcGVuZENoaWxkKGRpdk9yZHJlKVxuICAgICAgICAgICAgdmFyIGlkRGl2ID0gYGxpc3RlJHtpZH1gXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkcmVcIiwgaWQpXG5cbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiBvcmRyZSkge1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWREaXYpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5kZXNzaW5lclByb2R1aXQob3JkcmVbaV0pKTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdpdGggRmlyZWJhc2UgbG9hZERhdGEoKS0+ICcsIGVycilcbiAgICAgICAgfSlcblxuICAgICAgLy9jb25zb2xlLmxvZyhsaXN0T3JkZXJzKVxuXG4gICAgfVxuXG4gICAgZGVzc2luZXJQYW5pZXIobGlzdE9yZGVycykge1xuICAgICAgLy8gU3VwcHJpbWVyIGNvbnRlbnUgcGFuaWVyXG4gICAgICB2YXIgbGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpO1xuICAgICAgd2hpbGUgKGxpc3RlLmNoaWxkcmVuLmxlbmd0aD4wKSB7bGlzdGUucmVtb3ZlQ2hpbGQobGlzdGUubGFzdENoaWxkKX1cbiAgICAvLyAgcHJpY2VDb21tYW5kZSA9IDA7XG5cbiAgICAgIC8vIEFmZmljaGVyIGxlcyDDqWzDqW1lbnRzXG5cbiAgICAgIGZvcihsZXQgaWQgaW4gbGlzdE9yZGVycykge1xuICAgICAgICB0aGlzLmRlc3NpbmVyUHJvZHVpdChsaXN0T3JkZXJzWzBdLm9yZGVyW2lkXSk7XG4gICAgICAgIC8vcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBsaXN0T3JkZXJzW2lkXS5wcmljZVBybyAqIGxpc3RPcmRlcnNbaWRdLnRpbWVzUHJvIDtcbiAgICAgIH1cbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICAgIC8vIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID09IFwiUXVhbnRpdMOpXCIpe1xuICAgICAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICAvLyB9O1xuICAgIH1cblxuICAgIGRlc3NpbmVyUHJvZHVpdChvcmRyZSkge1xuICAgICAgLy8gTGlyZSBsZSBzcmMgZHUgcHJvZHVpdCAoc3RvY2vDqSBkYW5zIGxlIGh0bWwpXG4gICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBpZD1cIiR7b3JkcmUuaWRQcm99XCIgY2xhc3M9XCJjb2wtMTA1XCI+XG4gICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICA8aW1nIGlkPVwiaW1nUGFuMVwiIHNyYz1cIiR7b3JkcmUuc3JjfVwiPlxuICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gJHtvcmRyZS5wcmljZVByb30gPC9wPlxuICAgICAgICAgPHA+JHtvcmRyZS50aW1lc1Byb308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG59XG4iLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMTMtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cblxuaW1wb3J0IHsgRmlyZUJhc2VIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2ZpcmViYXNlSGVscGVyJztcbmltcG9ydCB7IEFkbWluUGFnZSB9IGZyb20gJy4uLy4uL3BhZ2VzL2FkbWluL2FkbWluJztcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcblxuICBjb25zdHJ1Y3RvcihhcHBCb2R5KXtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5XG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnSGVsbG8gd29ybGQhIEhlbGxvIFJvYmVydG8nO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgdGhpcy5mRmlyZUJhc2VIZWxwZXIoKTtcbiAgICB0aGlzLmVtcHR5Qm94RigpO1xuICB9XG5cblxuICBpbml0VUkoKXtcblxuICAgIC8vSW5pY2lhdGUgdGhlIHZhcmlhYmxlIFEgdG8gdGhlIHZhbHVlIGluIHRoZSBodG1sXG4gICAgdmFyIHZRO1xuICAgIC8vSW5pY2lhdGUgdGhlIHZhcmlhYmxlIHByaWNlUHJvZHVjdFxuICAgIHZhciBwcmljZVByb2R1Y3Q7XG4gICAgdmFyIHByaWNlQ29tbWFuZGU7XG4gICAgdmFyIHRpbWVzQ29tbWFuZGU7XG4gICAgdmFyIHRvdGFsUHJpY2VQYWNrYWdlO1xuICAgIHZhciBsb2NhbE9yZGVyID0ge307XG5cblxuICAgIC8vIHJlbW92ZSBhbGwgc2VjdGlvbiBiZWZvcmUgZGlzcGxheSBVSVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXG4gICAgfVxuICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIuYnV0dG9uLWNvbGxhcHNlXCIpLnNpZGVOYXYoKTtcbiAgICB9KVxuICAgIC8vIGNyZWF0ZSBwYWdlIHNrZWxldG9uXG4gICAgbGV0IHBhZ2VTa2VsZXRvbiA9IHRoaXMuc2tlbGV0b25CYXNlKCk7XG5cbiAgICAvLyBhZGQgcGFnZSBza2VsZXRvbiBpbiBib2R5XG4gICAgdGhpcy5hcHBCb2R5Lmluc2VydEFkamFjZW50SFRNTCggJ2FmdGVyYmVnaW4nLCBwYWdlU2tlbGV0b24gKVxuICAgIHRoaXMubG9hZEV2ZW50VUkoKVxuICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgIHRoaXMuY2hvb3NlUHJvZHVjdCh2USxwcmljZVByb2R1Y3QscHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcilcbiAgICB0aGlzLmNsaWNrQ29tbWFuZGVRdChwcmljZUNvbW1hbmRlLHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKVxuXG4gICAgTWF0ZXJpYWxpemUudG9hc3QoJ0kgYW0gYSB0b2FzdCEnLCA0MDAwKSAvLyA0MDAwIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgdG9hc3RcblxuICB9XG5cbiAgZkZpcmVCYXNlSGVscGVyKCl7XG5cbiAgICAvL1dlIGluc3RhbmNpYXRlIHRoZSBGaXJlYmFzZSBjbGFzc1xuICAgIGxldCBkYXRhQmFzZUNhc3RybyA9IG5ldyBGaXJlQmFzZUhlbHBlcigpO1xuXG4gICAgLy9JbiB0aGUgY2FzZSB0aGUgdXNlciBzZW5kIHRoZSBvcmRlciB3ZSBzYXZlIGluIHRoZSBkYXRhYmFzZVxuICAgICQoXCIjc2VuZE9yZGVyXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIHNFbWFpbCA9ICQoJyN0eHRFbWFpbCcpLnZhbCgpO1xuICAgICAgLy8gQ2hlY2tpbmcgRW1wdHkgRmllbGRzXG4gICAgICBpZiAoJC50cmltKHNFbWFpbCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYWxlcnQoJ1JlbXBsaXNzZXogbGUgY2hhbXAgZW1haWwnKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUVtYWlsKHNFbWFpbCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBNYXRlcmlhbGl6ZS50b2FzdCgnRW1haWwgb2snLCA0MDAwKSAvLyA0MDAwIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgdG9hc3RcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYWxlcnQoJ0ludmFsaWQgRW1haWwgQWRkcmVzcycpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvbUxvY2FsU3RvcmFnZSlcbiAgICAgIGRhdGFCYXNlQ2FzdHJvLmFkZE9iamVjdFRvQmFzZSh7XG4gICAgICAgIG9yZGVyOiBjb21Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIG5iT3JkZXI6ICQoXCIjdGltZXNDb21tYW5kZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgIG1haWw6ICQoXCJpbnB1dFtuYW1lPSdlbWFpbCddXCIpLnZhbCgpXG4gICAgICB9KTtcblxuICAgICAgYWxlcnQoXCJCaWVuIGVudm95w6lcIilcbiAgICB9KVxuICB9XG5cbiAgZW1wdHlCb3hGKCl7XG4gICAgJChcIiNlbXB0eUJveFwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cbiAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbE9yZGVyXCIpO1xuICAgICAgdGhpcy5pbml0VUkoKTtcblxuICAgIH0pXG4gIH1cblxuICB2YWxpZGF0ZUVtYWlsKHNFbWFpbCkge1xuICAgIHZhciBmaWx0ZXIgPSAvXltcXHctLitdK0BbYS16QS1aMC05Li1dKy5bYS16QS16MC05XXsyLDR9JC87XG5cbiAgICBpZiAoZmlsdGVyLnRlc3Qoc0VtYWlsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKSB7XG4gICAgLy8gU3VwcHJpbWVyIGNvbnRlbnUgcGFuaWVyXG4gICAgdmFyIGxpc3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1eUxpc3QnKTtcbiAgICB3aGlsZSAobGlzdGUuY2hpbGRyZW4ubGVuZ3RoPjEpIHtsaXN0ZS5yZW1vdmVDaGlsZChsaXN0ZS5sYXN0Q2hpbGQpfVxuICAgIHByaWNlQ29tbWFuZGUgPSAwO1xuXG4gICAgLy8gQWZmaWNoZXIgbGVzIMOpbMOpbWVudHNcbiAgICB2YXIgcHJvZHVpdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgZm9yKGxldCBpZCBpbiBwcm9kdWl0cykge1xuICAgICAgdGhpcy5kZXNzaW5lclByb2R1aXQocHJvZHVpdHNbaWRdKTtcbiAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJvZHVpdHNbaWRdLnByaWNlUHJvICogcHJvZHVpdHNbaWRdLnRpbWVzUHJvIDtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9PSBcIlF1YW50aXTDqVwiKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gMTtcbiAgICB9O1xuICB9XG5cbiAgZGVzc2luZXJQcm9kdWl0KHByb2R1aXQpIHtcbiAgICAvLyBMaXJlIGxlIHNyYyBkdSBwcm9kdWl0IChzdG9ja8OpIGRhbnMgbGUgaHRtbClcbiAgICB2YXIgc3JjSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbWdbZGF0YS1pZD0ke3Byb2R1aXQuaWRQcm99XWApLnNyYztcbiAgICB2YXIgcHJvZHVjdFRvTGlzdCA9IGBcbiAgICA8ZGl2IGlkPVwiJHtwcm9kdWl0LmlkUHJvfVwiIGNsYXNzPVwiY29sLTEwNVwiPlxuICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICA8aW1nIGlkPVwiaW1nUGFuMVwiIHNyYz1cIiR7c3JjSW1hZ2V9XCI+XG4gICAgICAgPC9maWd1cmU+XG4gICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+ICR7cHJvZHVpdC5wcmljZVByb30gPC9wPlxuICAgICAgIDxwPiR7cHJvZHVpdC50aW1lc1Byb308L3A+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvZHVjdFRvTGlzdCk7XG4gIH1cblxuICBjaG9vc2VQcm9kdWN0KHZRLCBwcmljZVByb2R1Y3QscHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcil7XG5cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdExpc3QnKSlcbiAgICB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdExpc3QnKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBldmVudD0+e1xuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIHRoaXMuY2xpY2tGaWd1cmUoZXZlbnQpO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgICAgdGhpcy5jbGlja1BsdXNMZXNzKGV2ZW50LCB2USwgcHJpY2VQcm9kdWN0LCBwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcik7XG4gICAgICAgICAgLy90aGlzLmRlc3NpbmVyUGFuaWVyKCk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH1cblxuXG4gIGNsaWNrUGx1c0xlc3MoZXZlbnQsIHZRLCBwcmljZVByb2R1Y3QsIHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKXtcblxuICAgICAgLy9JbmljaWF0ZSB0aGUgcXVhbnRpdHkgdG8gMFxuICAgICAgdmFyIHFQcm9kdWN0O1xuXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gXCJGSUdVUkVcIil7XG4gICAgICAgIHByaWNlQ29tbWFuZGUgPSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApO1xuICAgICAgfVxuXG4gICAgICAvL0lmIHRoZSBjbGljayBpcyBpbiBhIGJ1dHRvblxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ0JVVFRPTicpe1xuXG4gICAgICAgIC8vQ29udmVydCB0aGUgaHRtbCB0ZXh0IGluIGFuIGludGVnZXIgbnVtYmVyIHNvIHdlIGNhbiBvcGVyYXRlIHdpdGggaXRcbiAgICAgICAgcHJpY2VQcm9kdWN0ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCwgMTApO1xuXG4gICAgICAgIC8vSWYgdGhlIHByb2R1Y3QgZG9uJ3QgZXhpc3QgaW4gdGhlIGxpc3RcbiAgICAgICAgaWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpICYmIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT0gJysnKXtcblxuXG4gICAgICAgICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpKXtcbiAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICBzcmM6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbiAgICAgICAgICAgIHRpbWVzUHJvOiAxLFxuICAgICAgICAgICAgcHJpY2VQcm86IHByaWNlUHJvZHVjdFxuICAgICAgICAgIH07XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuXG4gICAgICAgICAgLy9BZGQgdGhlIGh0bWwgY29udGVudCB0byB0aGUgZGl2IGJ1eUxpc3RcbiAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAvL0NhbGN1bGF0ZSBhbmQgcHJpY2VzIGFuZCBxdWFudGl0aWVzXG4gICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBwcmljZVByb2R1Y3Q7XG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXG4gICAgICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gdG90YWxQcmljZVBhY2thZ2U7XG5cbiAgICAgICAgLy9JZiB0aGUgcHJvZHVjdCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICB9ZWxzZSBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSl7XG5cbiAgICAgICAgICB2USA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpLmxhc3RDaGlsZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCwgMTApO1xuXG4gICAgICAgICAgLy9JZiB0aGUgY2xpY2sgaXMgb24gdGhlIHBsdXMgYnV0dG9uXG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnKycpe1xuXG4gICAgICAgICAgICBxUHJvZHVjdCA9IHZRICsgMTtcbiAgICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJpY2VQcm9kdWN0O1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcVByb2R1Y3Q7XG5cbiAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgICBpZFBybzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgc3JjOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnc3JjJyksXG4gICAgICAgICAgICAgIHRpbWVzUHJvOiBxUHJvZHVjdCxcbiAgICAgICAgICAgICAgcHJpY2VQcm86IHByaWNlUHJvZHVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcbiAgICAgICAgICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgLy9JZiB0aGUgY2xpY2sgaXMgb24gdGhlIGxlc3MgYnV0dG9uXG4gICAgICAgICAgfWVsc2UgaWYoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnLS0nKXtcblxuICAgICAgICAgICAgICAvL2lmIHRoZSBxdWFudGl0eSBpcyAxIHdlIHRha2Ugb2ZmIHRoZSBkaXYgb2YgdGhlIHByb2R1Y3QgZnJvbSB0aGUgcHJvZHVjdExpc3RcbiAgICAgICAgICAgICAgaWYodlE9PT0xKXtcbiAgICAgICAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSAtIHByaWNlUHJvZHVjdDtcbiAgICAgICAgICAgICAgICB2YXIgaWRQcm8gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgIHZhciBwciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkUHJvKTtcbiAgICAgICAgICAgICAgICBwci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByKTtcblxuICAgICAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobG9jYWxPcmRlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG5cbiAgICAgICAgICAgICAgLy9pZiB0aGUgcXVhbnRpdHkgaXMgbW9yZSB0aGFuIDEgd2UgdGFrZSBvbmUgdW5pdHkgZnJvbSB0aGUgcXVhbnRpdHkgb2YgdGhlIHByb2R1Y3RcbiAgICAgICAgICAgICAgfWVsc2UgaWYodlE+MSl7XG4gICAgICAgICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgLSBwcmljZVByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgcVByb2R1Y3QgPSB2USAtIDE7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcVByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgbG9jYWxPcmRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICAgICAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICAgICAgICBzcmM6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAgIHRpbWVzUHJvOiBxUHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgIHByaWNlUHJvOiBwcmljZVByb2R1Y3RcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICB9XG5cblxuICAgIGNsaWNrQ29tbWFuZGVRdChwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSl7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tYW5kZUNvbHVtbicpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGV2ZW50Q29tbWFuZGU9PntcbiAgICAgICAgICBldmVudENvbW1hbmRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG4gICAgICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gMTtcbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCwxMClcblxuICAgICAgICAgIGlmKGV2ZW50Q29tbWFuZGUudGFyZ2V0LmlkID09ICdwbHVzJyl7XG4gICAgICAgICAgICB0aW1lc0NvbW1hbmRlID0gdGltZXNDb21tYW5kZSArMTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gdGltZXNDb21tYW5kZTtcbiAgICAgICAgICB9ZWxzZSBpZihldmVudENvbW1hbmRlLnRhcmdldC5pZCA9PSAnbW9pbnMnICYmIHRpbWVzQ29tbWFuZGUgPiAxKXtcbiAgICAgICAgICAgIHRpbWVzQ29tbWFuZGUtLTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gdGltZXNDb21tYW5kZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHByaWNlQ29tbWFuZGUgKiB0aW1lc0NvbW1hbmRlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgcmVmcmVzaFRvdGFsQ29tbWFuZGUocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2Upe1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG4gICAgICB0aW1lc0NvbW1hbmRlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IDE7XG4gICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCwxMClcblxuICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwcmljZUNvbW1hbmRlICogdGltZXNDb21tYW5kZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuXG4gICAgfVxuXG4gICAgY2xpY2tGaWd1cmUoZXZlbnQpe1xuXG4gICAgICBpZihldmVudC50YXJnZXQudGFnTmFtZSA9PSAnSU1HJyl7XG5cbiAgICAgICAgdmFyIHR5cGVQcm9kID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgIHN3aXRjaCh0eXBlUHJvZCl7XG5cbiAgICAgICAgICBjYXNlICdpbWdDbGljazFicic6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZCcmFuZHknKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgYnJhbmR5IGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMmJyJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkJyYW5keScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIGJyYW5keSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNicic6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZCcmFuZHknKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgYnJhbmR5IGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMXdpbmUnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmV2luZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciB2aW4gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syd2luZSc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZXaW5lJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBkZXV4acOobWUgdmluIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM3dpbmUnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmV2luZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSB2aW4gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxb2lsJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZk9pbCcpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBodWlsZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJvaWwnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmT2lsJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBkZXV4acOobWUgaHVpbGUgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szb2lsJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZk9pbCcpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBodWlsZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxY2gnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQ2hlZXNlJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIGh1aWxlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMmNoJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkNoZWVzZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBmcm9tYWdlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM2NoJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkNoZWVzZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBmcm9tYWdlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMWhhbSc6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmSGFtJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBwcmVtaWVyIGphbWJvbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJoYW0nOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkhhbScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIGphbWJvbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNoYW0nOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkhhbScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBqYW1ib24gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGFsZXJ0KFwiQ2UgcHJvZHVpdCBuJ2EgcGFzIGRlIGRlc2NyaXB0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZEV2ZW50VUkoKXtcblxuICAgICQoXCIjYWRtaW5QYWdlXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgICQoXCIjYWRtaW5QYWdlTW9iXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuXG4gIH1cblxuICBvbkxvZ2luKGV2ZW50KXtcblxuICAgIGxldCB2YWxpZGF0aW9uSW5wdXQgPSAwXG4gICAgbGV0IGZvcm1JbnB1dCA9ICQoJyN0eHRFbWFpbCcpLnZhbCgpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlmKCQoJyN0eHRFbWFpbCcpLnZhbCgpLmxlbmd0aD4wKXtcbiAgICAgIG5ldyBBZG1pblBhZ2UoIHRoaXMuYXBwQm9keSwgZm9ybUlucHV0KTtcbiAgICB9ZWxzZXtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhbGVydChcIkhlbGxvXCIsIFwiSW50cm9kdWlzZXogdm90cmUgbWFpbFwiKVxuICAgIH1cbiAgfVxuXG5cbiAgc2tlbGV0b25CYXNlKCl7XG5cbiAgICBsZXQgdlNrZWxldG9uID0gYFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGltZyBjbGFzcz1cIm1hdGVyaWFsYm94ZWRcIiB3aWR0aD1cIjEwMjRweFwiIGhlaWdodD1cIjIwMHB4XCIgc3JjPVwiLi9zcmMvaW1hZ2VzL3ZpbmFzMi5qcGVnXCI+XG4gICAgICAgIDxoMT4ke3RoaXMucGFnZVRpdGxlfTwvaDE+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZCYXJUb3BcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3M9XCJicmFuZC1sb2dvXCI+TG9nbzwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzcz1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3RvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJhZG1pblBhZ2VcIiBocmVmPVwiI1wiPkFkbWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlTW9iXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kT3JkZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cInNlbmRPcmRlclwiPkVudm95ZXIgY29tbWFuZGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cImVtcHR5Qm94XCI+VmlkZXIgbGUgY29mZnJlPC9idXR0b24+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD48aW5wdXQgaWQ9XCJ0eHRFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ2b3RyZWVtYWlsLmNoXCIvPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyIG91dGxpbmVcIj5cbiAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV5TGlzdFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwNVwiIGlkPVwiY29tbWFuZGVDb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIGNvZmZyZTwvcD48L2JyPlxuICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0b3RhbFByaWNlQ29tbWFuZGVcIj48L3A+PC9icj5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwidGltZXNDb21tYW5kZVwiPlF1YW50aXTDqTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwidG90YWxQcmljZVBhY2thZ2VcIj48L3A+PC9icj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0TGlzdFwiID5cblxuPCEtLUZpcnN0IGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5CcmFuZHk8L3A+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2sxYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYnJhbmR5MS5wbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0IxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwibW9pbnNCMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2syYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYnJhbmR5LWNhc2FqdWFuYS0xMDAtYW5vcy1yZXNlcnZhLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQjJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQjJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2szYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYmFyYmFkaWxsby5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0IzXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0IzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmQnJhbmR5XCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbjwhLS1TZWNvbmQgbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPlZpbm9zPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMXdpbmVcIiBzcmM9XCIuL3NyYy9pbWFnZXMvdmluMS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzFcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMndpbmVcIiBzcmM9XCIuL3NyYy9pbWFnZXMvdmluMi5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2szd2luZVwiIHNyYz1cIi4vc3JjL2ltYWdlcy92aW4zLmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNXM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNXM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmV2luZVwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG48IS0tVGhpcmQgbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPkFjZWl0ZSBkZSBvbGl2YTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxb2lsXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL1JPWEFORSBBUkJFUVVJTkFfNTAwXzAyLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNPMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNPMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJvaWxcIiBzcmM9XCIuL3NyYy9pbWFnZXMvbWFyaWEtZGUtbGEtby1zZWxlY2Npb24tZ291cm1ldC01MDAtbWwuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc08yXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c08yXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM29pbFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9ST1hBTkUgQVJCRVFVSU5BXzUwMF8wMi5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zTzNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzTzNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwIGlkPVwidGV4dEV4cGxpY2F0aWZPaWxcIj48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuICA8IS0tRm91cnRoIGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5RdWVzbzwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxY2hcIiBzcmM9XCIuL3NyYy9pbWFnZXMvY29nbWFuLXNlbWljdXJhZG8tcHVyby1vdmVqYS5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9xdWVzby1jdXJhZG8tYWwtcm9tZXJvLXRvbWVsbG9zby5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoMlwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazNjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9tb250YWx2by1jdXJhZG8tZW4tYWNlaXRlLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNDaDNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQ2gzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmQ2hlZXNlXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbjwhLS1GaWZ0aCBsaW5lIG9mIHByb2R1Y3RzLS0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+SmFtb24gaWLDqXJpY288L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMWhhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjEuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gxXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMmhhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjIuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gyXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM2hhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjMuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gzXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2ICBpZD1cImltZ0NsaWNrMVwiIGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmSGFtXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+PHA+Y29sLTI8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPjxwPmNvbC0yPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj48cD5jb2wtMjwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPjxwPmNvbC0zPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj48cD5jb2wtMzwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPjxwPmNvbC00PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj48cD5jb2wtMjwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNVwiPjxwPmNvbC01PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5jb2wtMTwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPjxwPmNvbC02PC9wPjwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YSBjbGFzcz1cImJ0blwiIG9uY2xpY2s9XCJNYXRlcmlhbGl6ZS50b2FzdCgnSSBhbSBhIHRvYXN0JywgNDAwMClcIj5Ub2FzdCE8L2E+XG4gICAgICAgICAgICA8YnV0dG9uPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMScgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnIGNsYXNzPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+SWLDqXJpY288L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlBhdGEgbmVncmE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkphYnVnbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFRyaWdnZXIgLS0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjInIGNsYXNzPVwiY29sIHMyXCI+SHVpbGUgZCdvbGl2ZTwvYT5cblxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gU3RydWN0dXJlIC0tPlxuICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd24yJyBjbGFzcz0nZHJvcGRvd24tY29udGVudCc+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+Tm9ybWFsPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5WaXJnZW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlZpcmdlbiBleHRyYTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd24zJyBjbGFzcz1cImNvbCBzMlwiPkZyb21hZ2UgbWFuY2hlZ288L2E+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMycgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkN1cmFkbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+U2VtaWN1cmFkbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VGllcm5vPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFRyaWdnZXIgLS0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjQnPkNvbmZpc3NlcmllPC9hPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XG4gICAgICAgICAgICAgICAgPHVsIGlkPSdkcm9wZG93bjQnIGNsYXNzPSdkcm9wZG93bi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5UdXJyb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlNvYmFvczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+UG9sdm9yb25lczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd241Jz5CcmFuZHkgZGUgSmVyZXo8L2E+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duNScgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkxBIEJPVEEgREUgQlJBTkRZIE7CuiAyOTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VE9SUkVTIEpBSU1FIEk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlBFSU5BRE8gU09MRVJBIDEwMCBBw5FPUzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5gO1xuICAgICAgcmV0dXJuIHZTa2VsZXRvbjtcbiAgfVxufVxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgZGVzc2luZXJQYW5pZXIoKTtcbi8vIH1cbiJdfQ==
