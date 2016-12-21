/**
* @Author: RoberCastro
* @Date:   21-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 21-12-2016
*/
import { HomePage } from '../../pages/home/home';

export class AdminPage {

  constructor(appBody,formInput){
    this.appBody = appBody
    this.formData = formInput
    this.pageTitle = "Administration des commandes";
    this.time = new Date()
    this.initUI();
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
          <p>${this.pageTitle} ${this.formData.email} !</p>
        </section>
      `;
      // add page skeleton in body
      this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton )
      $( document ).ready(function(){
        $(".button-collapse").sideNav();
      });
      this.displayTime();
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

    displayTime(){
      let timeElement = document.getElementById('time')
      timeElement.innerHTML = this.getTime(this.time)
      setInterval(()=>{
        this.time = new Date();
        //console.log(`${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()}`)
        timeElement.innerHTML = this.getTime(this.time)
      },1000)
    }

    getTime(time){
      return    `
      <time datetime="${(time.getFullYear() < 10)?'0'+time.getFullYear():time.getFullYear()}-${(time.getMonth() < 10)?'0'+time.getMonth():time.getMonth()}-${(time.getDate() < 10)?'0'+time.getDate():time.getDate()} ${(time.getHours() < 10)?'0'+time.getHours():time.getHours()}:${(time.getMinutes() < 10)?'0'+time.getMinutes():time.getMinutes()}:${(time.getSeconds() < 10)?'0'+time.getSeconds():time.getSeconds()}">
        ${(time.getHours() < 10)?'0'+time.getHours():time.getHours()}:${(time.getMinutes() < 10)?'0'+time.getMinutes():time.getMinutes()}:${(time.getSeconds() < 10)?'0'+time.getSeconds():time.getSeconds()}
      </time >
      `;
    }
}
