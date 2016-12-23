/**
* @Author: RoberCastro
* @Date:   21-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 21-12-2016
*/
import { HomePage } from '../../pages/home/home';
import { FireBaseHelper } from '../../helpers/firebaseHelper';

export class AdminPage {

  constructor(appBody,formInput){
    this.appBody = appBody;
    this.formData = formInput;
    this.pageTitle = "Administration des commandes";
    this.time = new Date()
    this.initUI();
    this.fFireBaseHelper();
  }

  initUI(){
    // remove all section before display UI
    if(document.getElementsByTagName("section")[0]){
      document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0])
    }
    // create page skeleton
    let pageSkeleton = `
      <section>
        <form>
          <p>${this.pageTitle} ${this.formData} !</p>
          <nav class="navBarTop">
           <div class="nav-wrapper" class="navBarTop" >
             <a href="#!" class="brand-logo">Logo</a>
             <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
             <ul class="right hide-on-med-and-down">
               <li><a id="home" href="#">Inicio</a></li>
               <li><a href="#">Productos</a></li>
               <li><a href="#">Quienes somos</a></li>
               <li><a href="#">Contacto</a></li>
               <li><a id="adminPage" href="#">Admin</a></li>
             </ul>
             <ul class="side-nav" id="mobile-demo">
               <li><a id="homeMob" href="#">Inicio</a></li>
               <li><a href="#">Productos</a></li>
               <li><a href="#">Quienes somos</a></li>
               <li><a href="#">Contacto</a></li>
               <li><a id="adminPageMob" href="#">Admin</a></li>
             </ul>
           </div>
         </nav>
         <div class="grid-container outline">
             <div id="buyList">

             </div>
          </div>
        </form>
      </section>
      `;
      // add page skeleton in body
      this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton )
      $( document ).ready(function(){
        $(".button-collapse").sideNav();
      });

      this.loadEventUI();
    }

    loadEventUI(){

      $("#home")[0].addEventListener('click', event => this.onLogin(event), false);
      $("#homeMob")[0].addEventListener('click', event => this.onLogin(event), false);
    }

    onLogin(event){

      event.preventDefault();
      new HomePage(this.appBody);
    }

    fFireBaseHelper(){

      //We instanciate the Firebase class
      let dataBaseCastro = new FireBaseHelper();

      dataBaseCastro.loadData()
        .then((response)=>{

          let ordre;

          for(let id in response) {

            ordre = response[id].order;

            let divOrdre = document.createElement('div')
            divOrdre.innerHTML = `      <hr/>Liste d'achat numéro : ${id} </br>
                                  Client mail : ${response[id].mail}</br>
                                  Prix du pannier : ${response[id].priceOrder}</br>
                                  Quantité de panniers : ${response[id].nbOrder}</br>
                                  Prix total : ${response[id].totalPrice}</br>`;
            divOrdre.setAttribute('id',`liste${id}`)
            divOrdre.setAttribute('style', 'display:block; overflow:auto;')
            divOrdre.setAttribute('class', 'divProd')
            document.getElementById('buyList').appendChild(divOrdre)
            var idDiv = `liste${id}`

            console.log("ordre", id)

            for(let i in ordre) {

                document.getElementById(idDiv).insertAdjacentHTML('beforeend', this.dessinerProduit(ordre[i]));
            }
          }
        })
        .catch((err)=>{
          console.log('Error with Firebase loadData()-> ', err)
        })
    }

    dessinerProduit(ordre) {
      // Lire le src du produit (stocké dans le html)
      return `
      <div id="${ordre.idPro}" class="col-105">
         <figure style= "margin:0;">
           <img id="imgPan1" src="${ordre.src}">
         </figure>
         <p class = "priceHidden"> ${ordre.pricePro} </p>
         <p>${ordre.timesPro}</p>
      </div>

      `;
    }
}
