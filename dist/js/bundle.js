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

},{"../../helpers/firebaseHelper":3,"../../pages/admin/admin":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXGFwcFxcYXBwLmpzIiwiZGV2XFxhcHBcXGhlbHBlcnNcXGFwaWtleWZpcmViYXNlLmpzIiwiZGV2XFxhcHBcXGhlbHBlcnNcXGZpcmViYXNlSGVscGVyLmpzIiwiZGV2XFxhcHBcXHBhZ2VzXFxhZG1pblxcYWRtaW4uanMiLCJkZXZcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztxakJDQUE7Ozs7Ozs7OztBQU9BOztBQUNBOzs7O0lBRU0sSztBQUVKLG1CQUFhO0FBQUE7O0FBQ1gsU0FBSyxPQUFMLEdBQWUsU0FBUyxvQkFBVCxDQUE4QixLQUE5QixFQUFxQyxDQUFyQyxDQUFmO0FBQ0Q7Ozs7NEJBRU07O0FBRUw7QUFDQSxVQUFJLFNBQVM7QUFDWCxnREFEVztBQUVYLG9CQUFZLG9DQUZEO0FBR1gscUJBQWEsMkNBSEY7QUFJWCx1QkFBZSxnQ0FKSjtBQUtYLDJCQUFtQjtBQUxSLE9BQWI7QUFPQSxlQUFTLGFBQVQsQ0FBdUIsTUFBdkI7O0FBRUE7QUFDQSxVQUFJLFdBQVcsbUJBQWEsS0FBSyxPQUFsQixDQUFmO0FBQ0Q7Ozs7OztBQUlILElBQUksUUFBUSxJQUFJLEtBQUosRUFBWjtBQUNBLE1BQU0sS0FBTjs7Ozs7Ozs7QUNuQ08sSUFBTSw4Q0FBbUIseUNBQXpCOzs7Ozs7Ozs7Ozs7O0FDQVA7Ozs7Ozs7O0lBUWEsYyxXQUFBLGM7QUFFWCw0QkFBYTtBQUFBOztBQUVYO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLFNBQVMsUUFBVCxFQUFoQjtBQUNBLFNBQUssTUFBTCxHQUFjLEVBQWQ7QUFFQTs7OztvQ0FFYyxPLEVBQVE7O0FBRXRCO0FBQ0EsV0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixZQUFsQixFQUFnQyxJQUFoQyxDQUFxQyxPQUFyQztBQUNEOzs7K0JBRVM7QUFBQTs7QUFDUixhQUFPLElBQUksT0FBSixD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QW5CLENBQW9DLE9BQXBDLEVBQTZDO0FBQUEsZUFBUyxPQUFLLE9BQUwsQ0FBYSxLQUFiLENBQVQ7QUFBQSxPQUE3QyxFQUEyRSxLQUEzRTtBQUNBLFFBQUUsZUFBRixFQUFtQixDQUFuQixFQUFzQixnQkFBdEIsQ0FBdUMsT0FBdkMsRUFBZ0Q7QUFBQSxlQUFTLE9BQUssT0FBTCxDQUFhLEtBQWIsQ0FBVDtBQUFBLE9BQWhELEVBQThFLEtBQTlFO0FBRUQ7Ozs0QkFFTyxLLEVBQU07O0FBRVosVUFBSSxrQkFBa0IsQ0FBdEI7QUFDQSxVQUFJLFlBQVksRUFBRSxXQUFGLEVBQWUsR0FBZixFQUFoQjs7QUFFQSxZQUFNLGNBQU47QUFDQSxVQUFHLEVBQUUsV0FBRixFQUFlLEdBQWYsR0FBcUIsTUFBckIsR0FBNEIsQ0FBL0IsRUFBaUM7QUFDL0IsNkJBQWUsS0FBSyxPQUFwQixFQUE2QixTQUE3QjtBQUNELE9BRkQsTUFFSztBQUNILGNBQU0sY0FBTjtBQUNBLGNBQU0sT0FBTixFQUFlLHdCQUFmO0FBQ0Q7QUFDRjs7O21DQUdhOztBQUVaLFVBQUksNkRBRXFCLEtBQUssU0FGMUIsbTVTQUFKO0FBNExFLGFBQU8sU0FBUDtBQUNIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4qIEBBdXRob3I6IFJvYmVyQ2FzdHJvXHJcbiogQERhdGU6ICAgMTMtMTItMjAxNlxyXG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxyXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvYmVyY2FzdHJvXHJcbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxyXG4qL1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vcGFnZXMvaG9tZS9ob21lJztcclxuaW1wb3J0IHsgQVBJX0tFWV9GSVJFQkFTRSB9IGZyb20gJy4vaGVscGVycy9hcGlrZXlmaXJlYmFzZSc7XHJcblxyXG5jbGFzcyBNeUFwcCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmFwcEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFwcFwiKVswXTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCl7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgYXBpS2V5OiBBUElfS0VZX0ZJUkVCQVNFLFxyXG4gICAgICBhdXRoRG9tYWluOiBcImNhc3Ryb2dhc3Ryby04NThjMy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jYXN0cm9nYXN0cm8tODU4YzMuZmlyZWJhc2Vpby5jb21cIixcclxuICAgICAgc3RvcmFnZUJ1Y2tldDogXCJjYXN0cm9nYXN0cm8tODU4YzMuYXBwc3BvdC5jb21cIixcclxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTA4NTg4NjMzMTg5XCJcclxuICAgIH07XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcblxyXG4gICAgLy8gaW5pdCBIb21lUGFnZVxyXG4gICAgbGV0IGhvbWVQYWdlID0gbmV3IEhvbWVQYWdlKHRoaXMuYXBwQm9keSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxubGV0IG15QXBwID0gbmV3IE15QXBwKCk7XHJcbm15QXBwLnN0YXJ0KCk7XHJcbiIsImV4cG9ydCBjb25zdCBBUElfS0VZX0ZJUkVCQVNFID0gXCJBSXphU3lDcEZncjg0ZXBUeVBPZFVHZ1ZNTHB4TERPRTRwQUdRem9cIjtcbiIsIi8qKlxyXG4qIEBBdXRob3I6IFJvYmVyQ2FzdHJvXHJcbiogQERhdGU6ICAgMjAtMTItMjAxNlxyXG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxyXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvYmVyY2FzdHJvXHJcbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxyXG4qL1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpcmVCYXNlSGVscGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRhdGFiYXNlIHNlcnZpY2VcclxuICAgIHRoaXMuZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgdGhpcy5kYkRhdGEgPSBbXTtcclxuXHJcbiAgIH1cclxuXHJcbiAgYWRkT2JqZWN0VG9CYXNlKHByb2R1Y3Qpe1xyXG5cclxuICAgIC8vIGwnZW52b3llciBkYW5zIGxhIGNvbGxlY3Rpb24gXCJwcm9kdWN0c1wiIHN1ciBGaXJlYmFzZVxyXG4gICAgdGhpcy5kYXRhYmFzZS5yZWYoJ2xvY2FsT3JkZXInKS5wdXNoKHByb2R1Y3QpO1xyXG4gIH1cclxuXHJcbiAgbG9hZERhdGEoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgICB0aGlzLmRhdGFiYXNlLnJlZignbG9jYWxPcmRlcicpLm9uKCdjaGlsZF9hZGRlZCcsIChzbmFwc2hvdCk9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGlsZCBhZGRlZC0+ICcsIHNuYXBzaG90LnZhbCgpKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmRiRGF0YS5wdXNoKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgIC8vIGxlcyB2YWxldXIgc29udCBjb250ZW51IGRhbnMgc25hcHNob3QudmFsKClcclxuICAgICAgICAgIC8vIGV0IHBhc3PDqWUgw6AgdW5lIGZvbmN0aW9uIHBvdXIgw6p0cmUgdHJhaXTDqWUgcGx1cyBsb2luLi4uXHJcbiAgICAgICAgICAvLyAgZGlzcGxheVByb2R1Y3RzSW5MaXN0KHNuYXBzaG90KVxyXG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLmRiRGF0YSlcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICB9XHJcbiAgXHJcbn1cclxuIiwiLyoqXHJcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cclxuKiBARGF0ZTogICAyMS0xMi0yMDE2XHJcbiogQEVtYWlsOiAgcm9iZXJ0b2ljYXN0cm9AZ21haWwuY29tXHJcbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cclxuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAyMS0xMi0yMDE2XHJcbiovXHJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vLi4vcGFnZXMvaG9tZS9ob21lJztcclxuaW1wb3J0IHsgRmlyZUJhc2VIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2ZpcmViYXNlSGVscGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBZG1pblBhZ2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHBCb2R5LGZvcm1JbnB1dCl7XHJcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5O1xyXG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1JbnB1dDtcclxuICAgIHRoaXMucGFnZVRpdGxlID0gXCJBZG1pbmlzdHJhdGlvbiBkZXMgY29tbWFuZGVzXCI7XHJcbiAgICB0aGlzLnRpbWUgPSBuZXcgRGF0ZSgpXHJcbiAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgdGhpcy5mRmlyZUJhc2VIZWxwZXIoKTtcclxuICB9XHJcblxyXG4gIGluaXRVSSgpe1xyXG4gICAgLy8gcmVtb3ZlIGFsbCBzZWN0aW9uIGJlZm9yZSBkaXNwbGF5IFVJXHJcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxyXG4gICAgbGV0IHBhZ2VTa2VsZXRvbiA9IGBcclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8cD4ke3RoaXMucGFnZVRpdGxlfSAke3RoaXMuZm9ybURhdGF9ICE8L3A+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2QmFyVG9wXCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XHJcbiAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzcz1cImJyYW5kLWxvZ29cIj5Mb2dvPC9hPlxyXG4gICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZS1kZW1vXCIgY2xhc3M9XCJidXR0b24tY29sbGFwc2VcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvaT48L2E+XHJcbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxyXG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJob21lXCIgaHJlZj1cIiNcIj5JbmljaW88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdG88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNpZGUtbmF2XCIgaWQ9XCJtb2JpbGUtZGVtb1wiPlxyXG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJob21lTW9iXCIgaHJlZj1cIiNcIj5JbmljaW88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdG88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlTW9iXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lciBvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV5TGlzdFwiPlxyXG5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIGA7XHJcbiAgICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcclxuICAgICAgdGhpcy5hcHBCb2R5Lmluc2VydEFkamFjZW50SFRNTCggJ2FmdGVyYmVnaW4nLCBwYWdlU2tlbGV0b24gKVxyXG4gICAgICAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMubG9hZEV2ZW50VUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRXZlbnRVSSgpe1xyXG5cclxuICAgICAgJChcIiNob21lXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xyXG4gICAgICAkKFwiI2hvbWVNb2JcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLm9uTG9naW4oZXZlbnQpLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dpbihldmVudCl7XHJcblxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBuZXcgSG9tZVBhZ2UodGhpcy5hcHBCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBmRmlyZUJhc2VIZWxwZXIoKXtcclxuXHJcbiAgICAgIC8vV2UgaW5zdGFuY2lhdGUgdGhlIEZpcmViYXNlIGNsYXNzXHJcbiAgICAgIGxldCBkYXRhQmFzZUNhc3RybyA9IG5ldyBGaXJlQmFzZUhlbHBlcigpO1xyXG5cclxuICAgICAgZGF0YUJhc2VDYXN0cm8ubG9hZERhdGEoKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuXHJcbiAgICAgICAgICBsZXQgb3JkcmU7XHJcblxyXG4gICAgICAgICAgZm9yKGxldCBpZCBpbiByZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgb3JkcmUgPSByZXNwb25zZVtpZF0ub3JkZXI7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGl2T3JkcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkaXZPcmRyZS5pbm5lckhUTUwgPSBgTGlzdGUgZCdhY2hhdCBudW3DqXJvIDogJHtpZH0gPC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudCBtYWlsIDogJHtyZXNwb25zZVtpZF0ubWFpbH08L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpeCBkdSBwYW5uaWVyIDogJHtyZXNwb25zZVtpZF0ucHJpY2VPcmRlcn08L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhbnRpdMOpIGRlIHBhbm5pZXJzIDogJHtyZXNwb25zZVtpZF0ubmJPcmRlcn08L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpeCB0b3RhbCA6ICR7cmVzcG9uc2VbaWRdLnRvdGFsUHJpY2V9PC9icj5gO1xyXG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ2lkJyxgbGlzdGUke2lkfWApXHJcbiAgICAgICAgICAgIGRpdk9yZHJlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jazsgb3ZlcmZsb3c6YXV0bzsnKVxyXG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RpdlByb2QnKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmFwcGVuZENoaWxkKGRpdk9yZHJlKVxyXG4gICAgICAgICAgICB2YXIgaWREaXYgPSBgbGlzdGUke2lkfWBcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkcmVcIiwgaWQpXHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgaW4gb3JkcmUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZERpdikuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmRlc3NpbmVyUHJvZHVpdChvcmRyZVtpXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aXRoIEZpcmViYXNlIGxvYWREYXRhKCktPiAnLCBlcnIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBkZXNzaW5lclByb2R1aXQob3JkcmUpIHtcclxuICAgICAgLy8gTGlyZSBsZSBzcmMgZHUgcHJvZHVpdCAoc3RvY2vDqSBkYW5zIGxlIGh0bWwpXHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgaWQ9XCIke29yZHJlLmlkUHJvfVwiIGNsYXNzPVwiY29sLTEwNVwiPlxyXG4gICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxyXG4gICAgICAgICAgIDxpbWcgaWQ9XCJpbWdQYW4xXCIgc3JjPVwiJHtvcmRyZS5zcmN9XCI+XHJcbiAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gJHtvcmRyZS5wcmljZVByb30gPC9wPlxyXG4gICAgICAgICA8cD4ke29yZHJlLnRpbWVzUHJvfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cclxuKiBARGF0ZTogICAxMy0xMi0yMDE2XHJcbiogQEVtYWlsOiAgcm9iZXJ0b2ljYXN0cm9AZ21haWwuY29tXHJcbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cclxuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxMy0xMi0yMDE2XHJcbiovXHJcblxyXG5pbXBvcnQgeyBGaXJlQmFzZUhlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZmlyZWJhc2VIZWxwZXInO1xyXG5pbXBvcnQgeyBBZG1pblBhZ2UgfSBmcm9tICcuLi8uLi9wYWdlcy9hZG1pbi9hZG1pbic7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHBCb2R5KXtcclxuICAgIHRoaXMuYXBwQm9keSA9IGFwcEJvZHlcclxuICAgIHRoaXMucGFnZVRpdGxlID0gJ1dlbGNvbWUgdG8gR2FzdHJvIENhc3Rybyc7XHJcbiAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgdGhpcy5mRmlyZUJhc2VIZWxwZXIoKTtcclxuICAgIHRoaXMuZW1wdHlCb3hGKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5pdFVJKCl7XHJcblxyXG4gICAgLy9JbmljaWF0ZSB0aGUgdmFyaWFibGUgUSB0byB0aGUgdmFsdWUgaW4gdGhlIGh0bWxcclxuICAgIHZhciB2UTtcclxuICAgIC8vSW5pY2lhdGUgdGhlIHZhcmlhYmxlIHByaWNlUHJvZHVjdFxyXG4gICAgdmFyIHByaWNlUHJvZHVjdDtcclxuICAgIHZhciBwcmljZUNvbW1hbmRlO1xyXG4gICAgdmFyIHRpbWVzQ29tbWFuZGU7XHJcbiAgICB2YXIgdG90YWxQcmljZVBhY2thZ2U7XHJcbiAgICB2YXIgbG9jYWxPcmRlciA9IHt9O1xyXG5cclxuICAgIC8vIHJlbW92ZSBhbGwgc2VjdGlvbiBiZWZvcmUgZGlzcGxheSBVSVxyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKXtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxyXG4gICAgfVxyXG4gICAgJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XHJcbiAgICB9KVxyXG4gICAgLy8gY3JlYXRlIHBhZ2Ugc2tlbGV0b25cclxuICAgIGxldCBwYWdlU2tlbGV0b24gPSB0aGlzLnNrZWxldG9uQmFzZSgpO1xyXG5cclxuICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcclxuICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcclxuICAgIHRoaXMubG9hZEV2ZW50VUkoKVxyXG4gICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XHJcbiAgICB0aGlzLmNob29zZVByb2R1Y3QodlEscHJpY2VQcm9kdWN0LHByaWNlQ29tbWFuZGUsdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UsIGxvY2FsT3JkZXIpXHJcbiAgICB0aGlzLmNsaWNrQ29tbWFuZGVRdChwcmljZUNvbW1hbmRlLHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKVxyXG5cclxuICAgIE1hdGVyaWFsaXplLnRvYXN0KCdJIGFtIGEgdG9hc3QhJywgNDAwMCkgLy8gNDAwMCBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIHRvYXN0XHJcblxyXG4gIH1cclxuXHJcbiAgZkZpcmVCYXNlSGVscGVyKCl7XHJcblxyXG4gICAgLy9XZSBpbnN0YW5jaWF0ZSB0aGUgRmlyZWJhc2UgY2xhc3NcclxuICAgIGxldCBkYXRhQmFzZUNhc3RybyA9IG5ldyBGaXJlQmFzZUhlbHBlcigpO1xyXG5cclxuICAgIC8vSW4gdGhlIGNhc2UgdGhlIHVzZXIgc2VuZCB0aGUgb3JkZXIgd2Ugc2F2ZSBpbiB0aGUgZGF0YWJhc2VcclxuICAgICQoXCIjc2VuZE9yZGVyXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB2YXIgc0VtYWlsID0gJCgnI3R4dEVtYWlsJykudmFsKCk7XHJcbiAgICAgIC8vIENoZWNraW5nIEVtcHR5IEZpZWxkc1xyXG4gICAgICBpZiAoJC50cmltKHNFbWFpbCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGFsZXJ0KCdSZW1wbGlzc2V6IGxlIGNoYW1wIGVtYWlsJyk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudmFsaWRhdGVFbWFpbChzRW1haWwpKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIE1hdGVyaWFsaXplLnRvYXN0KCdFbWFpbCBvaycsIDQwMDApIC8vIDQwMDAgaXMgdGhlIGR1cmF0aW9uIG9mIHRoZSB0b2FzdFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIEVtYWlsIEFkZHJlc3MnKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNvbUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcclxuICAgICAgY29uc29sZS5sb2coY29tTG9jYWxTdG9yYWdlKVxyXG4gICAgICBkYXRhQmFzZUNhc3Ryby5hZGRPYmplY3RUb0Jhc2Uoe1xyXG4gICAgICAgIG9yZGVyOiBjb21Mb2NhbFN0b3JhZ2UsXHJcbiAgICAgICAgcHJpY2VPcmRlcjogJChcIiN0b3RhbFByaWNlQ29tbWFuZGVcIilbMF0uaW5uZXJIVE1MLFxyXG4gICAgICAgIG5iT3JkZXI6ICQoXCIjdGltZXNDb21tYW5kZVwiKVswXS5pbm5lckhUTUwsXHJcbiAgICAgICAgdG90YWxQcmljZTogJChcIiN0b3RhbFByaWNlUGFja2FnZVwiKVswXS5pbm5lckhUTUwsXHJcbiAgICAgICAgbWFpbDogJChcImlucHV0W25hbWU9J2VtYWlsJ11cIikudmFsKClcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhbGVydChcIkJpZW4gZW52b3nDqVwiKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGVtcHR5Qm94Rigpe1xyXG4gICAgJChcIiNlbXB0eUJveFwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcblxyXG4gICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbE9yZGVyXCIpO1xyXG4gICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlRW1haWwoc0VtYWlsKSB7XHJcbiAgICB2YXIgZmlsdGVyID0gL15bXFx3LS4rXStAW2EtekEtWjAtOS4tXSsuW2EtekEtejAtOV17Miw0fSQvO1xyXG5cclxuICAgIGlmIChmaWx0ZXIudGVzdChzRW1haWwpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKSB7XHJcbiAgICAvLyBTdXBwcmltZXIgY29udGVudSBwYW5pZXJcclxuICAgIHZhciBsaXN0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXlMaXN0Jyk7XHJcbiAgICB3aGlsZSAobGlzdGUuY2hpbGRyZW4ubGVuZ3RoPjEpIHtsaXN0ZS5yZW1vdmVDaGlsZChsaXN0ZS5sYXN0Q2hpbGQpfVxyXG4gICAgcHJpY2VDb21tYW5kZSA9IDA7XHJcblxyXG4gICAgLy8gQWZmaWNoZXIgbGVzIMOpbMOpbWVudHNcclxuICAgIHZhciBwcm9kdWl0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcclxuICAgIGZvcihsZXQgaWQgaW4gcHJvZHVpdHMpIHtcclxuICAgICAgdGhpcy5kZXNzaW5lclByb2R1aXQocHJvZHVpdHNbaWRdKTtcclxuICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBwcm9kdWl0c1tpZF0ucHJpY2VQcm8gKiBwcm9kdWl0c1tpZF0udGltZXNQcm8gO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwgPT0gXCJRdWFudGl0w6lcIil7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gMTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkZXNzaW5lclByb2R1aXQocHJvZHVpdCkge1xyXG4gICAgLy8gTGlyZSBsZSBzcmMgZHUgcHJvZHVpdCAoc3RvY2vDqSBkYW5zIGxlIGh0bWwpXHJcbiAgICB2YXIgc3JjSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbWdbZGF0YS1pZD0ke3Byb2R1aXQuaWRQcm99XWApLnNyYztcclxuICAgIHZhciBwcm9kdWN0VG9MaXN0ID0gYFxyXG4gICAgPGRpdiBpZD1cIiR7cHJvZHVpdC5pZFByb31cIiBjbGFzcz1cImNvbC0xMDVcIj5cclxuICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XHJcbiAgICAgICAgIDxpbWcgaWQ9XCJpbWdQYW4xXCIgc3JjPVwiJHtzcmNJbWFnZX1cIj5cclxuICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+ICR7cHJvZHVpdC5wcmljZVByb30gPC9wPlxyXG4gICAgICAgPHA+JHtwcm9kdWl0LnRpbWVzUHJvfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXlMaXN0JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwcm9kdWN0VG9MaXN0KTtcclxuICB9XHJcblxyXG4gIGNob29zZVByb2R1Y3QodlEsIHByaWNlUHJvZHVjdCxwcmljZUNvbW1hbmRlLHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKXtcclxuXHJcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdExpc3QnKSlcclxuICAgIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RMaXN0JykuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgIGV2ZW50PT57XHJcblxyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmNsaWNrRmlndXJlKGV2ZW50KTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICAgICAgICB0aGlzLmNsaWNrUGx1c0xlc3MoZXZlbnQsIHZRLCBwcmljZVByb2R1Y3QsIHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKTtcclxuICAgICAgICAgIC8vdGhpcy5kZXNzaW5lclBhbmllcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xpY2tQbHVzTGVzcyhldmVudCwgdlEsIHByaWNlUHJvZHVjdCwgcHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UsIGxvY2FsT3JkZXIpe1xyXG5cclxuICAgICAgLy9JbmljaWF0ZSB0aGUgcXVhbnRpdHkgdG8gMFxyXG4gICAgICB2YXIgcVByb2R1Y3Q7XHJcblxyXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gXCJGSUdVUkVcIil7XHJcbiAgICAgICAgcHJpY2VDb21tYW5kZSA9IDA7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwgPSAxO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBwcmljZUNvbW1hbmRlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCwxMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vSWYgdGhlIGNsaWNrIGlzIGluIGEgYnV0dG9uXHJcbiAgICAgIGlmKGV2ZW50LnRhcmdldC50YWdOYW1lID09ICdCVVRUT04nKXtcclxuXHJcbiAgICAgICAgLy9Db252ZXJ0IHRoZSBodG1sIHRleHQgaW4gYW4gaW50ZWdlciBudW1iZXIgc28gd2UgY2FuIG9wZXJhdGUgd2l0aCBpdFxyXG4gICAgICAgIHByaWNlUHJvZHVjdCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwsIDEwKTtcclxuXHJcbiAgICAgICAgLy9JZiB0aGUgcHJvZHVjdCBkb24ndCBleGlzdCBpbiB0aGUgbGlzdFxyXG4gICAgICAgIGlmKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSAmJiBldmVudC50YXJnZXQuaW5uZXJIVE1MID09ICcrJyl7XHJcblxyXG5cclxuICAgICAgICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKSl7XHJcbiAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV0gPSB7XHJcbiAgICAgICAgICAgIGlkUHJvOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxyXG4gICAgICAgICAgICBzcmM6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdzcmMnKSxcclxuICAgICAgICAgICAgdGltZXNQcm86IDEsXHJcbiAgICAgICAgICAgIHByaWNlUHJvOiBwcmljZVByb2R1Y3RcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsT3JkZXJcIixKU09OLnN0cmluZ2lmeShsb2NhbE9yZGVyKSk7XHJcblxyXG4gICAgICAgICAgLy9BZGQgdGhlIGh0bWwgY29udGVudCB0byB0aGUgZGl2IGJ1eUxpc3RcclxuICAgICAgICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xyXG4gICAgICAgICAgLy9DYWxjdWxhdGUgYW5kIHByaWNlcyBhbmQgcXVhbnRpdGllc1xyXG4gICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBwcmljZVByb2R1Y3Q7XHJcbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCwxMClcclxuICAgICAgICAgIHRpbWVzQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCwxMClcclxuICAgICAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcclxuXHJcbiAgICAgICAgLy9JZiB0aGUgcHJvZHVjdCBleGlzdCBpbiB0aGUgbGlzdFxyXG4gICAgICAgIH1lbHNlIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpKXtcclxuXHJcbiAgICAgICAgICB2USA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpLmxhc3RDaGlsZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCwgMTApO1xyXG5cclxuICAgICAgICAgIC8vSWYgdGhlIGNsaWNrIGlzIG9uIHRoZSBwbHVzIGJ1dHRvblxyXG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnKycpe1xyXG5cclxuICAgICAgICAgICAgcVByb2R1Y3QgPSB2USArIDE7XHJcbiAgICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJpY2VQcm9kdWN0O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKS5sYXN0Q2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBxUHJvZHVjdDtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XHJcbiAgICAgICAgICAgIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV0gPSB7XHJcbiAgICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXHJcbiAgICAgICAgICAgICAgc3JjOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnc3JjJyksXHJcbiAgICAgICAgICAgICAgdGltZXNQcm86IHFQcm9kdWN0LFxyXG4gICAgICAgICAgICAgIHByaWNlUHJvOiBwcmljZVByb2R1Y3RcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XHJcbiAgICAgICAgICAvL0lmIHRoZSBjbGljayBpcyBvbiB0aGUgbGVzcyBidXR0b25cclxuICAgICAgICAgIH1lbHNlIGlmKGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT0gJy0tJyl7XHJcblxyXG4gICAgICAgICAgICAgIC8vaWYgdGhlIHF1YW50aXR5IGlzIDEgd2UgdGFrZSBvZmYgdGhlIGRpdiBvZiB0aGUgcHJvZHVjdCBmcm9tIHRoZSBwcm9kdWN0TGlzdFxyXG4gICAgICAgICAgICAgIGlmKHZRPT09MSl7XHJcbiAgICAgICAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSAtIHByaWNlUHJvZHVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBpZFBybyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZFBybyk7XHJcbiAgICAgICAgICAgICAgICBwci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2NhbE9yZGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsT3JkZXJcIixKU09OLnN0cmluZ2lmeShsb2NhbE9yZGVyKSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGxvY2FsT3JkZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgLy9pZiB0aGUgcXVhbnRpdHkgaXMgbW9yZSB0aGFuIDEgd2UgdGFrZSBvbmUgdW5pdHkgZnJvbSB0aGUgcXVhbnRpdHkgb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAgICAgICB9ZWxzZSBpZih2UT4xKXtcclxuICAgICAgICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlIC0gcHJpY2VQcm9kdWN0O1xyXG4gICAgICAgICAgICAgICAgcVByb2R1Y3QgPSB2USAtIDE7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKS5sYXN0Q2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBxUHJvZHVjdDtcclxuICAgICAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xyXG4gICAgICAgICAgICAgICAgICBpZFBybzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcclxuICAgICAgICAgICAgICAgICAgc3JjOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnc3JjJyksXHJcbiAgICAgICAgICAgICAgICAgIHRpbWVzUHJvOiBxUHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgcHJpY2VQcm86IHByaWNlUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGlja0NvbW1hbmRlUXQocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2Upe1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1hbmRlQ29sdW1uJykuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgIGV2ZW50Q29tbWFuZGU9PntcclxuICAgICAgICAgIGV2ZW50Q29tbWFuZGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxyXG4gICAgICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwgPSAxO1xyXG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXHJcblxyXG4gICAgICAgICAgaWYoZXZlbnRDb21tYW5kZS50YXJnZXQuaWQgPT0gJ3BsdXMnKXtcclxuICAgICAgICAgICAgdGltZXNDb21tYW5kZSA9IHRpbWVzQ29tbWFuZGUgKzE7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gdGltZXNDb21tYW5kZTtcclxuICAgICAgICAgIH1lbHNlIGlmKGV2ZW50Q29tbWFuZGUudGFyZ2V0LmlkID09ICdtb2lucycgJiYgdGltZXNDb21tYW5kZSA+IDEpe1xyXG4gICAgICAgICAgICB0aW1lc0NvbW1hbmRlLS07XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gdGltZXNDb21tYW5kZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHByaWNlQ29tbWFuZGUgKiB0aW1lc0NvbW1hbmRlO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gdG90YWxQcmljZVBhY2thZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRvdGFsQ29tbWFuZGUocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2Upe1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XHJcbiAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcclxuICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXHJcbiAgICAgIHRpbWVzQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCwxMClcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IDE7XHJcbiAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MLDEwKVxyXG5cclxuICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwcmljZUNvbW1hbmRlICogdGltZXNDb21tYW5kZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gdG90YWxQcmljZVBhY2thZ2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrRmlndXJlKGV2ZW50KXtcclxuXHJcbiAgICAgIGlmKGV2ZW50LnRhcmdldC50YWdOYW1lID09ICdJTUcnKXtcclxuXHJcbiAgICAgICAgdmFyIHR5cGVQcm9kID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuICAgICAgICBzd2l0Y2godHlwZVByb2Qpe1xyXG5cclxuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMWJyJzpcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQnJhbmR5JykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBwcmVtaWVyIGJyYW5keSBkZSBsYSBsaXN0ZVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syYnInOlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZCcmFuZHknKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIGRldXhpw6htZSBicmFuZHkgZGUgbGEgbGlzdGVcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM2JyJzpcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQnJhbmR5JykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIGJyYW5keSBkZSBsYSBsaXN0ZVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxd2luZSc6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZldpbmUnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgdmluIGRlIGxhIGxpc3RlXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJ3aW5lJzpcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmV2luZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIHZpbiBkZSBsYSBsaXN0ZVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szd2luZSc6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZldpbmUnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgdmluIGRlIGxhIGxpc3RlXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdpbWdDbGljazFvaWwnOlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZPaWwnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgaHVpbGUgZGUgbGEgbGlzdGVcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMm9pbCc6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZk9pbCcpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIGh1aWxlIGRlIGxhIGxpc3RlXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNvaWwnOlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZPaWwnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgaHVpbGUgZGUgbGEgbGlzdGVcIlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdpbWdDbGljazFjaCc6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkNoZWVzZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBodWlsZSBkZSBsYSBsaXN0ZVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syY2gnOlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZDaGVlc2UnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgZnJvbWFnZSBkZSBsYSBsaXN0ZVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szY2gnOlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZDaGVlc2UnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgZnJvbWFnZSBkZSBsYSBsaXN0ZVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxaGFtJzpcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkhhbScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBqYW1ib24gZGUgbGEgbGlzdGVcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMmhhbSc6XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZIYW0nKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIGRldXhpw6htZSBqYW1ib24gZGUgbGEgbGlzdGVcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM2hhbSc6XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZIYW0nKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgamFtYm9uIGRlIGxhIGxpc3RlXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBhbGVydChcIkNlIHByb2R1aXQgbidhIHBhcyBkZSBkZXNjcmlwdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkRXZlbnRVSSgpe1xyXG5cclxuICAgICQoXCIjYWRtaW5QYWdlXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xyXG4gICAgJChcIiNhZG1pblBhZ2VNb2JcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLm9uTG9naW4oZXZlbnQpLCBmYWxzZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Mb2dpbihldmVudCl7XHJcblxyXG4gICAgbGV0IHZhbGlkYXRpb25JbnB1dCA9IDBcclxuICAgIGxldCBmb3JtSW5wdXQgPSAkKCcjdHh0RW1haWwnKS52YWwoKTtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpZigkKCcjdHh0RW1haWwnKS52YWwoKS5sZW5ndGg+MCl7XHJcbiAgICAgIG5ldyBBZG1pblBhZ2UoIHRoaXMuYXBwQm9keSwgZm9ybUlucHV0KTtcclxuICAgIH1lbHNle1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBhbGVydChcIkhlbGxvXCIsIFwiSW50cm9kdWlzZXogdm90cmUgbWFpbFwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHNrZWxldG9uQmFzZSgpe1xyXG5cclxuICAgIGxldCB2U2tlbGV0b24gPSBgXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJjZW50ZXJcIj4ke3RoaXMucGFnZVRpdGxlfTwvaDM+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2QmFyVG9wXCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XHJcbiAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzcz1cImJyYW5kLWxvZ29cIj5Mb2dvPC9hPlxyXG4gICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZS1kZW1vXCIgY2xhc3M9XCJidXR0b24tY29sbGFwc2VcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvaT48L2E+XHJcbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxyXG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5JbmljaW88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdG88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNpZGUtbmF2XCIgaWQ9XCJtb2JpbGUtZGVtb1wiPlxyXG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5JbmljaW88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdG88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlTW9iXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZE9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cInNlbmRPcmRlclwiPkVudm95ZXIgY29tbWFuZGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGlkPVwiZW1wdHlCb3hcIj5WaWRlciBsZSBjb2ZmcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD48aW5wdXQgaWQ9XCJ0eHRFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ2b3RyZWVtYWlsLmNoXCIvPlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lciBvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV5TGlzdFwiIGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTA1XCIgaWQ9XCJjb21tYW5kZUNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5Db2ZmcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwidG90YWxQcmljZUNvbW1hbmRlXCI+PC9wPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlF0w6kgOjwvcD48cCBpZD1cInRpbWVzQ29tbWFuZGVcIj5RdWFudGl0w6k8L3A+PC9icj5cclxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgOjwvcD48cCBpZD1cInRvdGFsUHJpY2VQYWNrYWdlXCI+PC9wPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1wiPis8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdExpc3RcIiA+XHJcblxyXG48IS0tRmlyc3QgbGluZSBvZiBwcm9kdWN0cy0tPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5CcmFuZHk8L3A+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRhdGEtaWQ9XCJpbWdDbGljazFiclwiIHNyYz1cIi4vc3JjL2ltYWdlcy9icmFuZHkxLnBuZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNCMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cIm1vaW5zQjFcIj4rPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1pZD1cImltZ0NsaWNrMmJyXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2JyYW5keS1jYXNhanVhbmEtMTAwLWFub3MtcmVzZXJ2YS5qcGVnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQjJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQjJcIj4rPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2szYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYmFyYmFkaWxsby5qcGVnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQjNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQjNcIj4rPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZkJyYW5keVwiPjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG48IS0tU2Vjb25kIGxpbmUgb2YgcHJvZHVjdHMtLT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+Vmlub3M8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxd2luZVwiIHNyYz1cIi4vc3JjL2ltYWdlcy92aW4xLmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc1cxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1cxXCI+KzwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJ3aW5lXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL3ZpbjIuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzJcIj4rPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2szd2luZVwiIHNyYz1cIi4vc3JjL2ltYWdlcy92aW4zLmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc1czXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1czXCI+KzwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZldpbmVcIj48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuPCEtLVRoaXJkIGxpbmUgb2YgcHJvZHVjdHMtLT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+QWNlaXRlIGRlIG9saXZhPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazFvaWxcIiBzcmM9XCIuL3NyYy9pbWFnZXMvUk9YQU5FIEFSQkVRVUlOQV81MDBfMDIuanBlZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zTzFcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzTzFcIj4rPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2syb2lsXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL21hcmlhLWRlLWxhLW8tc2VsZWNjaW9uLWdvdXJtZXQtNTAwLW1sLmpwZWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc08yXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c08yXCI+KzwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM29pbFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9ST1hBTkUgQVJCRVFVSU5BXzUwMF8wMi5qcGVnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNPM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNPM1wiPis8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmT2lsXCI+PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgPCEtLUZvdXJ0aCBsaW5lIG9mIHByb2R1Y3RzLS0+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPlF1ZXNvPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazFjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9jb2dtYW4tc2VtaWN1cmFkby1wdXJvLW92ZWphLmpwZWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0NoMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNDaDFcIj4rPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2syY2hcIiBzcmM9XCIuL3NyYy9pbWFnZXMvcXVlc28tY3VyYWRvLWFsLXJvbWVyby10b21lbGxvc28uanBlZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoMlwiPis8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazNjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9tb250YWx2by1jdXJhZG8tZW4tYWNlaXRlLmpwZWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0NoM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNDaDNcIj4rPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZkNoZWVzZVwiPjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG48IS0tRmlmdGggbGluZSBvZiBwcm9kdWN0cy0tPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5KYW1vbiBpYsOpcmljbzwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxaGFtXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2phbW9uMS5qcGVnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNIMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNIMVwiPis8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJoYW1cIiBzcmM9XCIuL3NyYy9pbWFnZXMvamFtb24yLmpwZWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gyXCI+KzwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM2hhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjMuanBlZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zSDNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzSDNcIj4rPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiAgaWQ9XCJpbWdDbGljazFcIiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZkhhbVwiPjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvc2VjdGlvbj5gO1xyXG4gICAgICByZXR1cm4gdlNrZWxldG9uO1xyXG4gIH1cclxufVxyXG4iXX0=
