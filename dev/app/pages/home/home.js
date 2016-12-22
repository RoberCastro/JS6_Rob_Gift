/**
* @Author: RoberCastro
* @Date:   13-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 13-12-2016
*/

import { FireBaseHelper } from '../../helpers/firebaseHelper';
import { AdminPage } from '../../pages/admin/admin';

export class HomePage {

  constructor(appBody){
    this.appBody = appBody
    this.pageTitle = 'Welcome to Gastro Castro';
    this.initUI();
    this.fFireBaseHelper();
    this.emptyBoxF();
  }


  initUI(){

    //Iniciate the variable Q to the value in the html
    var vQ;
    //Iniciate the variable priceProduct
    var priceProduct;
    var priceCommande;
    var timesCommande;
    var totalPricePackage;
    var localOrder = {};


    // remove all section before display UI
    if(document.getElementsByTagName("section")[0]){
      document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0])
    }
    $( document ).ready(function(){
      $(".button-collapse").sideNav();
    })
    // create page skeleton
    let pageSkeleton = this.skeletonBase();

    // add page skeleton in body
    this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton )
    this.loadEventUI()
    this.dessinerPanier(priceCommande, timesCommande, totalPricePackage);
    this.chooseProduct(vQ,priceProduct,priceCommande,timesCommande, totalPricePackage, localOrder)
    this.clickCommandeQt(priceCommande,timesCommande, totalPricePackage)

    Materialize.toast('I am a toast!', 4000) // 4000 is the duration of the toast

  }

  fFireBaseHelper(){

    //We instanciate the Firebase class
    let dataBaseCastro = new FireBaseHelper();

    //In the case the user send the order we save in the database
    $("#sendOrder")[0].addEventListener('click', (e)=>{

      e.preventDefault();

      var sEmail = $('#txtEmail').val();
      // Checking Empty Fields
      if ($.trim(sEmail).length == 0) {
          e.preventDefault();
          alert('Remplissez le champ email');
          return false;
      }
      if (this.validateEmail(sEmail)) {
        e.preventDefault();
        Materialize.toast('Email ok', 4000) // 4000 is the duration of the toast
      }
      else {
        e.preventDefault();
          alert('Invalid Email Address');
          return false;
      }

      var comLocalStorage = JSON.parse(localStorage.getItem("localOrder"));
      console.log(comLocalStorage)
      dataBaseCastro.addObjectToBase({
        order: comLocalStorage,
        priceOrder: $("#totalPriceCommande")[0].innerHTML,
        nbOrder: $("#timesCommande")[0].innerHTML,
        totalPrice: $("#totalPricePackage")[0].innerHTML,
        mail: $("input[name='email']").val()
      });

      alert("Bien envoyé")
    })
  }

  emptyBoxF(){
    $("#emptyBox")[0].addEventListener('click', ()=>{

      //e.preventDefault();
      localStorage.removeItem("localOrder");
      this.initUI();

    })
  }

  validateEmail(sEmail) {
    var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;

    if (filter.test(sEmail)) {
      return true;
    }
    else {
      return false;
    }
  }

  dessinerPanier(priceCommande, timesCommande, totalPricePackage) {
    // Supprimer contenu panier
    var liste = document.getElementById('buyList');
    while (liste.children.length>1) {liste.removeChild(liste.lastChild)}
    priceCommande = 0;

    // Afficher les éléments
    var produits = JSON.parse(localStorage.getItem("localOrder"));
    for(let id in produits) {
      this.dessinerProduit(produits[id]);
      priceCommande = priceCommande + produits[id].pricePro * produits[id].timesPro ;
    }
    document.getElementById('totalPriceCommande').innerHTML = priceCommande;
    document.getElementById('totalPricePackage').innerHTML = priceCommande;
    if(document.getElementById('timesCommande').innerHTML == "Quantité"){
      document.getElementById('timesCommande').innerHTML = 1;
    };
  }

  dessinerProduit(produit) {
    // Lire le src du produit (stocké dans le html)
    var srcImage = document.querySelector(`img[data-id=${produit.idPro}]`).src;
    var productToList = `
    <div id="${produit.idPro}" class="col-105">
       <figure style= "margin:0;">
         <img id="imgPan1" src="${srcImage}">
       </figure>
       <p class = "priceHidden"> ${produit.pricePro} </p>
       <p>${produit.timesPro}</p>
    </div>
    `;
    document.getElementById('buyList').insertAdjacentHTML('beforeend', productToList);
  }

  chooseProduct(vQ, priceProduct,priceCommande,timesCommande, totalPricePackage, localOrder){

    if(document.getElementById('productList'))
    {
      document.getElementById('productList').addEventListener(
        'click',
        event=>{

          event.preventDefault();

          this.clickFigure(event);
          //console.log(event)
          this.clickPlusLess(event, vQ, priceProduct, priceCommande, timesCommande, totalPricePackage, localOrder);
          //this.dessinerPanier();
        }
      )
    }
  }


  clickPlusLess(event, vQ, priceProduct, priceCommande, timesCommande, totalPricePackage, localOrder){

      //Iniciate the quantity to 0
      var qProduct;

      if(document.getElementById('buyList').lastElementChild.firstElementChild.tagName !== "FIGURE"){
        priceCommande = 0;
        document.getElementById('timesCommande').innerHTML = 1;
      }else{
        priceCommande = parseInt(document.getElementById('totalPriceCommande').innerHTML,10);
      }

      //If the click is in a button
      if(event.target.tagName == 'BUTTON'){

        //Convert the html text in an integer number so we can operate with it
        priceProduct = parseInt(event.target.parentElement.nextElementSibling.innerHTML, 10);

        //If the product don't exist in the list
        if(!document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id')) && event.target.innerHTML == '+'){


          if(JSON.parse(localStorage.getItem("localOrder"))){
            localOrder = JSON.parse(localStorage.getItem("localOrder"));
          }


          localOrder[event.target.parentElement.previousElementSibling.getAttribute('data-id')] = {
            idPro: event.target.parentElement.previousElementSibling.getAttribute('data-id'),
            src: event.target.parentElement.previousElementSibling.getAttribute('src'),
            timesPro: 1,
            pricePro: priceProduct
          };
          localStorage.setItem("localOrder",JSON.stringify(localOrder));

          //Add the html content to the div buyList
          this.dessinerPanier(priceCommande, timesCommande, totalPricePackage);
          //Calculate and prices and quantities
          priceCommande = priceCommande + priceProduct;
          totalPricePackage = parseInt(document.getElementById('totalPricePackage').innerHTML,10)
          timesCommande = parseInt(document.getElementById('timesCommande').innerHTML,10)
          totalPricePackage = priceCommande * timesCommande;
          document.getElementById('totalPricePackage').innerHTML = totalPricePackage;

        //If the product exist in the list
        }else if(document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id'))){

          vQ = parseInt(document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id')).lastChild.previousElementSibling.innerHTML, 10);

          //If the click is on the plus button
          if(event.target.innerHTML == '+'){

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
            localStorage.setItem("localOrder",JSON.stringify(localOrder));
            this.dessinerPanier(priceCommande, timesCommande, totalPricePackage);
            this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);
          //If the click is on the less button
          }else if(event.target.innerHTML == '--'){

              //if the quantity is 1 we take off the div of the product from the productList
              if(vQ===1){
                priceCommande = priceCommande - priceProduct;
                var idPro = event.target.parentElement.previousElementSibling.getAttribute('data-id');
                var pr = document.getElementById(idPro);
                pr.parentNode.removeChild(pr);

                localOrder = JSON.parse(localStorage.getItem("localOrder"));
                delete localOrder[event.target.parentElement.previousElementSibling.getAttribute('data-id')];
                localStorage.setItem("localOrder",JSON.stringify(localOrder));
                //console.log(localOrder);
                this.dessinerPanier(priceCommande, timesCommande, totalPricePackage);
                this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);

              //if the quantity is more than 1 we take one unity from the quantity of the product
              }else if(vQ>1){
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
                localStorage.setItem("localOrder",JSON.stringify(localOrder));
                this.dessinerPanier(priceCommande, timesCommande, totalPricePackage);
                this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);
              }
            }
          }
        }
        document.getElementById('totalPriceCommande').innerHTML = priceCommande;
    }


    clickCommandeQt(priceCommande, timesCommande, totalPricePackage){

      document.getElementById('commandeColumn').addEventListener(
        'click',
        eventCommande=>{
          eventCommande.preventDefault();
          priceCommande = parseInt(document.getElementById('totalPriceCommande').innerHTML,10)
          timesCommande = parseInt(document.getElementById('timesCommande').innerHTML,10)
          document.getElementById('timesCommande').innerHTML = 1;
          totalPricePackage = parseInt(document.getElementById('totalPricePackage').innerHTML,10)

          if(eventCommande.target.id == 'plus'){
            timesCommande = timesCommande +1;
            document.getElementById('timesCommande').innerHTML = timesCommande;
          }else if(eventCommande.target.id == 'moins' && timesCommande > 1){
            timesCommande--;
            document.getElementById('timesCommande').innerHTML = timesCommande;
          }

          totalPricePackage = priceCommande * timesCommande;
          document.getElementById('totalPricePackage').innerHTML = totalPricePackage;
        }
      )
    }

    refreshTotalCommande(priceCommande, timesCommande, totalPricePackage){

      document.getElementById('totalPriceCommande').innerHTML = priceCommande;
      totalPricePackage = priceCommande * timesCommande;

      document.getElementById('totalPricePackage').innerHTML = totalPricePackage;
      priceCommande = parseInt(document.getElementById('totalPriceCommande').innerHTML,10)
      timesCommande = parseInt(document.getElementById('timesCommande').innerHTML,10)

      document.getElementById('totalPricePackage').innerHTML = 1;
      totalPricePackage = parseInt(document.getElementById('totalPricePackage').innerHTML,10)

      totalPricePackage = priceCommande * timesCommande;
      document.getElementById('totalPricePackage').innerHTML = totalPricePackage;

    }

    clickFigure(event){

      if(event.target.tagName == 'IMG'){

        var typeProd = event.target.getAttribute('data-id');

        switch(typeProd){

          case 'imgClick1br':
            document.getElementById('textExplicatifBrandy').innerHTML = "Ceci est le premier brandy de la liste"
            break;
          case 'imgClick2br':
            document.getElementById('textExplicatifBrandy').innerHTML = "Ceci est le deuxième brandy de la liste"
            break;
          case 'imgClick3br':
            document.getElementById('textExplicatifBrandy').innerHTML = "Ceci est le troisième brandy de la liste"
            break;
          case 'imgClick1wine':
            document.getElementById('textExplicatifWine').innerHTML = "Ceci est le premier vin de la liste"
            break;
          case 'imgClick2wine':
            document.getElementById('textExplicatifWine').innerHTML = "Ceci est le deuxième vin de la liste"
            break;
          case 'imgClick3wine':
            document.getElementById('textExplicatifWine').innerHTML = "Ceci est le troisième vin de la liste"
            break;
          case 'imgClick1oil':
            document.getElementById('textExplicatifOil').innerHTML = "Ceci est le premier huile de la liste"
            break;
          case 'imgClick2oil':
            document.getElementById('textExplicatifOil').innerHTML = "Ceci est le deuxième huile de la liste"
            break;
          case 'imgClick3oil':
            document.getElementById('textExplicatifOil').innerHTML = "Ceci est le troisième huile de la liste"
          break;
          case 'imgClick1ch':
            document.getElementById('textExplicatifCheese').innerHTML = "Ceci est le troisième huile de la liste"
            break;
          case 'imgClick2ch':
            document.getElementById('textExplicatifCheese').innerHTML = "Ceci est le premier fromage de la liste"
            break;
          case 'imgClick3ch':
            document.getElementById('textExplicatifCheese').innerHTML = "Ceci est le troisième fromage de la liste"
            break;
          case 'imgClick1ham':
          document.getElementById('textExplicatifHam').innerHTML = "Ceci est le premier jambon de la liste"
            break;
          case 'imgClick2ham':
          document.getElementById('textExplicatifHam').innerHTML = "Ceci est le deuxième jambon de la liste"
            break;
          case 'imgClick3ham':
          document.getElementById('textExplicatifHam').innerHTML = "Ceci est le troisième jambon de la liste"
            break;
          default:
            alert("Ce produit n'a pas de description");
        }
    }
  }

  loadEventUI(){

    $("#adminPage")[0].addEventListener('click', event => this.onLogin(event), false);
    $("#adminPageMob")[0].addEventListener('click', event => this.onLogin(event), false);

  }

  onLogin(event){

    let validationInput = 0
    let formInput = $('#txtEmail').val();

    event.preventDefault()
    if($('#txtEmail').val().length>0){
      new AdminPage( this.appBody, formInput);
    }else{
      event.preventDefault();
      alert("Hello", "Introduisez votre mail")
    }
  }


  skeletonBase(){

    let vSkeleton = `
    <section>
        <h3 class="center">${this.pageTitle}</h3>
        <form>
          <nav class="navBarTop">
           <div class="nav-wrapper" class="navBarTop" >
             <a href="#!" class="brand-logo">Logo</a>
             <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
             <ul class="right hide-on-med-and-down">
               <li><a href="#">Inicio</a></li>
               <li><a href="#">Productos</a></li>
               <li><a href="#">Quienes somos</a></li>
               <li><a href="#">Contacto</a></li>
               <li><a id="adminPage" href="#">Admin</a></li>
             </ul>
             <ul class="side-nav" id="mobile-demo">
               <li><a href="#">Inicio</a></li>
               <li><a href="#">Productos</a></li>
               <li><a href="#">Quienes somos</a></li>
               <li><a href="#">Contacto</a></li>
               <li><a id="adminPageMob" href="#">Admin</a></li>
             </ul>
           </div>
         </nav>

         <div class="sendOrder">
            <button class="btn" id="sendOrder">Envoyer commande</button>
            <button class="btn" id="emptyBox">Vider le coffre</button>
            <p>
              <label for="email">Email:</label><input id="txtEmail" type="email" name="email" value="" placeholder="votreemail.ch"/>
            </p>

         </div>

         <div class="grid-container outline">
             <div id="buyList" class="row">
               <div class="col-105" id="commandeColumn">
                  <p>Coffre</p>
                  <p id="totalPriceCommande"></p></br>
                  <p>Qté :</p><p id="timesCommande">Quantité</p></br>
                  <p>Total :</p><p id="totalPricePackage"></p></br>
                  <div class="ligneBt"><button id="moins">--</button><button id="plus">+</button></div>
               </div>
             </div>


            <div id="productList" >

<!--First line of products-->
               <div class="row" >
                  <div class="col-1"><p>Brandy</p></div>

                  <div class="col-1 center" >
                    <figure style= "margin:0;">
                      <img data-id="imgClick1br" src="./src/images/brandy1.png">
                      <div id="ligneBt"><button id="moinsB1">--</button><button id="moinsB1">+</button></div>
                      <p class = "priceHidden"> 25 </p>
                    </figure>
                  </div>
                  <div class="col-1 center">
                    <figure style= "margin:0;">
                        <img data-id="imgClick2br" src="./src/images/brandy-casajuana-100-anos-reserva.jpeg">
                        <div class="ligneBt"><button id="moinsB2">--</button><button id="plusB2">+</button></div>
                        <p class = "priceHidden"> 25 </p>
                    </figure>
                  </div>
                  <div  class="col-1 center">
                     <figure style= "margin:0;">
                        <img  data-id="imgClick3br" src="./src/images/barbadillo.jpeg">
                        <div class="ligneBt"><button id="moinsB3">--</button><button id="plusB3">+</button></div>
                        <p class = "priceHidden"> 25 </p>
                     </figure>
                  </div>
                  <div class="col-1"><p id="textExplicatifBrandy"></p></div>
               </div>

<!--Second line of products-->
               <div class="row" >
                  <div class="col-1"><p>Vinos</p></div>
                  <div class="col-1 center">
                    <figure style= "margin:0;">
                        <img  data-id="imgClick1wine" src="./src/images/vin1.jpg">
                        <div class="ligneBt"><button id="moinsW1">--</button><button id="plusW1">+</button></div>
                        <p class = "priceHidden"> 25 </p>
                    </figure>
                  </div>
                  <div class="col-1 center">
                    <figure style= "margin:0;">
                        <img  data-id="imgClick2wine" src="./src/images/vin2.jpg">
                        <div class="ligneBt"><button id="moinsW2">--</button><button id="plusW2">+</button></div>
                        <p class = "priceHidden"> 25 </p>
                    </figure>
                  </div>
                  <div class="col-1 center">
                    <figure style= "margin:0;">
                        <img data-id="imgClick3wine" src="./src/images/vin3.jpg">
                        <div class="ligneBt"><button id="moinsW3">--</button><button id="plusW3">+</button></div>
                        <p class = "priceHidden"> 25 </p>
                    </figure>
                  </div>
                  <div class="col-1"><p id="textExplicatifWine"></p></div>
               </div>

<!--Third line of products-->
               <div class="row" >
                  <div class="col-1"><p>Aceite de oliva</p></div>
                  <div class="col-1 center">
                      <figure style= "margin:0;">
                          <img  data-id="imgClick1oil" src="./src/images/ROXANE ARBEQUINA_500_02.jpeg">
                          <div class="ligneBt"><button id="moinsO1">--</button><button id="plusO1">+</button></div>
                          <p class = "priceHidden"> 25 </p>
                      </figure>
                  </div>
                  <div class="col-1 center">
                      <figure style= "margin:0;">
                          <img  data-id="imgClick2oil" src="./src/images/maria-de-la-o-seleccion-gourmet-500-ml.jpeg">
                          <div class="ligneBt"><button id="moinsO2">--</button><button id="plusO2">+</button></div>
                          <p class = "priceHidden"> 25 </p>
                      </figure>
                  </div>
                  <div class="col-1 center">
                      <figure style= "margin:0;">
                          <img  data-id="imgClick3oil" src="./src/images/ROXANE ARBEQUINA_500_02.jpeg">
                          <div class="ligneBt"><button id="moinsO3">--</button><button id="plusO3">+</button></div>
                          <p class = "priceHidden"> 25 </p>
                      </figure>
                  </div>
                  <div class="col-1"><p id="textExplicatifOil"></p></div>
               </div>

  <!--Fourth line of products-->
               <div class="row" >
                  <div class="col-1"><p>Queso</p></div>
                  <div class="col-1 center">
                      <figure style= "margin:0;">
                          <img  data-id="imgClick1ch" src="./src/images/cogman-semicurado-puro-oveja.jpeg">
                          <div class="ligneBt"><button id="moinsCh1">--</button><button id="plusCh1">+</button></div>
                          <p class = "priceHidden"> 25 </p>
                      </figure>
                  </div>
                  <div class="col-1 center">
                      <figure style= "margin:0;">
                          <img  data-id="imgClick2ch" src="./src/images/queso-curado-al-romero-tomelloso.jpeg">
                          <div class="ligneBt"><button id="moinsCh2">--</button><button id="plusCh2">+</button></div>
                          <p class = "priceHidden"> 25 </p>
                      </figure>
                  </div>
                  <div class="col-1 center">
                      <figure style= "margin:0;">
                          <img  data-id="imgClick3ch" src="./src/images/montalvo-curado-en-aceite.jpeg">
                          <div class="ligneBt"><button id="moinsCh3">--</button><button id="plusCh3">+</button></div>
                          <p class = "priceHidden"> 25 </p>
                      </figure>
                  </div>
                  <div class="col-1"><p id="textExplicatifCheese"></p></div>
               </div>

<!--Fifth line of products-->
               <div class="row" >
                  <div class="col-1"><p>Jamon ibérico</p></div>
                  <div class="col-1 center">
                      <figure style= "margin:0;">
                          <img  data-id="imgClick1ham" src="./src/images/jamon1.jpeg">
                          <div class="ligneBt"><button id="moinsH1">--</button><button id="plusH1">+</button></div>
                          <p class = "priceHidden"> 25 </p>
                      </figure>
                  </div>
                  <div class="col-1 center">
                      <figure style= "margin:0;">
                          <img  data-id="imgClick2ham" src="./src/images/jamon2.jpeg">
                          <div class="ligneBt"><button id="moinsH2">--</button><button id="plusH2">+</button></div>
                          <p class = "priceHidden"> 25 </p>
                      </figure>
                  </div>
                  <div class="col-1 center">
                      <figure style= "margin:0;">
                          <img  data-id="imgClick3ham" src="./src/images/jamon3.jpeg">
                          <div class="ligneBt"><button id="moinsH3">--</button><button id="plusH3">+</button></div>
                          <p class = "priceHidden"> 25 </p>
                      </figure>
                  </div>
                  <div  id="imgClick1" class="col-1"><p id="textExplicatifHam"></p></div>
               </div>
            </div>
          </div>

         </form>
      </section>`;
      return vSkeleton;
  }
}
// window.onload = function () {
//   dessinerPanier();
// }
