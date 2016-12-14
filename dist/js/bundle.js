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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvcGFnZXMvaG9tZS9ob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7cWpCQ0FBOzs7Ozs7Ozs7QUFPQTs7OztJQUVNLEs7QUFFSixtQkFBYTtBQUFBOztBQUNYLFNBQUssT0FBTCxHQUFlLFNBQVMsb0JBQVQsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBckMsQ0FBZjtBQUNEOzs7OzRCQUVNO0FBQ0w7QUFDQSxVQUFJLFdBQVcsbUJBQWEsS0FBSyxPQUFsQixDQUFmO0FBQ0Q7Ozs7OztBQUlILElBQUksUUFBUSxJQUFJLEtBQUosRUFBWjtBQUNBLE1BQU0sS0FBTjs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7QUFRQTs7SUFFYSxRLFdBQUEsUTtBQUVYLG9CQUFZLE9BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssU0FBTCxHQUFpQiw0QkFBakI7QUFDQSxTQUFLLE1BQUw7QUFFRDs7Ozs4QkFDUyxFLEVBQUk7QUFDWixTQUFHLGNBQUg7QUFDRDs7O3lCQUVJLEUsRUFBSTtBQUNMLFNBQUcsWUFBSCxDQUFnQixPQUFoQixDQUF3QixNQUF4QixFQUFnQyxHQUFHLE1BQUgsQ0FBVSxFQUExQztBQUNIOzs7eUJBRUksRSxFQUFJO0FBQ0wsU0FBRyxjQUFIO0FBQ0EsVUFBSSxPQUFPLEdBQUcsWUFBSCxDQUFnQixPQUFoQixDQUF3QixNQUF4QixDQUFYO0FBQ0EsU0FBRyxNQUFILENBQVUsV0FBVixDQUFzQixTQUFTLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBdEI7QUFDSDs7OzZCQUVPO0FBQ047QUFDQSxVQUFHLFNBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsQ0FBSCxFQUErQztBQUM3QyxpQkFBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxFQUE0QyxVQUE1QyxDQUF1RCxXQUF2RCxDQUFtRSxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQW5FO0FBQ0Q7QUFDRDtBQUNBLFVBQUksbURBRU0sS0FBSyxTQUZYLHl6SEFBSjs7QUE4RkE7QUFDQSxXQUFLLE9BQUwsQ0FBYSxrQkFBYixDQUFpQyxZQUFqQyxFQUErQyxZQUEvQztBQUNBLFdBQUssV0FBTDtBQUNBLFdBQUssU0FBTCxDQUFlLEVBQWY7QUFDQSxXQUFLLElBQUwsQ0FBVSxFQUFWO0FBQ0EsV0FBSyxJQUFMLENBQVUsRUFBVjtBQUNVLGtCQUFZLEtBQVosQ0FBa0IsZUFBbEIsRUFBbUMsSUFBbkMsRUExR0osQ0EwRzZDOztBQUlwRDs7O2tDQUVZO0FBQUE7O0FBQ1gsVUFBSSxZQUFZLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBaEI7QUFDQSxnQkFBVSxnQkFBVixDQUEyQixRQUEzQixFQUFzQztBQUFBLGVBQVMsTUFBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBdEMsRUFBb0UsS0FBcEU7QUFDRDs7OzRCQUVPLEssRUFBTTtBQUNaLFlBQU0sY0FBTjtBQUNBLFVBQUksa0JBQWtCLENBQXRCO0FBQ0EsVUFBSSxZQUFZLEVBQWhCO0FBQ0EsVUFBSSxPQUFPLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsUUFBN0I7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxNQUF6QixFQUFpQyxHQUFqQyxFQUFzQztBQUNwQyxZQUFHLEtBQUssQ0FBTCxFQUFRLEtBQVgsRUFBaUI7QUFDZixvQkFBVSxLQUFLLENBQUwsRUFBUSxJQUFsQixJQUEwQixLQUFLLENBQUwsRUFBUSxLQUFsQztBQUNBO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAxMy0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxMy0xMi0yMDE2XG4qL1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuL3BhZ2VzL2hvbWUvaG9tZSc7XG5cbmNsYXNzIE15QXBwIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuYXBwQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXBwXCIpWzBdO1xuICB9XG5cbiAgc3RhcnQoKXtcbiAgICAvLyBpbml0IEhvbWVQYWdlXG4gICAgbGV0IGhvbWVQYWdlID0gbmV3IEhvbWVQYWdlKHRoaXMuYXBwQm9keSk7XG4gIH1cblxufVxuXG5sZXQgbXlBcHAgPSBuZXcgTXlBcHAoKTtcbm15QXBwLnN0YXJ0KCk7XG4iLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMTMtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cblxuLy9pbXBvcnQgeyBVc2VyUGFnZSB9IGZyb20gJy4uLy4uL3BhZ2VzL3VzZXIvdXNlcic7XG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG5cbiAgY29uc3RydWN0b3IoYXBwQm9keSl7XG4gICAgdGhpcy5hcHBCb2R5ID0gYXBwQm9keVxuICAgIHRoaXMucGFnZVRpdGxlID0gJ0hlbGxvIHdvcmxkISBIZWxsbyBSb2JlcnRvJztcbiAgICB0aGlzLmluaXRVSSgpO1xuXG4gIH1cbiAgYWxsb3dEcm9wKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGRyYWcoZXYpIHtcbiAgICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBldi50YXJnZXQuaWQpO1xuICB9XG5cbiAgZHJvcChldikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgZXYudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpKTtcbiAgfVxuXG4gIGluaXRVSSgpe1xuICAgIC8vIHJlbW92ZSBhbGwgc2VjdGlvbiBiZWZvcmUgZGlzcGxheSBVSVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXG4gICAgfVxuICAgIC8vIGNyZWF0ZSBwYWdlIHNrZWxldG9uXG4gICAgbGV0IHBhZ2VTa2VsZXRvbiA9IGBcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+JHt0aGlzLnBhZ2VUaXRsZX08L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAjZGl2MSB7XG4gICAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYWFhYTtcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ2b3RyZWVtYWlsLmNoXCIgIC8+PGJyLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+IDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT1cIlwiICAvPjxici8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxhIGNsYXNzPVwiYnRuXCIgb25jbGljaz1cIk1hdGVyaWFsaXplLnRvYXN0KCdJIGFtIGEgdG9hc3QnLCA0MDAwKVwiPlRvYXN0ITwvYT5cbiAgICAgICAgICAgIDxidXR0b24+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkaXYxXCIgb25kcm9wPVwiZHJvcChldmVudClcIiBvbmRyYWdvdmVyPVwiYWxsb3dEcm9wKGV2ZW50KVwiPjwvZGl2PlxuXG4gICAgICAgICAgICA8aW1nIGlkPVwiZHJhZzFcIiBzcmM9XCIuL3NyYy9pbWFnZXMvaW1nX2xvZ28uZ2lmXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG9uZHJhZ3N0YXJ0PVwiZHJhZyhldmVudClcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFRyaWdnZXIgLS0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjEnIGNsYXNzPVwiY29sIHM2XCI+aGFtPC9hPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XG4gICAgICAgICAgICAgICAgPHVsIGlkPSdkcm9wZG93bjEnIGNsYXNzPSdkcm9wZG93bi1jb250ZW50JyBjbGFzcz1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPkliw6lyaWNvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5QYXRhIG5lZ3JhPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5KYWJ1Z288L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd24yJyBjbGFzcz1cImNvbCBzMlwiPkh1aWxlIGQnb2xpdmU8L2E+XG5cbiAgICAgICAgICAgICAgICA8IS0tIERyb3Bkb3duIFN0cnVjdHVyZSAtLT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMicgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPk5vcm1hbDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VmlyZ2VuPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5WaXJnZW4gZXh0cmE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gVHJpZ2dlciAtLT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24tYnV0dG9uIGJ0bicgaHJlZj0nIycgZGF0YS1hY3RpdmF0ZXM9J2Ryb3Bkb3duMycgY2xhc3M9XCJjb2wgczJcIj5Gcm9tYWdlIG1hbmNoZWdvPC9hPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XG4gICAgICAgICAgICAgICAgPHVsIGlkPSdkcm9wZG93bjMnIGNsYXNzPSdkcm9wZG93bi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5DdXJhZG88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlNlbWljdXJhZG88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlRpZXJubzwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBUcmlnZ2VyIC0tPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1idXR0b24gYnRuJyBocmVmPScjJyBkYXRhLWFjdGl2YXRlcz0nZHJvcGRvd240Jz5Db25maXNzZXJpZTwvYT5cblxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gU3RydWN0dXJlIC0tPlxuICAgICAgICAgICAgICAgIDx1bCBpZD0nZHJvcGRvd240JyBjbGFzcz0nZHJvcGRvd24tY29udGVudCc+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+VHVycm9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5Tb2Jhb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlBvbHZvcm9uZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gVHJpZ2dlciAtLT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24tYnV0dG9uIGJ0bicgaHJlZj0nIycgZGF0YS1hY3RpdmF0ZXM9J2Ryb3Bkb3duNSc+QnJhbmR5IGRlIEplcmV6PC9hPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBEcm9wZG93biBTdHJ1Y3R1cmUgLS0+XG4gICAgICAgICAgICAgICAgPHVsIGlkPSdkcm9wZG93bjUnIGNsYXNzPSdkcm9wZG93bi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5MQSBCT1RBIERFIEJSQU5EWSBOwrogMjk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPlRPUlJFUyBKQUlNRSBJPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5QRUlOQURPIFNPTEVSQSAxMDAgQcORT1M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+YDtcblxuICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcbiAgICB0aGlzLmFwcEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCAnYWZ0ZXJiZWdpbicsIHBhZ2VTa2VsZXRvbiApXG4gICAgdGhpcy5sb2FkRXZlbnRVSSgpXG4gICAgdGhpcy5hbGxvd0Ryb3AoZXYpO1xuICAgIHRoaXMuZHJhZyhldik7XG4gICAgdGhpcy5kcm9wKGV2KTtcbiAgICAgICAgICAgICAgTWF0ZXJpYWxpemUudG9hc3QoJ0kgYW0gYSB0b2FzdCEnLCA0MDAwKSAvLyA0MDAwIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgdG9hc3RcblxuXG5cbiAgfVxuXG4gIGxvYWRFdmVudFVJKCl7XG4gICAgbGV0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXTtcbiAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpXG4gIH1cblxuICBvbkxvZ2luKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHZhbGlkYXRpb25JbnB1dCA9IDBcbiAgICBsZXQgZm9ybUlucHV0ID0ge31cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihmb3JtW2ldLnZhbHVlKXtcbiAgICAgICAgZm9ybUlucHV0W2Zvcm1baV0ubmFtZV0gPSBmb3JtW2ldLnZhbHVlXG4gICAgICAgIHZhbGlkYXRpb25JbnB1dCsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG59XG4iXX0=
