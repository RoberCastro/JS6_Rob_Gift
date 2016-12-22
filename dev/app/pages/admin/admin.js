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
        </form>
        <h1 id="time"></h1>
        <p>${this.pageTitle} ${this.formData} !</p>
      </section>
      `;
      // add page skeleton in body
      this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton )
      $( document ).ready(function(){
        $(".button-collapse").sideNav();
      });
      //let list = this.listOrders
      //console.log(list)
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
          //console.log('database ready->',JSON.stringify(response))
          //console.log(response[0].order)
          let listOrders

          response[0].order.forEach((element)=> {
              console.log(element);
          });
        })
        .catch((err)=>{
          console.log('Error with Firebase loadData()-> ', err)
        })

      //console.log(listOrders)

    }

}
