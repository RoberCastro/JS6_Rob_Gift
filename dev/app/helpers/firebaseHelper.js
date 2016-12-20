/**
* @Author: RoberCastro
* @Date:   20-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 13-12-2016
*/

export class firebaseHelper {

  constructor(){
  }

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCpFgr84epTyPOdUGgVMLpxLDOE4pAGQzo",
    authDomain: "castrogastro-858c3.firebaseapp.com",
    databaseURL: "https://castrogastro-858c3.firebaseio.com",
    storageBucket: "castrogastro-858c3.appspot.com",
    messagingSenderId: "508588633189"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  let database = firebase.database();

  function addObjectToBase(){

    // l'envoyer dans la collection "products" sur Firebase
    database.ref('products').push({
      name: input.value,
      statut: false
    });
    // vider la valeur du champ input
    input.value = '';
  }

  function loadFirebaseObject(){
    // création d'un UL pour recevoir les produits
    let liste_UL = document.createElement('ul')
    liste_UL.setAttribute('id','liste')
    document.getElementById('app').appendChild(liste_UL)
    // ajout d'un event listenenr pour capturer le click
    liste_UL.addEventListener('click', ()=> {
      // l'event est passé à une fonction pour être traité plus loin...
      updateDatabase(event)
    })
    // récupérer la référence products
    // Créer un listener pour récupérer
    // la valeur contenu dans la référence
    var productsRef = database.ref('products');
    // Créer un listener pour récupérer
    // la valeur contenu dans la référence
    productsRef.on('child_added', (snapshot)=> {
        console.log('child added-> ', snapshot.val());
        // les valeur sont contenu dans snapshot.val()
        // et passée à une fonction pour être traitée plus loin...
        displayProductsInList(snapshot)
    });
    productsRef.on('child_removed', (snapshot)=> {
        console.log('child removed-> ', snapshot.val());
        // les valeur sont contenu dans snapshot.val()
        // et passée à une fonction pour être traitée plus loin...
        updateProductsInList(snapshot)
    });
  }
  //initializer la function
  loadFirebaseObject();


  // afficher dans un tableau ( ul > li ) la liste de produit
  function displayFavorites(productData){
    // si la liste UL existe
    if(document.getElementById('liste')){
      // ajouter le produit dans le LI avec un checkbox et un boutton delete
      let liste_LI = document.createElement('li')
      // on asigne une id pour identifier l'element lors du click
      liste_LI.setAttribute('id',productData.key)
      liste_LI.innerHTML = `
        <input type="checkbox" class="update" ${(productData.val().statut === true)?'checked':''} name="statut">
        ${productData.val().name}
        <button class="del">remove</button>
      `
      // on ajout le LI créé dans la liste UL
      document.getElementById('liste').appendChild(liste_LI)
    }
  }

  // fonction pour mettre à jour la base de donnée
  function updateDatabase(event){
    //console.log(event.target);
    // récupérer l'id de l'élément suer lequel on a cliké
    let id = event.target.parentNode.getAttribute('id')
    // si on a clické sur le button-> on supprime de la BDD
    if(event.target.getAttribute('class') === 'del'){
      console.log('product delete-> ',id);
      database.ref('products/'+id).remove();
    }
    // si on a clické sur la case à cocher-> on update la BDD
    if(event.target.getAttribute('class') === 'update'){
      console.log('product update-> ',id);
      database.ref('products/'+id).update({
        statut: event.target.checked
      });
    }
  }

  function updateProductsInList(productData){
    let product = document.getElementById(productData.key)
    product.parentNode.removeChild(product)
  }



}
