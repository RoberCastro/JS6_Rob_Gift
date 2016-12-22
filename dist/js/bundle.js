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
        }
        if (_this.validateEmail(sEmail)) {
          e.preventDefault();
          Materialize.toast('Email ok', 4000); // 4000 is the duration of the toast
        } else {
          e.preventDefault();
          alert('Invalid Email Address');
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

        e.preventDefault();
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

      event.preventDefault();
      var validationInput = 0;
      var formInput = $('#txtEmail').val();

      if ($('#txtEmail').val().length > 0) {
        new _admin.AdminPage(this.appBody, formInput);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvaGVscGVycy9hcGlrZXlmaXJlYmFzZS5qcyIsImRldi9hcHAvaGVscGVycy9maXJlYmFzZUhlbHBlci5qcyIsImRldi9hcHAvcGFnZXMvYWRtaW4vYWRtaW4uanMiLCJkZXYvYXBwL3BhZ2VzL2hvbWUvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O3FqQkNBQTs7Ozs7Ozs7O0FBT0E7O0FBQ0E7Ozs7SUFHTSxLO0FBRUosbUJBQWE7QUFBQTs7QUFDWCxTQUFLLE9BQUwsR0FBZSxTQUFTLG9CQUFULENBQThCLEtBQTlCLEVBQXFDLENBQXJDLENBQWY7QUFDRDs7Ozs0QkFFTTs7QUFFTDtBQUNBLFVBQUksU0FBUztBQUNYLGdEQURXO0FBRVgsb0JBQVksb0NBRkQ7QUFHWCxxQkFBYSwyQ0FIRjtBQUlYLHVCQUFlLGdDQUpKO0FBS1gsMkJBQW1CO0FBTFIsT0FBYjtBQU9BLGVBQVMsYUFBVCxDQUF1QixNQUF2Qjs7QUFFQTtBQUNBLFVBQUksV0FBVyxtQkFBYSxLQUFLLE9BQWxCLENBQWY7QUFDRDs7Ozs7O0FBSUgsSUFBSSxRQUFRLElBQUksS0FBSixFQUFaO0FBQ0EsTUFBTSxLQUFOOzs7Ozs7OztBQ3BDTyxJQUFNLDhDQUFtQix5Q0FBekI7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7SUFRYSxjLFdBQUEsYztBQUVYLDRCQUFhO0FBQUE7O0FBRVg7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsU0FBUyxRQUFULEVBQWhCO0FBQ0EsU0FBSyxNQUFMLEdBQWMsRUFBZDtBQUVBOzs7O29DQUVjLE8sRUFBUTs7QUFFdEI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLElBQWhDLENBQXFDLE9BQXJDO0FBQ0Q7OzsrQkFFUztBQUFBOztBQUNSLGFBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVB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LG1CQUF4QixFQUE2QyxTQUE3QyxHQUF5RCwwQ0FBekQ7QUFDRTtBQUNGO0FBQ0Usa0JBQU0sbUNBQU47QUFoREo7QUFrREg7QUFDRjs7O2tDQUVZO0FBQUE7O0FBRVgsUUFBRSxZQUFGLEVBQWdCLENBQWhCLEVBQW1CLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QztBQUFBLGVBQVMsT0FBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBN0MsRUFBMkUsS0FBM0U7QUFDQSxRQUFFLGVBQUYsRUFBbUIsQ0FBbkIsRUFBc0IsZ0JBQXRCLENBQXVDLE9BQXZDLEVBQWdEO0FBQUEsZUFBUyxPQUFLLE9BQUwsQ0FBYSxLQUFiLENBQVQ7QUFBQSxPQUFoRCxFQUE4RSxLQUE5RTtBQUVEOzs7NEJBRU8sSyxFQUFNOztBQUVaLFlBQU0sY0FBTjtBQUNBLFVBQUksa0JBQWtCLENBQXRCO0FBQ0EsVUFBSSxZQUFZLEVBQUUsV0FBRixFQUFlLEdBQWYsRUFBaEI7O0FBRUEsVUFBRyxFQUFFLFdBQUYsRUFBZSxHQUFmLEdBQXFCLE1BQXJCLEdBQTRCLENBQS9CLEVBQWlDO0FBQy9CLDZCQUFlLEtBQUssT0FBcEIsRUFBNkIsU0FBN0I7QUFDRDtBQUNGOzs7bUNBR2E7O0FBRVosVUFBSSw4SUFHTSxLQUFLLFNBSFgsdW1hQUFKO0FBd1JFLGFBQU8sU0FBUDtBQUNIOzs7OztBQUVIO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMTMtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgQVBJX0tFWV9GSVJFQkFTRSB9IGZyb20gJy4vaGVscGVycy9hcGlrZXlmaXJlYmFzZSc7XG5cblxuY2xhc3MgTXlBcHAge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5hcHBCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcHBcIilbMF07XG4gIH1cblxuICBzdGFydCgpe1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBhcGlLZXk6IEFQSV9LRVlfRklSRUJBU0UsXG4gICAgICBhdXRoRG9tYWluOiBcImNhc3Ryb2dhc3Ryby04NThjMy5maXJlYmFzZWFwcC5jb21cIixcbiAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY2FzdHJvZ2FzdHJvLTg1OGMzLmZpcmViYXNlaW8uY29tXCIsXG4gICAgICBzdG9yYWdlQnVja2V0OiBcImNhc3Ryb2dhc3Ryby04NThjMy5hcHBzcG90LmNvbVwiLFxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTA4NTg4NjMzMTg5XCJcbiAgICB9O1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcblxuICAgIC8vIGluaXQgSG9tZVBhZ2VcbiAgICBsZXQgaG9tZVBhZ2UgPSBuZXcgSG9tZVBhZ2UodGhpcy5hcHBCb2R5KTtcbiAgfVxuXG59XG5cbmxldCBteUFwcCA9IG5ldyBNeUFwcCgpO1xubXlBcHAuc3RhcnQoKTtcbiIsImV4cG9ydCBjb25zdCBBUElfS0VZX0ZJUkVCQVNFID0gXCJBSXphU3lDcEZncjg0ZXBUeVBPZFVHZ1ZNTHB4TERPRTRwQUdRem9cIjtcbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAyMC0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxMy0xMi0yMDE2XG4qL1xuXG5leHBvcnQgY2xhc3MgRmlyZUJhc2VIZWxwZXIge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRhdGFiYXNlIHNlcnZpY2VcbiAgICB0aGlzLmRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICB0aGlzLmRiRGF0YSA9IFtdO1xuXG4gICB9XG5cbiAgYWRkT2JqZWN0VG9CYXNlKHByb2R1Y3Qpe1xuXG4gICAgLy8gbCdlbnZveWVyIGRhbnMgbGEgY29sbGVjdGlvbiBcInByb2R1Y3RzXCIgc3VyIEZpcmViYXNlXG4gICAgdGhpcy5kYXRhYmFzZS5yZWYoJ2xvY2FsT3JkZXInKS5wdXNoKHByb2R1Y3QpO1xuICB9XG5cbiAgbG9hZERhdGEoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgIHRoaXMuZGF0YWJhc2UucmVmKCdsb2NhbE9yZGVyJykub24oJ2NoaWxkX2FkZGVkJywgKHNuYXBzaG90KT0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGlsZCBhZGRlZC0+ICcsIHNuYXBzaG90LnZhbCgpKTtcblxuICAgICAgICAgIHRoaXMuZGJEYXRhLnB1c2goc25hcHNob3QudmFsKCkpO1xuICAgICAgICAgIC8vIGxlcyB2YWxldXIgc29udCBjb250ZW51IGRhbnMgc25hcHNob3QudmFsKClcbiAgICAgICAgICAvLyBldCBwYXNzw6llIMOgIHVuZSBmb25jdGlvbiBwb3VyIMOqdHJlIHRyYWl0w6llIHBsdXMgbG9pbi4uLlxuICAgICAgICAgIC8vICBkaXNwbGF5UHJvZHVjdHNJbkxpc3Qoc25hcHNob3QpXG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLmRiRGF0YSlcbiAgICAgIH0pO1xuICAgIH0pXG5cbiAgfVxuXG5cbn1cbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAyMS0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAyMS0xMi0yMDE2XG4qL1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi8uLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgRmlyZUJhc2VIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2ZpcmViYXNlSGVscGVyJztcblxuZXhwb3J0IGNsYXNzIEFkbWluUGFnZSB7XG5cbiAgY29uc3RydWN0b3IoYXBwQm9keSxmb3JtSW5wdXQpe1xuICAgIHRoaXMuYXBwQm9keSA9IGFwcEJvZHk7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1JbnB1dDtcbiAgICB0aGlzLnBhZ2VUaXRsZSA9IFwiQWRtaW5pc3RyYXRpb24gZGVzIGNvbW1hbmRlc1wiO1xuICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKClcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMuZkZpcmVCYXNlSGVscGVyKCk7XG4gIH1cblxuICBpbml0VUkoKXtcbiAgICAvLyByZW1vdmUgYWxsIHNlY3Rpb24gYmVmb3JlIGRpc3BsYXkgVUlcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxuICAgIH1cbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxuICAgIGxldCBwYWdlU2tlbGV0b24gPSBgXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPHA+JHt0aGlzLnBhZ2VUaXRsZX0gJHt0aGlzLmZvcm1EYXRhfSAhPC9wPlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZCYXJUb3BcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3M9XCJicmFuZC1sb2dvXCI+TG9nbzwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzcz1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiaG9tZVwiIGhyZWY9XCIjXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3RvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJhZG1pblBhZ2VcIiBocmVmPVwiI1wiPkFkbWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBpZD1cImhvbWVNb2JcIiBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlTW9iXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9uYXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXIgb3V0bGluZVwiPlxuICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXlMaXN0XCI+XG5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgYDtcbiAgICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcbiAgICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcbiAgICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xuICAgICAgfSk7XG4gICAgICAvL2xldCBsaXN0ID0gdGhpcy5saXN0T3JkZXJzXG4gICAgICAvL2NvbnNvbGUubG9nKGxpc3QpXG4gICAgICB0aGlzLmxvYWRFdmVudFVJKCk7XG4gICAgfVxuXG4gICAgbG9hZEV2ZW50VUkoKXtcblxuICAgICAgJChcIiNob21lXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgICAgJChcIiNob21lTW9iXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgIH1cblxuICAgIG9uTG9naW4oZXZlbnQpe1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmV3IEhvbWVQYWdlKHRoaXMuYXBwQm9keSk7XG4gICAgfVxuXG4gICAgZkZpcmVCYXNlSGVscGVyKCl7XG5cbiAgICAgIC8vV2UgaW5zdGFuY2lhdGUgdGhlIEZpcmViYXNlIGNsYXNzXG4gICAgICBsZXQgZGF0YUJhc2VDYXN0cm8gPSBuZXcgRmlyZUJhc2VIZWxwZXIoKTtcblxuICAgICAgZGF0YUJhc2VDYXN0cm8ubG9hZERhdGEoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT57XG5cbiAgICAgICAgICBsZXQgb3JkcmU7XG5cbiAgICAgICAgICBmb3IobGV0IGlkIGluIHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgIG9yZHJlID0gcmVzcG9uc2VbaWRdLm9yZGVyO1xuXG4gICAgICAgICAgICBsZXQgZGl2T3JkcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGl2T3JkcmUuaW5uZXJIVE1MID0gYExpc3RlIGQnYWNoYXQgbnVtw6lybyA6ICR7aWR9IDwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50IG1haWwgOiAke3Jlc3BvbnNlW2lkXS5tYWlsfTwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhbnRpdMOpIGRlIHBhbm5pZXJzIDogJHtyZXNwb25zZVtpZF0ubmJPcmRlcn08L2JyPmA7XG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ2lkJyxgbGlzdGUke2lkfWApXG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2s7IG92ZXJmbG93OmF1dG87JylcbiAgICAgICAgICAgIGRpdk9yZHJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2UHJvZCcpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmFwcGVuZENoaWxkKGRpdk9yZHJlKVxuICAgICAgICAgICAgdmFyIGlkRGl2ID0gYGxpc3RlJHtpZH1gXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkcmVcIiwgaWQpXG5cbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiBvcmRyZSkge1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWREaXYpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5kZXNzaW5lclByb2R1aXQob3JkcmVbaV0pKTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdpdGggRmlyZWJhc2UgbG9hZERhdGEoKS0+ICcsIGVycilcbiAgICAgICAgfSlcblxuICAgICAgLy9jb25zb2xlLmxvZyhsaXN0T3JkZXJzKVxuXG4gICAgfVxuXG4gICAgZGVzc2luZXJQYW5pZXIobGlzdE9yZGVycykge1xuICAgICAgLy8gU3VwcHJpbWVyIGNvbnRlbnUgcGFuaWVyXG4gICAgICB2YXIgbGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpO1xuICAgICAgd2hpbGUgKGxpc3RlLmNoaWxkcmVuLmxlbmd0aD4wKSB7bGlzdGUucmVtb3ZlQ2hpbGQobGlzdGUubGFzdENoaWxkKX1cbiAgICAvLyAgcHJpY2VDb21tYW5kZSA9IDA7XG5cbiAgICAgIC8vIEFmZmljaGVyIGxlcyDDqWzDqW1lbnRzXG5cbiAgICAgIGZvcihsZXQgaWQgaW4gbGlzdE9yZGVycykge1xuICAgICAgICB0aGlzLmRlc3NpbmVyUHJvZHVpdChsaXN0T3JkZXJzWzBdLm9yZGVyW2lkXSk7XG4gICAgICAgIC8vcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBsaXN0T3JkZXJzW2lkXS5wcmljZVBybyAqIGxpc3RPcmRlcnNbaWRdLnRpbWVzUHJvIDtcbiAgICAgIH1cbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICAgIC8vIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID09IFwiUXVhbnRpdMOpXCIpe1xuICAgICAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICAvLyB9O1xuICAgIH1cblxuICAgIGRlc3NpbmVyUHJvZHVpdChvcmRyZSkge1xuICAgICAgLy8gTGlyZSBsZSBzcmMgZHUgcHJvZHVpdCAoc3RvY2vDqSBkYW5zIGxlIGh0bWwpXG4gICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBpZD1cIiR7b3JkcmUuaWRQcm99XCIgY2xhc3M9XCJjb2wtMTA1XCI+XG4gICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICA8aW1nIGlkPVwiaW1nUGFuMVwiIHNyYz1cIiR7b3JkcmUuc3JjfVwiPlxuICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gJHtvcmRyZS5wcmljZVByb30gPC9wPlxuICAgICAgICAgPHA+JHtvcmRyZS50aW1lc1Byb308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG59XG4iLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMTMtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cblxuaW1wb3J0IHsgRmlyZUJhc2VIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2ZpcmViYXNlSGVscGVyJztcbmltcG9ydCB7IEFkbWluUGFnZSB9IGZyb20gJy4uLy4uL3BhZ2VzL2FkbWluL2FkbWluJztcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcblxuICBjb25zdHJ1Y3RvcihhcHBCb2R5KXtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5XG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnSGVsbG8gd29ybGQhIEhlbGxvIFJvYmVydG8nO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgdGhpcy5mRmlyZUJhc2VIZWxwZXIoKTtcbiAgICB0aGlzLmVtcHR5Qm94RigpO1xuICB9XG5cbiAgaW5pdFVJKCl7XG5cbiAgICAvL0luaWNpYXRlIHRoZSB2YXJpYWJsZSBRIHRvIHRoZSB2YWx1ZSBpbiB0aGUgaHRtbFxuICAgIHZhciB2UTtcbiAgICAvL0luaWNpYXRlIHRoZSB2YXJpYWJsZSBwcmljZVByb2R1Y3RcbiAgICB2YXIgcHJpY2VQcm9kdWN0O1xuICAgIHZhciBwcmljZUNvbW1hbmRlO1xuICAgIHZhciB0aW1lc0NvbW1hbmRlO1xuICAgIHZhciB0b3RhbFByaWNlUGFja2FnZTtcbiAgICB2YXIgbG9jYWxPcmRlciA9IHt9O1xuXG5cbiAgICAvLyByZW1vdmUgYWxsIHNlY3Rpb24gYmVmb3JlIGRpc3BsYXkgVUlcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxuICAgIH1cbiAgICAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XG4gICAgfSlcbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxuICAgIGxldCBwYWdlU2tlbGV0b24gPSB0aGlzLnNrZWxldG9uQmFzZSgpO1xuXG4gICAgLy8gYWRkIHBhZ2Ugc2tlbGV0b24gaW4gYm9keVxuICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcbiAgICB0aGlzLmxvYWRFdmVudFVJKClcbiAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICB0aGlzLmNob29zZVByb2R1Y3QodlEscHJpY2VQcm9kdWN0LHByaWNlQ29tbWFuZGUsdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UsIGxvY2FsT3JkZXIpXG4gICAgdGhpcy5jbGlja0NvbW1hbmRlUXQocHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSlcblxuICAgIE1hdGVyaWFsaXplLnRvYXN0KCdJIGFtIGEgdG9hc3QhJywgNDAwMCkgLy8gNDAwMCBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIHRvYXN0XG5cbiAgfVxuXG4gIGZGaXJlQmFzZUhlbHBlcigpe1xuXG4gICAgLy9XZSBpbnN0YW5jaWF0ZSB0aGUgRmlyZWJhc2UgY2xhc3NcbiAgICBsZXQgZGF0YUJhc2VDYXN0cm8gPSBuZXcgRmlyZUJhc2VIZWxwZXIoKTtcblxuICAgIC8vSW4gdGhlIGNhc2UgdGhlIHVzZXIgc2VuZCB0aGUgb3JkZXIgd2Ugc2F2ZSBpbiB0aGUgZGF0YWJhc2VcbiAgICAkKFwiI3NlbmRPcmRlclwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciBzRW1haWwgPSAkKCcjdHh0RW1haWwnKS52YWwoKTtcbiAgICAgIC8vIENoZWNraW5nIEVtcHR5IEZpZWxkc1xuICAgICAgaWYgKCQudHJpbShzRW1haWwpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGFsZXJ0KCdSZW1wbGlzc2V6IGxlIGNoYW1wIGVtYWlsJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUVtYWlsKHNFbWFpbCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBNYXRlcmlhbGl6ZS50b2FzdCgnRW1haWwgb2snLCA0MDAwKSAvLyA0MDAwIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgdG9hc3RcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYWxlcnQoJ0ludmFsaWQgRW1haWwgQWRkcmVzcycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xuICAgICAgY29uc29sZS5sb2coY29tTG9jYWxTdG9yYWdlKVxuICAgICAgZGF0YUJhc2VDYXN0cm8uYWRkT2JqZWN0VG9CYXNlKHtcbiAgICAgICAgb3JkZXI6IGNvbUxvY2FsU3RvcmFnZSxcbiAgICAgICAgbmJPcmRlcjogJChcIiN0aW1lc0NvbW1hbmRlXCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgbWFpbDogJChcImlucHV0W25hbWU9J2VtYWlsJ11cIikudmFsKClcbiAgICAgIH0pO1xuXG4gICAgICBhbGVydChcIkJpZW4gZW52b3nDqVwiKVxuICAgIH0pXG4gIH1cblxuICBlbXB0eUJveEYoKXtcbiAgICAkKFwiI2VtcHR5Qm94XCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbE9yZGVyXCIpO1xuICAgICAgdGhpcy5pbml0VUkoKTtcblxuICAgIH0pXG4gIH1cblxuICB2YWxpZGF0ZUVtYWlsKHNFbWFpbCkge1xuICAgIHZhciBmaWx0ZXIgPSAvXltcXHctLitdK0BbYS16QS1aMC05Li1dKy5bYS16QS16MC05XXsyLDR9JC87XG5cbiAgICBpZiAoZmlsdGVyLnRlc3Qoc0VtYWlsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKSB7XG4gICAgLy8gU3VwcHJpbWVyIGNvbnRlbnUgcGFuaWVyXG4gICAgdmFyIGxpc3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1eUxpc3QnKTtcbiAgICB3aGlsZSAobGlzdGUuY2hpbGRyZW4ubGVuZ3RoPjEpIHtsaXN0ZS5yZW1vdmVDaGlsZChsaXN0ZS5sYXN0Q2hpbGQpfVxuICAgIHByaWNlQ29tbWFuZGUgPSAwO1xuXG4gICAgLy8gQWZmaWNoZXIgbGVzIMOpbMOpbWVudHNcbiAgICB2YXIgcHJvZHVpdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgZm9yKGxldCBpZCBpbiBwcm9kdWl0cykge1xuICAgICAgdGhpcy5kZXNzaW5lclByb2R1aXQocHJvZHVpdHNbaWRdKTtcbiAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJvZHVpdHNbaWRdLnByaWNlUHJvICogcHJvZHVpdHNbaWRdLnRpbWVzUHJvIDtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9PSBcIlF1YW50aXTDqVwiKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gMTtcbiAgICB9O1xuICB9XG5cbiAgZGVzc2luZXJQcm9kdWl0KHByb2R1aXQpIHtcbiAgICAvLyBMaXJlIGxlIHNyYyBkdSBwcm9kdWl0IChzdG9ja8OpIGRhbnMgbGUgaHRtbClcbiAgICB2YXIgc3JjSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbWdbZGF0YS1pZD0ke3Byb2R1aXQuaWRQcm99XWApLnNyYztcbiAgICB2YXIgcHJvZHVjdFRvTGlzdCA9IGBcbiAgICA8ZGl2IGlkPVwiJHtwcm9kdWl0LmlkUHJvfVwiIGNsYXNzPVwiY29sLTEwNVwiPlxuICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICA8aW1nIGlkPVwiaW1nUGFuMVwiIHNyYz1cIiR7c3JjSW1hZ2V9XCI+XG4gICAgICAgPC9maWd1cmU+XG4gICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+ICR7cHJvZHVpdC5wcmljZVByb30gPC9wPlxuICAgICAgIDxwPiR7cHJvZHVpdC50aW1lc1Byb308L3A+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvZHVjdFRvTGlzdCk7XG4gIH1cblxuICBjaG9vc2VQcm9kdWN0KHZRLCBwcmljZVByb2R1Y3QscHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcil7XG5cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdExpc3QnKSlcbiAgICB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdExpc3QnKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBldmVudD0+e1xuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIHRoaXMuY2xpY2tGaWd1cmUoZXZlbnQpO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgICAgdGhpcy5jbGlja1BsdXNMZXNzKGV2ZW50LCB2USwgcHJpY2VQcm9kdWN0LCBwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcik7XG4gICAgICAgICAgLy90aGlzLmRlc3NpbmVyUGFuaWVyKCk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH1cblxuXG4gIGNsaWNrUGx1c0xlc3MoZXZlbnQsIHZRLCBwcmljZVByb2R1Y3QsIHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKXtcblxuICAgICAgLy9JbmljaWF0ZSB0aGUgcXVhbnRpdHkgdG8gMFxuICAgICAgdmFyIHFQcm9kdWN0O1xuXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gXCJGSUdVUkVcIil7XG4gICAgICAgIHByaWNlQ29tbWFuZGUgPSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApO1xuICAgICAgfVxuXG4gICAgICAvL0lmIHRoZSBjbGljayBpcyBpbiBhIGJ1dHRvblxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ0JVVFRPTicpe1xuXG4gICAgICAgIC8vQ29udmVydCB0aGUgaHRtbCB0ZXh0IGluIGFuIGludGVnZXIgbnVtYmVyIHNvIHdlIGNhbiBvcGVyYXRlIHdpdGggaXRcbiAgICAgICAgcHJpY2VQcm9kdWN0ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCwgMTApO1xuXG4gICAgICAgIC8vSWYgdGhlIHByb2R1Y3QgZG9uJ3QgZXhpc3QgaW4gdGhlIGxpc3RcbiAgICAgICAgaWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpICYmIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT0gJysnKXtcblxuXG4gICAgICAgICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpKXtcbiAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICBzcmM6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbiAgICAgICAgICAgIHRpbWVzUHJvOiAxLFxuICAgICAgICAgICAgcHJpY2VQcm86IHByaWNlUHJvZHVjdFxuICAgICAgICAgIH07XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuXG4gICAgICAgICAgLy9BZGQgdGhlIGh0bWwgY29udGVudCB0byB0aGUgZGl2IGJ1eUxpc3RcbiAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAvL0NhbGN1bGF0ZSBhbmQgcHJpY2VzIGFuZCBxdWFudGl0aWVzXG4gICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBwcmljZVByb2R1Y3Q7XG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXG4gICAgICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gdG90YWxQcmljZVBhY2thZ2U7XG5cbiAgICAgICAgLy9JZiB0aGUgcHJvZHVjdCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICB9ZWxzZSBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSl7XG5cbiAgICAgICAgICB2USA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpLmxhc3RDaGlsZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCwgMTApO1xuXG4gICAgICAgICAgLy9JZiB0aGUgY2xpY2sgaXMgb24gdGhlIHBsdXMgYnV0dG9uXG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnKycpe1xuXG4gICAgICAgICAgICBxUHJvZHVjdCA9IHZRICsgMTtcbiAgICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJpY2VQcm9kdWN0O1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcVByb2R1Y3Q7XG5cbiAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgICBpZFBybzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgc3JjOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnc3JjJyksXG4gICAgICAgICAgICAgIHRpbWVzUHJvOiBxUHJvZHVjdCxcbiAgICAgICAgICAgICAgcHJpY2VQcm86IHByaWNlUHJvZHVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcbiAgICAgICAgICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgLy9JZiB0aGUgY2xpY2sgaXMgb24gdGhlIGxlc3MgYnV0dG9uXG4gICAgICAgICAgfWVsc2UgaWYoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnLS0nKXtcblxuICAgICAgICAgICAgICAvL2lmIHRoZSBxdWFudGl0eSBpcyAxIHdlIHRha2Ugb2ZmIHRoZSBkaXYgb2YgdGhlIHByb2R1Y3QgZnJvbSB0aGUgcHJvZHVjdExpc3RcbiAgICAgICAgICAgICAgaWYodlE9PT0xKXtcbiAgICAgICAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSAtIHByaWNlUHJvZHVjdDtcbiAgICAgICAgICAgICAgICB2YXIgaWRQcm8gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgIHZhciBwciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkUHJvKTtcbiAgICAgICAgICAgICAgICBwci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByKTtcblxuICAgICAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobG9jYWxPcmRlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG5cbiAgICAgICAgICAgICAgLy9pZiB0aGUgcXVhbnRpdHkgaXMgbW9yZSB0aGFuIDEgd2UgdGFrZSBvbmUgdW5pdHkgZnJvbSB0aGUgcXVhbnRpdHkgb2YgdGhlIHByb2R1Y3RcbiAgICAgICAgICAgICAgfWVsc2UgaWYodlE+MSl7XG4gICAgICAgICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgLSBwcmljZVByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgcVByb2R1Y3QgPSB2USAtIDE7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcVByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgbG9jYWxPcmRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICAgICAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICAgICAgICBzcmM6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAgIHRpbWVzUHJvOiBxUHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgIHByaWNlUHJvOiBwcmljZVByb2R1Y3RcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICB9XG5cblxuICAgIGNsaWNrQ29tbWFuZGVRdChwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSl7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tYW5kZUNvbHVtbicpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGV2ZW50Q29tbWFuZGU9PntcbiAgICAgICAgICBldmVudENvbW1hbmRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG4gICAgICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gMTtcbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCwxMClcblxuICAgICAgICAgIGlmKGV2ZW50Q29tbWFuZGUudGFyZ2V0LmlkID09ICdwbHVzJyl7XG4gICAgICAgICAgICB0aW1lc0NvbW1hbmRlID0gdGltZXNDb21tYW5kZSArMTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gdGltZXNDb21tYW5kZTtcbiAgICAgICAgICB9ZWxzZSBpZihldmVudENvbW1hbmRlLnRhcmdldC5pZCA9PSAnbW9pbnMnICYmIHRpbWVzQ29tbWFuZGUgPiAxKXtcbiAgICAgICAgICAgIHRpbWVzQ29tbWFuZGUtLTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gdGltZXNDb21tYW5kZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHByaWNlQ29tbWFuZGUgKiB0aW1lc0NvbW1hbmRlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgcmVmcmVzaFRvdGFsQ29tbWFuZGUocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2Upe1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG4gICAgICB0aW1lc0NvbW1hbmRlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IDE7XG4gICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCwxMClcblxuICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwcmljZUNvbW1hbmRlICogdGltZXNDb21tYW5kZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuXG4gICAgfVxuXG4gICAgY2xpY2tGaWd1cmUoZXZlbnQpe1xuXG4gICAgICBpZihldmVudC50YXJnZXQudGFnTmFtZSA9PSAnSU1HJyl7XG5cbiAgICAgICAgdmFyIHR5cGVQcm9kID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgIHN3aXRjaCh0eXBlUHJvZCl7XG5cbiAgICAgICAgICBjYXNlICdpbWdDbGljazFicic6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZCcmFuZHknKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgYnJhbmR5IGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMmJyJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkJyYW5keScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIGJyYW5keSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNicic6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZCcmFuZHknKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgYnJhbmR5IGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMXdpbmUnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmV2luZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciB2aW4gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syd2luZSc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZXaW5lJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBkZXV4acOobWUgdmluIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM3dpbmUnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmV2luZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSB2aW4gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxb2lsJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZk9pbCcpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBodWlsZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJvaWwnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmT2lsJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBkZXV4acOobWUgaHVpbGUgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szb2lsJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZk9pbCcpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBodWlsZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxY2gnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQ2hlZXNlJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIGh1aWxlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMmNoJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkNoZWVzZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBmcm9tYWdlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM2NoJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkNoZWVzZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBmcm9tYWdlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMWhhbSc6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmSGFtJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBwcmVtaWVyIGphbWJvbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJoYW0nOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkhhbScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIGphbWJvbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNoYW0nOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkhhbScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBqYW1ib24gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGFsZXJ0KFwiQ2UgcHJvZHVpdCBuJ2EgcGFzIGRlIGRlc2NyaXB0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZEV2ZW50VUkoKXtcblxuICAgICQoXCIjYWRtaW5QYWdlXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgICQoXCIjYWRtaW5QYWdlTW9iXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuXG4gIH1cblxuICBvbkxvZ2luKGV2ZW50KXtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdmFsaWRhdGlvbklucHV0ID0gMFxuICAgIGxldCBmb3JtSW5wdXQgPSAkKCcjdHh0RW1haWwnKS52YWwoKTtcblxuICAgIGlmKCQoJyN0eHRFbWFpbCcpLnZhbCgpLmxlbmd0aD4wKXtcbiAgICAgIG5ldyBBZG1pblBhZ2UoIHRoaXMuYXBwQm9keSwgZm9ybUlucHV0KTtcbiAgICB9XG4gIH1cblxuXG4gIHNrZWxldG9uQmFzZSgpe1xuXG4gICAgbGV0IHZTa2VsZXRvbiA9IGBcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxpbWcgY2xhc3M9XCJtYXRlcmlhbGJveGVkXCIgd2lkdGg9XCIxMDI0cHhcIiBoZWlnaHQ9XCIyMDBweFwiIHNyYz1cIi4vc3JjL2ltYWdlcy92aW5hczIuanBlZ1wiPlxuICAgICAgICA8aDE+JHt0aGlzLnBhZ2VUaXRsZX08L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2QmFyVG9wXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtd3JhcHBlclwiIGNsYXNzPVwibmF2QmFyVG9wXCIgPlxuICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzPVwiYnJhbmQtbG9nb1wiPkxvZ288L2E+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZS1kZW1vXCIgY2xhc3M9XCJidXR0b24tY29sbGFwc2VcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvaT48L2E+XG4gICAgICAgICAgICAgPHVsIGNsYXNzPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgPHVsIGNsYXNzPVwic2lkZS1uYXZcIiBpZD1cIm1vYmlsZS1kZW1vXCI+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5JbmljaW88L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2R1Y3RvczwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UXVpZW5lcyBzb21vczwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdG88L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBpZD1cImFkbWluUGFnZU1vYlwiIGhyZWY9XCIjXCI+QWRtaW48L2E+PC9saT5cbiAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZE9yZGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgaWQ9XCJzZW5kT3JkZXJcIj5FbnZveWVyIGNvbW1hbmRlPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgaWQ9XCJlbXB0eUJveFwiPlZpZGVyIGxlIGNvZmZyZTwvYnV0dG9uPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+PGlucHV0IGlkPVwidHh0RW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwidm90cmVlbWFpbC5jaFwiLz5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lciBvdXRsaW5lXCI+XG4gICAgICAgICAgICAgPGRpdiBpZD1cImJ1eUxpc3RcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMDVcIiBpZD1cImNvbW1hbmRlQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8cD5Ub3RhbCBjb2ZmcmU8L3A+PC9icj5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwidG90YWxQcmljZUNvbW1hbmRlXCI+PC9wPjwvYnI+XG4gICAgICAgICAgICAgICAgICA8cCBpZD1cInRpbWVzQ29tbWFuZGVcIj5RdWFudGl0w6k8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBpZD1cInRvdGFsUHJpY2VQYWNrYWdlXCI+PC9wPjwvYnI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdExpc3RcIiA+XG5cbjwhLS1GaXJzdCBsaW5lIG9mIHByb2R1Y3RzLS0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+QnJhbmR5PC9wPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1pZD1cImltZ0NsaWNrMWJyXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2JyYW5keTEucG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNCMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cIm1vaW5zQjFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1pZD1cImltZ0NsaWNrMmJyXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2JyYW5keS1jYXNhanVhbmEtMTAwLWFub3MtcmVzZXJ2YS5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0IyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0IyXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM2JyXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2JhcmJhZGlsbG8uanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNCM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNCM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZkJyYW5keVwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG48IS0tU2Vjb25kIGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5WaW5vczwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazF3aW5lXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL3ZpbjEuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc1cxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1cxXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJ3aW5lXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL3ZpbjIuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc1cyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1cyXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1pZD1cImltZ0NsaWNrM3dpbmVcIiBzcmM9XCIuL3NyYy9pbWFnZXMvdmluMy5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZldpbmVcIj48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuPCEtLVRoaXJkIGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5BY2VpdGUgZGUgb2xpdmE8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMW9pbFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9ST1hBTkUgQVJCRVFVSU5BXzUwMF8wMi5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zTzFcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzTzFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2syb2lsXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL21hcmlhLWRlLWxhLW8tc2VsZWNjaW9uLWdvdXJtZXQtNTAwLW1sLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNPMlwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNPMlwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazNvaWxcIiBzcmM9XCIuL3NyYy9pbWFnZXMvUk9YQU5FIEFSQkVRVUlOQV81MDBfMDIuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc08zXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c08zXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmT2lsXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgPCEtLUZvdXJ0aCBsaW5lIG9mIHByb2R1Y3RzLS0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+UXVlc288L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMWNoXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2NvZ21hbi1zZW1pY3VyYWRvLXB1cm8tb3ZlamEuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0NoMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNDaDFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2syY2hcIiBzcmM9XCIuL3NyYy9pbWFnZXMvcXVlc28tY3VyYWRvLWFsLXJvbWVyby10b21lbGxvc28uanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0NoMlwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNDaDJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2szY2hcIiBzcmM9XCIuL3NyYy9pbWFnZXMvbW9udGFsdm8tY3VyYWRvLWVuLWFjZWl0ZS5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gzXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZkNoZWVzZVwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG48IS0tRmlmdGggbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPkphbW9uIGliw6lyaWNvPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazFoYW1cIiBzcmM9XCIuL3NyYy9pbWFnZXMvamFtb24xLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNIMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNIMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJoYW1cIiBzcmM9XCIuL3NyYy9pbWFnZXMvamFtb24yLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNIMlwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNIMlwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazNoYW1cIiBzcmM9XCIuL3NyYy9pbWFnZXMvamFtb24zLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNIM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNIM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiAgaWQ9XCJpbWdDbGljazFcIiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZkhhbVwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPjxwPmNvbC0yPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj48cD5jb2wtMjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+PHA+Y29sLTI8L3A+PC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj48cD5jb2wtMzwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+PHA+Y29sLTM8L3A+PC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj48cD5jb2wtNDwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+PHA+Y29sLTI8L3A+PC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTVcIj48cD5jb2wtNTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+Y29sLTE8L3A+PC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj48cD5jb2wtNjwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGEgY2xhc3M9XCJidG5cIiBvbmNsaWNrPVwiTWF0ZXJpYWxpemUudG9hc3QoJ0kgYW0gYSB0b2FzdCcsIDQwMDApXCI+VG9hc3QhPC9hPlxuICAgICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XG4gICAgICAgICAgICAgICAgPHVsIGlkPSdkcm9wZG93bjEnIGNsYXNzPSdkcm9wZG93bi1jb250ZW50JyBjbGFzcz1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkliw6lyaWNvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5QYXRhIG5lZ3JhPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5KYWJ1Z288L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd24yJyBjbGFzcz1cImNvbCBzMlwiPkh1aWxlIGQnb2xpdmU8L2E+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMicgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPk5vcm1hbDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VmlyZ2VuPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5WaXJnZW4gZXh0cmE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gVHJpZ2dlciAtLT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24tYnV0dG9uIGJ0bicgaHJlZj0nIycgZGF0YS1hY3RpdmF0ZXM9J2Ryb3Bkb3duMycgY2xhc3M9XCJjb2wgczJcIj5Gcm9tYWdlIG1hbmNoZWdvPC9hPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XG4gICAgICAgICAgICAgICAgPHVsIGlkPSdkcm9wZG93bjMnIGNsYXNzPSdkcm9wZG93bi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5DdXJhZG88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlNlbWljdXJhZG88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlRpZXJubzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd240Jz5Db25maXNzZXJpZTwvYT5cblxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gU3RydWN0dXJlIC0tPlxuICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd240JyBjbGFzcz0nZHJvcGRvd24tY29udGVudCc+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VHVycm9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5Tb2Jhb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlBvbHZvcm9uZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gVHJpZ2dlciAtLT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24tYnV0dG9uIGJ0bicgaHJlZj0nIycgZGF0YS1hY3RpdmF0ZXM9J2Ryb3Bkb3duNSc+QnJhbmR5IGRlIEplcmV6PC9hPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XG4gICAgICAgICAgICAgICAgPHVsIGlkPSdkcm9wZG93bjUnIGNsYXNzPSdkcm9wZG93bi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5MQSBCT1RBIERFIEJSQU5EWSBOwrogMjk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlRPUlJFUyBKQUlNRSBJPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5QRUlOQURPIFNPTEVSQSAxMDAgQcORT1M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+YDtcbiAgICAgIHJldHVybiB2U2tlbGV0b247XG4gIH1cbn1cbi8vIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4vLyAgIGRlc3NpbmVyUGFuaWVyKCk7XG4vLyB9XG4iXX0=
