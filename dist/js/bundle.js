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
          divOrdre.innerHTML = '      <hr/>Liste d\'achat num\xE9ro : ' + id + ' </br>\n                                  Client mail : ' + response[id].mail + '</br>\n                                  Prix du pannier : ' + response[id].priceOrder + '</br>\n                                  Quantit\xE9 de panniers : ' + response[id].nbOrder + '</br>\n                                  Prix total : ' + response[id].totalPrice + '</br>';
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
      return '\n      <div id="' + ordre.idPro + '" class="col-105">\n         <figure style= "margin:0;">\n           <img id="imgPan1" src="' + ordre.src + '">\n         </figure>\n         <p class = "priceHidden"> ' + ordre.pricePro + ' </p>\n         <p>' + ordre.timesPro + '</p>\n      </div>\n\n      ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvaGVscGVycy9hcGlrZXlmaXJlYmFzZS5qcyIsImRldi9hcHAvaGVscGVycy9maXJlYmFzZUhlbHBlci5qcyIsImRldi9hcHAvcGFnZXMvYWRtaW4vYWRtaW4uanMiLCJkZXYvYXBwL3BhZ2VzL2hvbWUvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O3FqQkNBQTs7Ozs7Ozs7O0FBT0E7O0FBQ0E7Ozs7SUFFTSxLO0FBRUosbUJBQWE7QUFBQTs7QUFDWCxTQUFLLE9BQUwsR0FBZSxTQUFTLG9CQUFULENBQThCLEtBQTlCLEVBQXFDLENBQXJDLENBQWY7QUFDRDs7Ozs0QkFFTTs7QUFFTDtBQUNBLFVBQUksU0FBUztBQUNYLGdEQURXO0FBRVgsb0JBQVksb0NBRkQ7QUFHWCxxQkFBYSwyQ0FIRjtBQUlYLHVCQUFlLGdDQUpKO0FBS1gsMkJBQW1CO0FBTFIsT0FBYjtBQU9BLGVBQVMsYUFBVCxDQUF1QixNQUF2Qjs7QUFFQTtBQUNBLFVBQUksV0FBVyxtQkFBYSxLQUFLLE9BQWxCLENBQWY7QUFDRDs7Ozs7O0FBSUgsSUFBSSxRQUFRLElBQUksS0FBSixFQUFaO0FBQ0EsTUFBTSxLQUFOOzs7Ozs7OztBQ25DTyxJQUFNLDhDQUFtQix5Q0FBekI7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7SUFRYSxjLFdBQUEsYztBQUVYLDRCQUFhO0FBQUE7O0FBRVg7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsU0FBUyxRQUFULEVBQWhCO0FBQ0EsU0FBSyxNQUFMLEdBQWMsRUFBZDtBQUVBOzs7O29DQUVjLE8sRUFBUTs7QUFFdEI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLElBQWhDLENBQXFDLE9BQXJDO0FBQ0Q7OzsrQkFFUztBQUFBOztBQUNSLGFBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFtQjtBQUNwQyxjQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLEVBQWhDLENBQW1DLGFBQW5DLEVBQWtELFVBQUMsUUFBRCxFQUFhO0FBQzNEOztBQUVBLGdCQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLFNBQVMsR0FBVCxFQUFqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFRLE1BQUssTUFBYjtBQUNILFNBUkQ7QUFTRCxPQVZNLENBQVA7QUFZRDs7Ozs7Ozs7Ozs7Ozs7cWpCQ3JDSDs7Ozs7Ozs7O0FBT0E7O0FBQ0E7Ozs7SUFFYSxTLFdBQUEsUztBQUVYLHFCQUFZLE9BQVosRUFBb0IsU0FBcEIsRUFBOEI7QUFBQTs7QUFDNUIsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssUUFBTCxHQUFnQixTQUFoQjtBQUNBLFNBQUssU0FBTCxHQUFpQiw4QkFBakI7QUFDQSxTQUFLLElBQUwsR0FBWSxJQUFJLElBQUosRUFBWjtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssZUFBTDtBQUNEOzs7OzZCQUVPO0FBQ047QUFDQSxVQUFHLFNBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsQ0FBSCxFQUErQztBQUM3QyxpQkFBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxFQUE0QyxVQUE1QyxDQUF1RCxXQUF2RCxDQUFtRSxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQW5FO0FBQ0Q7QUFDRDtBQUNBLFVBQUksb0VBR08sS0FBSyxTQUhaLFNBR3lCLEtBQUssUUFIOUIsNnBDQUFKO0FBZ0NFO0FBQ0EsV0FBSyxPQUFMLENBQWEsa0JBQWIsQ0FBaUMsWUFBakMsRUFBK0MsWUFBL0M7QUFDQSxRQUFHLFFBQUgsRUFBYyxLQUFkLENBQW9CLFlBQVU7QUFDNUIsVUFBRSxrQkFBRixFQUFzQixPQUF0QjtBQUNELE9BRkQ7O0FBSUEsV0FBSyxXQUFMO0FBQ0Q7OztrQ0FFWTtBQUFBOztBQUVYLFFBQUUsT0FBRixFQUFXLENBQVgsRUFBYyxnQkFBZCxDQUErQixPQUEvQixFQUF3QztBQUFBLGVBQVMsTUFBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBeEMsRUFBc0UsS0FBdEU7QUFDQSxRQUFFLFVBQUYsRUFBYyxDQUFkLEVBQWlCLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQztBQUFBLGVBQVMsTUFBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBM0MsRUFBeUUsS0FBekU7QUFDRDs7OzRCQUVPLEssRUFBTTs7QUFFWixZQUFNLGNBQU47QUFDQSx5QkFBYSxLQUFLLE9BQWxCO0FBQ0Q7OztzQ0FFZ0I7QUFBQTs7QUFFZjtBQUNBLFVBQUksaUJBQWlCLG9DQUFyQjs7QUFFQSxxQkFBZSxRQUFmLEdBQ0csSUFESCxDQUNRLFVBQUMsUUFBRCxFQUFZOztBQUVoQixZQUFJLGNBQUo7O0FBRUEsYUFBSSxJQUFJLEVBQVIsSUFBYyxRQUFkLEVBQXdCOztBQUV0QixrQkFBUSxTQUFTLEVBQVQsRUFBYSxLQUFyQjs7QUFFQSxjQUFJLFdBQVcsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxtQkFBUyxTQUFULDhDQUEwRCxFQUExRCxnRUFDc0MsU0FBUyxFQUFULEVBQWEsSUFEbkQsbUVBRTBDLFNBQVMsRUFBVCxFQUFhLFVBRnZELDJFQUcrQyxTQUFTLEVBQVQsRUFBYSxPQUg1RCw4REFJcUMsU0FBUyxFQUFULEVBQWEsVUFKbEQ7QUFLQSxtQkFBUyxZQUFULENBQXNCLElBQXRCLFlBQW1DLEVBQW5DO0FBQ0EsbUJBQVMsWUFBVCxDQUFzQixPQUF0QixFQUErQiwrQkFBL0I7QUFDQSxtQkFBUyxZQUFULENBQXNCLE9BQXRCLEVBQStCLFNBQS9CO0FBQ0EsbUJBQVMsY0FBVCxDQUF3QixTQUF4QixFQUFtQyxXQUFuQyxDQUErQyxRQUEvQztBQUNBLGNBQUksa0JBQWdCLEVBQXBCOztBQUVBLGtCQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLEVBQXJCOztBQUVBLGVBQUksSUFBSSxDQUFSLElBQWEsS0FBYixFQUFvQjs7QUFFaEIscUJBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQixrQkFBL0IsQ0FBa0QsV0FBbEQsRUFBK0QsT0FBSyxlQUFMLENBQXFCLE1BQU0sQ0FBTixDQUFyQixDQUEvRDtBQUNIO0FBQ0Y7QUFDRixPQTVCSCxFQTZCRyxLQTdCSCxDQTZCUyxVQUFDLEdBQUQsRUFBTztBQUNaLGdCQUFRLEdBQVIsQ0FBWSxtQ0FBWixFQUFpRCxHQUFqRDtBQUNELE9BL0JIO0FBZ0NEOzs7b0NBRWUsSyxFQUFPO0FBQ3JCO0FBQ0EsbUNBQ1csTUFBTSxLQURqQixvR0FHOEIsTUFBTSxHQUhwQyxtRUFLK0IsTUFBTSxRQUxyQywyQkFNUSxNQUFNLFFBTmQ7QUFVRDs7Ozs7Ozs7Ozs7Ozs7cWpCQ25JTDs7Ozs7Ozs7QUFRQTs7QUFDQTs7OztJQUVhLFEsV0FBQSxRO0FBRVgsb0JBQVksT0FBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLDBCQUFqQjtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssZUFBTDtBQUNBLFNBQUssU0FBTDtBQUNEOzs7OzZCQUdPOztBQUVOO0FBQ0EsVUFBSSxFQUFKO0FBQ0E7QUFDQSxVQUFJLFlBQUo7QUFDQSxVQUFJLGFBQUo7QUFDQSxVQUFJLGFBQUo7QUFDQSxVQUFJLGlCQUFKO0FBQ0EsVUFBSSxhQUFhLEVBQWpCOztBQUVBO0FBQ0EsVUFBRyxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQUgsRUFBK0M7QUFDN0MsaUJBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsRUFBNEMsVUFBNUMsQ0FBdUQsV0FBdkQsQ0FBbUUsU0FBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxDQUFuRTtBQUNEO0FBQ0QsUUFBRyxRQUFILEVBQWMsS0FBZCxDQUFvQixZQUFVO0FBQzVCLFVBQUUsa0JBQUYsRUFBc0IsT0FBdEI7QUFDRCxPQUZEO0FBR0E7QUFDQSxVQUFJLGVBQWUsS0FBSyxZQUFMLEVBQW5COztBQUVBO0FBQ0EsV0FBSyxPQUFMLENBQWEsa0JBQWIsQ0FBaUMsWUFBakMsRUFBK0MsWUFBL0M7QUFDQSxXQUFLLFdBQUw7QUFDQSxXQUFLLGNBQUwsQ0FBb0IsYUFBcEIsRUFBbUMsYUFBbkMsRUFBa0QsaUJBQWxEO0FBQ0EsV0FBSyxhQUFMLENBQW1CLEVBQW5CLEVBQXNCLFlBQXRCLEVBQW1DLGFBQW5DLEVBQWlELGFBQWpELEVBQWdFLGlCQUFoRSxFQUFtRixVQUFuRjtBQUNBLFdBQUssZUFBTCxDQUFxQixhQUFyQixFQUFtQyxhQUFuQyxFQUFrRCxpQkFBbEQ7O0FBRUEsa0JBQVksS0FBWixDQUFrQixlQUFsQixFQUFtQyxJQUFuQyxFQTVCTSxDQTRCbUM7QUFFMUM7OztzQ0FFZ0I7QUFBQTs7QUFFZjtBQUNBLFVBQUksaUJBQWlCLG9DQUFyQjs7QUFFQTtBQUNBLFFBQUUsWUFBRixFQUFnQixDQUFoQixFQUFtQixnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkMsVUFBQyxDQUFELEVBQUs7O0FBRWhELFVBQUUsY0FBRjs7QUFFQSxZQUFJLFNBQVMsRUFBRSxXQUFGLEVBQWUsR0FBZixFQUFiO0FBQ0E7QUFDQSxZQUFJLEVBQUUsSUFBRixDQUFPLE1BQVAsRUFBZSxNQUFmLElBQXlCLENBQTdCLEVBQWdDO0FBQzVCLFlBQUUsY0FBRjtBQUNBLGdCQUFNLDJCQUFOO0FBQ0EsaUJBQU8sS0FBUDtBQUNIO0FBQ0QsWUFBSSxNQUFLLGFBQUwsQ0FBbUIsTUFBbkIsQ0FBSixFQUFnQztBQUM5QixZQUFFLGNBQUY7QUFDQSxzQkFBWSxLQUFaLENBQWtCLFVBQWxCLEVBQThCLElBQTlCLEVBRjhCLENBRU07QUFDckMsU0FIRCxNQUlLO0FBQ0gsWUFBRSxjQUFGO0FBQ0UsZ0JBQU0sdUJBQU47QUFDQSxpQkFBTyxLQUFQO0FBQ0g7O0FBRUQsWUFBSSxrQkFBa0IsS0FBSyxLQUFMLENBQVcsYUFBYSxPQUFiLENBQXFCLFlBQXJCLENBQVgsQ0FBdEI7QUFDQSxnQkFBUSxHQUFSLENBQVksZUFBWjtBQUNBLHVCQUFlLGVBQWYsQ0FBK0I7QUFDN0IsaUJBQU8sZUFEc0I7QUFFN0Isc0JBQVksRUFBRSxxQkFBRixFQUF5QixDQUF6QixFQUE0QixTQUZYO0FBRzdCLG1CQUFTLEVBQUUsZ0JBQUYsRUFBb0IsQ0FBcEIsRUFBdUIsU0FISDtBQUk3QixzQkFBWSxFQUFFLG9CQUFGLEVBQXdCLENBQXhCLEVBQTJCLFNBSlY7QUFLN0IsZ0JBQU0sRUFBRSxxQkFBRixFQUF5QixHQUF6QjtBQUx1QixTQUEvQjs7QUFRQSxjQUFNLGFBQU47QUFDRCxPQWhDRDtBQWlDRDs7O2dDQUVVO0FBQUE7O0FBQ1QsUUFBRSxXQUFGLEVBQWUsQ0FBZixFQUFrQixnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsWUFBSTs7QUFFOUM7QUFDQSxxQkFBYSxVQUFiLENBQXdCLFlBQXhCO0FBQ0EsZUFBSyxNQUFMO0FBQ0QsT0FMRDtBQU1EOzs7a0NBRWEsTSxFQUFRO0FBQ3BCLFVBQUksU0FBUyw0Q0FBYjs7QUFFQSxVQUFJLE9BQU8sSUFBUCxDQUFZLE1BQVosQ0FBSixFQUF5QjtBQUN2QixlQUFPLElBQVA7QUFDRCxPQUZELE1BR0s7QUFDSCxlQUFPLEtBQVA7QUFDRDtBQUNGOzs7bUNBRWMsYSxFQUFlLGEsRUFBZSxpQixFQUFtQjtBQUM5RDtBQUNBLFVBQUksUUFBUSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBWjtBQUNBLGFBQU8sTUFBTSxRQUFOLENBQWUsTUFBZixHQUFzQixDQUE3QixFQUFnQztBQUFDLGNBQU0sV0FBTixDQUFrQixNQUFNLFNBQXhCO0FBQW1DO0FBQ3BFLHNCQUFnQixDQUFoQjs7QUFFQTtBQUNBLFVBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxhQUFhLE9BQWIsQ0FBcUIsWUFBckIsQ0FBWCxDQUFmO0FBQ0EsV0FBSSxJQUFJLEVBQVIsSUFBYyxRQUFkLEVBQXdCO0FBQ3RCLGFBQUssZUFBTCxDQUFxQixTQUFTLEVBQVQsQ0FBckI7QUFDQSx3QkFBZ0IsZ0JBQWdCLFNBQVMsRUFBVCxFQUFhLFFBQWIsR0FBd0IsU0FBUyxFQUFULEVBQWEsUUFBckU7QUFDRDtBQUNELGVBQVMsY0FBVCxDQUF3QixvQkFBeEIsRUFBOEMsU0FBOUMsR0FBMEQsYUFBMUQ7QUFDQSxlQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQTdDLEdBQXlELGFBQXpEO0FBQ0EsVUFBRyxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsU0FBekMsSUFBc0QsVUFBekQsRUFBb0U7QUFDbEUsaUJBQVMsY0FBVCxDQUF3QixlQUF4QixFQUF5QyxTQUF6QyxHQUFxRCxDQUFyRDtBQUNEO0FBQ0Y7OztvQ0FFZSxPLEVBQVM7QUFDdkI7QUFDQSxVQUFJLFdBQVcsU0FBUyxhQUFULGtCQUFzQyxRQUFRLEtBQTlDLFFBQXdELEdBQXZFO0FBQ0EsVUFBSSxvQ0FDTyxRQUFRLEtBRGYsZ0dBRzBCLFFBSDFCLCtEQUsyQixRQUFRLFFBTG5DLHlCQU1JLFFBQVEsUUFOWiwyQkFBSjtBQVNBLGVBQVMsY0FBVCxDQUF3QixTQUF4QixFQUFtQyxrQkFBbkMsQ0FBc0QsV0FBdEQsRUFBbUUsYUFBbkU7QUFDRDs7O2tDQUVhLEUsRUFBSSxZLEVBQWEsYSxFQUFjLGEsRUFBZSxpQixFQUFtQixVLEVBQVc7QUFBQTs7QUFFeEYsVUFBRyxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBSCxFQUNBO0FBQ0UsaUJBQVMsY0FBVCxDQUF3QixhQUF4QixFQUF1QyxnQkFBdkMsQ0FDRSxPQURGLEVBRUUsaUJBQU87O0FBRUwsZ0JBQU0sY0FBTjs7QUFFQSxpQkFBSyxXQUFMLENBQWlCLEtBQWpCO0FBQ0E7QUFDQSxpQkFBSyxhQUFMLENBQW1CLEtBQW5CLEVBQTBCLEVBQTFCLEVBQThCLFlBQTlCLEVBQTRDLGFBQTVDLEVBQTJELGFBQTNELEVBQTBFLGlCQUExRSxFQUE2RixVQUE3RjtBQUNBO0FBQ0QsU0FWSDtBQVlEO0FBQ0Y7OztrQ0FFYSxLLEVBQU8sRSxFQUFJLFksRUFBYyxhLEVBQWUsYSxFQUFlLGlCLEVBQW1CLFUsRUFBVzs7QUFFL0Y7QUFDQSxVQUFJLFFBQUo7O0FBRUEsVUFBRyxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsZ0JBQW5DLENBQW9ELGlCQUFwRCxDQUFzRSxPQUF0RSxLQUFrRixRQUFyRixFQUE4RjtBQUM1Rix3QkFBZ0IsQ0FBaEI7QUFDQSxpQkFBUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDLFNBQXpDLEdBQXFELENBQXJEO0FBQ0QsT0FIRCxNQUdLO0FBQ0gsd0JBQWdCLFNBQVMsU0FBUyxjQUFULENBQXdCLG9CQUF4QixFQUE4QyxTQUF2RCxFQUFpRSxFQUFqRSxDQUFoQjtBQUNEOztBQUVEO0FBQ0EsVUFBRyxNQUFNLE1BQU4sQ0FBYSxPQUFiLElBQXdCLFFBQTNCLEVBQW9DOztBQUVsQztBQUNBLHVCQUFlLFNBQVMsTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixrQkFBM0IsQ0FBOEMsU0FBdkQsRUFBa0UsRUFBbEUsQ0FBZjs7QUFFQTtBQUNBLFlBQUcsQ0FBQyxTQUFTLGNBQVQsQ0FBd0IsTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsU0FBL0QsQ0FBeEIsQ0FBRCxJQUF1RyxNQUFNLE1BQU4sQ0FBYSxTQUFiLElBQTBCLEdBQXBJLEVBQXdJOztBQUd0SSxjQUFHLEtBQUssS0FBTCxDQUFXLGFBQWEsT0FBYixDQUFxQixZQUFyQixDQUFYLENBQUgsRUFBa0Q7QUFDaEQseUJBQWEsS0FBSyxLQUFMLENBQVcsYUFBYSxPQUFiLENBQXFCLFlBQXJCLENBQVgsQ0FBYjtBQUNEOztBQUdELHFCQUFXLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELFNBQS9ELENBQVgsSUFBd0Y7QUFDdEYsbUJBQU8sTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsU0FBL0QsQ0FEK0U7QUFFdEYsaUJBQUssTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsS0FBL0QsQ0FGaUY7QUFHdEYsc0JBQVUsQ0FINEU7QUFJdEYsc0JBQVU7QUFKNEUsV0FBeEY7QUFNQSx1QkFBYSxPQUFiLENBQXFCLFlBQXJCLEVBQWtDLEtBQUssU0FBTCxDQUFlLFVBQWYsQ0FBbEM7O0FBRUE7QUFDQSxlQUFLLGNBQUwsQ0FBb0IsYUFBcEIsRUFBbUMsYUFBbkMsRUFBa0QsaUJBQWxEO0FBQ0E7QUFDQSwwQkFBZ0IsZ0JBQWdCLFlBQWhDO0FBQ0EsOEJBQW9CLFNBQVMsU0FBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxTQUF0RCxFQUFnRSxFQUFoRSxDQUFwQjtBQUNBLDBCQUFnQixTQUFTLFNBQVMsY0FBVCxDQUF3QixlQUF4QixFQUF5QyxTQUFsRCxFQUE0RCxFQUE1RCxDQUFoQjtBQUNBLDhCQUFvQixnQkFBZ0IsYUFBcEM7QUFDQSxtQkFBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxTQUE3QyxHQUF5RCxpQkFBekQ7O0FBRUY7QUFDQyxTQTFCRCxNQTBCTSxJQUFHLFNBQVMsY0FBVCxDQUF3QixNQUFNLE1BQU4sQ0FBYSxhQUFiLENBQTJCLHNCQUEzQixDQUFrRCxZQUFsRCxDQUErRCxTQUEvRCxDQUF4QixDQUFILEVBQXNHOztBQUUxRyxlQUFLLFNBQVMsU0FBUyxjQUFULENBQXdCLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELFNBQS9ELENBQXhCLEVBQW1HLFNBQW5HLENBQTZHLHNCQUE3RyxDQUFvSSxTQUE3SSxFQUF3SixFQUF4SixDQUFMOztBQUVBO0FBQ0EsY0FBRyxNQUFNLE1BQU4sQ0FBYSxTQUFiLElBQTBCLEdBQTdCLEVBQWlDOztBQUUvQix1QkFBVyxLQUFLLENBQWhCO0FBQ0EsNEJBQWdCLGdCQUFnQixZQUFoQztBQUNBLHFCQUFTLGNBQVQsQ0FBd0IsTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsU0FBL0QsQ0FBeEIsRUFBbUcsU0FBbkcsQ0FBNkcsc0JBQTdHLENBQW9JLFNBQXBJLEdBQWdKLFFBQWhKOztBQUVBLHlCQUFhLEtBQUssS0FBTCxDQUFXLGFBQWEsT0FBYixDQUFxQixZQUFyQixDQUFYLENBQWI7QUFDQSx1QkFBVyxNQUFNLE1BQU4sQ0FBYSxhQUFiLENBQTJCLHNCQUEzQixDQUFrRCxZQUFsRCxDQUErRCxTQUEvRCxDQUFYLElBQXdGO0FBQ3RGLHFCQUFPLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELFNBQS9ELENBRCtFO0FBRXRGLG1CQUFLLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELEtBQS9ELENBRmlGO0FBR3RGLHdCQUFVLFFBSDRFO0FBSXRGLHdCQUFVO0FBSjRFLGFBQXhGO0FBTUEseUJBQWEsT0FBYixDQUFxQixZQUFyQixFQUFrQyxLQUFLLFNBQUwsQ0FBZSxVQUFmLENBQWxDO0FBQ0EsaUJBQUssY0FBTCxDQUFvQixhQUFwQixFQUFtQyxhQUFuQyxFQUFrRCxpQkFBbEQ7QUFDQSxpQkFBSyxvQkFBTCxDQUEwQixhQUExQixFQUF5QyxhQUF6QyxFQUF3RCxpQkFBeEQ7QUFDRjtBQUNDLFdBakJELE1BaUJNLElBQUcsTUFBTSxNQUFOLENBQWEsU0FBYixJQUEwQixJQUE3QixFQUFrQzs7QUFFcEM7QUFDQSxnQkFBRyxPQUFLLENBQVIsRUFBVTtBQUNSLDhCQUFnQixnQkFBZ0IsWUFBaEM7QUFDQSxrQkFBSSxRQUFRLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELFNBQS9ELENBQVo7QUFDQSxrQkFBSSxLQUFLLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFUO0FBQ0EsaUJBQUcsVUFBSCxDQUFjLFdBQWQsQ0FBMEIsRUFBMUI7O0FBRUEsMkJBQWEsS0FBSyxLQUFMLENBQVcsYUFBYSxPQUFiLENBQXFCLFlBQXJCLENBQVgsQ0FBYjtBQUNBLHFCQUFPLFdBQVcsTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsU0FBL0QsQ0FBWCxDQUFQO0FBQ0EsMkJBQWEsT0FBYixDQUFxQixZQUFyQixFQUFrQyxLQUFLLFNBQUwsQ0FBZSxVQUFmLENBQWxDO0FBQ0E7QUFDQSxtQkFBSyxjQUFMLENBQW9CLGFBQXBCLEVBQW1DLGFBQW5DLEVBQWtELGlCQUFsRDtBQUNBLG1CQUFLLG9CQUFMLENBQTBCLGFBQTFCLEVBQXlDLGFBQXpDLEVBQXdELGlCQUF4RDs7QUFFRjtBQUNDLGFBZEQsTUFjTSxJQUFHLEtBQUcsQ0FBTixFQUFRO0FBQ1osOEJBQWdCLGdCQUFnQixZQUFoQztBQUNBLHlCQUFXLEtBQUssQ0FBaEI7QUFDQSx1QkFBUyxjQUFULENBQXdCLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELFNBQS9ELENBQXhCLEVBQW1HLFNBQW5HLENBQTZHLHNCQUE3RyxDQUFvSSxTQUFwSSxHQUFnSixRQUFoSjtBQUNBLDJCQUFhLEtBQUssS0FBTCxDQUFXLGFBQWEsT0FBYixDQUFxQixZQUFyQixDQUFYLENBQWI7QUFDQSx5QkFBVyxNQUFNLE1BQU4sQ0FBYSxhQUFiLENBQTJCLHNCQUEzQixDQUFrRCxZQUFsRCxDQUErRCxTQUEvRCxDQUFYLElBQXdGO0FBQ3RGLHVCQUFPLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELFNBQS9ELENBRCtFO0FBRXRGLHFCQUFLLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELEtBQS9ELENBRmlGO0FBR3RGLDBCQUFVLFFBSDRFO0FBSXRGLDBCQUFVO0FBSjRFLGVBQXhGO0FBTUEsMkJBQWEsT0FBYixDQUFxQixZQUFyQixFQUFrQyxLQUFLLFNBQUwsQ0FBZSxVQUFmLENBQWxDO0FBQ0EsbUJBQUssY0FBTCxDQUFvQixhQUFwQixFQUFtQyxhQUFuQyxFQUFrRCxpQkFBbEQ7QUFDQSxtQkFBSyxvQkFBTCxDQUEwQixhQUExQixFQUF5QyxhQUF6QyxFQUF3RCxpQkFBeEQ7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNELGVBQVMsY0FBVCxDQUF3QixvQkFBeEIsRUFBOEMsU0FBOUMsR0FBMEQsYUFBMUQ7QUFDSDs7O29DQUdlLGEsRUFBZSxhLEVBQWUsaUIsRUFBa0I7O0FBRTlELGVBQVMsY0FBVCxDQUF3QixnQkFBeEIsRUFBMEMsZ0JBQTFDLENBQ0UsT0FERixFQUVFLHlCQUFlO0FBQ2Isc0JBQWMsY0FBZDtBQUNBLHdCQUFnQixTQUFTLFNBQVMsY0FBVCxDQUF3QixvQkFBeEIsRUFBOEMsU0FBdkQsRUFBaUUsRUFBakUsQ0FBaEI7QUFDQSx3QkFBZ0IsU0FBUyxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsU0FBbEQsRUFBNEQsRUFBNUQsQ0FBaEI7QUFDQSxpQkFBUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDLFNBQXpDLEdBQXFELENBQXJEO0FBQ0EsNEJBQW9CLFNBQVMsU0FBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxTQUF0RCxFQUFnRSxFQUFoRSxDQUFwQjs7QUFFQSxZQUFHLGNBQWMsTUFBZCxDQUFxQixFQUFyQixJQUEyQixNQUE5QixFQUFxQztBQUNuQywwQkFBZ0IsZ0JBQWUsQ0FBL0I7QUFDQSxtQkFBUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDLFNBQXpDLEdBQXFELGFBQXJEO0FBQ0QsU0FIRCxNQUdNLElBQUcsY0FBYyxNQUFkLENBQXFCLEVBQXJCLElBQTJCLE9BQTNCLElBQXNDLGdCQUFnQixDQUF6RCxFQUEyRDtBQUMvRDtBQUNBLG1CQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsU0FBekMsR0FBcUQsYUFBckQ7QUFDRDs7QUFFRCw0QkFBb0IsZ0JBQWdCLGFBQXBDO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsU0FBN0MsR0FBeUQsaUJBQXpEO0FBQ0QsT0FuQkg7QUFxQkQ7Ozt5Q0FFb0IsYSxFQUFlLGEsRUFBZSxpQixFQUFrQjs7QUFFbkUsZUFBUyxjQUFULENBQXdCLG9CQUF4QixFQUE4QyxTQUE5QyxHQUEwRCxhQUExRDtBQUNBLDBCQUFvQixnQkFBZ0IsYUFBcEM7O0FBRUEsZUFBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxTQUE3QyxHQUF5RCxpQkFBekQ7QUFDQSxzQkFBZ0IsU0FBUyxTQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDLFNBQXZELEVBQWlFLEVBQWpFLENBQWhCO0FBQ0Esc0JBQWdCLFNBQVMsU0FBUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDLFNBQWxELEVBQTRELEVBQTVELENBQWhCOztBQUVBLGVBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsU0FBN0MsR0FBeUQsQ0FBekQ7QUFDQSwwQkFBb0IsU0FBUyxTQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQXRELEVBQWdFLEVBQWhFLENBQXBCOztBQUVBLDBCQUFvQixnQkFBZ0IsYUFBcEM7QUFDQSxlQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQTdDLEdBQXlELGlCQUF6RDtBQUVEOzs7Z0NBRVcsSyxFQUFNOztBQUVoQixVQUFHLE1BQU0sTUFBTixDQUFhLE9BQWIsSUFBd0IsS0FBM0IsRUFBaUM7O0FBRS9CLFlBQUksV0FBVyxNQUFNLE1BQU4sQ0FBYSxZQUFiLENBQTBCLFNBQTFCLENBQWY7O0FBRUEsZ0JBQU8sUUFBUDs7QUFFRSxlQUFLLGFBQUw7QUFDRSxxQkFBUyxjQUFULENBQXdCLHNCQUF4QixFQUFnRCxTQUFoRCxHQUE0RCx3Q0FBNUQ7QUFDQTtBQUNGLGVBQUssYUFBTDtBQUNFLHFCQUFTLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdELFNBQWhELEdBQTRELHlDQUE1RDtBQUNBO0FBQ0YsZUFBSyxhQUFMO0FBQ0UscUJBQVMsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0QsU0FBaEQsR0FBNEQsMENBQTVEO0FBQ0E7QUFDRixlQUFLLGVBQUw7QUFDRSxxQkFBUyxjQUFULENBQXdCLG9CQUF4QixFQUE4QyxTQUE5QyxHQUEwRCxxQ0FBMUQ7QUFDQTtBQUNGLGVBQUssZUFBTDtBQUNFLHFCQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDLFNBQTlDLEdBQTBELHNDQUExRDtBQUNBO0FBQ0YsZUFBSyxlQUFMO0FBQ0UscUJBQVMsY0FBVCxDQUF3QixvQkFBeEIsRUFBOEMsU0FBOUMsR0FBMEQsdUNBQTFEO0FBQ0E7QUFDRixlQUFLLGNBQUw7QUFDRSxxQkFBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxTQUE3QyxHQUF5RCx1Q0FBekQ7QUFDQTtBQUNGLGVBQUssY0FBTDtBQUNFLHFCQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQTdDLEdBQXlELHdDQUF6RDtBQUNBO0FBQ0YsZUFBSyxjQUFMO0FBQ0UscUJBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsU0FBN0MsR0FBeUQseUNBQXpEO0FBQ0Y7QUFDQSxlQUFLLGFBQUw7QUFDRSxxQkFBUyxjQUFULENBQXdCLHNCQUF4QixFQUFnRCxTQUFoRCxHQUE0RCx5Q0FBNUQ7QUFDQTtBQUNGLGVBQUssYUFBTDtBQUNFLHFCQUFTLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdELFNBQWhELEdBQTRELHlDQUE1RDtBQUNBO0FBQ0YsZUFBSyxhQUFMO0FBQ0UscUJBQVMsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0QsU0FBaEQsR0FBNEQsMkNBQTVEO0FBQ0E7QUFDRixlQUFLLGNBQUw7QUFDQSxxQkFBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxTQUE3QyxHQUF5RCx3Q0FBekQ7QUFDRTtBQUNGLGVBQUssY0FBTDtBQUNBLHFCQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQTdDLEdBQXlELHlDQUF6RDtBQUNFO0FBQ0YsZUFBSyxjQUFMO0FBQ0EscUJBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsU0FBN0MsR0FBeUQsMENBQXpEO0FBQ0U7QUFDRjtBQUNFLGtCQUFNLG1DQUFOO0FBaERKO0FBa0RIO0FBQ0Y7OztrQ0FFWTtBQUFBOztBQUVYLFFBQUUsWUFBRixFQUFnQixDQUFoQixFQUFtQixnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkM7QUFBQSxlQUFTLE9BQUssT0FBTCxDQUFhLEtBQWIsQ0FBVDtBQUFBLE9BQTdDLEVBQTJFLEtBQTNFO0FBQ0EsUUFBRSxlQUFGLEVBQW1CLENBQW5CLEVBQXNCLGdCQUF0QixDQUF1QyxPQUF2QyxFQUFnRDtBQUFBLGVBQVMsT0FBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBaEQsRUFBOEUsS0FBOUU7QUFFRDs7OzRCQUVPLEssRUFBTTs7QUFFWixVQUFJLGtCQUFrQixDQUF0QjtBQUNBLFVBQUksWUFBWSxFQUFFLFdBQUYsRUFBZSxHQUFmLEVBQWhCOztBQUVBLFlBQU0sY0FBTjtBQUNBLFVBQUcsRUFBRSxXQUFGLEVBQWUsR0FBZixHQUFxQixNQUFyQixHQUE0QixDQUEvQixFQUFpQztBQUMvQiw2QkFBZSxLQUFLLE9BQXBCLEVBQTZCLFNBQTdCO0FBQ0QsT0FGRCxNQUVLO0FBQ0gsY0FBTSxjQUFOO0FBQ0EsY0FBTSxPQUFOLEVBQWUsd0JBQWY7QUFDRDtBQUNGOzs7bUNBR2E7O0FBRVosVUFBSSw2REFFcUIsS0FBSyxTQUYxQixtNVNBQUo7QUE0TEUsYUFBTyxTQUFQO0FBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4qIEBBdXRob3I6IFJvYmVyQ2FzdHJvXG4qIEBEYXRlOiAgIDEzLTEyLTIwMTZcbiogQEVtYWlsOiAgcm9iZXJ0b2ljYXN0cm9AZ21haWwuY29tXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvYmVyY2FzdHJvXG4qIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDEzLTEyLTIwMTZcbiovXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vcGFnZXMvaG9tZS9ob21lJztcbmltcG9ydCB7IEFQSV9LRVlfRklSRUJBU0UgfSBmcm9tICcuL2hlbHBlcnMvYXBpa2V5ZmlyZWJhc2UnO1xuXG5jbGFzcyBNeUFwcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmFwcEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFwcFwiKVswXTtcbiAgfVxuXG4gIHN0YXJ0KCl7XG5cbiAgICAvLyBJbml0aWFsaXplIEZpcmViYXNlXG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIGFwaUtleTogQVBJX0tFWV9GSVJFQkFTRSxcbiAgICAgIGF1dGhEb21haW46IFwiY2FzdHJvZ2FzdHJvLTg1OGMzLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jYXN0cm9nYXN0cm8tODU4YzMuZmlyZWJhc2Vpby5jb21cIixcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY2FzdHJvZ2FzdHJvLTg1OGMzLmFwcHNwb3QuY29tXCIsXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1MDg1ODg2MzMxODlcIlxuICAgIH07XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuXG4gICAgLy8gaW5pdCBIb21lUGFnZVxuICAgIGxldCBob21lUGFnZSA9IG5ldyBIb21lUGFnZSh0aGlzLmFwcEJvZHkpO1xuICB9XG5cbn1cblxubGV0IG15QXBwID0gbmV3IE15QXBwKCk7XG5teUFwcC5zdGFydCgpO1xuIiwiZXhwb3J0IGNvbnN0IEFQSV9LRVlfRklSRUJBU0UgPSBcIkFJemFTeUNwRmdyODRlcFR5UE9kVUdnVk1McHhMRE9FNHBBR1F6b1wiO1xuIiwiLyoqXG4qIEBBdXRob3I6IFJvYmVyQ2FzdHJvXG4qIEBEYXRlOiAgIDIwLTEyLTIwMTZcbiogQEVtYWlsOiAgcm9iZXJ0b2ljYXN0cm9AZ21haWwuY29tXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvYmVyY2FzdHJvXG4qIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDEzLTEyLTIwMTZcbiovXG5cbmV4cG9ydCBjbGFzcyBGaXJlQmFzZUhlbHBlciB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgZGF0YWJhc2Ugc2VydmljZVxuICAgIHRoaXMuZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuICAgIHRoaXMuZGJEYXRhID0gW107XG5cbiAgIH1cblxuICBhZGRPYmplY3RUb0Jhc2UocHJvZHVjdCl7XG5cbiAgICAvLyBsJ2Vudm95ZXIgZGFucyBsYSBjb2xsZWN0aW9uIFwicHJvZHVjdHNcIiBzdXIgRmlyZWJhc2VcbiAgICB0aGlzLmRhdGFiYXNlLnJlZignbG9jYWxPcmRlcicpLnB1c2gocHJvZHVjdCk7XG4gIH1cblxuICBsb2FkRGF0YSgpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgdGhpcy5kYXRhYmFzZS5yZWYoJ2xvY2FsT3JkZXInKS5vbignY2hpbGRfYWRkZWQnLCAoc25hcHNob3QpPT4ge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NoaWxkIGFkZGVkLT4gJywgc25hcHNob3QudmFsKCkpO1xuXG4gICAgICAgICAgdGhpcy5kYkRhdGEucHVzaChzbmFwc2hvdC52YWwoKSk7XG4gICAgICAgICAgLy8gbGVzIHZhbGV1ciBzb250IGNvbnRlbnUgZGFucyBzbmFwc2hvdC52YWwoKVxuICAgICAgICAgIC8vIGV0IHBhc3PDqWUgw6AgdW5lIGZvbmN0aW9uIHBvdXIgw6p0cmUgdHJhaXTDqWUgcGx1cyBsb2luLi4uXG4gICAgICAgICAgLy8gIGRpc3BsYXlQcm9kdWN0c0luTGlzdChzbmFwc2hvdClcbiAgICAgICAgICByZXNvbHZlKHRoaXMuZGJEYXRhKVxuICAgICAgfSk7XG4gICAgfSlcblxuICB9XG4gIFxufVxuIiwiLyoqXG4qIEBBdXRob3I6IFJvYmVyQ2FzdHJvXG4qIEBEYXRlOiAgIDIxLTEyLTIwMTZcbiogQEVtYWlsOiAgcm9iZXJ0b2ljYXN0cm9AZ21haWwuY29tXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvYmVyY2FzdHJvXG4qIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIxLTEyLTIwMTZcbiovXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uLy4uL3BhZ2VzL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBGaXJlQmFzZUhlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZmlyZWJhc2VIZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgQWRtaW5QYWdlIHtcblxuICBjb25zdHJ1Y3RvcihhcHBCb2R5LGZvcm1JbnB1dCl7XG4gICAgdGhpcy5hcHBCb2R5ID0gYXBwQm9keTtcbiAgICB0aGlzLmZvcm1EYXRhID0gZm9ybUlucHV0O1xuICAgIHRoaXMucGFnZVRpdGxlID0gXCJBZG1pbmlzdHJhdGlvbiBkZXMgY29tbWFuZGVzXCI7XG4gICAgdGhpcy50aW1lID0gbmV3IERhdGUoKVxuICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgdGhpcy5mRmlyZUJhc2VIZWxwZXIoKTtcbiAgfVxuXG4gIGluaXRVSSgpe1xuICAgIC8vIHJlbW92ZSBhbGwgc2VjdGlvbiBiZWZvcmUgZGlzcGxheSBVSVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXG4gICAgfVxuICAgIC8vIGNyZWF0ZSBwYWdlIHNrZWxldG9uXG4gICAgbGV0IHBhZ2VTa2VsZXRvbiA9IGBcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8cD4ke3RoaXMucGFnZVRpdGxlfSAke3RoaXMuZm9ybURhdGF9ICE8L3A+XG4gICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdkJhclRvcFwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LXdyYXBwZXJcIiBjbGFzcz1cIm5hdkJhclRvcFwiID5cbiAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzcz1cImJyYW5kLWxvZ29cIj5Mb2dvPC9hPlxuICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1hY3RpdmF0ZXM9XCJtb2JpbGUtZGVtb1wiIGNsYXNzPVwiYnV0dG9uLWNvbGxhcHNlXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPm1lbnU8L2k+PC9hPlxuICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJob21lXCIgaHJlZj1cIiNcIj5JbmljaW88L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2R1Y3RvczwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UXVpZW5lcyBzb21vczwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdG88L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBpZD1cImFkbWluUGFnZVwiIGhyZWY9XCIjXCI+QWRtaW48L2E+PC9saT5cbiAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNpZGUtbmF2XCIgaWQ9XCJtb2JpbGUtZGVtb1wiPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiaG9tZU1vYlwiIGhyZWY9XCIjXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3RvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJhZG1pblBhZ2VNb2JcIiBocmVmPVwiI1wiPkFkbWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L25hdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lciBvdXRsaW5lXCI+XG4gICAgICAgICAgICAgPGRpdiBpZD1cImJ1eUxpc3RcIj5cblxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBgO1xuICAgICAgLy8gYWRkIHBhZ2Ugc2tlbGV0b24gaW4gYm9keVxuICAgICAgdGhpcy5hcHBCb2R5Lmluc2VydEFkamFjZW50SFRNTCggJ2FmdGVyYmVnaW4nLCBwYWdlU2tlbGV0b24gKVxuICAgICAgJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sb2FkRXZlbnRVSSgpO1xuICAgIH1cblxuICAgIGxvYWRFdmVudFVJKCl7XG5cbiAgICAgICQoXCIjaG9tZVwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKTtcbiAgICAgICQoXCIjaG9tZU1vYlwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBvbkxvZ2luKGV2ZW50KXtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG5ldyBIb21lUGFnZSh0aGlzLmFwcEJvZHkpO1xuICAgIH1cblxuICAgIGZGaXJlQmFzZUhlbHBlcigpe1xuXG4gICAgICAvL1dlIGluc3RhbmNpYXRlIHRoZSBGaXJlYmFzZSBjbGFzc1xuICAgICAgbGV0IGRhdGFCYXNlQ2FzdHJvID0gbmV3IEZpcmVCYXNlSGVscGVyKCk7XG5cbiAgICAgIGRhdGFCYXNlQ2FzdHJvLmxvYWREYXRhKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xuXG4gICAgICAgICAgbGV0IG9yZHJlO1xuXG4gICAgICAgICAgZm9yKGxldCBpZCBpbiByZXNwb25zZSkge1xuXG4gICAgICAgICAgICBvcmRyZSA9IHJlc3BvbnNlW2lkXS5vcmRlcjtcblxuICAgICAgICAgICAgbGV0IGRpdk9yZHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGRpdk9yZHJlLmlubmVySFRNTCA9IGAgICAgICA8aHIvPkxpc3RlIGQnYWNoYXQgbnVtw6lybyA6ICR7aWR9IDwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50IG1haWwgOiAke3Jlc3BvbnNlW2lkXS5tYWlsfTwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpeCBkdSBwYW5uaWVyIDogJHtyZXNwb25zZVtpZF0ucHJpY2VPcmRlcn08L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YW50aXTDqSBkZSBwYW5uaWVycyA6ICR7cmVzcG9uc2VbaWRdLm5iT3JkZXJ9PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcml4IHRvdGFsIDogJHtyZXNwb25zZVtpZF0udG90YWxQcmljZX08L2JyPmA7XG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ2lkJyxgbGlzdGUke2lkfWApXG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2s7IG92ZXJmbG93OmF1dG87JylcbiAgICAgICAgICAgIGRpdk9yZHJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2UHJvZCcpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmFwcGVuZENoaWxkKGRpdk9yZHJlKVxuICAgICAgICAgICAgdmFyIGlkRGl2ID0gYGxpc3RlJHtpZH1gXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkcmVcIiwgaWQpXG5cbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiBvcmRyZSkge1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWREaXYpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5kZXNzaW5lclByb2R1aXQob3JkcmVbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aXRoIEZpcmViYXNlIGxvYWREYXRhKCktPiAnLCBlcnIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVzc2luZXJQcm9kdWl0KG9yZHJlKSB7XG4gICAgICAvLyBMaXJlIGxlIHNyYyBkdSBwcm9kdWl0IChzdG9ja8OpIGRhbnMgbGUgaHRtbClcbiAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtvcmRyZS5pZFByb31cIiBjbGFzcz1cImNvbC0xMDVcIj5cbiAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgIDxpbWcgaWQ9XCJpbWdQYW4xXCIgc3JjPVwiJHtvcmRyZS5zcmN9XCI+XG4gICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAke29yZHJlLnByaWNlUHJvfSA8L3A+XG4gICAgICAgICA8cD4ke29yZHJlLnRpbWVzUHJvfTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICBgO1xuICAgIH1cbn1cbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAxMy0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxMy0xMi0yMDE2XG4qL1xuXG5pbXBvcnQgeyBGaXJlQmFzZUhlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZmlyZWJhc2VIZWxwZXInO1xuaW1wb3J0IHsgQWRtaW5QYWdlIH0gZnJvbSAnLi4vLi4vcGFnZXMvYWRtaW4vYWRtaW4nO1xuXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKGFwcEJvZHkpe1xuICAgIHRoaXMuYXBwQm9keSA9IGFwcEJvZHlcbiAgICB0aGlzLnBhZ2VUaXRsZSA9ICdXZWxjb21lIHRvIEdhc3RybyBDYXN0cm8nO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgdGhpcy5mRmlyZUJhc2VIZWxwZXIoKTtcbiAgICB0aGlzLmVtcHR5Qm94RigpO1xuICB9XG5cblxuICBpbml0VUkoKXtcblxuICAgIC8vSW5pY2lhdGUgdGhlIHZhcmlhYmxlIFEgdG8gdGhlIHZhbHVlIGluIHRoZSBodG1sXG4gICAgdmFyIHZRO1xuICAgIC8vSW5pY2lhdGUgdGhlIHZhcmlhYmxlIHByaWNlUHJvZHVjdFxuICAgIHZhciBwcmljZVByb2R1Y3Q7XG4gICAgdmFyIHByaWNlQ29tbWFuZGU7XG4gICAgdmFyIHRpbWVzQ29tbWFuZGU7XG4gICAgdmFyIHRvdGFsUHJpY2VQYWNrYWdlO1xuICAgIHZhciBsb2NhbE9yZGVyID0ge307XG5cbiAgICAvLyByZW1vdmUgYWxsIHNlY3Rpb24gYmVmb3JlIGRpc3BsYXkgVUlcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxuICAgIH1cbiAgICAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XG4gICAgfSlcbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxuICAgIGxldCBwYWdlU2tlbGV0b24gPSB0aGlzLnNrZWxldG9uQmFzZSgpO1xuXG4gICAgLy8gYWRkIHBhZ2Ugc2tlbGV0b24gaW4gYm9keVxuICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcbiAgICB0aGlzLmxvYWRFdmVudFVJKClcbiAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICB0aGlzLmNob29zZVByb2R1Y3QodlEscHJpY2VQcm9kdWN0LHByaWNlQ29tbWFuZGUsdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UsIGxvY2FsT3JkZXIpXG4gICAgdGhpcy5jbGlja0NvbW1hbmRlUXQocHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSlcblxuICAgIE1hdGVyaWFsaXplLnRvYXN0KCdJIGFtIGEgdG9hc3QhJywgNDAwMCkgLy8gNDAwMCBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIHRvYXN0XG5cbiAgfVxuXG4gIGZGaXJlQmFzZUhlbHBlcigpe1xuXG4gICAgLy9XZSBpbnN0YW5jaWF0ZSB0aGUgRmlyZWJhc2UgY2xhc3NcbiAgICBsZXQgZGF0YUJhc2VDYXN0cm8gPSBuZXcgRmlyZUJhc2VIZWxwZXIoKTtcblxuICAgIC8vSW4gdGhlIGNhc2UgdGhlIHVzZXIgc2VuZCB0aGUgb3JkZXIgd2Ugc2F2ZSBpbiB0aGUgZGF0YWJhc2VcbiAgICAkKFwiI3NlbmRPcmRlclwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciBzRW1haWwgPSAkKCcjdHh0RW1haWwnKS52YWwoKTtcbiAgICAgIC8vIENoZWNraW5nIEVtcHR5IEZpZWxkc1xuICAgICAgaWYgKCQudHJpbShzRW1haWwpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGFsZXJ0KCdSZW1wbGlzc2V6IGxlIGNoYW1wIGVtYWlsJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmFsaWRhdGVFbWFpbChzRW1haWwpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgTWF0ZXJpYWxpemUudG9hc3QoJ0VtYWlsIG9rJywgNDAwMCkgLy8gNDAwMCBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIHRvYXN0XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIEVtYWlsIEFkZHJlc3MnKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICBjb25zb2xlLmxvZyhjb21Mb2NhbFN0b3JhZ2UpXG4gICAgICBkYXRhQmFzZUNhc3Ryby5hZGRPYmplY3RUb0Jhc2Uoe1xuICAgICAgICBvcmRlcjogY29tTG9jYWxTdG9yYWdlLFxuICAgICAgICBwcmljZU9yZGVyOiAkKFwiI3RvdGFsUHJpY2VDb21tYW5kZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgIG5iT3JkZXI6ICQoXCIjdGltZXNDb21tYW5kZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgIHRvdGFsUHJpY2U6ICQoXCIjdG90YWxQcmljZVBhY2thZ2VcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICBtYWlsOiAkKFwiaW5wdXRbbmFtZT0nZW1haWwnXVwiKS52YWwoKVxuICAgICAgfSk7XG5cbiAgICAgIGFsZXJ0KFwiQmllbiBlbnZvecOpXCIpXG4gICAgfSlcbiAgfVxuXG4gIGVtcHR5Qm94Rigpe1xuICAgICQoXCIjZW1wdHlCb3hcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXG4gICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxPcmRlclwiKTtcbiAgICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgfSlcbiAgfVxuXG4gIHZhbGlkYXRlRW1haWwoc0VtYWlsKSB7XG4gICAgdmFyIGZpbHRlciA9IC9eW1xcdy0uK10rQFthLXpBLVowLTkuLV0rLlthLXpBLXowLTldezIsNH0kLztcblxuICAgIGlmIChmaWx0ZXIudGVzdChzRW1haWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpIHtcbiAgICAvLyBTdXBwcmltZXIgY29udGVudSBwYW5pZXJcbiAgICB2YXIgbGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpO1xuICAgIHdoaWxlIChsaXN0ZS5jaGlsZHJlbi5sZW5ndGg+MSkge2xpc3RlLnJlbW92ZUNoaWxkKGxpc3RlLmxhc3RDaGlsZCl9XG4gICAgcHJpY2VDb21tYW5kZSA9IDA7XG5cbiAgICAvLyBBZmZpY2hlciBsZXMgw6lsw6ltZW50c1xuICAgIHZhciBwcm9kdWl0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICBmb3IobGV0IGlkIGluIHByb2R1aXRzKSB7XG4gICAgICB0aGlzLmRlc3NpbmVyUHJvZHVpdChwcm9kdWl0c1tpZF0pO1xuICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBwcm9kdWl0c1tpZF0ucHJpY2VQcm8gKiBwcm9kdWl0c1tpZF0udGltZXNQcm8gO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID09IFwiUXVhbnRpdMOpXCIpe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwgPSAxO1xuICAgIH07XG4gIH1cblxuICBkZXNzaW5lclByb2R1aXQocHJvZHVpdCkge1xuICAgIC8vIExpcmUgbGUgc3JjIGR1IHByb2R1aXQgKHN0b2Nrw6kgZGFucyBsZSBodG1sKVxuICAgIHZhciBzcmNJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tkYXRhLWlkPSR7cHJvZHVpdC5pZFByb31dYCkuc3JjO1xuICAgIHZhciBwcm9kdWN0VG9MaXN0ID0gYFxuICAgIDxkaXYgaWQ9XCIke3Byb2R1aXQuaWRQcm99XCIgY2xhc3M9XCJjb2wtMTA1XCI+XG4gICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgIDxpbWcgaWQ9XCJpbWdQYW4xXCIgc3JjPVwiJHtzcmNJbWFnZX1cIj5cbiAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gJHtwcm9kdWl0LnByaWNlUHJvfSA8L3A+XG4gICAgICAgPHA+JHtwcm9kdWl0LnRpbWVzUHJvfTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXlMaXN0JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwcm9kdWN0VG9MaXN0KTtcbiAgfVxuXG4gIGNob29zZVByb2R1Y3QodlEsIHByaWNlUHJvZHVjdCxwcmljZUNvbW1hbmRlLHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKXtcblxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0TGlzdCcpKVxuICAgIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0TGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGV2ZW50PT57XG5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgdGhpcy5jbGlja0ZpZ3VyZShldmVudCk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICB0aGlzLmNsaWNrUGx1c0xlc3MoZXZlbnQsIHZRLCBwcmljZVByb2R1Y3QsIHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKTtcbiAgICAgICAgICAvL3RoaXMuZGVzc2luZXJQYW5pZXIoKTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNsaWNrUGx1c0xlc3MoZXZlbnQsIHZRLCBwcmljZVByb2R1Y3QsIHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKXtcblxuICAgICAgLy9JbmljaWF0ZSB0aGUgcXVhbnRpdHkgdG8gMFxuICAgICAgdmFyIHFQcm9kdWN0O1xuXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gXCJGSUdVUkVcIil7XG4gICAgICAgIHByaWNlQ29tbWFuZGUgPSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApO1xuICAgICAgfVxuXG4gICAgICAvL0lmIHRoZSBjbGljayBpcyBpbiBhIGJ1dHRvblxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ0JVVFRPTicpe1xuXG4gICAgICAgIC8vQ29udmVydCB0aGUgaHRtbCB0ZXh0IGluIGFuIGludGVnZXIgbnVtYmVyIHNvIHdlIGNhbiBvcGVyYXRlIHdpdGggaXRcbiAgICAgICAgcHJpY2VQcm9kdWN0ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCwgMTApO1xuXG4gICAgICAgIC8vSWYgdGhlIHByb2R1Y3QgZG9uJ3QgZXhpc3QgaW4gdGhlIGxpc3RcbiAgICAgICAgaWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpICYmIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT0gJysnKXtcblxuXG4gICAgICAgICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpKXtcbiAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICBzcmM6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbiAgICAgICAgICAgIHRpbWVzUHJvOiAxLFxuICAgICAgICAgICAgcHJpY2VQcm86IHByaWNlUHJvZHVjdFxuICAgICAgICAgIH07XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuXG4gICAgICAgICAgLy9BZGQgdGhlIGh0bWwgY29udGVudCB0byB0aGUgZGl2IGJ1eUxpc3RcbiAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAvL0NhbGN1bGF0ZSBhbmQgcHJpY2VzIGFuZCBxdWFudGl0aWVzXG4gICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBwcmljZVByb2R1Y3Q7XG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXG4gICAgICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gdG90YWxQcmljZVBhY2thZ2U7XG5cbiAgICAgICAgLy9JZiB0aGUgcHJvZHVjdCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICB9ZWxzZSBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSl7XG5cbiAgICAgICAgICB2USA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpLmxhc3RDaGlsZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCwgMTApO1xuXG4gICAgICAgICAgLy9JZiB0aGUgY2xpY2sgaXMgb24gdGhlIHBsdXMgYnV0dG9uXG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnKycpe1xuXG4gICAgICAgICAgICBxUHJvZHVjdCA9IHZRICsgMTtcbiAgICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJpY2VQcm9kdWN0O1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcVByb2R1Y3Q7XG5cbiAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgICBpZFBybzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgc3JjOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnc3JjJyksXG4gICAgICAgICAgICAgIHRpbWVzUHJvOiBxUHJvZHVjdCxcbiAgICAgICAgICAgICAgcHJpY2VQcm86IHByaWNlUHJvZHVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcbiAgICAgICAgICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgLy9JZiB0aGUgY2xpY2sgaXMgb24gdGhlIGxlc3MgYnV0dG9uXG4gICAgICAgICAgfWVsc2UgaWYoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnLS0nKXtcblxuICAgICAgICAgICAgICAvL2lmIHRoZSBxdWFudGl0eSBpcyAxIHdlIHRha2Ugb2ZmIHRoZSBkaXYgb2YgdGhlIHByb2R1Y3QgZnJvbSB0aGUgcHJvZHVjdExpc3RcbiAgICAgICAgICAgICAgaWYodlE9PT0xKXtcbiAgICAgICAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSAtIHByaWNlUHJvZHVjdDtcbiAgICAgICAgICAgICAgICB2YXIgaWRQcm8gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgIHZhciBwciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkUHJvKTtcbiAgICAgICAgICAgICAgICBwci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByKTtcblxuICAgICAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobG9jYWxPcmRlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG5cbiAgICAgICAgICAgICAgLy9pZiB0aGUgcXVhbnRpdHkgaXMgbW9yZSB0aGFuIDEgd2UgdGFrZSBvbmUgdW5pdHkgZnJvbSB0aGUgcXVhbnRpdHkgb2YgdGhlIHByb2R1Y3RcbiAgICAgICAgICAgICAgfWVsc2UgaWYodlE+MSl7XG4gICAgICAgICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgLSBwcmljZVByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgcVByb2R1Y3QgPSB2USAtIDE7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcVByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgbG9jYWxPcmRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICAgICAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICAgICAgICBzcmM6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAgIHRpbWVzUHJvOiBxUHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgIHByaWNlUHJvOiBwcmljZVByb2R1Y3RcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICB9XG5cblxuICAgIGNsaWNrQ29tbWFuZGVRdChwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSl7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tYW5kZUNvbHVtbicpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGV2ZW50Q29tbWFuZGU9PntcbiAgICAgICAgICBldmVudENvbW1hbmRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG4gICAgICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gMTtcbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCwxMClcblxuICAgICAgICAgIGlmKGV2ZW50Q29tbWFuZGUudGFyZ2V0LmlkID09ICdwbHVzJyl7XG4gICAgICAgICAgICB0aW1lc0NvbW1hbmRlID0gdGltZXNDb21tYW5kZSArMTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gdGltZXNDb21tYW5kZTtcbiAgICAgICAgICB9ZWxzZSBpZihldmVudENvbW1hbmRlLnRhcmdldC5pZCA9PSAnbW9pbnMnICYmIHRpbWVzQ29tbWFuZGUgPiAxKXtcbiAgICAgICAgICAgIHRpbWVzQ29tbWFuZGUtLTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gdGltZXNDb21tYW5kZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHByaWNlQ29tbWFuZGUgKiB0aW1lc0NvbW1hbmRlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgcmVmcmVzaFRvdGFsQ29tbWFuZGUocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2Upe1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG4gICAgICB0aW1lc0NvbW1hbmRlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IDE7XG4gICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCwxMClcblxuICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwcmljZUNvbW1hbmRlICogdGltZXNDb21tYW5kZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuXG4gICAgfVxuXG4gICAgY2xpY2tGaWd1cmUoZXZlbnQpe1xuXG4gICAgICBpZihldmVudC50YXJnZXQudGFnTmFtZSA9PSAnSU1HJyl7XG5cbiAgICAgICAgdmFyIHR5cGVQcm9kID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgIHN3aXRjaCh0eXBlUHJvZCl7XG5cbiAgICAgICAgICBjYXNlICdpbWdDbGljazFicic6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZCcmFuZHknKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgYnJhbmR5IGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMmJyJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkJyYW5keScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIGJyYW5keSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNicic6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZCcmFuZHknKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgYnJhbmR5IGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMXdpbmUnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmV2luZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciB2aW4gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syd2luZSc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZXaW5lJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBkZXV4acOobWUgdmluIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM3dpbmUnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmV2luZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSB2aW4gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxb2lsJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZk9pbCcpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBodWlsZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJvaWwnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmT2lsJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBkZXV4acOobWUgaHVpbGUgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szb2lsJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZk9pbCcpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBodWlsZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxY2gnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQ2hlZXNlJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIGh1aWxlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMmNoJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkNoZWVzZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBmcm9tYWdlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM2NoJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkNoZWVzZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBmcm9tYWdlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMWhhbSc6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmSGFtJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBwcmVtaWVyIGphbWJvbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJoYW0nOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkhhbScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIGphbWJvbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNoYW0nOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkhhbScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBqYW1ib24gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGFsZXJ0KFwiQ2UgcHJvZHVpdCBuJ2EgcGFzIGRlIGRlc2NyaXB0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZEV2ZW50VUkoKXtcblxuICAgICQoXCIjYWRtaW5QYWdlXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgICQoXCIjYWRtaW5QYWdlTW9iXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuXG4gIH1cblxuICBvbkxvZ2luKGV2ZW50KXtcblxuICAgIGxldCB2YWxpZGF0aW9uSW5wdXQgPSAwXG4gICAgbGV0IGZvcm1JbnB1dCA9ICQoJyN0eHRFbWFpbCcpLnZhbCgpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlmKCQoJyN0eHRFbWFpbCcpLnZhbCgpLmxlbmd0aD4wKXtcbiAgICAgIG5ldyBBZG1pblBhZ2UoIHRoaXMuYXBwQm9keSwgZm9ybUlucHV0KTtcbiAgICB9ZWxzZXtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhbGVydChcIkhlbGxvXCIsIFwiSW50cm9kdWlzZXogdm90cmUgbWFpbFwiKVxuICAgIH1cbiAgfVxuXG5cbiAgc2tlbGV0b25CYXNlKCl7XG5cbiAgICBsZXQgdlNrZWxldG9uID0gYFxuICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDMgY2xhc3M9XCJjZW50ZXJcIj4ke3RoaXMucGFnZVRpdGxlfTwvaDM+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZCYXJUb3BcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3M9XCJicmFuZC1sb2dvXCI+TG9nbzwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzcz1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3RvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJhZG1pblBhZ2VcIiBocmVmPVwiI1wiPkFkbWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlTW9iXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kT3JkZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cInNlbmRPcmRlclwiPkVudm95ZXIgY29tbWFuZGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cImVtcHR5Qm94XCI+VmlkZXIgbGUgY29mZnJlPC9idXR0b24+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD48aW5wdXQgaWQ9XCJ0eHRFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ2b3RyZWVtYWlsLmNoXCIvPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyIG91dGxpbmVcIj5cbiAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV5TGlzdFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwNVwiIGlkPVwiY29tbWFuZGVDb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxwPkNvZmZyZTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwidG90YWxQcmljZUNvbW1hbmRlXCI+PC9wPjwvYnI+XG4gICAgICAgICAgICAgICAgICA8cD5RdMOpIDo8L3A+PHAgaWQ9XCJ0aW1lc0NvbW1hbmRlXCI+UXVhbnRpdMOpPC9wPjwvYnI+XG4gICAgICAgICAgICAgICAgICA8cD5Ub3RhbCA6PC9wPjxwIGlkPVwidG90YWxQcmljZVBhY2thZ2VcIj48L3A+PC9icj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0TGlzdFwiID5cblxuPCEtLUZpcnN0IGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5CcmFuZHk8L3A+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2sxYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYnJhbmR5MS5wbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0IxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwibW9pbnNCMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2syYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYnJhbmR5LWNhc2FqdWFuYS0xMDAtYW5vcy1yZXNlcnZhLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQjJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQjJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2szYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYmFyYmFkaWxsby5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0IzXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0IzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmQnJhbmR5XCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbjwhLS1TZWNvbmQgbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPlZpbm9zPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMXdpbmVcIiBzcmM9XCIuL3NyYy9pbWFnZXMvdmluMS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzFcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMndpbmVcIiBzcmM9XCIuL3NyYy9pbWFnZXMvdmluMi5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2szd2luZVwiIHNyYz1cIi4vc3JjL2ltYWdlcy92aW4zLmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNXM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNXM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmV2luZVwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG48IS0tVGhpcmQgbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPkFjZWl0ZSBkZSBvbGl2YTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxb2lsXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL1JPWEFORSBBUkJFUVVJTkFfNTAwXzAyLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNPMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNPMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJvaWxcIiBzcmM9XCIuL3NyYy9pbWFnZXMvbWFyaWEtZGUtbGEtby1zZWxlY2Npb24tZ291cm1ldC01MDAtbWwuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc08yXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c08yXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM29pbFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9ST1hBTkUgQVJCRVFVSU5BXzUwMF8wMi5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zTzNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzTzNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwIGlkPVwidGV4dEV4cGxpY2F0aWZPaWxcIj48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuICA8IS0tRm91cnRoIGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5RdWVzbzwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxY2hcIiBzcmM9XCIuL3NyYy9pbWFnZXMvY29nbWFuLXNlbWljdXJhZG8tcHVyby1vdmVqYS5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9xdWVzby1jdXJhZG8tYWwtcm9tZXJvLXRvbWVsbG9zby5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoMlwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazNjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9tb250YWx2by1jdXJhZG8tZW4tYWNlaXRlLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNDaDNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQ2gzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmQ2hlZXNlXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbjwhLS1GaWZ0aCBsaW5lIG9mIHByb2R1Y3RzLS0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+SmFtb24gaWLDqXJpY288L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMWhhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjEuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gxXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMmhhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjIuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gyXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM2hhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjMuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gzXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2ICBpZD1cImltZ0NsaWNrMVwiIGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmSGFtXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPC9mb3JtPlxuICAgICAgPC9zZWN0aW9uPmA7XG4gICAgICByZXR1cm4gdlNrZWxldG9uO1xuICB9XG59XG4iXX0=
