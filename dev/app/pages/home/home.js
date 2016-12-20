/**
* @Author: RoberCastro
* @Date:   13-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 13-12-2016
*/

//import { firebaseHelper } from '../../helpers/firebaseHelper';

export class HomePage {

  constructor(appBody){
    this.appBody = appBody
    this.pageTitle = 'Hello world! Hello Roberto';
    this.initUI();
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
    //this.loadLocalStorage(priceProduct,priceCommande,timesCommande, totalPricePackage, localOrder)
    this.chooseProduct(vQ,priceProduct,priceCommande,timesCommande, totalPricePackage, localOrder)
    this.clickCommandeQt(priceCommande,timesCommande, totalPricePackage)

    Materialize.toast('I am a toast!', 4000) // 4000 is the duration of the toast

  }

  loadLocalStorage(priceProduct,priceCommande,timesCommande, totalPricePackage, localOrder){
    if (localStorage.getItem("localOrder")) {
      //lire un objet
      let objetB = JSON.parse(localStorage.getItem("localOrder"));
      //console.log(objetB[event.target.parentElement.previousElementSibling.getAttribute('data-id')].idPro);
      var productToList = `
      <div id="${objetB[event.target.parentElement.previousElementSibling.getAttribute('data-id')].idPro}" class="col-105">
         <figure style= "margin:0;">
           <img id="imgPan1" src="${event.target.parentElement.previousElementSibling.src}">
         </figure>
         <p>1</p>
      </div>
      `
      document.getElementById('buyList').insertAdjacentHTML('beforeend', productToList)
      priceCommande = priceCommande + priceProduct;
      this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);
    }
  }

  chooseProduct(vQ, priceProduct,priceCommande,timesCommande, totalPricePackage, localOrder){

    if(document.getElementById('productList'))
    {
      document.getElementById('productList').addEventListener(
        'click',
        event=>{

          this.clickFigure(event);
          //console.log(event)
          this.clickPlusLess(event, vQ, priceProduct, priceCommande, timesCommande, totalPricePackage, localOrder);

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
        //localStorage.setItem("localOrder",JSON.stringify(localOrder));

        //Convert the html text in an integer number so we can operate with it
        priceProduct = parseInt(event.target.parentElement.nextElementSibling.innerHTML, 10);

        //If the product don't exist in the list
        if(!document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id')) && event.target.innerHTML == '+'){

          //Create the div wwith the product and its quantity
          var productToList = `
          <div id="${event.target.parentElement.previousElementSibling.getAttribute('data-id')}" class="col-105">
             <figure style= "margin:0;">
               <img id="imgPan1" src="${event.target.parentElement.previousElementSibling.src}">
             </figure>
             <p>1</p>
          </div>
          `
          localOrder[event.target.parentElement.previousElementSibling.getAttribute('data-id')] = {
            idPro: event.target.parentElement.previousElementSibling.getAttribute('data-id'),
            timesPro: 1,
            pricePro: priceProduct
          };
          localStorage.setItem("localOrder",JSON.stringify(localOrder));

          //console.log(localOrder);
          //Add the html content to the div buyList
          document.getElementById('buyList').insertAdjacentHTML('beforeend', productToList)
          priceCommande = priceCommande + priceProduct;
          this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);



        //If the product exist in the list
        }else if(document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id'))){

          vQ = parseInt(document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id')).lastChild.previousElementSibling.innerHTML, 10);

          //If the click is on the plus button
          if(event.target.innerHTML == '+'){

            qProduct = vQ + 1;
            priceCommande = priceCommande + priceProduct;
            document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id')).lastChild.previousElementSibling.innerHTML = qProduct;

            localOrder[event.target.parentElement.previousElementSibling.getAttribute('data-id')] = {
              idPro: event.target.parentElement.previousElementSibling.getAttribute('data-id'),
              timesPro: qProduct,
              pricePro: priceProduct
            };
            localStorage.setItem("localOrder",JSON.stringify(localOrder));
            //console.log(localOrder);

            this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);
          //If the click is on the less button
          }else if(event.target.innerHTML == '--'){

              //if the quantity is 1 we take off the div of the product from the productList
              if(vQ===1){
                priceCommande = priceCommande - priceProduct;
                var idPro = event.target.parentElement.previousElementSibling.getAttribute('data-id');
                var pr = document.getElementById(idPro);
                pr.parentNode.removeChild(pr);

                delete localOrder[event.target.parentElement.previousElementSibling.getAttribute('data-id')];
                localStorage.setItem("localOrder",JSON.stringify(localOrder));

                //console.log(localOrder);

                this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);

              //if the quantity is more than 1 we take one unity from the quantity of the product
              }else if(vQ>1){
                priceCommande = priceCommande - priceProduct;
                //console.log(event)
                qProduct = vQ - 1;
                document.getElementById(event.target.parentElement.previousElementSibling.getAttribute('data-id')).lastChild.previousElementSibling.innerHTML = qProduct;
                //console.log(event.target.parentElement.previousElementSibling.getAttribute('data-id'))
                localOrder[event.target.parentElement.previousElementSibling.getAttribute('data-id')] = {
                  idPro: event.target.parentElement.previousElementSibling.getAttribute('data-id'),
                  timesPro: qProduct,
                  pricePro: priceProduct
                };
                localStorage.setItem("localOrder",JSON.stringify(localOrder));

                //console.log(localOrder);

                this.refreshTotalCommande(priceCommande, timesCommande, totalPricePackage);
              }
            }
          }
        }
        document.getElementById('totalPriceCommande').innerHTML = priceCommande;
        if (localStorage.getItem("localOrder")) {
          //lire un objet
          let objetB = JSON.parse(localStorage.getItem("localOrder"));
          //console.log(objetB[event.target.parentElement.previousElementSibling.getAttribute('data-id')].idPro);
          for(var i in objetB) {
              console.log(objetB[event.target.parentElement.previousElementSibling.getAttribute('data-id')].idPro);  // (o el campo que necesites)
          }
        }
    }

    clickCommandeQt(priceCommande, timesCommande, totalPricePackage){

      document.getElementById('commandeColumn').addEventListener(
        'click',
        eventCommande=>{

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


  /*  var classname = document.getElementsByClassName("center");

    var myFunction = function(evenement) {
      console.log("target", evenement.target.id);
    };

    Array.from(classname).forEach(function(element) {
          element.addEventListener('click', myFunction);
        });

    $(document).ready(function() {
      $("a").click(function(event) {
       alert(event.target.id+" and "+$(event.target).attr('class'));
      });
    });*/



  loadEventUI(){
    let loginForm = document.getElementsByTagName("form")[0];
    loginForm.addEventListener("submit",  event => this.onLogin(event), false);
  }

  onLogin(event){
    event.preventDefault()
    let validationInput = 0
    let formInput = {}
    let form = document.forms[0].elements
    for (let i = 0; i < form.length; i++) {
      if(form[i].value){
        formInput[form[i].name] = form[i].value
        validationInput++
      }
    }
  }

  skeletonBase(){

    let vSkeleton = `
    <section>
      <img class="materialboxed" width="1024px" height="200px" src="./src/images/vinas2.jpeg">
        <h1>${this.pageTitle}</h1>
        <form>
        <style>
        #div1 {
            width: 350px;
            height: 70px;
            padding: 10px;
            border: 1px solid #aaaaaa;
        }
        </style>
          <nav class="navBarTop">
           <div class="nav-wrapper" class="navBarTop" >
             <a href="#!" class="brand-logo">Logo</a>
             <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
             <ul class="right hide-on-med-and-down">
               <li><a href="#">Inicio</a></li>
               <li><a href="#">Productos</a></li>
               <li><a href="#">Quienes somos</a></li>
               <li><a href="#">Contacto</a></li>
             </ul>
             <ul class="side-nav" id="mobile-demo">
               <li><a href="sass.html">Inicio</a></li>
               <li><a href="badges.html">Productos</a></li>
               <li><a href="collapsible.html">Javascript</a></li>
               <li><a href="mobile.html">Contacto</a></li>
             </ul>
           </div>
         </nav>

         <p class="lined-separator"><span class="ls-text">Top Selling Products</span></p>

         <div class="grid-container outline">
             <div id="buyList" class="row">
               <div class="col-105" id="commandeColumn">
                  <p>Total coffre</p></br>
                  <p id="totalPriceCommande"></p></br>
                  <p id="timesCommande">Quantité</p>
                  <p id="totalPricePackage"></p></br>
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

             <div class="row">
                 <div class="col-2"><p>col-2</p></div>
                 <div class="col-2"><p>col-2</p></div>
                 <div class="col-2"><p>col-2</p></div>
             </div>
             <div class="row">
                 <div class="col-3"><p>col-3</p></div>
                 <div class="col-3"><p>col-3</p></div>
             </div>
             <div class="row">
                 <div class="col-4"><p>col-4</p></div>
                 <div class="col-2"><p>col-2</p></div>
             </div>
             <div class="row">
                 <div class="col-5"><p>col-5</p></div>
                 <div class="col-1"><p>col-1</p></div>
             </div>
             <div class="row">
                 <div class="col-6"><p>col-6</p></div>
             </div>
         </div>
          <p>
            <label for="email">Email:</label> <input type="email" name="email" value="" placeholder="votreemail.ch"  /><br/>
            <label for="password">Password:</label> <input type="password" name="password" value=""  /><br/>
          </p>
          <a class="btn" onclick="Materialize.toast('I am a toast', 4000)">Toast!</a>
            <button>Login</button>
          <div>
            <div>

                <!-- Dropdown Structure -->
                <ul id='dropdown1' class='dropdown-content' class="col s6">
                  <li><a href="#!">Ibérico</a></li>
                  <li class="divider"></li>
                  <li><a href="#!">Pata negra</a></li>
                  <li class="divider"></li>
                  <li><a href="#!">Jabugo</a></li>
                </ul>
            </div>
            <div>

                <!-- Dropdown Trigger -->
                <a class='dropdown-button btn' href='#' data-activates='dropdown2' class="col s2">Huile d'olive</a>

                <!-- Dropdown Structure -->
                <ul id='dropdown2' class='dropdown-content'>
                  <li><a href="#!">Normal</a></li>
                  <li class="divider"></li>
                  <li><a href="#!">Virgen</a></li>
                  <li class="divider"></li>
                  <li><a href="#!">Virgen extra</a></li>
                </ul>
            </div>
            <div>
                <!-- Dropdown Trigger -->
                <a class='dropdown-button btn' href='#' data-activates='dropdown3' class="col s2">Fromage manchego</a>

                <!-- Dropdown Structure -->
                <ul id='dropdown3' class='dropdown-content'>
                  <li><a href="#!">Curado</a></li>
                  <li class="divider"></li>
                  <li><a href="#!">Semicurado</a></li>
                  <li class="divider"></li>
                  <li><a href="#!">Tierno</a></li>
                </ul>
            </div>
            <div>
                <!-- Dropdown Trigger -->
                <a class='dropdown-button btn' href='#' data-activates='dropdown4'>Confisserie</a>

                <!-- Dropdown Structure -->
                <ul id='dropdown4' class='dropdown-content'>
                  <li><a href="#!">Turron</a></li>
                  <li class="divider"></li>
                  <li><a href="#!">Sobaos</a></li>
                  <li class="divider"></li>
                  <li><a href="#!">Polvorones</a></li>
                </ul>
            </div>
            <div>
                <!-- Dropdown Trigger -->
                <a class='dropdown-button btn' href='#' data-activates='dropdown5'>Brandy de Jerez</a>

                <!-- Dropdown Structure -->
                <ul id='dropdown5' class='dropdown-content'>
                  <li><a href="#!">LA BOTA DE BRANDY Nº 29</a></li>
                  <li class="divider"></li>
                  <li><a href="#!">TORRES JAIME I</a></li>
                  <li class="divider"></li>
                  <li><a href="#!">PEINADO SOLERA 100 AÑOS</a></li>
                </ul>

            </div>
          </div>

        </form>
      </section>`;
      return vSkeleton;
  }
}
