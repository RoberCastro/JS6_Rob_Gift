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
          console.log('child added-> ', snapshot.val());

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
      var pageSkeleton = '\n      <section>\n        <form>\n          <nav class="navBarTop">\n           <div class="nav-wrapper" class="navBarTop" >\n             <a href="#!" class="brand-logo">Logo</a>\n             <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>\n             <ul class="right hide-on-med-and-down">\n               <li><a id="home" href="#">Inicio</a></li>\n               <li><a href="#">Productos</a></li>\n               <li><a href="#">Quienes somos</a></li>\n               <li><a href="#">Contacto</a></li>\n               <li><a id="adminPage" href="#">Admin</a></li>\n             </ul>\n             <ul class="side-nav" id="mobile-demo">\n               <li><a id="homeMob" href="#">Inicio</a></li>\n               <li><a href="#">Productos</a></li>\n               <li><a href="#">Quienes somos</a></li>\n               <li><a href="#">Contacto</a></li>\n               <li><a id="adminPageMob" href="#">Admin</a></li>\n             </ul>\n           </div>\n         </nav>\n        </form>\n        <h1 id="time"></h1>\n        <p>' + this.pageTitle + ' ' + this.formData + ' !</p>\n      </section>\n      ';
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

      //We instanciate the Firebase class
      var dataBaseCastro = new _firebaseHelper.FireBaseHelper();

      dataBaseCastro.loadData().then(function (response) {
        //console.log('database ready->',JSON.stringify(response))
        //console.log(response[0].order)
        var listOrders = void 0;

        response[0].order.forEach(function (element) {
          console.log(element);
        });
      }).catch(function (err) {
        console.log('Error with Firebase loadData()-> ', err);
      });

      //console.log(listOrders)
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
      console.log($("#totalPriceCommande")[0].innerHTML);
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
          alert('Remplissez le champ email');
        }
        if (_this.validateEmail(sEmail)) {
          Materialize.toast('Email ok', 4000); // 4000 is the duration of the toast
        } else {
          alert('Invalid Email Address');
          e.preventDefault();
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
        console.log('load AdminPage');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvaGVscGVycy9hcGlrZXlmaXJlYmFzZS5qcyIsImRldi9hcHAvaGVscGVycy9maXJlYmFzZUhlbHBlci5qcyIsImRldi9hcHAvcGFnZXMvYWRtaW4vYWRtaW4uanMiLCJkZXYvYXBwL3BhZ2VzL2hvbWUvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O3FqQkNBQTs7Ozs7Ozs7O0FBT0E7O0FBQ0E7Ozs7SUFHTSxLO0FBRUosbUJBQWE7QUFBQTs7QUFDWCxTQUFLLE9BQUwsR0FBZSxTQUFTLG9CQUFULENBQThCLEtBQTlCLEVBQXFDLENBQXJDLENBQWY7QUFDRDs7Ozs0QkFFTTs7QUFFTDtBQUNBLFVBQUksU0FBUztBQUNYLGdEQURXO0FBRVgsb0JBQVksb0NBRkQ7QUFHWCxxQkFBYSwyQ0FIRjtBQUlYLHVCQUFlLGdDQUpKO0FBS1gsMkJBQW1CO0FBTFIsT0FBYjtBQU9BLGVBQVMsYUFBVCxDQUF1QixNQUF2Qjs7QUFFQTtBQUNBLFVBQUksV0FBVyxtQkFBYSxLQUFLLE9BQWxCLENBQWY7QUFDRDs7Ozs7O0FBSUgsSUFBSSxRQUFRLElBQUksS0FBSixFQUFaO0FBQ0EsTUFBTSxLQUFOOzs7Ozs7OztBQ3BDTyxJQUFNLDhDQUFtQix5Q0FBekI7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7SUFRYSxjLFdBQUEsYztBQUVYLDRCQUFhO0FBQUE7O0FBRVg7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsU0FBUyxRQUFULEVBQWhCO0FBQ0EsU0FBSyxNQUFMLEdBQWMsRUFBZDtBQUVBOzs7O29DQUVjLE8sRUFBUTs7QUFFdEI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLElBQWhDLENBQXFDLE9BQXJDO0FBQ0Q7OzsrQkFFUztBQUFBOztBQUNSLGFBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVB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QUFBQSxlQUFTLE9BQUssT0FBTCxDQUFhLEtBQWIsQ0FBVDtBQUFBLE9BQTdDLEVBQTJFLEtBQTNFO0FBQ0EsUUFBRSxlQUFGLEVBQW1CLENBQW5CLEVBQXNCLGdCQUF0QixDQUF1QyxPQUF2QyxFQUFnRDtBQUFBLGVBQVMsT0FBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBaEQsRUFBOEUsS0FBOUU7QUFFRDs7OzRCQUVPLEssRUFBTTs7QUFFWixZQUFNLGNBQU47QUFDQSxVQUFJLGtCQUFrQixDQUF0QjtBQUNBLFVBQUksWUFBWSxFQUFFLFdBQUYsRUFBZSxHQUFmLEVBQWhCOztBQUVBLFVBQUcsRUFBRSxXQUFGLEVBQWUsR0FBZixHQUFxQixNQUFyQixHQUE0QixDQUEvQixFQUFpQztBQUMvQixnQkFBUSxHQUFSLENBQVksZ0JBQVo7QUFDQSw2QkFBZSxLQUFLLE9BQXBCLEVBQTZCLFNBQTdCO0FBQ0Q7QUFDRjs7O21DQUdhOztBQUVaLFVBQUksOElBR00sS0FBSyxTQUhYLHVtYUFBSjtBQXdSRSxhQUFPLFNBQVA7QUFDSDs7Ozs7QUFFSDtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4qIEBBdXRob3I6IFJvYmVyQ2FzdHJvXG4qIEBEYXRlOiAgIDEzLTEyLTIwMTZcbiogQEVtYWlsOiAgcm9iZXJ0b2ljYXN0cm9AZ21haWwuY29tXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvYmVyY2FzdHJvXG4qIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDEzLTEyLTIwMTZcbiovXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vcGFnZXMvaG9tZS9ob21lJztcbmltcG9ydCB7IEFQSV9LRVlfRklSRUJBU0UgfSBmcm9tICcuL2hlbHBlcnMvYXBpa2V5ZmlyZWJhc2UnO1xuXG5cbmNsYXNzIE15QXBwIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuYXBwQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXBwXCIpWzBdO1xuICB9XG5cbiAgc3RhcnQoKXtcblxuICAgIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgYXBpS2V5OiBBUElfS0VZX0ZJUkVCQVNFLFxuICAgICAgYXV0aERvbWFpbjogXCJjYXN0cm9nYXN0cm8tODU4YzMuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2Nhc3Ryb2dhc3Ryby04NThjMy5maXJlYmFzZWlvLmNvbVwiLFxuICAgICAgc3RvcmFnZUJ1Y2tldDogXCJjYXN0cm9nYXN0cm8tODU4YzMuYXBwc3BvdC5jb21cIixcbiAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUwODU4ODYzMzE4OVwiXG4gICAgfTtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG5cbiAgICAvLyBpbml0IEhvbWVQYWdlXG4gICAgbGV0IGhvbWVQYWdlID0gbmV3IEhvbWVQYWdlKHRoaXMuYXBwQm9keSk7XG4gIH1cblxufVxuXG5sZXQgbXlBcHAgPSBuZXcgTXlBcHAoKTtcbm15QXBwLnN0YXJ0KCk7XG4iLCJleHBvcnQgY29uc3QgQVBJX0tFWV9GSVJFQkFTRSA9IFwiQUl6YVN5Q3BGZ3I4NGVwVHlQT2RVR2dWTUxweExET0U0cEFHUXpvXCI7XG4iLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMjAtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cblxuZXhwb3J0IGNsYXNzIEZpcmVCYXNlSGVscGVyIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkYXRhYmFzZSBzZXJ2aWNlXG4gICAgdGhpcy5kYXRhYmFzZSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG4gICAgdGhpcy5kYkRhdGEgPSBbXTtcblxuICAgfVxuXG4gIGFkZE9iamVjdFRvQmFzZShwcm9kdWN0KXtcblxuICAgIC8vIGwnZW52b3llciBkYW5zIGxhIGNvbGxlY3Rpb24gXCJwcm9kdWN0c1wiIHN1ciBGaXJlYmFzZVxuICAgIHRoaXMuZGF0YWJhc2UucmVmKCdsb2NhbE9yZGVyJykucHVzaChwcm9kdWN0KTtcbiAgfVxuXG4gIGxvYWREYXRhKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICB0aGlzLmRhdGFiYXNlLnJlZignbG9jYWxPcmRlcicpLm9uKCdjaGlsZF9hZGRlZCcsIChzbmFwc2hvdCk9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIGFkZGVkLT4gJywgc25hcHNob3QudmFsKCkpO1xuXG4gICAgICAgICAgdGhpcy5kYkRhdGEucHVzaChzbmFwc2hvdC52YWwoKSk7XG4gICAgICAgICAgLy8gbGVzIHZhbGV1ciBzb250IGNvbnRlbnUgZGFucyBzbmFwc2hvdC52YWwoKVxuICAgICAgICAgIC8vIGV0IHBhc3PDqWUgw6AgdW5lIGZvbmN0aW9uIHBvdXIgw6p0cmUgdHJhaXTDqWUgcGx1cyBsb2luLi4uXG4gICAgICAgICAgLy8gIGRpc3BsYXlQcm9kdWN0c0luTGlzdChzbmFwc2hvdClcbiAgICAgICAgICByZXNvbHZlKHRoaXMuZGJEYXRhKVxuICAgICAgfSk7XG4gICAgfSlcblxuICB9XG5cblxufVxuIiwiLyoqXG4qIEBBdXRob3I6IFJvYmVyQ2FzdHJvXG4qIEBEYXRlOiAgIDIxLTEyLTIwMTZcbiogQEVtYWlsOiAgcm9iZXJ0b2ljYXN0cm9AZ21haWwuY29tXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvYmVyY2FzdHJvXG4qIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIxLTEyLTIwMTZcbiovXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uLy4uL3BhZ2VzL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBGaXJlQmFzZUhlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZmlyZWJhc2VIZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgQWRtaW5QYWdlIHtcblxuICBjb25zdHJ1Y3RvcihhcHBCb2R5LGZvcm1JbnB1dCl7XG4gICAgdGhpcy5hcHBCb2R5ID0gYXBwQm9keTtcbiAgICB0aGlzLmZvcm1EYXRhID0gZm9ybUlucHV0O1xuICAgIHRoaXMucGFnZVRpdGxlID0gXCJBZG1pbmlzdHJhdGlvbiBkZXMgY29tbWFuZGVzXCI7XG4gICAgdGhpcy50aW1lID0gbmV3IERhdGUoKVxuICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgdGhpcy5mRmlyZUJhc2VIZWxwZXIoKTtcbiAgfVxuXG4gIGluaXRVSSgpe1xuICAgIC8vIHJlbW92ZSBhbGwgc2VjdGlvbiBiZWZvcmUgZGlzcGxheSBVSVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXG4gICAgfVxuICAgIC8vIGNyZWF0ZSBwYWdlIHNrZWxldG9uXG4gICAgbGV0IHBhZ2VTa2VsZXRvbiA9IGBcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2QmFyVG9wXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtd3JhcHBlclwiIGNsYXNzPVwibmF2QmFyVG9wXCIgPlxuICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzPVwiYnJhbmQtbG9nb1wiPkxvZ288L2E+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZS1kZW1vXCIgY2xhc3M9XCJidXR0b24tY29sbGFwc2VcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvaT48L2E+XG4gICAgICAgICAgICAgPHVsIGNsYXNzPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBpZD1cImhvbWVcIiBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgPHVsIGNsYXNzPVwic2lkZS1uYXZcIiBpZD1cIm1vYmlsZS1kZW1vXCI+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJob21lTW9iXCIgaHJlZj1cIiNcIj5JbmljaW88L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2R1Y3RvczwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UXVpZW5lcyBzb21vczwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdG88L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBpZD1cImFkbWluUGFnZU1vYlwiIGhyZWY9XCIjXCI+QWRtaW48L2E+PC9saT5cbiAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxoMSBpZD1cInRpbWVcIj48L2gxPlxuICAgICAgICA8cD4ke3RoaXMucGFnZVRpdGxlfSAke3RoaXMuZm9ybURhdGF9ICE8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBgO1xuICAgICAgLy8gYWRkIHBhZ2Ugc2tlbGV0b24gaW4gYm9keVxuICAgICAgdGhpcy5hcHBCb2R5Lmluc2VydEFkamFjZW50SFRNTCggJ2FmdGVyYmVnaW4nLCBwYWdlU2tlbGV0b24gKVxuICAgICAgJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XG4gICAgICB9KTtcbiAgICAgIC8vbGV0IGxpc3QgPSB0aGlzLmxpc3RPcmRlcnNcbiAgICAgIC8vY29uc29sZS5sb2cobGlzdClcbiAgICAgIHRoaXMubG9hZEV2ZW50VUkoKTtcbiAgICB9XG5cbiAgICBsb2FkRXZlbnRVSSgpe1xuXG4gICAgICAkKFwiI2hvbWVcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLm9uTG9naW4oZXZlbnQpLCBmYWxzZSk7XG4gICAgICAkKFwiI2hvbWVNb2JcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLm9uTG9naW4oZXZlbnQpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgb25Mb2dpbihldmVudCl7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXcgSG9tZVBhZ2UodGhpcy5hcHBCb2R5KTtcbiAgICB9XG5cbiAgICBmRmlyZUJhc2VIZWxwZXIoKXtcblxuICAgICAgLy9XZSBpbnN0YW5jaWF0ZSB0aGUgRmlyZWJhc2UgY2xhc3NcbiAgICAgIGxldCBkYXRhQmFzZUNhc3RybyA9IG5ldyBGaXJlQmFzZUhlbHBlcigpO1xuXG4gICAgICBkYXRhQmFzZUNhc3Ryby5sb2FkRGF0YSgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdkYXRhYmFzZSByZWFkeS0+JyxKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZVswXS5vcmRlcilcbiAgICAgICAgICBsZXQgbGlzdE9yZGVyc1xuXG4gICAgICAgICAgcmVzcG9uc2VbMF0ub3JkZXIuZm9yRWFjaCgoZWxlbWVudCk9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycik9PntcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igd2l0aCBGaXJlYmFzZSBsb2FkRGF0YSgpLT4gJywgZXJyKVxuICAgICAgICB9KVxuXG4gICAgICAvL2NvbnNvbGUubG9nKGxpc3RPcmRlcnMpXG5cbiAgICB9XG5cbn1cbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAxMy0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxMy0xMi0yMDE2XG4qL1xuXG5pbXBvcnQgeyBGaXJlQmFzZUhlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZmlyZWJhc2VIZWxwZXInO1xuaW1wb3J0IHsgQWRtaW5QYWdlIH0gZnJvbSAnLi4vLi4vcGFnZXMvYWRtaW4vYWRtaW4nO1xuXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKGFwcEJvZHkpe1xuICAgIHRoaXMuYXBwQm9keSA9IGFwcEJvZHlcbiAgICB0aGlzLnBhZ2VUaXRsZSA9ICdIZWxsbyB3b3JsZCEgSGVsbG8gUm9iZXJ0byc7XG4gICAgdGhpcy5pbml0VUkoKTtcbiAgICB0aGlzLmZGaXJlQmFzZUhlbHBlcigpO1xuICAgIHRoaXMuZW1wdHlCb3hGKCk7XG4gIH1cblxuXG5cbiAgaW5pdFVJKCl7XG5cbiAgICAvL0luaWNpYXRlIHRoZSB2YXJpYWJsZSBRIHRvIHRoZSB2YWx1ZSBpbiB0aGUgaHRtbFxuICAgIHZhciB2UTtcbiAgICAvL0luaWNpYXRlIHRoZSB2YXJpYWJsZSBwcmljZVByb2R1Y3RcbiAgICB2YXIgcHJpY2VQcm9kdWN0O1xuICAgIHZhciBwcmljZUNvbW1hbmRlO1xuICAgIHZhciB0aW1lc0NvbW1hbmRlO1xuICAgIHZhciB0b3RhbFByaWNlUGFja2FnZTtcbiAgICB2YXIgbG9jYWxPcmRlciA9IHt9O1xuXG5cbiAgICAvLyByZW1vdmUgYWxsIHNlY3Rpb24gYmVmb3JlIGRpc3BsYXkgVUlcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxuICAgIH1cbiAgICAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XG4gICAgfSlcbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxuICAgIGxldCBwYWdlU2tlbGV0b24gPSB0aGlzLnNrZWxldG9uQmFzZSgpO1xuXG4gICAgLy8gYWRkIHBhZ2Ugc2tlbGV0b24gaW4gYm9keVxuICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcbiAgICB0aGlzLmxvYWRFdmVudFVJKClcbiAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICB0aGlzLmNob29zZVByb2R1Y3QodlEscHJpY2VQcm9kdWN0LHByaWNlQ29tbWFuZGUsdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UsIGxvY2FsT3JkZXIpXG4gICAgdGhpcy5jbGlja0NvbW1hbmRlUXQocHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSlcblxuICAgIE1hdGVyaWFsaXplLnRvYXN0KCdJIGFtIGEgdG9hc3QhJywgNDAwMCkgLy8gNDAwMCBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIHRvYXN0XG4gICAgY29uc29sZS5sb2coJChcIiN0b3RhbFByaWNlQ29tbWFuZGVcIilbMF0uaW5uZXJIVE1MKVxuXG4gIH1cblxuICBmRmlyZUJhc2VIZWxwZXIoKXtcblxuICAgIC8vV2UgaW5zdGFuY2lhdGUgdGhlIEZpcmViYXNlIGNsYXNzXG4gICAgbGV0IGRhdGFCYXNlQ2FzdHJvID0gbmV3IEZpcmVCYXNlSGVscGVyKCk7XG5cbiAgICAvL0luIHRoZSBjYXNlIHRoZSB1c2VyIHNlbmQgdGhlIG9yZGVyIHdlIHNhdmUgaW4gdGhlIGRhdGFiYXNlXG4gICAgJChcIiNzZW5kT3JkZXJcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgc0VtYWlsID0gJCgnI3R4dEVtYWlsJykudmFsKCk7XG4gICAgICAvLyBDaGVja2luZyBFbXB0eSBGaWVsZHNcbiAgICAgIGlmICgkLnRyaW0oc0VtYWlsKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIGFsZXJ0KCdSZW1wbGlzc2V6IGxlIGNoYW1wIGVtYWlsJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUVtYWlsKHNFbWFpbCkpIHtcbiAgICAgICAgTWF0ZXJpYWxpemUudG9hc3QoJ0VtYWlsIG9rJywgNDAwMCkgLy8gNDAwMCBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIHRvYXN0XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICBhbGVydCgnSW52YWxpZCBFbWFpbCBBZGRyZXNzJyk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xuICAgICAgY29uc29sZS5sb2coY29tTG9jYWxTdG9yYWdlKVxuICAgICAgZGF0YUJhc2VDYXN0cm8uYWRkT2JqZWN0VG9CYXNlKHtcbiAgICAgICAgb3JkZXI6IGNvbUxvY2FsU3RvcmFnZSxcbiAgICAgICAgbmJPcmRlcjogJChcIiN0aW1lc0NvbW1hbmRlXCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgbWFpbDogJChcImlucHV0W25hbWU9J2VtYWlsJ11cIikudmFsKClcbiAgICAgIH0pO1xuXG4gICAgICBhbGVydChcIkJpZW4gZW52b3nDqVwiKVxuICAgIH0pXG4gIH1cblxuICBlbXB0eUJveEYoKXtcbiAgICAkKFwiI2VtcHR5Qm94XCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcblxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbE9yZGVyXCIpO1xuICAgICAgdGhpcy5pbml0VUkoKTtcblxuICAgIH0pXG4gIH1cblxuICB2YWxpZGF0ZUVtYWlsKHNFbWFpbCkge1xuICAgIHZhciBmaWx0ZXIgPSAvXltcXHctLitdK0BbYS16QS1aMC05Li1dKy5bYS16QS16MC05XXsyLDR9JC87XG5cbiAgICBpZiAoZmlsdGVyLnRlc3Qoc0VtYWlsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKSB7XG4gICAgLy8gU3VwcHJpbWVyIGNvbnRlbnUgcGFuaWVyXG4gICAgdmFyIGxpc3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1eUxpc3QnKTtcbiAgICB3aGlsZSAobGlzdGUuY2hpbGRyZW4ubGVuZ3RoPjEpIHtsaXN0ZS5yZW1vdmVDaGlsZChsaXN0ZS5sYXN0Q2hpbGQpfVxuICAgIHByaWNlQ29tbWFuZGUgPSAwO1xuXG4gICAgLy8gQWZmaWNoZXIgbGVzIMOpbMOpbWVudHNcbiAgICB2YXIgcHJvZHVpdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgZm9yKGxldCBpZCBpbiBwcm9kdWl0cykge1xuICAgICAgdGhpcy5kZXNzaW5lclByb2R1aXQocHJvZHVpdHNbaWRdKTtcbiAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJvZHVpdHNbaWRdLnByaWNlUHJvICogcHJvZHVpdHNbaWRdLnRpbWVzUHJvIDtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9PSBcIlF1YW50aXTDqVwiKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gMTtcbiAgICB9O1xuICB9XG5cbiAgZGVzc2luZXJQcm9kdWl0KHByb2R1aXQpIHtcbiAgICAvLyBMaXJlIGxlIHNyYyBkdSBwcm9kdWl0IChzdG9ja8OpIGRhbnMgbGUgaHRtbClcbiAgICB2YXIgc3JjSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbWdbZGF0YS1pZD0ke3Byb2R1aXQuaWRQcm99XWApLnNyYztcbiAgICB2YXIgcHJvZHVjdFRvTGlzdCA9IGBcbiAgICA8ZGl2IGlkPVwiJHtwcm9kdWl0LmlkUHJvfVwiIGNsYXNzPVwiY29sLTEwNVwiPlxuICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICA8aW1nIGlkPVwiaW1nUGFuMVwiIHNyYz1cIiR7c3JjSW1hZ2V9XCI+XG4gICAgICAgPC9maWd1cmU+XG4gICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+ICR7cHJvZHVpdC5wcmljZVByb30gPC9wPlxuICAgICAgIDxwPiR7cHJvZHVpdC50aW1lc1Byb308L3A+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvZHVjdFRvTGlzdCk7XG4gIH1cblxuICBjaG9vc2VQcm9kdWN0KHZRLCBwcmljZVByb2R1Y3QscHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcil7XG5cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdExpc3QnKSlcbiAgICB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdExpc3QnKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBldmVudD0+e1xuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIHRoaXMuY2xpY2tGaWd1cmUoZXZlbnQpO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgICAgdGhpcy5jbGlja1BsdXNMZXNzKGV2ZW50LCB2USwgcHJpY2VQcm9kdWN0LCBwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcik7XG4gICAgICAgICAgLy90aGlzLmRlc3NpbmVyUGFuaWVyKCk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH1cblxuXG4gIGNsaWNrUGx1c0xlc3MoZXZlbnQsIHZRLCBwcmljZVByb2R1Y3QsIHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKXtcblxuICAgICAgLy9JbmljaWF0ZSB0aGUgcXVhbnRpdHkgdG8gMFxuICAgICAgdmFyIHFQcm9kdWN0O1xuXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gXCJGSUdVUkVcIil7XG4gICAgICAgIHByaWNlQ29tbWFuZGUgPSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcHJpY2VDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlQ29tbWFuZGUnKS5pbm5lckhUTUwsMTApO1xuICAgICAgfVxuXG4gICAgICAvL0lmIHRoZSBjbGljayBpcyBpbiBhIGJ1dHRvblxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ0JVVFRPTicpe1xuXG4gICAgICAgIC8vQ29udmVydCB0aGUgaHRtbCB0ZXh0IGluIGFuIGludGVnZXIgbnVtYmVyIHNvIHdlIGNhbiBvcGVyYXRlIHdpdGggaXRcbiAgICAgICAgcHJpY2VQcm9kdWN0ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCwgMTApO1xuXG4gICAgICAgIC8vSWYgdGhlIHByb2R1Y3QgZG9uJ3QgZXhpc3QgaW4gdGhlIGxpc3RcbiAgICAgICAgaWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpICYmIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT0gJysnKXtcblxuXG4gICAgICAgICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpKXtcbiAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICB0aW1lc1BybzogMSxcbiAgICAgICAgICAgIHByaWNlUHJvOiBwcmljZVByb2R1Y3RcbiAgICAgICAgICB9O1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcblxuICAgICAgICAgIC8vQWRkIHRoZSBodG1sIGNvbnRlbnQgdG8gdGhlIGRpdiBidXlMaXN0XG4gICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgLy9DYWxjdWxhdGUgYW5kIHByaWNlcyBhbmQgcXVhbnRpdGllc1xuICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJpY2VQcm9kdWN0O1xuICAgICAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIHRpbWVzQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCwxMClcbiAgICAgICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHByaWNlQ29tbWFuZGUgKiB0aW1lc0NvbW1hbmRlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFByaWNlUGFja2FnZScpLmlubmVySFRNTCA9IHRvdGFsUHJpY2VQYWNrYWdlO1xuXG4gICAgICAgIC8vSWYgdGhlIHByb2R1Y3QgZXhpc3QgaW4gdGhlIGxpc3RcbiAgICAgICAgfWVsc2UgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkpe1xuXG4gICAgICAgICAgdlEgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKS5sYXN0Q2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwsIDEwKTtcblxuICAgICAgICAgIC8vSWYgdGhlIGNsaWNrIGlzIG9uIHRoZSBwbHVzIGJ1dHRvblxuICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPT0gJysnKXtcblxuICAgICAgICAgICAgcVByb2R1Y3QgPSB2USArIDE7XG4gICAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSArIHByaWNlUHJvZHVjdDtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpLmxhc3RDaGlsZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IHFQcm9kdWN0O1xuXG4gICAgICAgICAgICBsb2NhbE9yZGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xuICAgICAgICAgICAgbG9jYWxPcmRlcltldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXSA9IHtcbiAgICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICAgIHRpbWVzUHJvOiBxUHJvZHVjdCxcbiAgICAgICAgICAgICAgcHJpY2VQcm86IHByaWNlUHJvZHVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcbiAgICAgICAgICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgLy9JZiB0aGUgY2xpY2sgaXMgb24gdGhlIGxlc3MgYnV0dG9uXG4gICAgICAgICAgfWVsc2UgaWYoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnLS0nKXtcblxuICAgICAgICAgICAgICAvL2lmIHRoZSBxdWFudGl0eSBpcyAxIHdlIHRha2Ugb2ZmIHRoZSBkaXYgb2YgdGhlIHByb2R1Y3QgZnJvbSB0aGUgcHJvZHVjdExpc3RcbiAgICAgICAgICAgICAgaWYodlE9PT0xKXtcbiAgICAgICAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSAtIHByaWNlUHJvZHVjdDtcbiAgICAgICAgICAgICAgICB2YXIgaWRQcm8gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgIHZhciBwciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkUHJvKTtcbiAgICAgICAgICAgICAgICBwci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByKTtcblxuICAgICAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobG9jYWxPcmRlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG5cbiAgICAgICAgICAgICAgLy9pZiB0aGUgcXVhbnRpdHkgaXMgbW9yZSB0aGFuIDEgd2UgdGFrZSBvbmUgdW5pdHkgZnJvbSB0aGUgcXVhbnRpdHkgb2YgdGhlIHByb2R1Y3RcbiAgICAgICAgICAgICAgfWVsc2UgaWYodlE+MSl7XG4gICAgICAgICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgLSBwcmljZVByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgcVByb2R1Y3QgPSB2USAtIDE7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcVByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgbG9jYWxPcmRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICAgICAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgICAgICAgaWRQcm86IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgICAgICAgICB0aW1lc1BybzogcVByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICBwcmljZVBybzogcHJpY2VQcm9kdWN0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsT3JkZXJcIixKU09OLnN0cmluZ2lmeShsb2NhbE9yZGVyKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG90YWxDb21tYW5kZShwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XG4gICAgfVxuXG5cbiAgICBjbGlja0NvbW1hbmRlUXQocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2Upe1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWFuZGVDb2x1bW4nKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBldmVudENvbW1hbmRlPT57XG4gICAgICAgICAgZXZlbnRDb21tYW5kZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIHRpbWVzQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCwxMClcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXG5cbiAgICAgICAgICBpZihldmVudENvbW1hbmRlLnRhcmdldC5pZCA9PSAncGx1cycpe1xuICAgICAgICAgICAgdGltZXNDb21tYW5kZSA9IHRpbWVzQ29tbWFuZGUgKzE7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgfWVsc2UgaWYoZXZlbnRDb21tYW5kZS50YXJnZXQuaWQgPT0gJ21vaW5zJyAmJiB0aW1lc0NvbW1hbmRlID4gMSl7XG4gICAgICAgICAgICB0aW1lc0NvbW1hbmRlLS07XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwcmljZUNvbW1hbmRlICogdGltZXNDb21tYW5kZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIHJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKXtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XG4gICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHByaWNlQ29tbWFuZGUgKiB0aW1lc0NvbW1hbmRlO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcbiAgICAgIHByaWNlQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSAxO1xuICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXG5cbiAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcblxuICAgIH1cblxuICAgIGNsaWNrRmlndXJlKGV2ZW50KXtcblxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ0lNRycpe1xuXG4gICAgICAgIHZhciB0eXBlUHJvZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICBzd2l0Y2godHlwZVByb2Qpe1xuXG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxYnInOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQnJhbmR5JykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBwcmVtaWVyIGJyYW5keSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJicic6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZCcmFuZHknKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIGRldXhpw6htZSBicmFuZHkgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szYnInOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQnJhbmR5JykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIGJyYW5keSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazF3aW5lJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZldpbmUnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgdmluIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMndpbmUnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmV2luZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIHZpbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazN3aW5lJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZldpbmUnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgdmluIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMW9pbCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZPaWwnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgaHVpbGUgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syb2lsJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZk9pbCcpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIGh1aWxlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM29pbCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZPaWwnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgaHVpbGUgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMWNoJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkNoZWVzZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBodWlsZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJjaCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZDaGVlc2UnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgZnJvbWFnZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNjaCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZDaGVlc2UnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgZnJvbWFnZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazFoYW0nOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkhhbScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBqYW1ib24gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syaGFtJzpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZIYW0nKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIGRldXhpw6htZSBqYW1ib24gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szaGFtJzpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZIYW0nKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgamFtYm9uIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBhbGVydChcIkNlIHByb2R1aXQgbidhIHBhcyBkZSBkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWRFdmVudFVJKCl7XG5cbiAgICAkKFwiI2FkbWluUGFnZVwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKTtcbiAgICAkKFwiI2FkbWluUGFnZU1vYlwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKTtcblxuICB9XG5cbiAgb25Mb2dpbihldmVudCl7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHZhbGlkYXRpb25JbnB1dCA9IDBcbiAgICBsZXQgZm9ybUlucHV0ID0gJCgnI3R4dEVtYWlsJykudmFsKCk7XG5cbiAgICBpZigkKCcjdHh0RW1haWwnKS52YWwoKS5sZW5ndGg+MCl7XG4gICAgICBjb25zb2xlLmxvZygnbG9hZCBBZG1pblBhZ2UnKVxuICAgICAgbmV3IEFkbWluUGFnZSggdGhpcy5hcHBCb2R5LCBmb3JtSW5wdXQpO1xuICAgIH1cbiAgfVxuXG5cbiAgc2tlbGV0b25CYXNlKCl7XG5cbiAgICBsZXQgdlNrZWxldG9uID0gYFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGltZyBjbGFzcz1cIm1hdGVyaWFsYm94ZWRcIiB3aWR0aD1cIjEwMjRweFwiIGhlaWdodD1cIjIwMHB4XCIgc3JjPVwiLi9zcmMvaW1hZ2VzL3ZpbmFzMi5qcGVnXCI+XG4gICAgICAgIDxoMT4ke3RoaXMucGFnZVRpdGxlfTwvaDE+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZCYXJUb3BcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3M9XCJicmFuZC1sb2dvXCI+TG9nbzwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzcz1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3RvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJhZG1pblBhZ2VcIiBocmVmPVwiI1wiPkFkbWluPC9hPjwvbGk+XG4gICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkluaWNpbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5RdWllbmVzIHNvbW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiYWRtaW5QYWdlTW9iXCIgaHJlZj1cIiNcIj5BZG1pbjwvYT48L2xpPlxuICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kT3JkZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cInNlbmRPcmRlclwiPkVudm95ZXIgY29tbWFuZGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBpZD1cImVtcHR5Qm94XCI+VmlkZXIgbGUgY29mZnJlPC9idXR0b24+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD48aW5wdXQgaWQ9XCJ0eHRFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ2b3RyZWVtYWlsLmNoXCIvPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyIG91dGxpbmVcIj5cbiAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV5TGlzdFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwNVwiIGlkPVwiY29tbWFuZGVDb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIGNvZmZyZTwvcD48L2JyPlxuICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0b3RhbFByaWNlQ29tbWFuZGVcIj48L3A+PC9icj5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwidGltZXNDb21tYW5kZVwiPlF1YW50aXTDqTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwidG90YWxQcmljZVBhY2thZ2VcIj48L3A+PC9icj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0TGlzdFwiID5cblxuPCEtLUZpcnN0IGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5CcmFuZHk8L3A+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2sxYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYnJhbmR5MS5wbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0IxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwibW9pbnNCMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2syYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYnJhbmR5LWNhc2FqdWFuYS0xMDAtYW5vcy1yZXNlcnZhLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQjJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQjJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2szYnJcIiBzcmM9XCIuL3NyYy9pbWFnZXMvYmFyYmFkaWxsby5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0IzXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0IzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmQnJhbmR5XCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbjwhLS1TZWNvbmQgbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPlZpbm9zPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMXdpbmVcIiBzcmM9XCIuL3NyYy9pbWFnZXMvdmluMS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzFcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMndpbmVcIiBzcmM9XCIuL3NyYy9pbWFnZXMvdmluMi5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zVzJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzVzJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWlkPVwiaW1nQ2xpY2szd2luZVwiIHNyYz1cIi4vc3JjL2ltYWdlcy92aW4zLmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNXM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNXM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmV2luZVwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG48IS0tVGhpcmQgbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPkFjZWl0ZSBkZSBvbGl2YTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxb2lsXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL1JPWEFORSBBUkJFUVVJTkFfNTAwXzAyLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNPMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNPMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJvaWxcIiBzcmM9XCIuL3NyYy9pbWFnZXMvbWFyaWEtZGUtbGEtby1zZWxlY2Npb24tZ291cm1ldC01MDAtbWwuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc08yXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c08yXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM29pbFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9ST1hBTkUgQVJCRVFVSU5BXzUwMF8wMi5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zTzNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzTzNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwIGlkPVwidGV4dEV4cGxpY2F0aWZPaWxcIj48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuICA8IS0tRm91cnRoIGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5RdWVzbzwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxY2hcIiBzcmM9XCIuL3NyYy9pbWFnZXMvY29nbWFuLXNlbWljdXJhZG8tcHVyby1vdmVqYS5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazJjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9xdWVzby1jdXJhZG8tYWwtcm9tZXJvLXRvbWVsbG9zby5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQ2gyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0NoMlwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazNjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9tb250YWx2by1jdXJhZG8tZW4tYWNlaXRlLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNDaDNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQ2gzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmQ2hlZXNlXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbjwhLS1GaWZ0aCBsaW5lIG9mIHByb2R1Y3RzLS0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+SmFtb24gaWLDqXJpY288L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMWhhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjEuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gxXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gxXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMmhhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjIuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gyXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gyXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM2hhbVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9qYW1vbjMuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0gzXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c0gzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2ICBpZD1cImltZ0NsaWNrMVwiIGNsYXNzPVwiY29sLTFcIj48cCBpZD1cInRleHRFeHBsaWNhdGlmSGFtXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+PHA+Y29sLTI8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPjxwPmNvbC0yPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj48cD5jb2wtMjwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPjxwPmNvbC0zPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj48cD5jb2wtMzwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPjxwPmNvbC00PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj48cD5jb2wtMjwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNVwiPjxwPmNvbC01PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5jb2wtMTwvcD48L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPjxwPmNvbC02PC9wPjwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YSBjbGFzcz1cImJ0blwiIG9uY2xpY2s9XCJNYXRlcmlhbGl6ZS50b2FzdCgnSSBhbSBhIHRvYXN0JywgNDAwMClcIj5Ub2FzdCE8L2E+XG4gICAgICAgICAgICA8YnV0dG9uPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMScgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnIGNsYXNzPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+SWLDqXJpY288L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlBhdGEgbmVncmE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkphYnVnbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFRyaWdnZXIgLS0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjInIGNsYXNzPVwiY29sIHMyXCI+SHVpbGUgZCdvbGl2ZTwvYT5cblxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gU3RydWN0dXJlIC0tPlxuICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd24yJyBjbGFzcz0nZHJvcGRvd24tY29udGVudCc+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+Tm9ybWFsPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5WaXJnZW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlZpcmdlbiBleHRyYTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd24zJyBjbGFzcz1cImNvbCBzMlwiPkZyb21hZ2UgbWFuY2hlZ288L2E+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMycgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkN1cmFkbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+U2VtaWN1cmFkbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VGllcm5vPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFRyaWdnZXIgLS0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjQnPkNvbmZpc3NlcmllPC9hPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XG4gICAgICAgICAgICAgICAgPHVsIGlkPSdkcm9wZG93bjQnIGNsYXNzPSdkcm9wZG93bi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5UdXJyb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlNvYmFvczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+UG9sdm9yb25lczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd241Jz5CcmFuZHkgZGUgSmVyZXo8L2E+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duNScgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkxBIEJPVEEgREUgQlJBTkRZIE7CuiAyOTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VE9SUkVTIEpBSU1FIEk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlBFSU5BRE8gU09MRVJBIDEwMCBBw5FPUzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5gO1xuICAgICAgcmV0dXJuIHZTa2VsZXRvbjtcbiAgfVxufVxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgZGVzc2luZXJQYW5pZXIoKTtcbi8vIH1cbiJdfQ==
