/**
* @Author: RoberCastro
* @Date:   13-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 13-12-2016
*/

//import { UserPage } from '../../pages/user/user';

export class HomePage {

  constructor(appBody){
    this.appBody = appBody
    this.pageTitle = 'Hello world! Hello Roberto';
    this.initUI();

  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
  }

  initUI(){
    // remove all section before display UI
    if(document.getElementsByTagName("section")[0]){
      document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0])
    }
    // create page skeleton
    let pageSkeleton = `
      <section>
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
          <p>
            <label for="email">Email:</label> <input type="email" name="email" value="" placeholder="votreemail.ch"  /><br/>
            <label for="password">Password:</label> <input type="password" name="password" value=""  /><br/>
          </p>
            <button>Login</button>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

            <img id="drag1" src="./src/images/img_logo.gif" draggable="true" ondragstart="drag(event)">
          <div>
              <!-- Dropdown Trigger -->
              <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>

              <!-- Dropdown Structure -->
              <ul id='dropdown1' class='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="#!">three</a></li>
              </ul>

          </div>
          <a class="btn" onclick="Materialize.toast('I am a toast', 4000)">Toast!</a>

        </form>
      </section>`;

    // add page skeleton in body
    this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton )
    this.loadEventUI()
    this.allowDrop(ev);
    this.drag(ev);
    this.drop(ev);
              Materialize.toast('I am a toast!', 4000) // 4000 is the duration of the toast



  }

  loadEventUI(){
    let loginForm = document.getElementsByTagName("form")[0];
    loginForm.addEventListener("submit",  event => this.onLogin(event), false)
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



}
