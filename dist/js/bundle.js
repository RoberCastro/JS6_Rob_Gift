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

},{"./pages/home/home":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* @Author: RoberCastro
* @Date:   13-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 13-12-2016
*/

//import { UserPage } from '../../pages/user/user';

var HomePage = exports.HomePage = function () {
  function HomePage(appBody) {
    _classCallCheck(this, HomePage);

    this.appBody = appBody;
    this.pageTitle = 'Hello world! Hello Roberto';
    this.initUI();
  }

  _createClass(HomePage, [{
    key: "allowDrop",
    value: function allowDrop(ev) {
      ev.preventDefault();
    }
  }, {
    key: "drag",
    value: function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
  }, {
    key: "drop",
    value: function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
  }, {
    key: "initUI",
    value: function initUI() {
      // remove all section before display UI
      if (document.getElementsByTagName("section")[0]) {
        document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0]);
      }
      // create page skeleton
      var pageSkeleton = "\n      <section>\n        <h1>" + this.pageTitle + "</h1>\n        <form>\n        <style>\n        #div1 {\n            width: 350px;\n            height: 70px;\n            padding: 10px;\n            border: 1px solid #aaaaaa;\n        }\n        </style>\n          <p>\n            <label for=\"email\">Email:</label> <input type=\"email\" name=\"email\" value=\"\" placeholder=\"votreemail.ch\"  /><br/>\n            <label for=\"password\">Password:</label> <input type=\"password\" name=\"password\" value=\"\"  /><br/>\n          </p>\n          <a class=\"btn\" onclick=\"Materialize.toast('I am a toast', 4000)\">Toast!</a>\n            <button>Login</button>\n            <div id=\"div1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\"></div>\n\n            <img id=\"drag1\" src=\"./src/images/img_logo.gif\" draggable=\"true\" ondragstart=\"drag(event)\">\n          <div>\n            <div>\n                <!-- Dropdown Trigger -->\n                <a class='dropdown-button btn' href='#' data-activates='dropdown1' class=\"col s6\">ham</a>\n\n                <!-- Dropdown Structure -->\n                <ul id='dropdown1' class='dropdown-content' class=\"col s6\">\n                  <li><a href=\"#!\">Ib\xE9rico</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#!\">Pata negra</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#!\">Jabugo</a></li>\n                </ul>\n            </div>\n            <div>\n\n                <!-- Dropdown Trigger -->\n                <a class='dropdown-button btn' href='#' data-activates='dropdown2' class=\"col s2\">Huile d'olive</a>\n\n                <!-- Dropdown Structure -->\n                <ul id='dropdown2' class='dropdown-content'>\n                  <li><a href=\"#!\">Normal</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#!\">Virgen</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#!\">Virgen extra</a></li>\n                </ul>\n            </div>\n            <div>\n                <!-- Dropdown Trigger -->\n                <a class='dropdown-button btn' href='#' data-activates='dropdown3' class=\"col s2\">Fromage manchego</a>\n\n                <!-- Dropdown Structure -->\n                <ul id='dropdown3' class='dropdown-content'>\n                  <li><a href=\"#!\">Curado</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#!\">Semicurado</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#!\">Tierno</a></li>\n                </ul>\n            </div>\n            <div>\n                <!-- Dropdown Trigger -->\n                <a class='dropdown-button btn' href='#' data-activates='dropdown4'>Confisserie</a>\n\n                <!-- Dropdown Structure -->\n                <ul id='dropdown4' class='dropdown-content'>\n                  <li><a href=\"#!\">Turron</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#!\">Sobaos</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#!\">Polvorones</a></li>\n                </ul>\n            </div>\n            <div>\n                <!-- Dropdown Trigger -->\n                <a class='dropdown-button btn' href='#' data-activates='dropdown5'>Brandy de Jerez</a>\n\n                <!-- Dropdown Structure -->\n                <ul id='dropdown5' class='dropdown-content'>\n                  <li><a href=\"#!\">LA BOTA DE BRANDY N\xBA 29</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#!\">TORRES JAIME I</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#!\">PEINADO SOLERA 100 A\xD1OS</a></li>\n                </ul>\n\n            </div>\n          </div>\n\n        </form>\n      </section>";

      // add page skeleton in body
      this.appBody.insertAdjacentHTML('afterbegin', pageSkeleton);
      this.loadEventUI();
      this.allowDrop(ev);
      this.drag(ev);
      this.drop(ev);
      Materialize.toast('I am a toast!', 4000); // 4000 is the duration of the toast

    }
  }, {
    key: "loadEventUI",
    value: function loadEventUI() {
      var _this = this;

      var loginForm = document.getElementsByTagName("form")[0];
      loginForm.addEventListener("submit", function (event) {
        return _this.onLogin(event);
      }, false);
    }
  }, {
    key: "onLogin",
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
  }]);

  return HomePage;
}();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXGFwcFxcYXBwLmpzIiwiZGV2XFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7cWpCQ0FBOzs7Ozs7Ozs7QUFPQTs7OztJQUVNLEs7QUFFSixtQkFBYTtBQUFBOztBQUNYLFNBQUssT0FBTCxHQUFlLFNBQVMsb0JBQVQsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBckMsQ0FBZjtBQUNEOzs7OzRCQUVNO0FBQ0w7QUFDQSxVQUFJLFdBQVcsbUJBQWEsS0FBSyxPQUFsQixDQUFmO0FBQ0Q7Ozs7OztBQUlILElBQUksUUFBUSxJQUFJLEtBQUosRUFBWjtBQUNBLE1BQU0sS0FBTjs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7QUFRQTs7SUFFYSxRLFdBQUEsUTtBQUVYLG9CQUFZLE9BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssU0FBTCxHQUFpQiw0QkFBakI7QUFDQSxTQUFLLE1BQUw7QUFFRDs7Ozs4QkFDUyxFLEVBQUk7QUFDWixTQUFHLGNBQUg7QUFDRDs7O3lCQUVJLEUsRUFBSTtBQUNMLFNBQUcsWUFBSCxDQUFnQixPQUFoQixDQUF3QixNQUF4QixFQUFnQyxHQUFHLE1BQUgsQ0FBVSxFQUExQztBQUNIOzs7eUJBRUksRSxFQUFJO0FBQ0wsU0FBRyxjQUFIO0FBQ0EsVUFBSSxPQUFPLEdBQUcsWUFBSCxDQUFnQixPQUFoQixDQUF3QixNQUF4QixDQUFYO0FBQ0EsU0FBRyxNQUFILENBQVUsV0FBVixDQUFzQixTQUFTLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBdEI7QUFDSDs7OzZCQUVPO0FBQ047QUFDQSxVQUFHLFNBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsQ0FBSCxFQUErQztBQUM3QyxpQkFBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxFQUE0QyxVQUE1QyxDQUF1RCxXQUF2RCxDQUFtRSxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQW5FO0FBQ0Q7QUFDRDtBQUNBLFVBQUksbURBRU0sS0FBSyxTQUZYLHl6SEFBSjs7QUE4RkE7QUFDQSxXQUFLLE9BQUwsQ0FBYSxrQkFBYixDQUFpQyxZQUFqQyxFQUErQyxZQUEvQztBQUNBLFdBQUssV0FBTDtBQUNBLFdBQUssU0FBTCxDQUFlLEVBQWY7QUFDQSxXQUFLLElBQUwsQ0FBVSxFQUFWO0FBQ0EsV0FBSyxJQUFMLENBQVUsRUFBVjtBQUNVLGtCQUFZLEtBQVosQ0FBa0IsZUFBbEIsRUFBbUMsSUFBbkMsRUExR0osQ0EwRzZDOztBQUlwRDs7O2tDQUVZO0FBQUE7O0FBQ1gsVUFBSSxZQUFZLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBaEI7QUFDQSxnQkFBVSxnQkFBVixDQUEyQixRQUEzQixFQUFzQztBQUFBLGVBQVMsTUFBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBdEMsRUFBb0UsS0FBcEU7QUFDRDs7OzRCQUVPLEssRUFBTTtBQUNaLFlBQU0sY0FBTjtBQUNBLFVBQUksa0JBQWtCLENBQXRCO0FBQ0EsVUFBSSxZQUFZLEVBQWhCO0FBQ0EsVUFBSSxPQUFPLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsUUFBN0I7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxNQUF6QixFQUFpQyxHQUFqQyxFQUFzQztBQUNwQyxZQUFHLEtBQUssQ0FBTCxFQUFRLEtBQVgsRUFBaUI7QUFDZixvQkFBVSxLQUFLLENBQUwsRUFBUSxJQUFsQixJQUEwQixLQUFLLENBQUwsRUFBUSxLQUFsQztBQUNBO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4qIEBBdXRob3I6IFJvYmVyQ2FzdHJvXHJcbiogQERhdGU6ICAgMTMtMTItMjAxNlxyXG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxyXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvYmVyY2FzdHJvXHJcbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxyXG4qL1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vcGFnZXMvaG9tZS9ob21lJztcclxuXHJcbmNsYXNzIE15QXBwIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuYXBwQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXBwXCIpWzBdO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKXtcclxuICAgIC8vIGluaXQgSG9tZVBhZ2VcclxuICAgIGxldCBob21lUGFnZSA9IG5ldyBIb21lUGFnZSh0aGlzLmFwcEJvZHkpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmxldCBteUFwcCA9IG5ldyBNeUFwcCgpO1xyXG5teUFwcC5zdGFydCgpO1xyXG4iLCIvKipcclxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xyXG4qIEBEYXRlOiAgIDEzLTEyLTIwMTZcclxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cclxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xyXG4qIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDEzLTEyLTIwMTZcclxuKi9cclxuXHJcbi8vaW1wb3J0IHsgVXNlclBhZ2UgfSBmcm9tICcuLi8uLi9wYWdlcy91c2VyL3VzZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwQm9keSl7XHJcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5XHJcbiAgICB0aGlzLnBhZ2VUaXRsZSA9ICdIZWxsbyB3b3JsZCEgSGVsbG8gUm9iZXJ0byc7XHJcbiAgICB0aGlzLmluaXRVSSgpO1xyXG5cclxuICB9XHJcbiAgYWxsb3dEcm9wKGV2KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgZHJhZyhldikge1xyXG4gICAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZXYudGFyZ2V0LmlkKTtcclxuICB9XHJcblxyXG4gIGRyb3AoZXYpIHtcclxuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XHJcbiAgICAgIGV2LnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKSk7XHJcbiAgfVxyXG5cclxuICBpbml0VUkoKXtcclxuICAgIC8vIHJlbW92ZSBhbGwgc2VjdGlvbiBiZWZvcmUgZGlzcGxheSBVSVxyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKXtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxyXG4gICAgfVxyXG4gICAgLy8gY3JlYXRlIHBhZ2Ugc2tlbGV0b25cclxuICAgIGxldCBwYWdlU2tlbGV0b24gPSBgXHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxoMT4ke3RoaXMucGFnZVRpdGxlfTwvaDE+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICNkaXYxIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWFhYWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ2b3RyZWVtYWlsLmNoXCIgIC8+PGJyLz5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPVwiXCIgIC8+PGJyLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxhIGNsYXNzPVwiYnRuXCIgb25jbGljaz1cIk1hdGVyaWFsaXplLnRvYXN0KCdJIGFtIGEgdG9hc3QnLCA0MDAwKVwiPlRvYXN0ITwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZGl2MVwiIG9uZHJvcD1cImRyb3AoZXZlbnQpXCIgb25kcmFnb3Zlcj1cImFsbG93RHJvcChldmVudClcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgaWQ9XCJkcmFnMVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9pbWdfbG9nby5naWZcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnKGV2ZW50KVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gVHJpZ2dlciAtLT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd24xJyBjbGFzcz1cImNvbCBzNlwiPmhhbTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd24xJyBjbGFzcz0nZHJvcGRvd24tY29udGVudCcgY2xhc3M9XCJjb2wgczZcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkliw6lyaWNvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+UGF0YSBuZWdyYTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkphYnVnbzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjInIGNsYXNzPVwiY29sIHMyXCI+SHVpbGUgZCdvbGl2ZTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd24yJyBjbGFzcz0nZHJvcGRvd24tY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5Ob3JtYWw8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5WaXJnZW48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5WaXJnZW4gZXh0cmE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjMnIGNsYXNzPVwiY29sIHMyXCI+RnJvbWFnZSBtYW5jaGVnbzwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd24zJyBjbGFzcz0nZHJvcGRvd24tY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5DdXJhZG88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5TZW1pY3VyYWRvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VGllcm5vPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gVHJpZ2dlciAtLT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd240Jz5Db25maXNzZXJpZTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd240JyBjbGFzcz0nZHJvcGRvd24tY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5UdXJyb248L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5Tb2Jhb3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5Qb2x2b3JvbmVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gVHJpZ2dlciAtLT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd241Jz5CcmFuZHkgZGUgSmVyZXo8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XHJcbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duNScgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+TEEgQk9UQSBERSBCUkFORFkgTsK6IDI5PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VE9SUkVTIEpBSU1FIEk8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5QRUlOQURPIFNPTEVSQSAxMDAgQcORT1M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvc2VjdGlvbj5gO1xyXG5cclxuICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcclxuICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcclxuICAgIHRoaXMubG9hZEV2ZW50VUkoKVxyXG4gICAgdGhpcy5hbGxvd0Ryb3AoZXYpO1xyXG4gICAgdGhpcy5kcmFnKGV2KTtcclxuICAgIHRoaXMuZHJvcChldik7XHJcbiAgICAgICAgICAgICAgTWF0ZXJpYWxpemUudG9hc3QoJ0kgYW0gYSB0b2FzdCEnLCA0MDAwKSAvLyA0MDAwIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgdG9hc3RcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGxvYWRFdmVudFVJKCl7XHJcbiAgICBsZXQgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpWzBdO1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgb25Mb2dpbihldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBsZXQgdmFsaWRhdGlvbklucHV0ID0gMFxyXG4gICAgbGV0IGZvcm1JbnB1dCA9IHt9XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYoZm9ybVtpXS52YWx1ZSl7XHJcbiAgICAgICAgZm9ybUlucHV0W2Zvcm1baV0ubmFtZV0gPSBmb3JtW2ldLnZhbHVlXHJcbiAgICAgICAgdmFsaWRhdGlvbklucHV0KytcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=
