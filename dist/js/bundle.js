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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvaGVscGVycy9hcGlrZXlmaXJlYmFzZS5qcyIsImRldi9hcHAvaGVscGVycy9maXJlYmFzZUhlbHBlci5qcyIsImRldi9hcHAvcGFnZXMvYWRtaW4vYWRtaW4uanMiLCJkZXYvYXBwL3BhZ2VzL2hvbWUvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O3FqQkNBQTs7Ozs7Ozs7O0FBT0E7O0FBQ0E7Ozs7SUFHTSxLO0FBRUosbUJBQWE7QUFBQTs7QUFDWCxTQUFLLE9BQUwsR0FBZSxTQUFTLG9CQUFULENBQThCLEtBQTlCLEVBQXFDLENBQXJDLENBQWY7QUFDRDs7Ozs0QkFFTTs7QUFFTDtBQUNBLFVBQUksU0FBUztBQUNYLGdEQURXO0FBRVgsb0JBQVksb0NBRkQ7QUFHWCxxQkFBYSwyQ0FIRjtBQUlYLHVCQUFlLGdDQUpKO0FBS1gsMkJBQW1CO0FBTFIsT0FBYjtBQU9BLGVBQVMsYUFBVCxDQUF1QixNQUF2Qjs7QUFFQTtBQUNBLFVBQUksV0FBVyxtQkFBYSxLQUFLLE9BQWxCLENBQWY7QUFDRDs7Ozs7O0FBSUgsSUFBSSxRQUFRLElBQUksS0FBSixFQUFaO0FBQ0EsTUFBTSxLQUFOOzs7Ozs7OztBQ3BDTyxJQUFNLDhDQUFtQix5Q0FBekI7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7SUFRYSxjLFdBQUEsYztBQUVYLDRCQUFhO0FBQUE7O0FBRVg7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsU0FBUyxRQUFULEVBQWhCO0FBQ0EsU0FBSyxNQUFMLEdBQWMsRUFBZDtBQUVBOzs7O29DQUVjLE8sRUFBUTs7QUFFdEI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLElBQWhDLENBQXFDLE9BQXJDO0FBQ0Q7OzsrQkFFUztBQUFBOztBQUNSLGFBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFtQjtBQUNwQyxjQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLEVBQWhDLENBQW1DLGFBQW5DLEVBQWtELFVBQUMsUUFBRCxFQUFhO0FBQzNEOztBQUVBLGdCQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLFNBQVMsR0FBVCxFQUFqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFRLE1BQUssTUFBYjtBQUNILFNBUkQ7QUFTRCxPQVZNLENBQVA7QUFZRDs7Ozs7Ozs7Ozs7Ozs7cWpCQ3JDSDs7Ozs7Ozs7O0FBT0E7O0FBQ0E7Ozs7SUFFYSxTLFdBQUEsUztBQUVYLHFCQUFZLE9BQVosRUFBb0IsU0FBcEIsRUFBOEI7QUFBQTs7QUFDNUIsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssUUFBTCxHQUFnQixTQUFoQjtBQUNBLFNBQUssU0FBTCxHQUFpQiw4QkFBakI7QUFDQSxTQUFLLElBQUwsR0FBWSxJQUFJLElBQUosRUFBWjtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssZUFBTDtBQUNEOzs7OzZCQUVPO0FBQ047QUFDQSxVQUFHLFNBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsQ0FBSCxFQUErQztBQUM3QyxpQkFBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxFQUE0QyxVQUE1QyxDQUF1RCxXQUF2RCxDQUFtRSxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQW5FO0FBQ0Q7QUFDRDtBQUNBLFVBQUksb0VBR08sS0FBSyxTQUhaLFNBR3lCLEtBQUssUUFIOUIsNnBDQUFKO0FBZ0NFO0FBQ0EsV0FBSyxPQUFMLENBQWEsa0JBQWIsQ0FBaUMsWUFBakMsRUFBK0MsWUFBL0M7QUFDQSxRQUFHLFFBQUgsRUFBYyxLQUFkLENBQW9CLFlBQVU7QUFDNUIsVUFBRSxrQkFBRixFQUFzQixPQUF0QjtBQUNELE9BRkQ7QUFHQTtBQUNBO0FBQ0EsV0FBSyxXQUFMO0FBQ0Q7OztrQ0FFWTtBQUFBOztBQUVYLFFBQUUsT0FBRixFQUFXLENBQVgsRUFBYyxnQkFBZCxDQUErQixPQUEvQixFQUF3QztBQUFBLGVBQVMsTUFBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBeEMsRUFBc0UsS0FBdEU7QUFDQSxRQUFFLFVBQUYsRUFBYyxDQUFkLEVBQWlCLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQztBQUFBLGVBQVMsTUFBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBM0MsRUFBeUUsS0FBekU7QUFDRDs7OzRCQUVPLEssRUFBTTs7QUFFWixZQUFNLGNBQU47QUFDQSx5QkFBYSxLQUFLLE9BQWxCO0FBQ0Q7OztzQ0FFZ0I7QUFBQTs7QUFFZjtBQUNBLFVBQUksaUJBQWlCLG9DQUFyQjs7QUFFQSxxQkFBZSxRQUFmLEdBQ0csSUFESCxDQUNRLFVBQUMsUUFBRCxFQUFZOztBQUVoQixZQUFJLGNBQUo7O0FBRUEsYUFBSSxJQUFJLEVBQVIsSUFBYyxRQUFkLEVBQXdCOztBQUV0QixrQkFBUSxTQUFTLEVBQVQsRUFBYSxLQUFyQjs7QUFFQSxjQUFJLFdBQVcsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxtQkFBUyxTQUFULG1DQUErQyxFQUEvQyxnRUFDc0MsU0FBUyxFQUFULEVBQWEsSUFEbkQsMkVBRStDLFNBQVMsRUFBVCxFQUFhLE9BRjVEO0FBR0EsbUJBQVMsWUFBVCxDQUFzQixJQUF0QixZQUFtQyxFQUFuQztBQUNBLG1CQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0IsK0JBQS9CO0FBQ0EsbUJBQVMsWUFBVCxDQUFzQixPQUF0QixFQUErQixTQUEvQjtBQUNBLG1CQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsV0FBbkMsQ0FBK0MsUUFBL0M7QUFDQSxjQUFJLGtCQUFnQixFQUFwQjs7QUFFQSxrQkFBUSxHQUFSLENBQVksT0FBWixFQUFxQixFQUFyQjs7QUFFQSxlQUFJLElBQUksQ0FBUixJQUFhLEtBQWIsRUFBb0I7O0FBRWhCLHFCQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0Isa0JBQS9CLENBQWtELFdBQWxELEVBQStELE9BQUssZUFBTCxDQUFxQixNQUFNLENBQU4sQ0FBckIsQ0FBL0Q7QUFHSDtBQUNGO0FBR0YsT0E5QkgsRUErQkcsS0EvQkgsQ0ErQlMsVUFBQyxHQUFELEVBQU87QUFDWixnQkFBUSxHQUFSLENBQVksbUNBQVosRUFBaUQsR0FBakQ7QUFDRCxPQWpDSDs7QUFtQ0E7QUFFRDs7O21DQUVjLFUsRUFBWTtBQUN6QjtBQUNBLFVBQUksUUFBUSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBWjtBQUNBLGFBQU8sTUFBTSxRQUFOLENBQWUsTUFBZixHQUFzQixDQUE3QixFQUFnQztBQUFDLGNBQU0sV0FBTixDQUFrQixNQUFNLFNBQXhCO0FBQW1DO0FBQ3RFOztBQUVFOztBQUVBLFdBQUksSUFBSSxFQUFSLElBQWMsVUFBZCxFQUEwQjtBQUN4QixhQUFLLGVBQUwsQ0FBcUIsV0FBVyxDQUFYLEVBQWMsS0FBZCxDQUFvQixFQUFwQixDQUFyQjtBQUNBO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OztvQ0FFZSxLLEVBQU87QUFDckI7QUFDQSxtQ0FDVyxNQUFNLEtBRGpCLG9HQUc4QixNQUFNLEdBSHBDLG1FQUsrQixNQUFNLFFBTHJDLDJCQU1RLE1BQU0sUUFOZDtBQVNEOzs7Ozs7Ozs7Ozs7OztxakJDM0pMOzs7Ozs7OztBQVFBOztBQUNBOzs7O0lBRWEsUSxXQUFBLFE7QUFFWCxvQkFBWSxPQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLFNBQUwsR0FBaUIsNEJBQWpCO0FBQ0EsU0FBSyxNQUFMO0FBQ0EsU0FBSyxlQUFMO0FBQ0EsU0FBSyxTQUFMO0FBQ0Q7Ozs7NkJBR087O0FBRU47QUFDQSxVQUFJLEVBQUo7QUFDQTtBQUNBLFVBQUksWUFBSjtBQUNBLFVBQUksYUFBSjtBQUNBLFVBQUksYUFBSjtBQUNBLFVBQUksaUJBQUo7QUFDQSxVQUFJLGFBQWEsRUFBakI7O0FBR0E7QUFDQSxVQUFHLFNBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsQ0FBSCxFQUErQztBQUM3QyxpQkFBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxFQUE0QyxVQUE1QyxDQUF1RCxXQUF2RCxDQUFtRSxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQW5FO0FBQ0Q7QUFDRCxRQUFHLFFBQUgsRUFBYyxLQUFkLENBQW9CLFlBQVU7QUFDNUIsVUFBRSxrQkFBRixFQUFzQixPQUF0QjtBQUNELE9BRkQ7QUFHQTtBQUNBLFVBQUksZUFBZSxLQUFLLFlBQUwsRUFBbkI7O0FBRUE7QUFDQSxXQUFLLE9BQUwsQ0FBYSxrQkFBYixDQUFpQyxZQUFqQyxFQUErQyxZQUEvQztBQUNBLFdBQUssV0FBTDtBQUNBLFdBQUssY0FBTCxDQUFvQixhQUFwQixFQUFtQyxhQUFuQyxFQUFrRCxpQkFBbEQ7QUFDQSxXQUFLLGFBQUwsQ0FBbUIsRUFBbkIsRUFBc0IsWUFBdEIsRUFBbUMsYUFBbkMsRUFBaUQsYUFBakQsRUFBZ0UsaUJBQWhFLEVBQW1GLFVBQW5GO0FBQ0EsV0FBSyxlQUFMLENBQXFCLGFBQXJCLEVBQW1DLGFBQW5DLEVBQWtELGlCQUFsRDs7QUFFQSxrQkFBWSxLQUFaLENBQWtCLGVBQWxCLEVBQW1DLElBQW5DLEVBN0JNLENBNkJtQztBQUUxQzs7O3NDQUVnQjtBQUFBOztBQUVmO0FBQ0EsVUFBSSxpQkFBaUIsb0NBQXJCOztBQUVBO0FBQ0EsUUFBRSxZQUFGLEVBQWdCLENBQWhCLEVBQW1CLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QyxVQUFDLENBQUQsRUFBSzs7QUFFaEQsVUFBRSxjQUFGOztBQUVBLFlBQUksU0FBUyxFQUFFLFdBQUYsRUFBZSxHQUFmLEVBQWI7QUFDQTtBQUNBLFlBQUksRUFBRSxJQUFGLENBQU8sTUFBUCxFQUFlLE1BQWYsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDNUIsWUFBRSxjQUFGO0FBQ0EsZ0JBQU0sMkJBQU47QUFDSDtBQUNELFlBQUksTUFBSyxhQUFMLENBQW1CLE1BQW5CLENBQUosRUFBZ0M7QUFDOUIsWUFBRSxjQUFGO0FBQ0Esc0JBQVksS0FBWixDQUFrQixVQUFsQixFQUE4QixJQUE5QixFQUY4QixDQUVNO0FBQ3JDLFNBSEQsTUFJSztBQUNILFlBQUUsY0FBRjtBQUNFLGdCQUFNLHVCQUFOO0FBQ0g7O0FBRUQsWUFBSSxrQkFBa0IsS0FBSyxLQUFMLENBQVcsYUFBYSxPQUFiLENBQXFCLFlBQXJCLENBQVgsQ0FBdEI7QUFDQSxnQkFBUSxHQUFSLENBQVksZUFBWjtBQUNBLHVCQUFlLGVBQWYsQ0FBK0I7QUFDN0IsaUJBQU8sZUFEc0I7QUFFN0IsbUJBQVMsRUFBRSxnQkFBRixFQUFvQixDQUFwQixFQUF1QixTQUZIO0FBRzdCLGdCQUFNLEVBQUUscUJBQUYsRUFBeUIsR0FBekI7QUFIdUIsU0FBL0I7O0FBTUEsY0FBTSxhQUFOO0FBQ0QsT0E1QkQ7QUE2QkQ7OztnQ0FFVTtBQUFBOztBQUNULFFBQUUsV0FBRixFQUFlLENBQWYsRUFBa0IsZ0JBQWxCLENBQW1DLE9BQW5DLEVBQTRDLFlBQUk7O0FBRTlDLFVBQUUsY0FBRjtBQUNBLHFCQUFhLFVBQWIsQ0FBd0IsWUFBeEI7QUFDQSxlQUFLLE1BQUw7QUFFRCxPQU5EO0FBT0Q7OztrQ0FFYSxNLEVBQVE7QUFDcEIsVUFBSSxTQUFTLDRDQUFiOztBQUVBLFVBQUksT0FBTyxJQUFQLENBQVksTUFBWixDQUFKLEVBQXlCO0FBQ3ZCLGVBQU8sSUFBUDtBQUNELE9BRkQsTUFHSztBQUNILGVBQU8sS0FBUDtBQUNEO0FBQ0Y7OzttQ0FFYyxhLEVBQWUsYSxFQUFlLGlCLEVBQW1CO0FBQzlEO0FBQ0EsVUFBSSxRQUFRLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUFaO0FBQ0EsYUFBTyxNQUFNLFFBQU4sQ0FBZSxNQUFmLEdBQXNCLENBQTdCLEVBQWdDO0FBQUMsY0FBTSxXQUFOLENBQWtCLE1BQU0sU0FBeEI7QUFBbUM7QUFDcEUsc0JBQWdCLENBQWhCOztBQUVBO0FBQ0EsVUFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLGFBQWEsT0FBYixDQUFxQixZQUFyQixDQUFYLENBQWY7QUFDQSxXQUFJLElBQUksRUFBUixJQUFjLFFBQWQsRUFBd0I7QUFDdEIsYUFBSyxlQUFMLENBQXFCLFNBQVMsRUFBVCxDQUFyQjtBQUNBLHdCQUFnQixnQkFBZ0IsU0FBUyxFQUFULEVBQWEsUUFBYixHQUF3QixTQUFTLEVBQVQsRUFBYSxRQUFyRTtBQUNEO0FBQ0QsZUFBUyxjQUFULENBQXdCLG9CQUF4QixFQUE4QyxTQUE5QyxHQUEwRCxhQUExRDtBQUNBLGVBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsU0FBN0MsR0FBeUQsYUFBekQ7QUFDQSxVQUFHLFNBQVMsY0FBVCxDQUF3QixlQUF4QixFQUF5QyxTQUF6QyxJQUFzRCxVQUF6RCxFQUFvRTtBQUNsRSxpQkFBUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDLFNBQXpDLEdBQXFELENBQXJEO0FBQ0Q7QUFDRjs7O29DQUVlLE8sRUFBUztBQUN2QjtBQUNBLFVBQUksV0FBVyxTQUFTLGFBQVQsa0JBQXNDLFFBQVEsS0FBOUMsUUFBd0QsR0FBdkU7QUFDQSxVQUFJLG9DQUNPLFFBQVEsS0FEZixnR0FHMEIsUUFIMUIsK0RBSzJCLFFBQVEsUUFMbkMseUJBTUksUUFBUSxRQU5aLDJCQUFKO0FBU0EsZUFBUyxjQUFULENBQXdCLFNBQXhCLEVBQW1DLGtCQUFuQyxDQUFzRCxXQUF0RCxFQUFtRSxhQUFuRTtBQUNEOzs7a0NBRWEsRSxFQUFJLFksRUFBYSxhLEVBQWMsYSxFQUFlLGlCLEVBQW1CLFUsRUFBVztBQUFBOztBQUV4RixVQUFHLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFILEVBQ0E7QUFDRSxpQkFBUyxjQUFULENBQXdCLGFBQXhCLEVBQXVDLGdCQUF2QyxDQUNFLE9BREYsRUFFRSxpQkFBTzs7QUFFTCxnQkFBTSxjQUFOOztBQUVBLGlCQUFLLFdBQUwsQ0FBaUIsS0FBakI7QUFDQTtBQUNBLGlCQUFLLGFBQUwsQ0FBbUIsS0FBbkIsRUFBMEIsRUFBMUIsRUFBOEIsWUFBOUIsRUFBNEMsYUFBNUMsRUFBMkQsYUFBM0QsRUFBMEUsaUJBQTFFLEVBQTZGLFVBQTdGO0FBQ0E7QUFDRCxTQVZIO0FBWUQ7QUFDRjs7O2tDQUdhLEssRUFBTyxFLEVBQUksWSxFQUFjLGEsRUFBZSxhLEVBQWUsaUIsRUFBbUIsVSxFQUFXOztBQUUvRjtBQUNBLFVBQUksUUFBSjs7QUFFQSxVQUFHLFNBQVMsY0FBVCxDQUF3QixTQUF4QixFQUFtQyxnQkFBbkMsQ0FBb0QsaUJBQXBELENBQXNFLE9BQXRFLEtBQWtGLFFBQXJGLEVBQThGO0FBQzVGLHdCQUFnQixDQUFoQjtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsU0FBekMsR0FBcUQsQ0FBckQ7QUFDRCxPQUhELE1BR0s7QUFDSCx3QkFBZ0IsU0FBUyxTQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDLFNBQXZELEVBQWlFLEVBQWpFLENBQWhCO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFHLE1BQU0sTUFBTixDQUFhLE9BQWIsSUFBd0IsUUFBM0IsRUFBb0M7O0FBRWxDO0FBQ0EsdUJBQWUsU0FBUyxNQUFNLE1BQU4sQ0FBYSxhQUFiLENBQTJCLGtCQUEzQixDQUE4QyxTQUF2RCxFQUFrRSxFQUFsRSxDQUFmOztBQUVBO0FBQ0EsWUFBRyxDQUFDLFNBQVMsY0FBVCxDQUF3QixNQUFNLE1BQU4sQ0FBYSxhQUFiLENBQTJCLHNCQUEzQixDQUFrRCxZQUFsRCxDQUErRCxTQUEvRCxDQUF4QixDQUFELElBQXVHLE1BQU0sTUFBTixDQUFhLFNBQWIsSUFBMEIsR0FBcEksRUFBd0k7O0FBR3RJLGNBQUcsS0FBSyxLQUFMLENBQVcsYUFBYSxPQUFiLENBQXFCLFlBQXJCLENBQVgsQ0FBSCxFQUFrRDtBQUNoRCx5QkFBYSxLQUFLLEtBQUwsQ0FBVyxhQUFhLE9BQWIsQ0FBcUIsWUFBckIsQ0FBWCxDQUFiO0FBQ0Q7O0FBR0QscUJBQVcsTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsU0FBL0QsQ0FBWCxJQUF3RjtBQUN0RixtQkFBTyxNQUFNLE1BQU4sQ0FBYSxhQUFiLENBQTJCLHNCQUEzQixDQUFrRCxZQUFsRCxDQUErRCxTQUEvRCxDQUQrRTtBQUV0RixpQkFBSyxNQUFNLE1BQU4sQ0FBYSxhQUFiLENBQTJCLHNCQUEzQixDQUFrRCxZQUFsRCxDQUErRCxLQUEvRCxDQUZpRjtBQUd0RixzQkFBVSxDQUg0RTtBQUl0RixzQkFBVTtBQUo0RSxXQUF4RjtBQU1BLHVCQUFhLE9BQWIsQ0FBcUIsWUFBckIsRUFBa0MsS0FBSyxTQUFMLENBQWUsVUFBZixDQUFsQzs7QUFFQTtBQUNBLGVBQUssY0FBTCxDQUFvQixhQUFwQixFQUFtQyxhQUFuQyxFQUFrRCxpQkFBbEQ7QUFDQTtBQUNBLDBCQUFnQixnQkFBZ0IsWUFBaEM7QUFDQSw4QkFBb0IsU0FBUyxTQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQXRELEVBQWdFLEVBQWhFLENBQXBCO0FBQ0EsMEJBQWdCLFNBQVMsU0FBUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDLFNBQWxELEVBQTRELEVBQTVELENBQWhCO0FBQ0EsOEJBQW9CLGdCQUFnQixhQUFwQztBQUNBLG1CQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQTdDLEdBQXlELGlCQUF6RDs7QUFFRjtBQUNDLFNBMUJELE1BMEJNLElBQUcsU0FBUyxjQUFULENBQXdCLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELFNBQS9ELENBQXhCLENBQUgsRUFBc0c7O0FBRTFHLGVBQUssU0FBUyxTQUFTLGNBQVQsQ0FBd0IsTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsU0FBL0QsQ0FBeEIsRUFBbUcsU0FBbkcsQ0FBNkcsc0JBQTdHLENBQW9JLFNBQTdJLEVBQXdKLEVBQXhKLENBQUw7O0FBRUE7QUFDQSxjQUFHLE1BQU0sTUFBTixDQUFhLFNBQWIsSUFBMEIsR0FBN0IsRUFBaUM7O0FBRS9CLHVCQUFXLEtBQUssQ0FBaEI7QUFDQSw0QkFBZ0IsZ0JBQWdCLFlBQWhDO0FBQ0EscUJBQVMsY0FBVCxDQUF3QixNQUFNLE1BQU4sQ0FBYSxhQUFiLENBQTJCLHNCQUEzQixDQUFrRCxZQUFsRCxDQUErRCxTQUEvRCxDQUF4QixFQUFtRyxTQUFuRyxDQUE2RyxzQkFBN0csQ0FBb0ksU0FBcEksR0FBZ0osUUFBaEo7O0FBRUEseUJBQWEsS0FBSyxLQUFMLENBQVcsYUFBYSxPQUFiLENBQXFCLFlBQXJCLENBQVgsQ0FBYjtBQUNBLHVCQUFXLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELFNBQS9ELENBQVgsSUFBd0Y7QUFDdEYscUJBQU8sTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsU0FBL0QsQ0FEK0U7QUFFdEYsbUJBQUssTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsS0FBL0QsQ0FGaUY7QUFHdEYsd0JBQVUsUUFINEU7QUFJdEYsd0JBQVU7QUFKNEUsYUFBeEY7QUFNQSx5QkFBYSxPQUFiLENBQXFCLFlBQXJCLEVBQWtDLEtBQUssU0FBTCxDQUFlLFVBQWYsQ0FBbEM7QUFDQSxpQkFBSyxjQUFMLENBQW9CLGFBQXBCLEVBQW1DLGFBQW5DLEVBQWtELGlCQUFsRDtBQUNBLGlCQUFLLG9CQUFMLENBQTBCLGFBQTFCLEVBQXlDLGFBQXpDLEVBQXdELGlCQUF4RDtBQUNGO0FBQ0MsV0FqQkQsTUFpQk0sSUFBRyxNQUFNLE1BQU4sQ0FBYSxTQUFiLElBQTBCLElBQTdCLEVBQWtDOztBQUVwQztBQUNBLGdCQUFHLE9BQUssQ0FBUixFQUFVO0FBQ1IsOEJBQWdCLGdCQUFnQixZQUFoQztBQUNBLGtCQUFJLFFBQVEsTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsU0FBL0QsQ0FBWjtBQUNBLGtCQUFJLEtBQUssU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQVQ7QUFDQSxpQkFBRyxVQUFILENBQWMsV0FBZCxDQUEwQixFQUExQjs7QUFFQSwyQkFBYSxLQUFLLEtBQUwsQ0FBVyxhQUFhLE9BQWIsQ0FBcUIsWUFBckIsQ0FBWCxDQUFiO0FBQ0EscUJBQU8sV0FBVyxNQUFNLE1BQU4sQ0FBYSxhQUFiLENBQTJCLHNCQUEzQixDQUFrRCxZQUFsRCxDQUErRCxTQUEvRCxDQUFYLENBQVA7QUFDQSwyQkFBYSxPQUFiLENBQXFCLFlBQXJCLEVBQWtDLEtBQUssU0FBTCxDQUFlLFVBQWYsQ0FBbEM7QUFDQTtBQUNBLG1CQUFLLGNBQUwsQ0FBb0IsYUFBcEIsRUFBbUMsYUFBbkMsRUFBa0QsaUJBQWxEO0FBQ0EsbUJBQUssb0JBQUwsQ0FBMEIsYUFBMUIsRUFBeUMsYUFBekMsRUFBd0QsaUJBQXhEOztBQUVGO0FBQ0MsYUFkRCxNQWNNLElBQUcsS0FBRyxDQUFOLEVBQVE7QUFDWiw4QkFBZ0IsZ0JBQWdCLFlBQWhDO0FBQ0EseUJBQVcsS0FBSyxDQUFoQjtBQUNBLHVCQUFTLGNBQVQsQ0FBd0IsTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsU0FBL0QsQ0FBeEIsRUFBbUcsU0FBbkcsQ0FBNkcsc0JBQTdHLENBQW9JLFNBQXBJLEdBQWdKLFFBQWhKO0FBQ0EsMkJBQWEsS0FBSyxLQUFMLENBQVcsYUFBYSxPQUFiLENBQXFCLFlBQXJCLENBQVgsQ0FBYjtBQUNBLHlCQUFXLE1BQU0sTUFBTixDQUFhLGFBQWIsQ0FBMkIsc0JBQTNCLENBQWtELFlBQWxELENBQStELFNBQS9ELENBQVgsSUFBd0Y7QUFDdEYsdUJBQU8sTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsU0FBL0QsQ0FEK0U7QUFFdEYscUJBQUssTUFBTSxNQUFOLENBQWEsYUFBYixDQUEyQixzQkFBM0IsQ0FBa0QsWUFBbEQsQ0FBK0QsS0FBL0QsQ0FGaUY7QUFHdEYsMEJBQVUsUUFINEU7QUFJdEYsMEJBQVU7QUFKNEUsZUFBeEY7QUFNQSwyQkFBYSxPQUFiLENBQXFCLFlBQXJCLEVBQWtDLEtBQUssU0FBTCxDQUFlLFVBQWYsQ0FBbEM7QUFDQSxtQkFBSyxjQUFMLENBQW9CLGFBQXBCLEVBQW1DLGFBQW5DLEVBQWtELGlCQUFsRDtBQUNBLG1CQUFLLG9CQUFMLENBQTBCLGFBQTFCLEVBQXlDLGFBQXpDLEVBQXdELGlCQUF4RDtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0QsZUFBUyxjQUFULENBQXdCLG9CQUF4QixFQUE4QyxTQUE5QyxHQUEwRCxhQUExRDtBQUNIOzs7b0NBR2UsYSxFQUFlLGEsRUFBZSxpQixFQUFrQjs7QUFFOUQsZUFBUyxjQUFULENBQXdCLGdCQUF4QixFQUEwQyxnQkFBMUMsQ0FDRSxPQURGLEVBRUUseUJBQWU7QUFDYixzQkFBYyxjQUFkO0FBQ0Esd0JBQWdCLFNBQVMsU0FBUyxjQUFULENBQXdCLG9CQUF4QixFQUE4QyxTQUF2RCxFQUFpRSxFQUFqRSxDQUFoQjtBQUNBLHdCQUFnQixTQUFTLFNBQVMsY0FBVCxDQUF3QixlQUF4QixFQUF5QyxTQUFsRCxFQUE0RCxFQUE1RCxDQUFoQjtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsU0FBekMsR0FBcUQsQ0FBckQ7QUFDQSw0QkFBb0IsU0FBUyxTQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQXRELEVBQWdFLEVBQWhFLENBQXBCOztBQUVBLFlBQUcsY0FBYyxNQUFkLENBQXFCLEVBQXJCLElBQTJCLE1BQTlCLEVBQXFDO0FBQ25DLDBCQUFnQixnQkFBZSxDQUEvQjtBQUNBLG1CQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsU0FBekMsR0FBcUQsYUFBckQ7QUFDRCxTQUhELE1BR00sSUFBRyxjQUFjLE1BQWQsQ0FBcUIsRUFBckIsSUFBMkIsT0FBM0IsSUFBc0MsZ0JBQWdCLENBQXpELEVBQTJEO0FBQy9EO0FBQ0EsbUJBQVMsY0FBVCxDQUF3QixlQUF4QixFQUF5QyxTQUF6QyxHQUFxRCxhQUFyRDtBQUNEOztBQUVELDRCQUFvQixnQkFBZ0IsYUFBcEM7QUFDQSxpQkFBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxTQUE3QyxHQUF5RCxpQkFBekQ7QUFDRCxPQW5CSDtBQXFCRDs7O3lDQUVvQixhLEVBQWUsYSxFQUFlLGlCLEVBQWtCOztBQUVuRSxlQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDLFNBQTlDLEdBQTBELGFBQTFEO0FBQ0EsMEJBQW9CLGdCQUFnQixhQUFwQzs7QUFFQSxlQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQTdDLEdBQXlELGlCQUF6RDtBQUNBLHNCQUFnQixTQUFTLFNBQVMsY0FBVCxDQUF3QixvQkFBeEIsRUFBOEMsU0FBdkQsRUFBaUUsRUFBakUsQ0FBaEI7QUFDQSxzQkFBZ0IsU0FBUyxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsU0FBbEQsRUFBNEQsRUFBNUQsQ0FBaEI7O0FBRUEsZUFBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxTQUE3QyxHQUF5RCxDQUF6RDtBQUNBLDBCQUFvQixTQUFTLFNBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsU0FBdEQsRUFBZ0UsRUFBaEUsQ0FBcEI7O0FBRUEsMEJBQW9CLGdCQUFnQixhQUFwQztBQUNBLGVBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsU0FBN0MsR0FBeUQsaUJBQXpEO0FBRUQ7OztnQ0FFVyxLLEVBQU07O0FBRWhCLFVBQUcsTUFBTSxNQUFOLENBQWEsT0FBYixJQUF3QixLQUEzQixFQUFpQzs7QUFFL0IsWUFBSSxXQUFXLE1BQU0sTUFBTixDQUFhLFlBQWIsQ0FBMEIsU0FBMUIsQ0FBZjs7QUFFQSxnQkFBTyxRQUFQOztBQUVFLGVBQUssYUFBTDtBQUNFLHFCQUFTLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdELFNBQWhELEdBQTRELHdDQUE1RDtBQUNBO0FBQ0YsZUFBSyxhQUFMO0FBQ0UscUJBQVMsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0QsU0FBaEQsR0FBNEQseUNBQTVEO0FBQ0E7QUFDRixlQUFLLGFBQUw7QUFDRSxxQkFBUyxjQUFULENBQXdCLHNCQUF4QixFQUFnRCxTQUFoRCxHQUE0RCwwQ0FBNUQ7QUFDQTtBQUNGLGVBQUssZUFBTDtBQUNFLHFCQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDLFNBQTlDLEdBQTBELHFDQUExRDtBQUNBO0FBQ0YsZUFBSyxlQUFMO0FBQ0UscUJBQVMsY0FBVCxDQUF3QixvQkFBeEIsRUFBOEMsU0FBOUMsR0FBMEQsc0NBQTFEO0FBQ0E7QUFDRixlQUFLLGVBQUw7QUFDRSxxQkFBUyxjQUFULENBQXdCLG9CQUF4QixFQUE4QyxTQUE5QyxHQUEwRCx1Q0FBMUQ7QUFDQTtBQUNGLGVBQUssY0FBTDtBQUNFLHFCQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQTdDLEdBQXlELHVDQUF6RDtBQUNBO0FBQ0YsZUFBSyxjQUFMO0FBQ0UscUJBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsU0FBN0MsR0FBeUQsd0NBQXpEO0FBQ0E7QUFDRixlQUFLLGNBQUw7QUFDRSxxQkFBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxTQUE3QyxHQUF5RCx5Q0FBekQ7QUFDRjtBQUNBLGVBQUssYUFBTDtBQUNFLHFCQUFTLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdELFNBQWhELEdBQTRELHlDQUE1RDtBQUNBO0FBQ0YsZUFBSyxhQUFMO0FBQ0UscUJBQVMsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0QsU0FBaEQsR0FBNEQseUNBQTVEO0FBQ0E7QUFDRixlQUFLLGFBQUw7QUFDRSxxQkFBUyxjQUFULENBQXdCLHNCQUF4QixFQUFnRCxTQUFoRCxHQUE0RCwyQ0FBNUQ7QUFDQTtBQUNGLGVBQUssY0FBTDtBQUNBLHFCQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLEVBQTZDLFNBQTdDLEdBQXlELHdDQUF6RDtBQUNFO0FBQ0YsZUFBSyxjQUFMO0FBQ0EscUJBQVMsY0FBVCxDQUF3QixtQkFBeEIsRUFBNkMsU0FBN0MsR0FBeUQseUNBQXpEO0FBQ0U7QUFDRixlQUFLLGNBQUw7QUFDQSxxQkFBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxTQUE3QyxHQUF5RCwwQ0FBekQ7QUFDRTtBQUNGO0FBQ0Usa0JBQU0sbUNBQU47QUFoREo7QUFrREg7QUFDRjs7O2tDQUVZO0FBQUE7O0FBRVgsUUFBRSxZQUFGLEVBQWdCLENBQWhCLEVBQW1CLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QztBQUFBLGVBQVMsT0FBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBN0MsRUFBMkUsS0FBM0U7QUFDQSxRQUFFLGVBQUYsRUFBbUIsQ0FBbkIsRUFBc0IsZ0JBQXRCLENBQXVDLE9BQXZDLEVBQWdEO0FBQUEsZUFBUyxPQUFLLE9BQUwsQ0FBYSxLQUFiLENBQVQ7QUFBQSxPQUFoRCxFQUE4RSxLQUE5RTtBQUVEOzs7NEJBRU8sSyxFQUFNOztBQUVaLFlBQU0sY0FBTjtBQUNBLFVBQUksa0JBQWtCLENBQXRCO0FBQ0EsVUFBSSxZQUFZLEVBQUUsV0FBRixFQUFlLEdBQWYsRUFBaEI7O0FBRUEsVUFBRyxFQUFFLFdBQUYsRUFBZSxHQUFmLEdBQXFCLE1BQXJCLEdBQTRCLENBQS9CLEVBQWlDO0FBQy9CLDZCQUFlLEtBQUssT0FBcEIsRUFBNkIsU0FBN0I7QUFDRDtBQUNGOzs7bUNBR2E7O0FBRVosVUFBSSw4SUFHTSxLQUFLLFNBSFgsdW1hQUFKO0FBd1JFLGFBQU8sU0FBUDtBQUNIOzs7OztBQUVIO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMTMtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgQVBJX0tFWV9GSVJFQkFTRSB9IGZyb20gJy4vaGVscGVycy9hcGlrZXlmaXJlYmFzZSc7XG5cblxuY2xhc3MgTXlBcHAge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5hcHBCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcHBcIilbMF07XG4gIH1cblxuICBzdGFydCgpe1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBhcGlLZXk6IEFQSV9LRVlfRklSRUJBU0UsXG4gICAgICBhdXRoRG9tYWluOiBcImNhc3Ryb2dhc3Ryby04NThjMy5maXJlYmFzZWFwcC5jb21cIixcbiAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY2FzdHJvZ2FzdHJvLTg1OGMzLmZpcmViYXNlaW8uY29tXCIsXG4gICAgICBzdG9yYWdlQnVja2V0OiBcImNhc3Ryb2dhc3Ryby04NThjMy5hcHBzcG90LmNvbVwiLFxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTA4NTg4NjMzMTg5XCJcbiAgICB9O1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcblxuICAgIC8vIGluaXQgSG9tZVBhZ2VcbiAgICBsZXQgaG9tZVBhZ2UgPSBuZXcgSG9tZVBhZ2UodGhpcy5hcHBCb2R5KTtcbiAgfVxuXG59XG5cbmxldCBteUFwcCA9IG5ldyBNeUFwcCgpO1xubXlBcHAuc3RhcnQoKTtcbiIsImV4cG9ydCBjb25zdCBBUElfS0VZX0ZJUkVCQVNFID0gXCJBSXphU3lDcEZncjg0ZXBUeVBPZFVHZ1ZNTHB4TERPRTRwQUdRem9cIjtcbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAyMC0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxMy0xMi0yMDE2XG4qL1xuXG5leHBvcnQgY2xhc3MgRmlyZUJhc2VIZWxwZXIge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRhdGFiYXNlIHNlcnZpY2VcbiAgICB0aGlzLmRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICB0aGlzLmRiRGF0YSA9IFtdO1xuXG4gICB9XG5cbiAgYWRkT2JqZWN0VG9CYXNlKHByb2R1Y3Qpe1xuXG4gICAgLy8gbCdlbnZveWVyIGRhbnMgbGEgY29sbGVjdGlvbiBcInByb2R1Y3RzXCIgc3VyIEZpcmViYXNlXG4gICAgdGhpcy5kYXRhYmFzZS5yZWYoJ2xvY2FsT3JkZXInKS5wdXNoKHByb2R1Y3QpO1xuICB9XG5cbiAgbG9hZERhdGEoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgIHRoaXMuZGF0YWJhc2UucmVmKCdsb2NhbE9yZGVyJykub24oJ2NoaWxkX2FkZGVkJywgKHNuYXBzaG90KT0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGlsZCBhZGRlZC0+ICcsIHNuYXBzaG90LnZhbCgpKTtcblxuICAgICAgICAgIHRoaXMuZGJEYXRhLnB1c2goc25hcHNob3QudmFsKCkpO1xuICAgICAgICAgIC8vIGxlcyB2YWxldXIgc29udCBjb250ZW51IGRhbnMgc25hcHNob3QudmFsKClcbiAgICAgICAgICAvLyBldCBwYXNzw6llIMOgIHVuZSBmb25jdGlvbiBwb3VyIMOqdHJlIHRyYWl0w6llIHBsdXMgbG9pbi4uLlxuICAgICAgICAgIC8vICBkaXNwbGF5UHJvZHVjdHNJbkxpc3Qoc25hcHNob3QpXG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLmRiRGF0YSlcbiAgICAgIH0pO1xuICAgIH0pXG5cbiAgfVxuICBcbn1cbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAyMS0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAyMS0xMi0yMDE2XG4qL1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi8uLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgRmlyZUJhc2VIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2ZpcmViYXNlSGVscGVyJztcblxuZXhwb3J0IGNsYXNzIEFkbWluUGFnZSB7XG5cbiAgY29uc3RydWN0b3IoYXBwQm9keSxmb3JtSW5wdXQpe1xuICAgIHRoaXMuYXBwQm9keSA9IGFwcEJvZHk7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1JbnB1dDtcbiAgICB0aGlzLnBhZ2VUaXRsZSA9IFwiQWRtaW5pc3RyYXRpb24gZGVzIGNvbW1hbmRlc1wiO1xuICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKClcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMuZkZpcmVCYXNlSGVscGVyKCk7XG4gIH1cblxuICBpbml0VUkoKXtcbiAgICAvLyByZW1vdmUgYWxsIHNlY3Rpb24gYmVmb3JlIGRpc3BsYXkgVUlcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxuICAgIH1cbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxuICAgIGxldCBwYWdlU2tlbGV0b24gPSBgXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPHA+JHt0aGlzLnBhZ2VUaXRsZX0gJHt0aGlzLmZvcm1EYXRhfSAhPC9wPlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZCYXJUb3BcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3M9XCJicmFuZC1sb2dvXCI+TG9nbzwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzcz1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiaG9tZVwiIGhyZWY9XCIjXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3RvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJhZG1pblBhZ2VcIiBocmVmPVwiI1wiPkFkbWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBpZD1cImhvbWVNb2JcIiBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlTW9iXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9uYXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXIgb3V0bGluZVwiPlxuICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXlMaXN0XCI+XG5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgYDtcbiAgICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcbiAgICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcbiAgICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xuICAgICAgfSk7XG4gICAgICAvL2xldCBsaXN0ID0gdGhpcy5saXN0T3JkZXJzXG4gICAgICAvL2NvbnNvbGUubG9nKGxpc3QpXG4gICAgICB0aGlzLmxvYWRFdmVudFVJKCk7XG4gICAgfVxuXG4gICAgbG9hZEV2ZW50VUkoKXtcblxuICAgICAgJChcIiNob21lXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgICAgJChcIiNob21lTW9iXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICAgIH1cblxuICAgIG9uTG9naW4oZXZlbnQpe1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmV3IEhvbWVQYWdlKHRoaXMuYXBwQm9keSk7XG4gICAgfVxuXG4gICAgZkZpcmVCYXNlSGVscGVyKCl7XG5cbiAgICAgIC8vV2UgaW5zdGFuY2lhdGUgdGhlIEZpcmViYXNlIGNsYXNzXG4gICAgICBsZXQgZGF0YUJhc2VDYXN0cm8gPSBuZXcgRmlyZUJhc2VIZWxwZXIoKTtcblxuICAgICAgZGF0YUJhc2VDYXN0cm8ubG9hZERhdGEoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpPT57XG5cbiAgICAgICAgICBsZXQgb3JkcmU7XG5cbiAgICAgICAgICBmb3IobGV0IGlkIGluIHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgIG9yZHJlID0gcmVzcG9uc2VbaWRdLm9yZGVyO1xuXG4gICAgICAgICAgICBsZXQgZGl2T3JkcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGl2T3JkcmUuaW5uZXJIVE1MID0gYExpc3RlIGQnYWNoYXQgbnVtw6lybyA6ICR7aWR9IDwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50IG1haWwgOiAke3Jlc3BvbnNlW2lkXS5tYWlsfTwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhbnRpdMOpIGRlIHBhbm5pZXJzIDogJHtyZXNwb25zZVtpZF0ubmJPcmRlcn08L2JyPmA7XG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ2lkJyxgbGlzdGUke2lkfWApXG4gICAgICAgICAgICBkaXZPcmRyZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2s7IG92ZXJmbG93OmF1dG87JylcbiAgICAgICAgICAgIGRpdk9yZHJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2UHJvZCcpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmFwcGVuZENoaWxkKGRpdk9yZHJlKVxuICAgICAgICAgICAgdmFyIGlkRGl2ID0gYGxpc3RlJHtpZH1gXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkcmVcIiwgaWQpXG5cbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiBvcmRyZSkge1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWREaXYpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5kZXNzaW5lclByb2R1aXQob3JkcmVbaV0pKTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdpdGggRmlyZWJhc2UgbG9hZERhdGEoKS0+ICcsIGVycilcbiAgICAgICAgfSlcblxuICAgICAgLy9jb25zb2xlLmxvZyhsaXN0T3JkZXJzKVxuXG4gICAgfVxuXG4gICAgZGVzc2luZXJQYW5pZXIobGlzdE9yZGVycykge1xuICAgICAgLy8gU3VwcHJpbWVyIGNvbnRlbnUgcGFuaWVyXG4gICAgICB2YXIgbGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpO1xuICAgICAgd2hpbGUgKGxpc3RlLmNoaWxkcmVuLmxlbmd0aD4wKSB7bGlzdGUucmVtb3ZlQ2hpbGQobGlzdGUubGFzdENoaWxkKX1cbiAgICAvLyAgcHJpY2VDb21tYW5kZSA9IDA7XG5cbiAgICAgIC8vIEFmZmljaGVyIGxlcyDDqWzDqW1lbnRzXG5cbiAgICAgIGZvcihsZXQgaWQgaW4gbGlzdE9yZGVycykge1xuICAgICAgICB0aGlzLmRlc3NpbmVyUHJvZHVpdChsaXN0T3JkZXJzWzBdLm9yZGVyW2lkXSk7XG4gICAgICAgIC8vcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBsaXN0T3JkZXJzW2lkXS5wcmljZVBybyAqIGxpc3RPcmRlcnNbaWRdLnRpbWVzUHJvIDtcbiAgICAgIH1cbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICAgIC8vIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID09IFwiUXVhbnRpdMOpXCIpe1xuICAgICAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICAvLyB9O1xuICAgIH1cblxuICAgIGRlc3NpbmVyUHJvZHVpdChvcmRyZSkge1xuICAgICAgLy8gTGlyZSBsZSBzcmMgZHUgcHJvZHVpdCAoc3RvY2vDqSBkYW5zIGxlIGh0bWwpXG4gICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBpZD1cIiR7b3JkcmUuaWRQcm99XCIgY2xhc3M9XCJjb2wtMTA1XCI+XG4gICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICA8aW1nIGlkPVwiaW1nUGFuMVwiIHNyYz1cIiR7b3JkcmUuc3JjfVwiPlxuICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gJHtvcmRyZS5wcmljZVByb30gPC9wPlxuICAgICAgICAgPHA+JHtvcmRyZS50aW1lc1Byb308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG59XG4iLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMTMtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cblxuaW1wb3J0IHsgRmlyZUJhc2VIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2ZpcmViYXNlSGVscGVyJztcbmltcG9ydCB7IEFkbWluUGFnZSB9IGZyb20gJy4uLy4uL3BhZ2VzL2FkbWluL2FkbWluJztcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcblxuICBjb25zdHJ1Y3RvcihhcHBCb2R5KXtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5XG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnSGVsbG8gd29ybGQhIEhlbGxvIFJvYmVydG8nO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgdGhpcy5mRmlyZUJhc2VIZWxwZXIoKTtcbiAgICB0aGlzLmVtcHR5Qm94RigpO1xuICB9XG5cblxuICBpbml0VUkoKXtcblxuICAgIC8vSW5pY2lhdGUgdGhlIHZhcmlhYmxlIFEgdG8gdGhlIHZhbHVlIGluIHRoZSBodG1sXG4gICAgdmFyIHZRO1xuICAgIC8vSW5pY2lhdGUgdGhlIHZhcmlhYmxlIHByaWNlUHJvZHVjdFxuICAgIHZhciBwcmljZVByb2R1Y3Q7XG4gICAgdmFyIHByaWNlQ29tbWFuZGU7XG4gICAgdmFyIHRpbWVzQ29tbWFuZGU7XG4gICAgdmFyIHRvdGFsUHJpY2VQYWNrYWdlO1xuICAgIHZhciBsb2NhbE9yZGVyID0ge307XG5cblxuICAgIC8vIHJlbW92ZSBhbGwgc2VjdGlvbiBiZWZvcmUgZGlzcGxheSBVSVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXG4gICAgfVxuICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIuYnV0dG9uLWNvbGxhcHNlXCIpLnNpZGVOYXYoKTtcbiAgICB9KVxuICAgIC8vIGNyZWF0ZSBwYWdlIHNrZWxldG9uXG4gICAgbGV0IHBhZ2VTa2VsZXRvbiA9IHRoaXMuc2tlbGV0b25CYXNlKCk7XG5cbiAgICAvLyBhZGQgcGFnZSBza2VsZXRvbiBpbiBib2R5XG4gICAgdGhpcy5hcHBCb2R5Lmluc2VydEFkamFjZW50SFRNTCggJ2FmdGVyYmVnaW4nLCBwYWdlU2tlbGV0b24gKVxuICAgIHRoaXMubG9hZEV2ZW50VUkoKVxuICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgIHRoaXMuY2hvb3NlUHJvZHVjdCh2USxwcmljZVByb2R1Y3QscHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcilcbiAgICB0aGlzLmNsaWNrQ29tbWFuZGVRdChwcmljZUNvbW1hbmRlLHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKVxuXG4gICAgTWF0ZXJpYWxpemUudG9hc3QoJ0kgYW0gYSB0b2FzdCEnLCA0MDAwKSAvLyA0MDAwIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgdG9hc3RcblxuICB9XG5cbiAgZkZpcmVCYXNlSGVscGVyKCl7XG5cbiAgICAvL1dlIGluc3RhbmNpYXRlIHRoZSBGaXJlYmFzZSBjbGFzc1xuICAgIGxldCBkYXRhQmFzZUNhc3RybyA9IG5ldyBGaXJlQmFzZUhlbHBlcigpO1xuXG4gICAgLy9JbiB0aGUgY2FzZSB0aGUgdXNlciBzZW5kIHRoZSBvcmRlciB3ZSBzYXZlIGluIHRoZSBkYXRhYmFzZVxuICAgICQoXCIjc2VuZE9yZGVyXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIHNFbWFpbCA9ICQoJyN0eHRFbWFpbCcpLnZhbCgpO1xuICAgICAgLy8gQ2hlY2tpbmcgRW1wdHkgRmllbGRzXG4gICAgICBpZiAoJC50cmltKHNFbWFpbCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYWxlcnQoJ1JlbXBsaXNzZXogbGUgY2hhbXAgZW1haWwnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlRW1haWwoc0VtYWlsKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIE1hdGVyaWFsaXplLnRvYXN0KCdFbWFpbCBvaycsIDQwMDApIC8vIDQwMDAgaXMgdGhlIGR1cmF0aW9uIG9mIHRoZSB0b2FzdFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBhbGVydCgnSW52YWxpZCBFbWFpbCBBZGRyZXNzJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICBjb25zb2xlLmxvZyhjb21Mb2NhbFN0b3JhZ2UpXG4gICAgICBkYXRhQmFzZUNhc3Ryby5hZGRPYmplY3RUb0Jhc2Uoe1xuICAgICAgICBvcmRlcjogY29tTG9jYWxTdG9yYWdlLFxuICAgICAgICBuYk9yZGVyOiAkKFwiI3RpbWVzQ29tbWFuZGVcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICBtYWlsOiAkKFwiaW5wdXRbbmFtZT0nZW1haWwnXVwiKS52YWwoKVxuICAgICAgfSk7XG5cbiAgICAgIGFsZXJ0KFwiQmllbiBlbnZvecOpXCIpXG4gICAgfSlcbiAgfVxuXG4gIGVtcHR5Qm94Rigpe1xuICAgICQoXCIjZW1wdHlCb3hcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsT3JkZXJcIik7XG4gICAgICB0aGlzLmluaXRVSSgpO1xuXG4gICAgfSlcbiAgfVxuXG4gIHZhbGlkYXRlRW1haWwoc0VtYWlsKSB7XG4gICAgdmFyIGZpbHRlciA9IC9eW1xcdy0uK10rQFthLXpBLVowLTkuLV0rLlthLXpBLXowLTldezIsNH0kLztcblxuICAgIGlmIChmaWx0ZXIudGVzdChzRW1haWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpIHtcbiAgICAvLyBTdXBwcmltZXIgY29udGVudSBwYW5pZXJcbiAgICB2YXIgbGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpO1xuICAgIHdoaWxlIChsaXN0ZS5jaGlsZHJlbi5sZW5ndGg+MSkge2xpc3RlLnJlbW92ZUNoaWxkKGxpc3RlLmxhc3RDaGlsZCl9XG4gICAgcHJpY2VDb21tYW5kZSA9IDA7XG5cbiAgICAvLyBBZmZpY2hlciBsZXMgw6lsw6ltZW50c1xuICAgIHZhciBwcm9kdWl0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICBmb3IobGV0IGlkIGluIHByb2R1aXRzKSB7XG4gICAgICB0aGlzLmRlc3NpbmVyUHJvZHVpdChwcm9kdWl0c1tpZF0pO1xuICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBwcm9kdWl0c1tpZF0ucHJpY2VQcm8gKiBwcm9kdWl0c1tpZF0udGltZXNQcm8gO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID09IFwiUXVhbnRpdMOpXCIpe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwgPSAxO1xuICAgIH07XG4gIH1cblxuICBkZXNzaW5lclByb2R1aXQocHJvZHVpdCkge1xuICAgIC8vIExpcmUgbGUgc3JjIGR1IHByb2R1aXQgKHN0b2Nrw6kgZGFucyBsZSBodG1sKVxuICAgIHZhciBzcmNJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tkYXRhLWlkPSR7cHJvZHVpdC5pZFByb31dYCkuc3JjO1xuICAgIHZhciBwcm9kdWN0VG9MaXN0ID0gYFxuICAgIDxkaXYgaWQ9XCIke3Byb2R1aXQuaWRQcm99XCIgY2xhc3M9XCJjb2wtMTA1XCI+XG4gICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgIDxpbWcgaWQ9XCJpbWdQYW4xXCIgc3JjPVwiJHtzcmNJbWFnZX1cIj5cbiAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gJHtwcm9kdWl0LnByaWNlUHJvfSA8L3A+XG4gICAgICAgPHA+JHtwcm9kdWl0LnRpbWVzUHJvfTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXlMaXN0JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwcm9kdWN0VG9MaXN0KTtcbiAgfVxuXG4gIGNob29zZVByb2R1Y3QodlEsIHByaWNlUHJvZHVjdCxwcmljZUNvbW1hbmRlLHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKXtcblxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0TGlzdCcpKVxuICAgIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0TGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGV2ZW50PT57XG5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgdGhpcy5jbGlja0ZpZ3VyZShldmVudCk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICB0aGlzLmNsaWNrUGx1c0xlc3MoZXZlbnQsIHZRLCBwcmljZVByb2R1Y3QsIHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKTtcbiAgICAgICAgICAvL3RoaXMuZGVzc2luZXJQYW5pZXIoKTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG5cbiAgY2xpY2tQbHVzTGVzcyhldmVudCwgdlEsIHByaWNlUHJvZHVjdCwgcHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UsIGxvY2FsT3JkZXIpe1xuXG4gICAgICAvL0luaWNpYXRlIHRoZSBxdWFudGl0eSB0byAwXG4gICAgICB2YXIgcVByb2R1Y3Q7XG5cbiAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXlMaXN0JykubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSBcIkZJR1VSRVwiKXtcbiAgICAgICAgcHJpY2VDb21tYW5kZSA9IDA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gMTtcbiAgICAgIH1lbHNle1xuICAgICAgICBwcmljZUNvbW1hbmRlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCwxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vSWYgdGhlIGNsaWNrIGlzIGluIGEgYnV0dG9uXG4gICAgICBpZihldmVudC50YXJnZXQudGFnTmFtZSA9PSAnQlVUVE9OJyl7XG5cbiAgICAgICAgLy9Db252ZXJ0IHRoZSBodG1sIHRleHQgaW4gYW4gaW50ZWdlciBudW1iZXIgc28gd2UgY2FuIG9wZXJhdGUgd2l0aCBpdFxuICAgICAgICBwcmljZVByb2R1Y3QgPSBwYXJzZUludChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MLCAxMCk7XG5cbiAgICAgICAgLy9JZiB0aGUgcHJvZHVjdCBkb24ndCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICBpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkgJiYgZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnKycpe1xuXG5cbiAgICAgICAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSkpe1xuICAgICAgICAgICAgbG9jYWxPcmRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV0gPSB7XG4gICAgICAgICAgICBpZFBybzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgIHNyYzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ3NyYycpLFxuICAgICAgICAgICAgdGltZXNQcm86IDEsXG4gICAgICAgICAgICBwcmljZVBybzogcHJpY2VQcm9kdWN0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsT3JkZXJcIixKU09OLnN0cmluZ2lmeShsb2NhbE9yZGVyKSk7XG5cbiAgICAgICAgICAvL0FkZCB0aGUgaHRtbCBjb250ZW50IHRvIHRoZSBkaXYgYnV5TGlzdFxuICAgICAgICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgICAgICAgIC8vQ2FsY3VsYXRlIGFuZCBwcmljZXMgYW5kIHF1YW50aXRpZXNcbiAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSArIHByaWNlUHJvZHVjdDtcbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCwxMClcbiAgICAgICAgICB0aW1lc0NvbW1hbmRlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwcmljZUNvbW1hbmRlICogdGltZXNDb21tYW5kZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcblxuICAgICAgICAvL0lmIHRoZSBwcm9kdWN0IGV4aXN0IGluIHRoZSBsaXN0XG4gICAgICAgIH1lbHNlIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpKXtcblxuICAgICAgICAgIHZRID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MLCAxMCk7XG5cbiAgICAgICAgICAvL0lmIHRoZSBjbGljayBpcyBvbiB0aGUgcGx1cyBidXR0b25cbiAgICAgICAgICBpZihldmVudC50YXJnZXQuaW5uZXJIVE1MID09ICcrJyl7XG5cbiAgICAgICAgICAgIHFQcm9kdWN0ID0gdlEgKyAxO1xuICAgICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBwcmljZVByb2R1Y3Q7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKS5sYXN0Q2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBxUHJvZHVjdDtcblxuICAgICAgICAgICAgbG9jYWxPcmRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICAgICAgICAgIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV0gPSB7XG4gICAgICAgICAgICAgIGlkUHJvOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxuICAgICAgICAgICAgICBzcmM6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbiAgICAgICAgICAgICAgdGltZXNQcm86IHFQcm9kdWN0LFxuICAgICAgICAgICAgICBwcmljZVBybzogcHJpY2VQcm9kdWN0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuICAgICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAvL0lmIHRoZSBjbGljayBpcyBvbiB0aGUgbGVzcyBidXR0b25cbiAgICAgICAgICB9ZWxzZSBpZihldmVudC50YXJnZXQuaW5uZXJIVE1MID09ICctLScpe1xuXG4gICAgICAgICAgICAgIC8vaWYgdGhlIHF1YW50aXR5IGlzIDEgd2UgdGFrZSBvZmYgdGhlIGRpdiBvZiB0aGUgcHJvZHVjdCBmcm9tIHRoZSBwcm9kdWN0TGlzdFxuICAgICAgICAgICAgICBpZih2UT09PTEpe1xuICAgICAgICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlIC0gcHJpY2VQcm9kdWN0O1xuICAgICAgICAgICAgICAgIHZhciBpZFBybyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgdmFyIHByID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRQcm8pO1xuICAgICAgICAgICAgICAgIHByLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHIpO1xuXG4gICAgICAgICAgICAgICAgbG9jYWxPcmRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbG9jYWxPcmRlcltldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsT3JkZXJcIixKU09OLnN0cmluZ2lmeShsb2NhbE9yZGVyKSk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhsb2NhbE9yZGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcblxuICAgICAgICAgICAgICAvL2lmIHRoZSBxdWFudGl0eSBpcyBtb3JlIHRoYW4gMSB3ZSB0YWtlIG9uZSB1bml0eSBmcm9tIHRoZSBxdWFudGl0eSBvZiB0aGUgcHJvZHVjdFxuICAgICAgICAgICAgICB9ZWxzZSBpZih2UT4xKXtcbiAgICAgICAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSAtIHByaWNlUHJvZHVjdDtcbiAgICAgICAgICAgICAgICBxUHJvZHVjdCA9IHZRIC0gMTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKS5sYXN0Q2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBxUHJvZHVjdDtcbiAgICAgICAgICAgICAgICBsb2NhbE9yZGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xuICAgICAgICAgICAgICAgIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV0gPSB7XG4gICAgICAgICAgICAgICAgICBpZFBybzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgICAgIHNyYzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ3NyYycpLFxuICAgICAgICAgICAgICAgICAgdGltZXNQcm86IHFQcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgcHJpY2VQcm86IHByaWNlUHJvZHVjdFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFRvdGFsQ29tbWFuZGUocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xuICAgIH1cblxuXG4gICAgY2xpY2tDb21tYW5kZVF0KHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKXtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1hbmRlQ29sdW1uJykuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgZXZlbnRDb21tYW5kZT0+e1xuICAgICAgICAgIGV2ZW50Q29tbWFuZGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCwxMClcbiAgICAgICAgICB0aW1lc0NvbW1hbmRlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwgPSAxO1xuICAgICAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MLDEwKVxuXG4gICAgICAgICAgaWYoZXZlbnRDb21tYW5kZS50YXJnZXQuaWQgPT0gJ3BsdXMnKXtcbiAgICAgICAgICAgIHRpbWVzQ29tbWFuZGUgPSB0aW1lc0NvbW1hbmRlICsxO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwgPSB0aW1lc0NvbW1hbmRlO1xuICAgICAgICAgIH1lbHNlIGlmKGV2ZW50Q29tbWFuZGUudGFyZ2V0LmlkID09ICdtb2lucycgJiYgdGltZXNDb21tYW5kZSA+IDEpe1xuICAgICAgICAgICAgdGltZXNDb21tYW5kZS0tO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVzQ29tbWFuZGUnKS5pbm5lckhUTUwgPSB0aW1lc0NvbW1hbmRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gdG90YWxQcmljZVBhY2thZ2U7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICByZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSl7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwgPSBwcmljZUNvbW1hbmRlO1xuICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwcmljZUNvbW1hbmRlICogdGltZXNDb21tYW5kZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gdG90YWxQcmljZVBhY2thZ2U7XG4gICAgICBwcmljZUNvbW1hbmRlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCwxMClcbiAgICAgIHRpbWVzQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCwxMClcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gMTtcbiAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MLDEwKVxuXG4gICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHByaWNlQ29tbWFuZGUgKiB0aW1lc0NvbW1hbmRlO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gdG90YWxQcmljZVBhY2thZ2U7XG5cbiAgICB9XG5cbiAgICBjbGlja0ZpZ3VyZShldmVudCl7XG5cbiAgICAgIGlmKGV2ZW50LnRhcmdldC50YWdOYW1lID09ICdJTUcnKXtcblxuICAgICAgICB2YXIgdHlwZVByb2QgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICAgICAgc3dpdGNoKHR5cGVQcm9kKXtcblxuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMWJyJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkJyYW5keScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBicmFuZHkgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syYnInOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQnJhbmR5JykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBkZXV4acOobWUgYnJhbmR5IGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM2JyJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkJyYW5keScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBicmFuZHkgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxd2luZSc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZXaW5lJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBwcmVtaWVyIHZpbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJ3aW5lJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZldpbmUnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIGRldXhpw6htZSB2aW4gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szd2luZSc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZXaW5lJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIHZpbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazFvaWwnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmT2lsJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBwcmVtaWVyIGh1aWxlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMm9pbCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZPaWwnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIGRldXhpw6htZSBodWlsZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNvaWwnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmT2lsJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIGh1aWxlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazFjaCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZDaGVlc2UnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgaHVpbGUgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syY2gnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQ2hlZXNlJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBwcmVtaWVyIGZyb21hZ2UgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szY2gnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQ2hlZXNlJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIGZyb21hZ2UgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxaGFtJzpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZIYW0nKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgamFtYm9uIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMmhhbSc6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmSGFtJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBkZXV4acOobWUgamFtYm9uIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM2hhbSc6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmSGFtJykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIGphbWJvbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYWxlcnQoXCJDZSBwcm9kdWl0IG4nYSBwYXMgZGUgZGVzY3JpcHRpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2FkRXZlbnRVSSgpe1xuXG4gICAgJChcIiNhZG1pblBhZ2VcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLm9uTG9naW4oZXZlbnQpLCBmYWxzZSk7XG4gICAgJChcIiNhZG1pblBhZ2VNb2JcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLm9uTG9naW4oZXZlbnQpLCBmYWxzZSk7XG5cbiAgfVxuXG4gIG9uTG9naW4oZXZlbnQpe1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB2YWxpZGF0aW9uSW5wdXQgPSAwXG4gICAgbGV0IGZvcm1JbnB1dCA9ICQoJyN0eHRFbWFpbCcpLnZhbCgpO1xuXG4gICAgaWYoJCgnI3R4dEVtYWlsJykudmFsKCkubGVuZ3RoPjApe1xuICAgICAgbmV3IEFkbWluUGFnZSggdGhpcy5hcHBCb2R5LCBmb3JtSW5wdXQpO1xuICAgIH1cbiAgfVxuXG5cbiAgc2tlbGV0b25CYXNlKCl7XG5cbiAgICBsZXQgdlNrZWxldG9uID0gYFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGltZyBjbGFzcz1cIm1hdGVyaWFsYm94ZWRcIiB3aWR0aD1cIjEwMjRweFwiIGhlaWdodD1cIjIwMHB4XCIgc3JjPVwiLi9zcmMvaW1hZ2VzL3ZpbmFzMi5qcGVnXCI+XG4gICAgICAgIDxoMT4ke3RoaXMucGFnZVRpdGxlfTwvaDE+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZCYXJUb3BcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3M9XCJicmFuZC1sb2dvXCI+TG9nbzwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzcz1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3RvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJhZG1pblBhZ2VcIiBocmVmPVwiI1wiPkFkbWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlTW9iXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kT3JkZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cInNlbmRPcmRlclwiPkVudm95ZXIgY29tbWFuZGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cImVtcHR5Qm94XCI+VmlkZXIgbGUgY29mZnJlPC9idXR0b24+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD48aW5wdXQgaWQ9XCJ0eHRFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ2b3RyZWVtYWlsLmNoXCIvPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyIG91dGxpbmVcIj5cbiAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV5TGlzdFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwNVwiIGlkPVwiY29tbWFuZGVDb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIGNvZmZyZTwvcD48L2JyPlxuICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0b3RhbFByaWNlQ29tbWFuZGVcIj48L3A+PC9icj5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwidGltZXNDb21tYW5kZVwiPlF1YW50aXTDqTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwidG90YWxQcmljZVBhY2thZ2VcIj48L3A+PC9icj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0TGlzdFwiID5cblxuPCEtLUZpcnN0IGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5CcmFuZHk8L3A+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2sxYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYnJhbmR5MS5wbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0IxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwibW9pbnNCMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2syYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYnJhbmR5LWNhc2FqdWFuYS0xMDAtYW5vcy1yZXNlcnZhLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQjJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQjJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2szYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYmFyYmFkaWxsby5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0IzXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0IzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmQnJhbmR5XCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbjwhLS1TZWNvbmQgbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPlZpbm9zPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMXdpbmVcIiBzcmM9XCIuL3NyYy9pbWFnZXMvdmluMS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzFcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMndpbmVcIiBzcmM9XCIuL3NyYy9pbWFnZXMvdmluMi5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2szd2luZVwiIHNyYz1cIi4vc3JjL2ltYWdlcy92aW4zLmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNXM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNXM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmV2luZVwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG48IS0tVGhpcmQgbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPkFjZWl0ZSBkZSBvbGl2YTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxb2lsXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL1JPWEFORSBBUkJFUVVJTkFfNTAwXzAyLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNPMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNPMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJvaWxcIiBzcmM9XCIuL3NyYy9pbWFnZXMvbWFyaWEtZGUtbGEtby1zZWxlY2Npb24tZ291cm1ldC01MDAtbWwuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc08yXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c08yXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM29pbFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9ST1hBTkUgQVJCRVFVSU5BXzUwMF8wMi5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zTzNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzTzNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwIGlkPVwidGV4dEV4cGxpY2F0aWZPaWxcIj48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuICA8IS0tRm91cnRoIGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5RdWVzbzwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxY2hcIiBzcmM9XCIuL3NyYy9pbWFnZXMvY29nbWFuLXNlbWljdXJhZG8tcHVyby1vdmVqYS5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9xdWVzby1jdXJhZG8tYWwtcm9tZXJvLXRvbWVsbG9zby5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoMlwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazNjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9tb250YWx2by1jdXJhZG8tZW4tYWNlaXRlLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNDaDNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQ2gzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmQ2hlZXNlXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbjwhLS1GaWZ0aCBsaW5lIG9mIHByb2R1Y3RzLS0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+SmFtb24gaWLDqXJpY288L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMWhhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjEuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gxXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMmhhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjIuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gyXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM2hhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjMuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gzXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2ICBpZD1cImltZ0NsaWNrMVwiIGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmSGFtXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+PHA+Y29sLTI8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPjxwPmNvbC0yPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj48cD5jb2wtMjwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPjxwPmNvbC0zPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj48cD5jb2wtMzwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPjxwPmNvbC00PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj48cD5jb2wtMjwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNVwiPjxwPmNvbC01PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5jb2wtMTwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPjxwPmNvbC02PC9wPjwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YSBjbGFzcz1cImJ0blwiIG9uY2xpY2s9XCJNYXRlcmlhbGl6ZS50b2FzdCgnSSBhbSBhIHRvYXN0JywgNDAwMClcIj5Ub2FzdCE8L2E+XG4gICAgICAgICAgICA8YnV0dG9uPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMScgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnIGNsYXNzPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+SWLDqXJpY288L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlBhdGEgbmVncmE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkphYnVnbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFRyaWdnZXIgLS0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjInIGNsYXNzPVwiY29sIHMyXCI+SHVpbGUgZCdvbGl2ZTwvYT5cblxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gU3RydWN0dXJlIC0tPlxuICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd24yJyBjbGFzcz0nZHJvcGRvd24tY29udGVudCc+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+Tm9ybWFsPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5WaXJnZW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlZpcmdlbiBleHRyYTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd24zJyBjbGFzcz1cImNvbCBzMlwiPkZyb21hZ2UgbWFuY2hlZ288L2E+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMycgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkN1cmFkbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+U2VtaWN1cmFkbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VGllcm5vPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFRyaWdnZXIgLS0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjQnPkNvbmZpc3NlcmllPC9hPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XG4gICAgICAgICAgICAgICAgPHVsIGlkPSdkcm9wZG93bjQnIGNsYXNzPSdkcm9wZG93bi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5UdXJyb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlNvYmFvczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+UG9sdm9yb25lczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd241Jz5CcmFuZHkgZGUgSmVyZXo8L2E+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duNScgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkxBIEJPVEEgREUgQlJBTkRZIE7CuiAyOTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VE9SUkVTIEpBSU1FIEk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlBFSU5BRE8gU09MRVJBIDEwMCBBw5FPUzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5gO1xuICAgICAgcmV0dXJuIHZTa2VsZXRvbjtcbiAgfVxufVxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgZGVzc2luZXJQYW5pZXIoKTtcbi8vIH1cbiJdfQ==
