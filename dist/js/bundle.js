(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Author: RoberCastro
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Date:   13-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Email:  robertoicastro@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified by:   robercastro
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified time: 13-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _home = require("./pages/home/home");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyApp = function () {
  function MyApp() {
    _classCallCheck(this, MyApp);

    this.appBody = document.getElementsByTagName("app")[0];
  }

  _createClass(MyApp, [{
    key: "start",
    value: function start() {
      // init HomePage
      var homePage = new _home.HomePage(this.appBody);
    }
  }]);

  return MyApp;
}();

var myApp = new MyApp();
myApp.start();

},{"./pages/home/home":3}],2:[function(require,module,exports){
"use strict";

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

  _createClass(FireBaseHelper, [{
    key: "addObjectToBase",
    value: function addObjectToBase(product) {
      var database = firebase.database();

      // l'envoyer dans la collection "products" sur Firebase
      database.ref('products').push(product);
      // vider la valeur du champ input
    }
  }, {
    key: "loadFirebaseObject",
    value: function loadFirebaseObject() {
      var _this = this;

      // création d'un UL pour recevoir les produits
      var liste_UL = document.createElement('ul');
      liste_UL.setAttribute('id', 'liste');
      document.getElementById('app').appendChild(liste_UL);
      // ajout d'un event listenenr pour capturer le click
      liste_UL.addEventListener('click', function () {
        // l'event est passé à une fonction pour être traité plus loin...
        _this.updateDatabase(event);
      });
      // récupérer la référence products
      // Créer un listener pour récupérer
      // la valeur contenu dans la référence
      var productsRef = database.ref('products');
      // Créer un listener pour récupérer
      // la valeur contenu dans la référence
      productsRef.on('child_added', function (snapshot) {
        console.log('child added-> ', snapshot.val());
        // les valeur sont contenu dans snapshot.val()
        // et passée à une fonction pour être traitée plus loin...
        _this.displayProductsInList(snapshot);
      });
      productsRef.on('child_removed', function (snapshot) {
        console.log('child removed-> ', snapshot.val());
        // les valeur sont contenu dans snapshot.val()
        // et passée à une fonction pour être traitée plus loin...
        _this.updateProductsInList(snapshot);
      });
    }

    // afficher dans un tableau ( ul > li ) la liste de produit
    /*  displayFavorites(productData){
        // si la liste UL existe
        if(document.getElementById('liste')){
          // ajouter le produit dans le LI avec un checkbox et un boutton delete
          let liste_LI = document.createElement('li')
          // on asigne une id pour identifier l'element lors du click
          liste_LI.setAttribute('id',productData.key)
          liste_LI.innerHTML = `
            <input type="checkbox" class="update" ${(productData.val().statut === true)?'checked':''} name="statut">
            ${productData.val().name}
            <button class="del">remove</button>
          `
          // on ajout le LI créé dans la liste UL
          document.getElementById('liste').appendChild(liste_LI)
        }
      }
    
      // fonction pour mettre à jour la base de donnée
      updateDatabase(event){
        //console.log(event.target);
        // récupérer l'id de l'élément suer lequel on a cliké
        let id = event.target.parentNode.getAttribute('id')
        // si on a clické sur le button-> on supprime de la BDD
        if(event.target.getAttribute('class') === 'del'){
          console.log('product delete-> ',id);
          database.ref('products/'+id).remove();
        }
        // si on a clické sur la case à cocher-> on update la BDD
        if(event.target.getAttribute('class') === 'update'){
          console.log('product update-> ',id);
          database.ref('products/'+id).update({
            statut: event.target.checked
          });
        }
      }
    
      updateProductsInList(productData){
        let product = document.getElementById(productData.key)
        product.parentNode.removeChild(product)
      }*/

  }]);

  return FireBaseHelper;
}();

},{}],3:[function(require,module,exports){
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePage = exports.HomePage = function () {
  function HomePage(appBody) {
    _classCallCheck(this, HomePage);

    this.appBody = appBody;
    this.pageTitle = 'Hello world! Hello Roberto';
    this.initUI();
    this.fFireBaseHelper();
  }

  _createClass(HomePage, [{
    key: 'fFireBaseHelper',
    value: function fFireBaseHelper() {

      //We instanciate the Firebase class
      var dataBaseCastro = new _firebaseHelper.FireBaseHelper();

      //In the case the user send the order we save in the database
      $("#sendOrder")[0].addEventListener('click', function () {

        var comLocalStorage = JSON.parse(localStorage.getItem("localOrder"));
        dataBaseCastro.addObjectToBase(comLocalStorage);
        alert("Bien envoyé");
      });
    }
  }, {
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
      var _this = this;

      if (document.getElementById('productList')) {
        document.getElementById('productList').addEventListener('click', function (event) {

          _this.clickFigure(event);
          //console.log(event)
          _this.clickPlusLess(event, vQ, priceProduct, priceCommande, timesCommande, totalPricePackage, localOrder);
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

          localOrder = JSON.parse(localStorage.getItem("localOrder"));

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
      var _this2 = this;

      var loginForm = document.getElementsByTagName("form")[0];
      loginForm.addEventListener("submit", function (event) {
        return _this2.onLogin(event);
      }, false);
    }
  }, {
    key: 'onLogin',
    value: function onLogin(event) {
      event.preventDefault();
      var validationInput = 0;
      var formInput = {};
      var form = document.forms[0].elements;
      for (var i = 0; i < form.length; i++) {
        if (form[i].value) {
          formInput[form[i].name] = form[i].value;
          validationInput++;
        }
      }
    }
  }, {
    key: 'skeletonBase',
    value: function skeletonBase() {

      var vSkeleton = '\n    <section>\n      <img class="materialboxed" width="1024px" height="200px" src="./src/images/vinas2.jpeg">\n        <h1>' + this.pageTitle + '</h1>\n        <form>\n        <style>\n        #div1 {\n            width: 350px;\n            height: 70px;\n            padding: 10px;\n            border: 1px solid #aaaaaa;\n        }\n        </style>\n          <nav class="navBarTop">\n           <div class="nav-wrapper" class="navBarTop" >\n             <a href="#!" class="brand-logo">Logo</a>\n             <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>\n             <ul class="right hide-on-med-and-down">\n               <li><a href="#">Inicio</a></li>\n               <li><a href="#">Productos</a></li>\n               <li><a href="#">Quienes somos</a></li>\n               <li><a href="#">Contacto</a></li>\n             </ul>\n             <ul class="side-nav" id="mobile-demo">\n               <li><a href="sass.html">Inicio</a></li>\n               <li><a href="badges.html">Productos</a></li>\n               <li><a href="collapsible.html">Javascript</a></li>\n               <li><a href="mobile.html">Contacto</a></li>\n             </ul>\n           </div>\n         </nav>\n\n         <div class="sendOrder"><button class="btn" id="sendOrder">Envoyer commande</button></div>\n\n         <div class="grid-container outline">\n             <div id="buyList" class="row">\n               <div class="col-105" id="commandeColumn">\n                  <p>Total coffre</p></br>\n                  <p id="totalPriceCommande"></p></br>\n                  <p id="timesCommande">Quantit\xE9</p>\n                  <p id="totalPricePackage"></p></br>\n                  <div class="ligneBt"><button id="moins">--</button><button id="plus">+</button></div>\n               </div>\n             </div>\n\n\n            <div id="productList" >\n\n<!--First line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Brandy</p></div>\n\n                  <div class="col-1 center" >\n                    <figure style= "margin:0;">\n                      <img data-id="imgClick1br" src="./src/images/brandy1.png">\n                      <div id="ligneBt"><button id="moinsB1">--</button><button id="moinsB1">+</button></div>\n                      <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img data-id="imgClick2br" src="./src/images/brandy-casajuana-100-anos-reserva.jpeg">\n                        <div class="ligneBt"><button id="moinsB2">--</button><button id="plusB2">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div  class="col-1 center">\n                     <figure style= "margin:0;">\n                        <img  data-id="imgClick3br" src="./src/images/barbadillo.jpeg">\n                        <div class="ligneBt"><button id="moinsB3">--</button><button id="plusB3">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                     </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifBrandy"></p></div>\n               </div>\n\n<!--Second line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Vinos</p></div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img  data-id="imgClick1wine" src="./src/images/vin1.jpg">\n                        <div class="ligneBt"><button id="moinsW1">--</button><button id="plusW1">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img  data-id="imgClick2wine" src="./src/images/vin2.jpg">\n                        <div class="ligneBt"><button id="moinsW2">--</button><button id="plusW2">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1 center">\n                    <figure style= "margin:0;">\n                        <img data-id="imgClick3wine" src="./src/images/vin3.jpg">\n                        <div class="ligneBt"><button id="moinsW3">--</button><button id="plusW3">+</button></div>\n                        <p class = "priceHidden"> 25 </p>\n                    </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifWine"></p></div>\n               </div>\n\n<!--Third line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Aceite de oliva</p></div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick1oil" src="./src/images/ROXANE ARBEQUINA_500_02.jpeg">\n                          <div class="ligneBt"><button id="moinsO1">--</button><button id="plusO1">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick2oil" src="./src/images/maria-de-la-o-seleccion-gourmet-500-ml.jpeg">\n                          <div class="ligneBt"><button id="moinsO2">--</button><button id="plusO2">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick3oil" src="./src/images/ROXANE ARBEQUINA_500_02.jpeg">\n                          <div class="ligneBt"><button id="moinsO3">--</button><button id="plusO3">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifOil"></p></div>\n               </div>\n\n  <!--Fourth line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Queso</p></div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick1ch" src="./src/images/cogman-semicurado-puro-oveja.jpeg">\n                          <div class="ligneBt"><button id="moinsCh1">--</button><button id="plusCh1">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick2ch" src="./src/images/queso-curado-al-romero-tomelloso.jpeg">\n                          <div class="ligneBt"><button id="moinsCh2">--</button><button id="plusCh2">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick3ch" src="./src/images/montalvo-curado-en-aceite.jpeg">\n                          <div class="ligneBt"><button id="moinsCh3">--</button><button id="plusCh3">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1"><p id="textExplicatifCheese"></p></div>\n               </div>\n\n<!--Fifth line of products-->\n               <div class="row" >\n                  <div class="col-1"><p>Jamon ib\xE9rico</p></div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick1ham" src="./src/images/jamon1.jpeg">\n                          <div class="ligneBt"><button id="moinsH1">--</button><button id="plusH1">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick2ham" src="./src/images/jamon2.jpeg">\n                          <div class="ligneBt"><button id="moinsH2">--</button><button id="plusH2">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div class="col-1 center">\n                      <figure style= "margin:0;">\n                          <img  data-id="imgClick3ham" src="./src/images/jamon3.jpeg">\n                          <div class="ligneBt"><button id="moinsH3">--</button><button id="plusH3">+</button></div>\n                          <p class = "priceHidden"> 25 </p>\n                      </figure>\n                  </div>\n                  <div  id="imgClick1" class="col-1"><p id="textExplicatifHam"></p></div>\n               </div>\n            </div>\n\n             <div class="row">\n                 <div class="col-2"><p>col-2</p></div>\n                 <div class="col-2"><p>col-2</p></div>\n                 <div class="col-2"><p>col-2</p></div>\n             </div>\n             <div class="row">\n                 <div class="col-3"><p>col-3</p></div>\n                 <div class="col-3"><p>col-3</p></div>\n             </div>\n             <div class="row">\n                 <div class="col-4"><p>col-4</p></div>\n                 <div class="col-2"><p>col-2</p></div>\n             </div>\n             <div class="row">\n                 <div class="col-5"><p>col-5</p></div>\n                 <div class="col-1"><p>col-1</p></div>\n             </div>\n             <div class="row">\n                 <div class="col-6"><p>col-6</p></div>\n             </div>\n         </div>\n          <p>\n            <label for="email">Email:</label> <input type="email" name="email" value="" placeholder="votreemail.ch"  /><br/>\n            <label for="password">Password:</label> <input type="password" name="password" value=""  /><br/>\n          </p>\n          <a class="btn" onclick="Materialize.toast(\'I am a toast\', 4000)">Toast!</a>\n            <button>Login</button>\n          <div>\n            <div>\n\n                <!-- Dropdown Structure -->\n                <ul id=\'dropdown1\' class=\'dropdown-content\' class="col s6">\n                  <li><a href="#!">Ib\xE9rico</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Pata negra</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Jabugo</a></li>\n                </ul>\n            </div>\n            <div>\n\n                <!-- Dropdown Trigger -->\n                <a class=\'dropdown-button btn\' href=\'#\' data-activates=\'dropdown2\' class="col s2">Huile d\'olive</a>\n\n                <!-- Dropdown Structure -->\n                <ul id=\'dropdown2\' class=\'dropdown-content\'>\n                  <li><a href="#!">Normal</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Virgen</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Virgen extra</a></li>\n                </ul>\n            </div>\n            <div>\n                <!-- Dropdown Trigger -->\n                <a class=\'dropdown-button btn\' href=\'#\' data-activates=\'dropdown3\' class="col s2">Fromage manchego</a>\n\n                <!-- Dropdown Structure -->\n                <ul id=\'dropdown3\' class=\'dropdown-content\'>\n                  <li><a href="#!">Curado</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Semicurado</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Tierno</a></li>\n                </ul>\n            </div>\n            <div>\n                <!-- Dropdown Trigger -->\n                <a class=\'dropdown-button btn\' href=\'#\' data-activates=\'dropdown4\'>Confisserie</a>\n\n                <!-- Dropdown Structure -->\n                <ul id=\'dropdown4\' class=\'dropdown-content\'>\n                  <li><a href="#!">Turron</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Sobaos</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">Polvorones</a></li>\n                </ul>\n            </div>\n            <div>\n                <!-- Dropdown Trigger -->\n                <a class=\'dropdown-button btn\' href=\'#\' data-activates=\'dropdown5\'>Brandy de Jerez</a>\n\n                <!-- Dropdown Structure -->\n                <ul id=\'dropdown5\' class=\'dropdown-content\'>\n                  <li><a href="#!">LA BOTA DE BRANDY N\xBA 29</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">TORRES JAIME I</a></li>\n                  <li class="divider"></li>\n                  <li><a href="#!">PEINADO SOLERA 100 A\xD1OS</a></li>\n                </ul>\n\n            </div>\n          </div>\n\n        </form>\n      </section>';
      return vSkeleton;
    }
  }]);

  return HomePage;
}();
// window.onload = function () {
//   dessinerPanier();
// }

},{"../../helpers/firebaseHelper":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvaGVscGVycy9maXJlYmFzZUhlbHBlci5qcyIsImRldi9hcHAvcGFnZXMvaG9tZS9ob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7cWpCQ0FBOzs7Ozs7Ozs7QUFPQTs7OztJQUVNLEs7QUFFSixtQkFBYTtBQUFBOztBQUNYLFNBQUssT0FBTCxHQUFlLFNBQVMsb0JBQVQsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBckMsQ0FBZjtBQUNEOzs7OzRCQUVNO0FBQ0w7QUFDQSxVQUFJLFdBQVcsbUJBQWEsS0FBSyxPQUFsQixDQUFmO0FBQ0Q7Ozs7OztBQUlILElBQUksUUFBUSxJQUFJLEtBQUosRUFBWjtBQUNBLE1BQU0sS0FBTjs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7SUFRYSxjLFdBQUEsYztBQUVYLDRCQUFhO0FBQUE7O0FBRVg7QUFDQSxRQUFJLFNBQVM7QUFDWCxjQUFRLHlDQURHO0FBRVgsa0JBQVksb0NBRkQ7QUFHWCxtQkFBYSwyQ0FIRjtBQUlYLHFCQUFlLGdDQUpKO0FBS1gseUJBQW1CO0FBTFIsS0FBYjtBQU9BLGFBQVMsYUFBVCxDQUF1QixNQUF2QjtBQUNBO0FBQ0E7Ozs7b0NBRWMsTyxFQUFRO0FBQ3RCLFVBQUksV0FBVyxTQUFTLFFBQVQsRUFBZjs7QUFFQTtBQUNBLGVBQVMsR0FBVCxDQUFhLFVBQWIsRUFBeUIsSUFBekIsQ0FBOEIsT0FBOUI7QUFDQTtBQUNEOzs7eUNBRW1CO0FBQUE7O0FBQ2xCO0FBQ0EsVUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBQ0EsZUFBUyxZQUFULENBQXNCLElBQXRCLEVBQTJCLE9BQTNCO0FBQ0EsZUFBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCLFdBQS9CLENBQTJDLFFBQTNDO0FBQ0E7QUFDQSxlQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1D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TyxLLEVBQU07QUFDWixZQUFNLGNBQU47QUFDQSxVQUFJLGtCQUFrQixDQUF0QjtBQUNBLFVBQUksWUFBWSxFQUFoQjtBQUNBLFVBQUksT0FBTyxTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLFFBQTdCO0FBQ0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssTUFBekIsRUFBaUMsR0FBakMsRUFBc0M7QUFDcEMsWUFBRyxLQUFLLENBQUwsRUFBUSxLQUFYLEVBQWlCO0FBQ2Ysb0JBQVUsS0FBSyxDQUFMLEVBQVEsSUFBbEIsSUFBMEIsS0FBSyxDQUFMLEVBQVEsS0FBbEM7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7O21DQUVhOztBQUVaLFVBQUksOElBR00sS0FBSyxTQUhYLHNzYUFBSjtBQTBSRSxhQUFPLFNBQVA7QUFDSDs7Ozs7QUFFSDtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4qIEBBdXRob3I6IFJvYmVyQ2FzdHJvXG4qIEBEYXRlOiAgIDEzLTEyLTIwMTZcbiogQEVtYWlsOiAgcm9iZXJ0b2ljYXN0cm9AZ21haWwuY29tXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvYmVyY2FzdHJvXG4qIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDEzLTEyLTIwMTZcbiovXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vcGFnZXMvaG9tZS9ob21lJztcblxuY2xhc3MgTXlBcHAge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5hcHBCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcHBcIilbMF07XG4gIH1cblxuICBzdGFydCgpe1xuICAgIC8vIGluaXQgSG9tZVBhZ2VcbiAgICBsZXQgaG9tZVBhZ2UgPSBuZXcgSG9tZVBhZ2UodGhpcy5hcHBCb2R5KTtcbiAgfVxuXG59XG5cbmxldCBteUFwcCA9IG5ldyBNeUFwcCgpO1xubXlBcHAuc3RhcnQoKTtcbiIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAyMC0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxMy0xMi0yMDE2XG4qL1xuXG5leHBvcnQgY2xhc3MgRmlyZUJhc2VIZWxwZXIge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAvLyBJbml0aWFsaXplIEZpcmViYXNlXG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIGFwaUtleTogXCJBSXphU3lDcEZncjg0ZXBUeVBPZFVHZ1ZNTHB4TERPRTRwQUdRem9cIixcbiAgICAgIGF1dGhEb21haW46IFwiY2FzdHJvZ2FzdHJvLTg1OGMzLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jYXN0cm9nYXN0cm8tODU4YzMuZmlyZWJhc2Vpby5jb21cIixcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY2FzdHJvZ2FzdHJvLTg1OGMzLmFwcHNwb3QuY29tXCIsXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1MDg1ODg2MzMxODlcIlxuICAgIH07XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgZGF0YWJhc2Ugc2VydmljZVxuICAgfVxuXG4gIGFkZE9iamVjdFRvQmFzZShwcm9kdWN0KXtcbiAgICBsZXQgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuXG4gICAgLy8gbCdlbnZveWVyIGRhbnMgbGEgY29sbGVjdGlvbiBcInByb2R1Y3RzXCIgc3VyIEZpcmViYXNlXG4gICAgZGF0YWJhc2UucmVmKCdwcm9kdWN0cycpLnB1c2gocHJvZHVjdCk7XG4gICAgLy8gdmlkZXIgbGEgdmFsZXVyIGR1IGNoYW1wIGlucHV0XG4gIH1cblxuICBsb2FkRmlyZWJhc2VPYmplY3QoKXtcbiAgICAvLyBjcsOpYXRpb24gZCd1biBVTCBwb3VyIHJlY2V2b2lyIGxlcyBwcm9kdWl0c1xuICAgIGxldCBsaXN0ZV9VTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBsaXN0ZV9VTC5zZXRBdHRyaWJ1dGUoJ2lkJywnbGlzdGUnKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5hcHBlbmRDaGlsZChsaXN0ZV9VTClcbiAgICAvLyBham91dCBkJ3VuIGV2ZW50IGxpc3RlbmVuciBwb3VyIGNhcHR1cmVyIGxlIGNsaWNrXG4gICAgbGlzdGVfVUwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgIC8vIGwnZXZlbnQgZXN0IHBhc3PDqSDDoCB1bmUgZm9uY3Rpb24gcG91ciDDqnRyZSB0cmFpdMOpIHBsdXMgbG9pbi4uLlxuICAgICAgdGhpcy51cGRhdGVEYXRhYmFzZShldmVudClcbiAgICB9KVxuICAgIC8vIHLDqWN1cMOpcmVyIGxhIHLDqWbDqXJlbmNlIHByb2R1Y3RzXG4gICAgLy8gQ3LDqWVyIHVuIGxpc3RlbmVyIHBvdXIgcsOpY3Vww6lyZXJcbiAgICAvLyBsYSB2YWxldXIgY29udGVudSBkYW5zIGxhIHLDqWbDqXJlbmNlXG4gICAgdmFyIHByb2R1Y3RzUmVmID0gZGF0YWJhc2UucmVmKCdwcm9kdWN0cycpO1xuICAgIC8vIENyw6llciB1biBsaXN0ZW5lciBwb3VyIHLDqWN1cMOpcmVyXG4gICAgLy8gbGEgdmFsZXVyIGNvbnRlbnUgZGFucyBsYSByw6lmw6lyZW5jZVxuICAgIHByb2R1Y3RzUmVmLm9uKCdjaGlsZF9hZGRlZCcsIChzbmFwc2hvdCk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBhZGRlZC0+ICcsIHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgLy8gbGVzIHZhbGV1ciBzb250IGNvbnRlbnUgZGFucyBzbmFwc2hvdC52YWwoKVxuICAgICAgICAvLyBldCBwYXNzw6llIMOgIHVuZSBmb25jdGlvbiBwb3VyIMOqdHJlIHRyYWl0w6llIHBsdXMgbG9pbi4uLlxuICAgICAgICB0aGlzLmRpc3BsYXlQcm9kdWN0c0luTGlzdChzbmFwc2hvdClcbiAgICB9KTtcbiAgICBwcm9kdWN0c1JlZi5vbignY2hpbGRfcmVtb3ZlZCcsIChzbmFwc2hvdCk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCByZW1vdmVkLT4gJywgc25hcHNob3QudmFsKCkpO1xuICAgICAgICAvLyBsZXMgdmFsZXVyIHNvbnQgY29udGVudSBkYW5zIHNuYXBzaG90LnZhbCgpXG4gICAgICAgIC8vIGV0IHBhc3PDqWUgw6AgdW5lIGZvbmN0aW9uIHBvdXIgw6p0cmUgdHJhaXTDqWUgcGx1cyBsb2luLi4uXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdHNJbkxpc3Qoc25hcHNob3QpXG4gICAgfSk7XG4gIH1cblxuICAvLyBhZmZpY2hlciBkYW5zIHVuIHRhYmxlYXUgKCB1bCA+IGxpICkgbGEgbGlzdGUgZGUgcHJvZHVpdFxuLyogIGRpc3BsYXlGYXZvcml0ZXMocHJvZHVjdERhdGEpe1xuICAgIC8vIHNpIGxhIGxpc3RlIFVMIGV4aXN0ZVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0ZScpKXtcbiAgICAgIC8vIGFqb3V0ZXIgbGUgcHJvZHVpdCBkYW5zIGxlIExJIGF2ZWMgdW4gY2hlY2tib3ggZXQgdW4gYm91dHRvbiBkZWxldGVcbiAgICAgIGxldCBsaXN0ZV9MSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgIC8vIG9uIGFzaWduZSB1bmUgaWQgcG91ciBpZGVudGlmaWVyIGwnZWxlbWVudCBsb3JzIGR1IGNsaWNrXG4gICAgICBsaXN0ZV9MSS5zZXRBdHRyaWJ1dGUoJ2lkJyxwcm9kdWN0RGF0YS5rZXkpXG4gICAgICBsaXN0ZV9MSS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInVwZGF0ZVwiICR7KHByb2R1Y3REYXRhLnZhbCgpLnN0YXR1dCA9PT0gdHJ1ZSk/J2NoZWNrZWQnOicnfSBuYW1lPVwic3RhdHV0XCI+XG4gICAgICAgICR7cHJvZHVjdERhdGEudmFsKCkubmFtZX1cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbFwiPnJlbW92ZTwvYnV0dG9uPlxuICAgICAgYFxuICAgICAgLy8gb24gYWpvdXQgbGUgTEkgY3LDqcOpIGRhbnMgbGEgbGlzdGUgVUxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0ZScpLmFwcGVuZENoaWxkKGxpc3RlX0xJKVxuICAgIH1cbiAgfVxuXG4gIC8vIGZvbmN0aW9uIHBvdXIgbWV0dHJlIMOgIGpvdXIgbGEgYmFzZSBkZSBkb25uw6llXG4gIHVwZGF0ZURhdGFiYXNlKGV2ZW50KXtcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4gICAgLy8gcsOpY3Vww6lyZXIgbCdpZCBkZSBsJ8OpbMOpbWVudCBzdWVyIGxlcXVlbCBvbiBhIGNsaWvDqVxuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgIC8vIHNpIG9uIGEgY2xpY2vDqSBzdXIgbGUgYnV0dG9uLT4gb24gc3VwcHJpbWUgZGUgbGEgQkREXG4gICAgaWYoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2RlbCcpe1xuICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y3QgZGVsZXRlLT4gJyxpZCk7XG4gICAgICBkYXRhYmFzZS5yZWYoJ3Byb2R1Y3RzLycraWQpLnJlbW92ZSgpO1xuICAgIH1cbiAgICAvLyBzaSBvbiBhIGNsaWNrw6kgc3VyIGxhIGNhc2Ugw6AgY29jaGVyLT4gb24gdXBkYXRlIGxhIEJERFxuICAgIGlmKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICd1cGRhdGUnKXtcbiAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWN0IHVwZGF0ZS0+ICcsaWQpO1xuICAgICAgZGF0YWJhc2UucmVmKCdwcm9kdWN0cy8nK2lkKS51cGRhdGUoe1xuICAgICAgICBzdGF0dXQ6IGV2ZW50LnRhcmdldC5jaGVja2VkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQcm9kdWN0c0luTGlzdChwcm9kdWN0RGF0YSl7XG4gICAgbGV0IHByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9kdWN0RGF0YS5rZXkpXG4gICAgcHJvZHVjdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2R1Y3QpXG4gIH0qL1xuXG5cblxufVxuIiwiLyoqXG4qIEBBdXRob3I6IFJvYmVyQ2FzdHJvXG4qIEBEYXRlOiAgIDEzLTEyLTIwMTZcbiogQEVtYWlsOiAgcm9iZXJ0b2ljYXN0cm9AZ21haWwuY29tXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvYmVyY2FzdHJvXG4qIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDEzLTEyLTIwMTZcbiovXG5cbmltcG9ydCB7IEZpcmVCYXNlSGVscGVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy9maXJlYmFzZUhlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG5cbiAgY29uc3RydWN0b3IoYXBwQm9keSl7XG4gICAgdGhpcy5hcHBCb2R5ID0gYXBwQm9keVxuICAgIHRoaXMucGFnZVRpdGxlID0gJ0hlbGxvIHdvcmxkISBIZWxsbyBSb2JlcnRvJztcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMuZkZpcmVCYXNlSGVscGVyKCk7XG4gIH1cblxuICBmRmlyZUJhc2VIZWxwZXIoKXtcblxuICAgIC8vV2UgaW5zdGFuY2lhdGUgdGhlIEZpcmViYXNlIGNsYXNzXG4gICAgbGV0IGRhdGFCYXNlQ2FzdHJvID0gbmV3IEZpcmVCYXNlSGVscGVyKCk7XG5cbiAgICAvL0luIHRoZSBjYXNlIHRoZSB1c2VyIHNlbmQgdGhlIG9yZGVyIHdlIHNhdmUgaW4gdGhlIGRhdGFiYXNlXG4gICAgJChcIiNzZW5kT3JkZXJcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXG4gICAgICB2YXIgY29tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xuICAgICAgZGF0YUJhc2VDYXN0cm8uYWRkT2JqZWN0VG9CYXNlKGNvbUxvY2FsU3RvcmFnZSk7XG4gICAgICBhbGVydChcIkJpZW4gZW52b3nDqVwiKVxuICAgIH0pXG4gIH1cblxuICBpbml0VUkoKXtcblxuICAgIC8vSW5pY2lhdGUgdGhlIHZhcmlhYmxlIFEgdG8gdGhlIHZhbHVlIGluIHRoZSBodG1sXG4gICAgdmFyIHZRO1xuICAgIC8vSW5pY2lhdGUgdGhlIHZhcmlhYmxlIHByaWNlUHJvZHVjdFxuICAgIHZhciBwcmljZVByb2R1Y3Q7XG4gICAgdmFyIHByaWNlQ29tbWFuZGU7XG4gICAgdmFyIHRpbWVzQ29tbWFuZGU7XG4gICAgdmFyIHRvdGFsUHJpY2VQYWNrYWdlO1xuICAgIHZhciBsb2NhbE9yZGVyID0ge307XG5cblxuICAgIC8vIHJlbW92ZSBhbGwgc2VjdGlvbiBiZWZvcmUgZGlzcGxheSBVSVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXG4gICAgfVxuICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIuYnV0dG9uLWNvbGxhcHNlXCIpLnNpZGVOYXYoKTtcbiAgICB9KVxuICAgIC8vIGNyZWF0ZSBwYWdlIHNrZWxldG9uXG4gICAgbGV0IHBhZ2VTa2VsZXRvbiA9IHRoaXMuc2tlbGV0b25CYXNlKCk7XG5cbiAgICAvLyBhZGQgcGFnZSBza2VsZXRvbiBpbiBib2R5XG4gICAgdGhpcy5hcHBCb2R5Lmluc2VydEFkamFjZW50SFRNTCggJ2FmdGVyYmVnaW4nLCBwYWdlU2tlbGV0b24gKVxuICAgIHRoaXMubG9hZEV2ZW50VUkoKVxuICAgIHRoaXMuZGVzc2luZXJQYW5pZXIocHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UpO1xuICAgIHRoaXMuY2hvb3NlUHJvZHVjdCh2USxwcmljZVByb2R1Y3QscHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcilcbiAgICB0aGlzLmNsaWNrQ29tbWFuZGVRdChwcmljZUNvbW1hbmRlLHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKVxuXG4gICAgTWF0ZXJpYWxpemUudG9hc3QoJ0kgYW0gYSB0b2FzdCEnLCA0MDAwKSAvLyA0MDAwIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgdG9hc3RcbiAgICBjb25zb2xlLmxvZygkKFwiI3RvdGFsUHJpY2VDb21tYW5kZVwiKVswXS5pbm5lckhUTUwpXG5cbiAgfVxuXG4gIGRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKSB7XG4gICAgLy8gU3VwcHJpbWVyIGNvbnRlbnUgcGFuaWVyXG4gICAgdmFyIGxpc3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1eUxpc3QnKTtcbiAgICB3aGlsZSAobGlzdGUuY2hpbGRyZW4ubGVuZ3RoPjEpIHtsaXN0ZS5yZW1vdmVDaGlsZChsaXN0ZS5sYXN0Q2hpbGQpfVxuICAgIHByaWNlQ29tbWFuZGUgPSAwO1xuXG4gICAgLy8gQWZmaWNoZXIgbGVzIMOpbMOpbWVudHNcbiAgICB2YXIgcHJvZHVpdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgZm9yKGxldCBpZCBpbiBwcm9kdWl0cykge1xuICAgICAgdGhpcy5kZXNzaW5lclByb2R1aXQocHJvZHVpdHNbaWRdKTtcbiAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJvZHVpdHNbaWRdLnByaWNlUHJvICogcHJvZHVpdHNbaWRdLnRpbWVzUHJvIDtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9PSBcIlF1YW50aXTDqVwiKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gMTtcbiAgICB9O1xuICB9XG5cbiAgZGVzc2luZXJQcm9kdWl0KHByb2R1aXQpIHtcbiAgICAvLyBMaXJlIGxlIHNyYyBkdSBwcm9kdWl0IChzdG9ja8OpIGRhbnMgbGUgaHRtbClcbiAgICB2YXIgc3JjSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbWdbZGF0YS1pZD0ke3Byb2R1aXQuaWRQcm99XWApLnNyYztcbiAgICB2YXIgcHJvZHVjdFRvTGlzdCA9IGBcbiAgICA8ZGl2IGlkPVwiJHtwcm9kdWl0LmlkUHJvfVwiIGNsYXNzPVwiY29sLTEwNVwiPlxuICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICA8aW1nIGlkPVwiaW1nUGFuMVwiIHNyYz1cIiR7c3JjSW1hZ2V9XCI+XG4gICAgICAgPC9maWd1cmU+XG4gICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+ICR7cHJvZHVpdC5wcmljZVByb30gPC9wPlxuICAgICAgIDxwPiR7cHJvZHVpdC50aW1lc1Byb308L3A+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV5TGlzdCcpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvZHVjdFRvTGlzdCk7XG4gIH1cblxuICBjaG9vc2VQcm9kdWN0KHZRLCBwcmljZVByb2R1Y3QscHJpY2VDb21tYW5kZSx0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSwgbG9jYWxPcmRlcil7XG5cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdExpc3QnKSlcbiAgICB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdExpc3QnKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBldmVudD0+e1xuXG4gICAgICAgICAgdGhpcy5jbGlja0ZpZ3VyZShldmVudCk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICB0aGlzLmNsaWNrUGx1c0xlc3MoZXZlbnQsIHZRLCBwcmljZVByb2R1Y3QsIHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlLCBsb2NhbE9yZGVyKTtcbiAgICAgICAgICAvL3RoaXMuZGVzc2luZXJQYW5pZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgY2xpY2tQbHVzTGVzcyhldmVudCwgdlEsIHByaWNlUHJvZHVjdCwgcHJpY2VDb21tYW5kZSwgdGltZXNDb21tYW5kZSwgdG90YWxQcmljZVBhY2thZ2UsIGxvY2FsT3JkZXIpe1xuXG4gICAgICAvL0luaWNpYXRlIHRoZSBxdWFudGl0eSB0byAwXG4gICAgICB2YXIgcVByb2R1Y3Q7XG5cbiAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXlMaXN0JykubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSBcIkZJR1VSRVwiKXtcbiAgICAgICAgcHJpY2VDb21tYW5kZSA9IDA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MID0gMTtcbiAgICAgIH1lbHNle1xuICAgICAgICBwcmljZUNvbW1hbmRlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCwxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vSWYgdGhlIGNsaWNrIGlzIGluIGEgYnV0dG9uXG4gICAgICBpZihldmVudC50YXJnZXQudGFnTmFtZSA9PSAnQlVUVE9OJyl7XG5cbiAgICAgICAgLy9Db252ZXJ0IHRoZSBodG1sIHRleHQgaW4gYW4gaW50ZWdlciBudW1iZXIgc28gd2UgY2FuIG9wZXJhdGUgd2l0aCBpdFxuICAgICAgICBwcmljZVByb2R1Y3QgPSBwYXJzZUludChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MLCAxMCk7XG5cbiAgICAgICAgLy9JZiB0aGUgcHJvZHVjdCBkb24ndCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICBpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkgJiYgZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnKycpe1xuXG4gICAgICAgICAgbG9jYWxPcmRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcblxuICAgICAgICAgIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV0gPSB7XG4gICAgICAgICAgICBpZFBybzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgIHRpbWVzUHJvOiAxLFxuICAgICAgICAgICAgcHJpY2VQcm86IHByaWNlUHJvZHVjdFxuICAgICAgICAgIH07XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuXG4gICAgICAgICAgLy9BZGQgdGhlIGh0bWwgY29udGVudCB0byB0aGUgZGl2IGJ1eUxpc3RcbiAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAvL0NhbGN1bGF0ZSBhbmQgcHJpY2VzIGFuZCBxdWFudGl0aWVzXG4gICAgICAgICAgcHJpY2VDb21tYW5kZSA9IHByaWNlQ29tbWFuZGUgKyBwcmljZVByb2R1Y3Q7XG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXG4gICAgICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VQYWNrYWdlJykuaW5uZXJIVE1MID0gdG90YWxQcmljZVBhY2thZ2U7XG5cbiAgICAgICAgLy9JZiB0aGUgcHJvZHVjdCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICB9ZWxzZSBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSl7XG5cbiAgICAgICAgICB2USA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpLmxhc3RDaGlsZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTCwgMTApO1xuXG4gICAgICAgICAgLy9JZiB0aGUgY2xpY2sgaXMgb24gdGhlIHBsdXMgYnV0dG9uXG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9PSAnKycpe1xuXG4gICAgICAgICAgICBxUHJvZHVjdCA9IHZRICsgMTtcbiAgICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlICsgcHJpY2VQcm9kdWN0O1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gcVByb2R1Y3Q7XG5cbiAgICAgICAgICAgIGxvY2FsT3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxPcmRlclwiKSk7XG4gICAgICAgICAgICBsb2NhbE9yZGVyW2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldID0ge1xuICAgICAgICAgICAgICBpZFBybzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgdGltZXNQcm86IHFQcm9kdWN0LFxuICAgICAgICAgICAgICBwcmljZVBybzogcHJpY2VQcm9kdWN0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE9yZGVyXCIsSlNPTi5zdHJpbmdpZnkobG9jYWxPcmRlcikpO1xuICAgICAgICAgICAgdGhpcy5kZXNzaW5lclBhbmllcihwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAvL0lmIHRoZSBjbGljayBpcyBvbiB0aGUgbGVzcyBidXR0b25cbiAgICAgICAgICB9ZWxzZSBpZihldmVudC50YXJnZXQuaW5uZXJIVE1MID09ICctLScpe1xuXG4gICAgICAgICAgICAgIC8vaWYgdGhlIHF1YW50aXR5IGlzIDEgd2UgdGFrZSBvZmYgdGhlIGRpdiBvZiB0aGUgcHJvZHVjdCBmcm9tIHRoZSBwcm9kdWN0TGlzdFxuICAgICAgICAgICAgICBpZih2UT09PTEpe1xuICAgICAgICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwcmljZUNvbW1hbmRlIC0gcHJpY2VQcm9kdWN0O1xuICAgICAgICAgICAgICAgIHZhciBpZFBybyA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgdmFyIHByID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRQcm8pO1xuICAgICAgICAgICAgICAgIHByLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHIpO1xuXG4gICAgICAgICAgICAgICAgbG9jYWxPcmRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE9yZGVyXCIpKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbG9jYWxPcmRlcltldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsT3JkZXJcIixKU09OLnN0cmluZ2lmeShsb2NhbE9yZGVyKSk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhsb2NhbE9yZGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcblxuICAgICAgICAgICAgICAvL2lmIHRoZSBxdWFudGl0eSBpcyBtb3JlIHRoYW4gMSB3ZSB0YWtlIG9uZSB1bml0eSBmcm9tIHRoZSBxdWFudGl0eSBvZiB0aGUgcHJvZHVjdFxuICAgICAgICAgICAgICB9ZWxzZSBpZih2UT4xKXtcbiAgICAgICAgICAgICAgICBwcmljZUNvbW1hbmRlID0gcHJpY2VDb21tYW5kZSAtIHByaWNlUHJvZHVjdDtcbiAgICAgICAgICAgICAgICBxUHJvZHVjdCA9IHZRIC0gMTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKS5sYXN0Q2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBxUHJvZHVjdDtcbiAgICAgICAgICAgICAgICBsb2NhbE9yZGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsT3JkZXJcIikpO1xuICAgICAgICAgICAgICAgIGxvY2FsT3JkZXJbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV0gPSB7XG4gICAgICAgICAgICAgICAgICBpZFBybzogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgICAgIHRpbWVzUHJvOiBxUHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgIHByaWNlUHJvOiBwcmljZVByb2R1Y3RcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxPcmRlclwiLEpTT04uc3RyaW5naWZ5KGxvY2FsT3JkZXIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3NpbmVyUGFuaWVyKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MID0gcHJpY2VDb21tYW5kZTtcbiAgICB9XG5cblxuICAgIGNsaWNrQ29tbWFuZGVRdChwcmljZUNvbW1hbmRlLCB0aW1lc0NvbW1hbmRlLCB0b3RhbFByaWNlUGFja2FnZSl7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tYW5kZUNvbHVtbicpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGV2ZW50Q29tbWFuZGU9PntcblxuICAgICAgICAgIHByaWNlQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgICAgIHRpbWVzQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCwxMClcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IDE7XG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXG5cbiAgICAgICAgICBpZihldmVudENvbW1hbmRlLnRhcmdldC5pZCA9PSAncGx1cycpe1xuICAgICAgICAgICAgdGltZXNDb21tYW5kZSA9IHRpbWVzQ29tbWFuZGUgKzE7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgfWVsc2UgaWYoZXZlbnRDb21tYW5kZS50YXJnZXQuaWQgPT0gJ21vaW5zJyAmJiB0aW1lc0NvbW1hbmRlID4gMSl7XG4gICAgICAgICAgICB0aW1lc0NvbW1hbmRlLS07XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXNDb21tYW5kZScpLmlubmVySFRNTCA9IHRpbWVzQ29tbWFuZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwcmljZUNvbW1hbmRlICogdGltZXNDb21tYW5kZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIHJlZnJlc2hUb3RhbENvbW1hbmRlKHByaWNlQ29tbWFuZGUsIHRpbWVzQ29tbWFuZGUsIHRvdGFsUHJpY2VQYWNrYWdlKXtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUHJpY2VDb21tYW5kZScpLmlubmVySFRNTCA9IHByaWNlQ29tbWFuZGU7XG4gICAgICB0b3RhbFByaWNlUGFja2FnZSA9IHByaWNlQ29tbWFuZGUgKiB0aW1lc0NvbW1hbmRlO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcbiAgICAgIHByaWNlQ29tbWFuZGUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZUNvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuICAgICAgdGltZXNDb21tYW5kZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lc0NvbW1hbmRlJykuaW5uZXJIVE1MLDEwKVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSAxO1xuICAgICAgdG90YWxQcmljZVBhY2thZ2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwsMTApXG5cbiAgICAgIHRvdGFsUHJpY2VQYWNrYWdlID0gcHJpY2VDb21tYW5kZSAqIHRpbWVzQ29tbWFuZGU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxQcmljZVBhY2thZ2UnKS5pbm5lckhUTUwgPSB0b3RhbFByaWNlUGFja2FnZTtcblxuICAgIH1cblxuICAgIGNsaWNrRmlndXJlKGV2ZW50KXtcblxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ0lNRycpe1xuXG4gICAgICAgIHZhciB0eXBlUHJvZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICBzd2l0Y2godHlwZVByb2Qpe1xuXG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2sxYnInOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQnJhbmR5JykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSBwcmVtaWVyIGJyYW5keSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJicic6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZCcmFuZHknKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIGRldXhpw6htZSBicmFuZHkgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szYnInOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmQnJhbmR5JykuaW5uZXJIVE1MID0gXCJDZWNpIGVzdCBsZSB0cm9pc2nDqG1lIGJyYW5keSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazF3aW5lJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZldpbmUnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgdmluIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMndpbmUnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRFeHBsaWNhdGlmV2luZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIHZpbiBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazN3aW5lJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZldpbmUnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgdmluIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMW9pbCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZPaWwnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgaHVpbGUgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syb2lsJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZk9pbCcpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgZGV1eGnDqG1lIGh1aWxlIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrM29pbCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZPaWwnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgaHVpbGUgZGUgbGEgbGlzdGVcIlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ltZ0NsaWNrMWNoJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkNoZWVzZScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgdHJvaXNpw6htZSBodWlsZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazJjaCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZDaGVlc2UnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHByZW1pZXIgZnJvbWFnZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazNjaCc6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZDaGVlc2UnKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgZnJvbWFnZSBkZSBsYSBsaXN0ZVwiXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbWdDbGljazFoYW0nOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0RXhwbGljYXRpZkhhbScpLmlubmVySFRNTCA9IFwiQ2VjaSBlc3QgbGUgcHJlbWllciBqYW1ib24gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2syaGFtJzpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZIYW0nKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIGRldXhpw6htZSBqYW1ib24gZGUgbGEgbGlzdGVcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW1nQ2xpY2szaGFtJzpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEV4cGxpY2F0aWZIYW0nKS5pbm5lckhUTUwgPSBcIkNlY2kgZXN0IGxlIHRyb2lzacOobWUgamFtYm9uIGRlIGxhIGxpc3RlXCJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBhbGVydChcIkNlIHByb2R1aXQgbidhIHBhcyBkZSBkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWRFdmVudFVJKCl7XG4gICAgbGV0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXTtcbiAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpO1xuICB9XG5cbiAgb25Mb2dpbihldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB2YWxpZGF0aW9uSW5wdXQgPSAwXG4gICAgbGV0IGZvcm1JbnB1dCA9IHt9XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYoZm9ybVtpXS52YWx1ZSl7XG4gICAgICAgIGZvcm1JbnB1dFtmb3JtW2ldLm5hbWVdID0gZm9ybVtpXS52YWx1ZVxuICAgICAgICB2YWxpZGF0aW9uSW5wdXQrK1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNrZWxldG9uQmFzZSgpe1xuXG4gICAgbGV0IHZTa2VsZXRvbiA9IGBcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxpbWcgY2xhc3M9XCJtYXRlcmlhbGJveGVkXCIgd2lkdGg9XCIxMDI0cHhcIiBoZWlnaHQ9XCIyMDBweFwiIHNyYz1cIi4vc3JjL2ltYWdlcy92aW5hczIuanBlZ1wiPlxuICAgICAgICA8aDE+JHt0aGlzLnBhZ2VUaXRsZX08L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAjZGl2MSB7XG4gICAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYWFhYTtcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZCYXJUb3BcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCIgY2xhc3M9XCJuYXZCYXJUb3BcIiA+XG4gICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3M9XCJicmFuZC1sb2dvXCI+TG9nbzwvYT5cbiAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzcz1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0b3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlF1aWVuZXMgc29tb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3RvPC9hPjwvbGk+XG4gICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwic2Fzcy5odG1sXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImJhZGdlcy5odG1sXCI+UHJvZHVjdG9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImNvbGxhcHNpYmxlLmh0bWxcIj5KYXZhc2NyaXB0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIm1vYmlsZS5odG1sXCI+Q29udGFjdG88L2E+PC9saT5cbiAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZE9yZGVyXCI+PGJ1dHRvbiBjbGFzcz1cImJ0blwiIGlkPVwic2VuZE9yZGVyXCI+RW52b3llciBjb21tYW5kZTwvYnV0dG9uPjwvZGl2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXIgb3V0bGluZVwiPlxuICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXlMaXN0XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTA1XCIgaWQ9XCJjb21tYW5kZUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgY29mZnJlPC9wPjwvYnI+XG4gICAgICAgICAgICAgICAgICA8cCBpZD1cInRvdGFsUHJpY2VDb21tYW5kZVwiPjwvcD48L2JyPlxuICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0aW1lc0NvbW1hbmRlXCI+UXVhbnRpdMOpPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJ0b3RhbFByaWNlUGFja2FnZVwiPjwvcD48L2JyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2R1Y3RMaXN0XCIgPlxuXG48IS0tRmlyc3QgbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPkJyYW5keTwvcD48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRhdGEtaWQ9XCJpbWdDbGljazFiclwiIHNyYz1cIi4vc3JjL2ltYWdlcy9icmFuZHkxLnBuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQjFcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJtb2luc0IxXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRhdGEtaWQ9XCJpbWdDbGljazJiclwiIHNyYz1cIi4vc3JjL2ltYWdlcy9icmFuZHktY2FzYWp1YW5hLTEwMC1hbm9zLXJlc2VydmEuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNCMlwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNCMlwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazNiclwiIHNyYz1cIi4vc3JjL2ltYWdlcy9iYXJiYWRpbGxvLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zQjNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQjNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwIGlkPVwidGV4dEV4cGxpY2F0aWZCcmFuZHlcIj48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuPCEtLVNlY29uZCBsaW5lIG9mIHByb2R1Y3RzLS0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+Vmlub3M8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxd2luZVwiIHNyYz1cIi4vc3JjL2ltYWdlcy92aW4xLmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNXMVwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNXMVwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2syd2luZVwiIHNyYz1cIi4vc3JjL2ltYWdlcy92aW4yLmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNXMlwiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNXMlwiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRhdGEtaWQ9XCJpbWdDbGljazN3aW5lXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL3ZpbjMuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc1czXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c1czXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwIGlkPVwidGV4dEV4cGxpY2F0aWZXaW5lXCI+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbjwhLS1UaGlyZCBsaW5lIG9mIHByb2R1Y3RzLS0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHA+QWNlaXRlIGRlIG9saXZhPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazFvaWxcIiBzcmM9XCIuL3NyYy9pbWFnZXMvUk9YQU5FIEFSQkVRVUlOQV81MDBfMDIuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc08xXCI+LS08L2J1dHRvbj48YnV0dG9uIGlkPVwicGx1c08xXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMm9pbFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9tYXJpYS1kZS1sYS1vLXNlbGVjY2lvbi1nb3VybWV0LTUwMC1tbC5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zTzJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzTzJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2szb2lsXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL1JPWEFORSBBUkJFUVVJTkFfNTAwXzAyLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNPM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNPM1wiPis8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByaWNlSGlkZGVuXCI+IDI1IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+PHAgaWQ9XCJ0ZXh0RXhwbGljYXRpZk9pbFwiPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gIDwhLS1Gb3VydGggbGluZSBvZiBwcm9kdWN0cy0tPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPlF1ZXNvPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9IFwibWFyZ2luOjA7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGRhdGEtaWQ9XCJpbWdDbGljazFjaFwiIHNyYz1cIi4vc3JjL2ltYWdlcy9jb2dtYW4tc2VtaWN1cmFkby1wdXJvLW92ZWphLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNDaDFcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQ2gxXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrMmNoXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL3F1ZXNvLWN1cmFkby1hbC1yb21lcm8tdG9tZWxsb3NvLmpwZWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ25lQnRcIj48YnV0dG9uIGlkPVwibW9pbnNDaDJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzQ2gyXCI+KzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJpY2VIaWRkZW5cIj4gMjUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT0gXCJtYXJnaW46MDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgZGF0YS1pZD1cImltZ0NsaWNrM2NoXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL21vbnRhbHZvLWN1cmFkby1lbi1hY2VpdGUuanBlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnbmVCdFwiPjxidXR0b24gaWQ9XCJtb2luc0NoM1wiPi0tPC9idXR0b24+PGJ1dHRvbiBpZD1cInBsdXNDaDNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwIGlkPVwidGV4dEV4cGxpY2F0aWZDaGVlc2VcIj48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuPCEtLUZpZnRoIGxpbmUgb2YgcHJvZHVjdHMtLT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48cD5KYW1vbiBpYsOpcmljbzwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2sxaGFtXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2phbW9uMS5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zSDFcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzSDFcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2syaGFtXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2phbW9uMi5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zSDJcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzSDJcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIHN0eWxlPSBcIm1hcmdpbjowO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBkYXRhLWlkPVwiaW1nQ2xpY2szaGFtXCIgc3JjPVwiLi9zcmMvaW1hZ2VzL2phbW9uMy5qcGVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWduZUJ0XCI+PGJ1dHRvbiBpZD1cIm1vaW5zSDNcIj4tLTwvYnV0dG9uPjxidXR0b24gaWQ9XCJwbHVzSDNcIj4rPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcmljZUhpZGRlblwiPiAyNSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgIGlkPVwiaW1nQ2xpY2sxXCIgY2xhc3M9XCJjb2wtMVwiPjxwIGlkPVwidGV4dEV4cGxpY2F0aWZIYW1cIj48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj48cD5jb2wtMjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+PHA+Y29sLTI8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPjxwPmNvbC0yPC9wPjwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+PHA+Y29sLTM8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPjxwPmNvbC0zPC9wPjwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+PHA+Y29sLTQ8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPjxwPmNvbC0yPC9wPjwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC01XCI+PHA+Y29sLTU8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjxwPmNvbC0xPC9wPjwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+PHA+Y29sLTY8L3A+PC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+IDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwidm90cmVlbWFpbC5jaFwiICAvPjxici8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJcIiAgLz48YnIvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YSBjbGFzcz1cImJ0blwiIG9uY2xpY2s9XCJNYXRlcmlhbGl6ZS50b2FzdCgnSSBhbSBhIHRvYXN0JywgNDAwMClcIj5Ub2FzdCE8L2E+XG4gICAgICAgICAgICA8YnV0dG9uPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMScgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnIGNsYXNzPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+SWLDqXJpY288L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlBhdGEgbmVncmE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkphYnVnbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFRyaWdnZXIgLS0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjInIGNsYXNzPVwiY29sIHMyXCI+SHVpbGUgZCdvbGl2ZTwvYT5cblxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gU3RydWN0dXJlIC0tPlxuICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd24yJyBjbGFzcz0nZHJvcGRvd24tY29udGVudCc+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+Tm9ybWFsPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5WaXJnZW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlZpcmdlbiBleHRyYTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd24zJyBjbGFzcz1cImNvbCBzMlwiPkZyb21hZ2UgbWFuY2hlZ288L2E+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMycgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkN1cmFkbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+U2VtaWN1cmFkbzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VGllcm5vPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFRyaWdnZXIgLS0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjQnPkNvbmZpc3NlcmllPC9hPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XG4gICAgICAgICAgICAgICAgPHVsIGlkPSdkcm9wZG93bjQnIGNsYXNzPSdkcm9wZG93bi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5UdXJyb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlNvYmFvczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+UG9sdm9yb25lczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd241Jz5CcmFuZHkgZGUgSmVyZXo8L2E+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duNScgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkxBIEJPVEEgREUgQlJBTkRZIE7CuiAyOTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VE9SUkVTIEpBSU1FIEk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlBFSU5BRE8gU09MRVJBIDEwMCBBw5FPUzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5gO1xuICAgICAgcmV0dXJuIHZTa2VsZXRvbjtcbiAgfVxufVxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgZGVzc2luZXJQYW5pZXIoKTtcbi8vIH1cbiJdfQ==
