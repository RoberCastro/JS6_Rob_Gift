Hello world,

This is my first JavaScript 6 project.

This project is using npm, nvm,
  babelify: "^7.3.0",
  browser-sync: "^2.18.5",
  browserify: "^13.1.1",
  gulp: "^3.9.1",
  gulp-babel: "^6.1.2",
  gulp-remove-html-comments: "^1.0.1",
  gulp-util: "^3.0.7",
  vinyl-source-stream: "^1.1.0",
  vinyl-transform: "^1.0.0"

These tools allow me to parse changes in the
project in real time as it was connected to a real server
in a real website hosting environment, so i can see them right
after a ctrl+s.

If you want to fork or download the project you will need your APIKEY  for the data base Firebase.
You need to create a class at the same level as firebaseHelper.js and call it apikeyfirebase.js with the next content:

export const API_KEY_FIREBASE = "yourOwnFirebaseApiKey";
