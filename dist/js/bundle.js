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
      var pageSkeleton = "\n      <section>\n        <h1>" + this.pageTitle + "</h1>\n        <form>\n        <style>\n        #div1 {\n            width: 350px;\n            height: 70px;\n            padding: 10px;\n            border: 1px solid #aaaaaa;\n        }\n        </style>\n          <p>\n            <label for=\"email\">Email:</label> <input type=\"email\" name=\"email\" value=\"\" placeholder=\"votreemail.ch\"  /><br/>\n            <label for=\"password\">Password:</label> <input type=\"password\" name=\"password\" value=\"\"  /><br/>\n          </p>\n            <button>Login</button>\n            <div id=\"div1\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\"></div>\n\n            <img id=\"drag1\" src=\"./src/images/img_logo.gif\" draggable=\"true\" ondragstart=\"drag(event)\">\n          <div>\n              <!-- Dropdown Trigger -->\n              <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>\n\n              <!-- Dropdown Structure -->\n              <ul id='dropdown1' class='dropdown-content'>\n                <li><a href=\"#!\">one</a></li>\n                <li><a href=\"#!\">two</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#!\">three</a></li>\n              </ul>\n\n          </div>\n          <a class=\"btn\" onclick=\"Materialize.toast('I am a toast', 4000)\">Toast!</a>\n\n        </form>\n      </section>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvcGFnZXMvaG9tZS9ob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7cWpCQ0FBOzs7Ozs7Ozs7QUFPQTs7OztJQUVNLEs7QUFFSixtQkFBYTtBQUFBOztBQUNYLFNBQUssT0FBTCxHQUFlLFNBQVMsb0JBQVQsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBckMsQ0FBZjtBQUNEOzs7OzRCQUVNO0FBQ0w7QUFDQSxVQUFJLFdBQVcsbUJBQWEsS0FBSyxPQUFsQixDQUFmO0FBQ0Q7Ozs7OztBQUlILElBQUksUUFBUSxJQUFJLEtBQUosRUFBWjtBQUNBLE1BQU0sS0FBTjs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7QUFRQTs7SUFFYSxRLFdBQUEsUTtBQUVYLG9CQUFZLE9BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssU0FBTCxHQUFpQiw0QkFBakI7QUFDQSxTQUFLLE1BQUw7QUFFRDs7Ozs4QkFDUyxFLEVBQUk7QUFDWixTQUFHLGNBQUg7QUFDRDs7O3lCQUVJLEUsRUFBSTtBQUNMLFNBQUcsWUFBSCxDQUFnQixPQUFoQixDQUF3QixNQUF4QixFQUFnQyxHQUFHLE1BQUgsQ0FBVSxFQUExQztBQUNIOzs7eUJBRUksRSxFQUFJO0FBQ0wsU0FBRyxjQUFIO0FBQ0EsVUFBSSxPQUFPLEdBQUcsWUFBSCxDQUFnQixPQUFoQixDQUF3QixNQUF4QixDQUFYO0FBQ0EsU0FBRyxNQUFILENBQVUsV0FBVixDQUFzQixTQUFTLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBdEI7QUFDSDs7OzZCQUVPO0FBQ047QUFDQSxVQUFHLFNBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsQ0FBSCxFQUErQztBQUM3QyxpQkFBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxFQUE0QyxVQUE1QyxDQUF1RCxXQUF2RCxDQUFtRSxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQW5FO0FBQ0Q7QUFDRDtBQUNBLFVBQUksbURBRU0sS0FBSyxTQUZYLGcxQ0FBSjs7QUFzQ0E7QUFDQSxXQUFLLE9BQUwsQ0FBYSxrQkFBYixDQUFpQyxZQUFqQyxFQUErQyxZQUEvQztBQUNBLFdBQUssV0FBTDtBQUNBLFdBQUssU0FBTCxDQUFlLEVBQWY7QUFDQSxXQUFLLElBQUwsQ0FBVSxFQUFWO0FBQ0EsV0FBSyxJQUFMLENBQVUsRUFBVjtBQUNVLGtCQUFZLEtBQVosQ0FBa0IsZUFBbEIsRUFBbUMsSUFBbkMsRUFsREosQ0FrRDZDOztBQUlwRDs7O2tDQUVZO0FBQUE7O0FBQ1gsVUFBSSxZQUFZLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBaEI7QUFDQSxnQkFBVSxnQkFBVixDQUEyQixRQUEzQixFQUFzQztBQUFBLGVBQVMsTUFBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBdEMsRUFBb0UsS0FBcEU7QUFDRDs7OzRCQUVPLEssRUFBTTtBQUNaLFlBQU0sY0FBTjtBQUNBLFVBQUksa0JBQWtCLENBQXRCO0FBQ0EsVUFBSSxZQUFZLEVBQWhCO0FBQ0EsVUFBSSxPQUFPLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsUUFBN0I7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxNQUF6QixFQUFpQyxHQUFqQyxFQUFzQztBQUNwQyxZQUFHLEtBQUssQ0FBTCxFQUFRLEtBQVgsRUFBaUI7QUFDZixvQkFBVSxLQUFLLENBQUwsRUFBUSxJQUFsQixJQUEwQixLQUFLLENBQUwsRUFBUSxLQUFsQztBQUNBO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuKiBAQXV0aG9yOiBSb2JlckNhc3Ryb1xuKiBARGF0ZTogICAxMy0xMi0yMDE2XG4qIEBFbWFpbDogIHJvYmVydG9pY2FzdHJvQGdtYWlsLmNvbVxuKiBATGFzdCBtb2RpZmllZCBieTogICByb2JlcmNhc3Ryb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxMy0xMi0yMDE2XG4qL1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuL3BhZ2VzL2hvbWUvaG9tZSc7XG5cbmNsYXNzIE15QXBwIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuYXBwQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXBwXCIpWzBdO1xuICB9XG5cbiAgc3RhcnQoKXtcbiAgICAvLyBpbml0IEhvbWVQYWdlXG4gICAgbGV0IGhvbWVQYWdlID0gbmV3IEhvbWVQYWdlKHRoaXMuYXBwQm9keSk7XG4gIH1cblxufVxuXG5sZXQgbXlBcHAgPSBuZXcgTXlBcHAoKTtcbm15QXBwLnN0YXJ0KCk7XG4iLCIvKipcbiogQEF1dGhvcjogUm9iZXJDYXN0cm9cbiogQERhdGU6ICAgMTMtMTItMjAxNlxuKiBARW1haWw6ICByb2JlcnRvaWNhc3Ryb0BnbWFpbC5jb21cbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgcm9iZXJjYXN0cm9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTMtMTItMjAxNlxuKi9cblxuLy9pbXBvcnQgeyBVc2VyUGFnZSB9IGZyb20gJy4uLy4uL3BhZ2VzL3VzZXIvdXNlcic7XG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG5cbiAgY29uc3RydWN0b3IoYXBwQm9keSl7XG4gICAgdGhpcy5hcHBCb2R5ID0gYXBwQm9keVxuICAgIHRoaXMucGFnZVRpdGxlID0gJ0hlbGxvIHdvcmxkISBIZWxsbyBSb2JlcnRvJztcbiAgICB0aGlzLmluaXRVSSgpO1xuXG4gIH1cbiAgYWxsb3dEcm9wKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGRyYWcoZXYpIHtcbiAgICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBldi50YXJnZXQuaWQpO1xuICB9XG5cbiAgZHJvcChldikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgZXYudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpKTtcbiAgfVxuXG4gIGluaXRVSSgpe1xuICAgIC8vIHJlbW92ZSBhbGwgc2VjdGlvbiBiZWZvcmUgZGlzcGxheSBVSVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXG4gICAgfVxuICAgIC8vIGNyZWF0ZSBwYWdlIHNrZWxldG9uXG4gICAgbGV0IHBhZ2VTa2VsZXRvbiA9IGBcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+JHt0aGlzLnBhZ2VUaXRsZX08L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAjZGl2MSB7XG4gICAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYWFhYTtcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ2b3RyZWVtYWlsLmNoXCIgIC8+PGJyLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+IDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT1cIlwiICAvPjxici8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBpZD1cImRpdjFcIiBvbmRyb3A9XCJkcm9wKGV2ZW50KVwiIG9uZHJhZ292ZXI9XCJhbGxvd0Ryb3AoZXZlbnQpXCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxpbWcgaWQ9XCJkcmFnMVwiIHNyYz1cIi4vc3JjL2ltYWdlcy9pbWdfbG9nby5naWZcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnKGV2ZW50KVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gVHJpZ2dlciAtLT5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWJ1dHRvbiBidG4nIGhyZWY9JyMnIGRhdGEtYWN0aXZhdGVzPSdkcm9wZG93bjEnPkRyb3AgTWUhPC9hPlxuXG4gICAgICAgICAgICAgIDwhLS0gRHJvcGRvd24gU3RydWN0dXJlIC0tPlxuICAgICAgICAgICAgICA8dWwgaWQ9J2Ryb3Bkb3duMScgY2xhc3M9J2Ryb3Bkb3duLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj5vbmU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiMhXCI+dHdvPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPnRocmVlPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YSBjbGFzcz1cImJ0blwiIG9uY2xpY2s9XCJNYXRlcmlhbGl6ZS50b2FzdCgnSSBhbSBhIHRvYXN0JywgNDAwMClcIj5Ub2FzdCE8L2E+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9zZWN0aW9uPmA7XG5cbiAgICAvLyBhZGQgcGFnZSBza2VsZXRvbiBpbiBib2R5XG4gICAgdGhpcy5hcHBCb2R5Lmluc2VydEFkamFjZW50SFRNTCggJ2FmdGVyYmVnaW4nLCBwYWdlU2tlbGV0b24gKVxuICAgIHRoaXMubG9hZEV2ZW50VUkoKVxuICAgIHRoaXMuYWxsb3dEcm9wKGV2KTtcbiAgICB0aGlzLmRyYWcoZXYpO1xuICAgIHRoaXMuZHJvcChldik7XG4gICAgICAgICAgICAgIE1hdGVyaWFsaXplLnRvYXN0KCdJIGFtIGEgdG9hc3QhJywgNDAwMCkgLy8gNDAwMCBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIHRvYXN0XG5cblxuXG4gIH1cblxuICBsb2FkRXZlbnRVSSgpe1xuICAgIGxldCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIilbMF07XG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKVxuICB9XG5cbiAgb25Mb2dpbihldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB2YWxpZGF0aW9uSW5wdXQgPSAwXG4gICAgbGV0IGZvcm1JbnB1dCA9IHt9XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYoZm9ybVtpXS52YWx1ZSl7XG4gICAgICAgIGZvcm1JbnB1dFtmb3JtW2ldLm5hbWVdID0gZm9ybVtpXS52YWx1ZVxuICAgICAgICB2YWxpZGF0aW9uSW5wdXQrK1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxufVxuIl19
