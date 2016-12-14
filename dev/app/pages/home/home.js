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
          <a class="btn" onclick="Materialize.toast('I am a toast', 4000)">Toast!</a>
            <button>Login</button>
            <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

            <img id="drag1" src="./src/images/img_logo.gif" draggable="true" ondragstart="drag(event)">
          <div>
            <div>
                <!-- Dropdown Trigger -->
                <a class='dropdown-button btn' href='#' data-activates='dropdown1' class="col s6">ham</a>

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
